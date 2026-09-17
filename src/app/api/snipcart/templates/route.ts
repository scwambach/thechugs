import { client } from '@utils/client'
import {
  beerFundItemUrl,
  beerFundSettingsQuery,
  resolveBeerFund,
} from '@utils/beerFund'
import type {
  BeerFundConfig,
  BeerFundItem,
  BeerFundSettings,
} from '@utils/beerFund'

// The studio can change the copy/prices at any time, but this document is
// fetched by every cart open — cache it for five minutes rather than hitting
// Sanity on each request.
export const revalidate = 300

/**
 * Snipcart compiles this document as a Vue template, so every CMS string has to
 * be safe both as HTML (quotes/angle brackets would break out of an attribute)
 * and as a Vue template — a stray `{{ }}` pair would be treated as an
 * interpolation of a non-existent property and throw at compile time. Splitting
 * the mustache delimiters keeps the characters visible without matching Vue's
 * interpolation regex.
 */
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\{\{/g, '{ {')
    .replace(/\}\}/g, '} }')

const formatPrice = (price: number) => `$${price.toFixed(2)}`

const addItemButton = (item: BeerFundItem) => `<button
            type="button"
            class="snipcart-add-item beer-fund-cart__button"
            data-item-id="${escapeHtml(item.id)}"
            data-item-price="${item.price}"
            data-item-url="${escapeHtml(beerFundItemUrl(item.id))}"
            data-item-name="${escapeHtml(item.name)}"
            data-item-description="${escapeHtml(item.description)}"${
              item.image
                ? `\n            data-item-image="${escapeHtml(item.image)}"`
                : ''
            }
            data-item-shippable="false"
            data-item-taxable="false"
            data-item-custom1-type="hidden"
            data-item-custom1-name="PrintfulProduct"
            data-item-custom1-value="false"
          >
            ${escapeHtml(item.name)} — ${formatPrice(item.price)}
          </button>`

// The side cart is rendered by the `cart` component, not `cart-summary` —
// `cart-summary` only backs the checkout-page summary, so an override there
// never reaches the sidebar. `section="header"` is the cheapest safe hook: a
// section override replaces its default content, and this one only has to
// re-include `cart-header`. Overriding the cart's default section instead would
// mean freezing a copy of the whole item-list/footer block and silently missing
// any upstream theme change.
const cartHeaderOverride = (beerFund: BeerFundConfig) => `
      <cart section="header">
        <div>
          <cart-header
            title="header.title_cart_summary"
            :show-items-count="true"
            :show-account-menu="true"
            v-if="!editingCart"
          ></cart-header>
          <div class="beer-fund-cart">
            <h2 class="beer-fund-cart__heading">${escapeHtml(beerFund.heading)}</h2>
            <div class="beer-fund-cart__options">
              ${addItemButton(beerFund.single)}
              ${addItemButton(beerFund.thirtyPack)}
            </div>
          </div>
        </div>
      </cart>
`

const templatesDocument = (beerFund: BeerFundConfig) => `<!DOCTYPE html>
<html>
  <body>
    <div id="snipcart-templates">${
      beerFund.enabled ? cartHeaderOverride(beerFund) : ''
    }</div>
  </body>
</html>
`

export async function GET() {
  // A Sanity outage must never take the cart down with it — fall back to the
  // code defaults, which are the same ones /api/products/[id] validates against.
  let settings: BeerFundSettings | undefined
  try {
    settings = await client.fetch(beerFundSettingsQuery)
  } catch (error: any) {
    console.log(error)
  }

  const beerFund = resolveBeerFund(settings)

  return new Response(templatesDocument(beerFund), {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}

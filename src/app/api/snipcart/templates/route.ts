import { client } from '@utils/client'
import {
  beerFundDocsQuery,
  beerFundItemUrl,
  resolveBeerFund,
} from '@utils/beerFund'
import type { BeerFundConfig, BeerFundDoc, BeerFundItem } from '@utils/beerFund'

// Always fresh, deliberately. Snipcart validates each add against
// /api/products/[id], which is dynamic and reads the current Sanity price — so
// a cached copy of this document would keep serving a stale data-item-price
// after a studio edit and Snipcart would reject the add as a price mismatch.
// One Sanity query per cart open is the cost of the two staying in agreement.
export const dynamic = 'force-dynamic'

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
// never reaches the sidebar.
//
// This overrides the cart's default section rather than `section="header"`.
// The header section sits above Snipcart's own chrome, and in the side cart
// `cart-header` is skipped entirely (`v-if="!editingCart"`), so anything put
// there lands at the very top of the panel and crowds the close control. The
// default section is the only hook that can place the block after the item
// list, so the cost is carrying a copy of Snipcart's markup below: if the
// default theme changes this section, update it here to match.
//
// Note the `v-if="hasItems"` on the original overridable — an empty cart
// renders `empty-cart` instead, so the upsell only shows once something is in
// the cart. The header button covers the empty case.
const cartContentOverride = (beerFund: BeerFundConfig) => `
      <cart>
        <section class="snipcart-cart__content">
          <item-list
            item-template="item-line"
            class="snipcart-item-list--no-shadow"
            :show-description="!isSideCart"
          >
            <template
              v-slot:footer
              v-if="isSideCart && hasActiveDiscountsTriggerableByCode"
            >
              <li class="snipcart-item-line snipcart-item-line--cart-edit">
                <div class="snipcart-item-line__container">
                  <discount-box class="snipcart-cart__discount-box"></discount-box>
                </div>
              </li>
            </template>
          </item-list>

          <div class="beer-fund-cart">
            <h2 class="beer-fund-cart__heading">${escapeHtml(beerFund.heading)}</h2>
            <div class="beer-fund-cart__options">
              ${beerFund.items.map(addItemButton).join('\n              ')}
            </div>
          </div>

          <div class="snipcart-cart__footer">
            <div class="snipcart-cart__footer-col cart__footer-discount-box snipcart-cart__actions">
              <discount-box
                v-if="!isSideCart && hasActiveDiscountsTriggerableByCode"
                class="snipcart-cart__discount-box"
              ></discount-box>
            </div>

            <div class="snipcart-cart__footer-col">
              <summary-fees
                class="snipcart-cart-summary-fees--reverse"
                :summary-data="summaryFeesProvider"
              >
                {{ $localize('cart.shipping_taxes_calculated_at_checkout')}}
              </summary-fees>

              <footer v-if="!editingCart || isSideCart" class="snipcart-cart__footer-buttons">
                <flash-message
                  type="error"
                  v-if="errors != null"
                  :title="$localize('errors.order_validation.custom_fields_validation.title')"
                >
                  {{$localize('errors.order_validation.custom_fields_validation.description')}}
                </flash-message>
                <button-primary
                  label="actions.checkout"
                  icon="continue-arrow"
                  :state="checkoutDisabled ? 'disabled' : undefined"
                  @click="checkout"
                ></button-primary>
                <button-link
                  v-if="isSideCart"
                  label="cart.view_detailed_cart"
                  @click="viewDetailedCart"
                ></button-link>
              </footer>

              <div class="snipcart-cart__featured-payment-methods-container">
                <featured-payment-methods v-if="!editingCart"></featured-payment-methods>
              </div>
            </div>
          </div>
        </section>
      </cart>
`

const templatesDocument = (beerFund: BeerFundConfig) => `<!DOCTYPE html>
<html>
  <body>
    <div id="snipcart-templates">${
      beerFund.enabled ? cartContentOverride(beerFund) : ''
    }</div>
  </body>
</html>
`

export async function GET() {
  // A Sanity outage must never take the cart down with it — with no docs the
  // beer fund simply resolves to disabled and the cart renders untouched.
  let docs: BeerFundDoc[] | undefined
  try {
    docs = await client.fetch(beerFundDocsQuery)
  } catch (error: any) {
    console.log(error)
  }

  const beerFund = resolveBeerFund(docs)

  return new Response(templatesDocument(beerFund), {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}

// "Buy Us A Beer" tip items.
//
// These are ordinary `merch` documents, so the studio owns the title, price and
// image, and /api/products/[id] already validates them through its normal merch
// lookup. They carry no category, which is what keeps them out of the /merch
// category lists, the POS query and the garage sale.
//
// The ids stay in code because the Snipcart webhooks (shipping, taxes, order
// creation) need to recognise a tip item synchronously, from nothing but the
// cart line's id, without a Sanity round trip on a payment-critical path.

export const BEER_FUND_SINGLE_ID = '44e08c4f-65a8-4b34-8712-0b0491e7fffc'
export const BEER_FUND_CASE_ID = '6ef8a6e6-4e2b-4039-8a2e-b601c1a95965'

/** Render order in the header popover and the cart. */
export const BEER_FUND_ITEM_IDS = [BEER_FUND_SINGLE_ID, BEER_FUND_CASE_ID]

export const BEER_FUND_HEADING = 'Buy Us A Beer'

/** The merch fields the beer fund reads. */
export interface BeerFundDoc {
  _id: string
  title?: string
  price?: number
  outOfStockMsg?: string | null
  image?: string
}

export interface BeerFundItem {
  id: string
  name: string
  description: string
  price: number
  image?: string
}

export interface BeerFundConfig {
  enabled: boolean
  heading: string
  items: BeerFundItem[]
}

/** True for the tip items, which never ship and never go to Printful. */
export const isBeerFundItem = (id?: string | number | null): boolean =>
  typeof id === 'string' && BEER_FUND_ITEM_IDS.includes(id)

/** Snipcart validates every cart item against this URL. */
export const beerFundItemUrl = (id: string) => `/api/products/${id}`

const beerFundProjection = `{
    _id,
    title,
    price,
    outOfStockMsg,
    "image": images[0].image.asset->url
  }`

/** Standalone query for server routes that need the items on their own. */
export const beerFundDocsQuery = `*[_id in ${JSON.stringify(
  BEER_FUND_ITEM_IDS
)}] ${beerFundProjection}`

/** Sub-projection so pages pick the items up with their existing global fetch. */
export const beerFundQuery = `"beerFund": ${beerFundDocsQuery}`

/**
 * An unpublished or out-of-stock document simply drops out, so the studio can
 * pull a tip item without a deploy. `description` mirrors the title to match how
 * the rest of the store fills data-item-description for non-Printful products.
 */
export const resolveBeerFund = (
  docs?: BeerFundDoc[] | null
): BeerFundConfig => {
  const items = BEER_FUND_ITEM_IDS.map((id) =>
    docs?.find((doc) => doc?._id === id)
  )
    .filter(
      (doc): doc is BeerFundDoc =>
        !!doc && typeof doc.price === 'number' && !doc.outOfStockMsg
    )
    .map((doc) => ({
      id: doc._id,
      name: doc.title || BEER_FUND_HEADING,
      description: doc.title || BEER_FUND_HEADING,
      price: doc.price as number,
      ...(doc.image && { image: doc.image }),
    }))

  return {
    enabled: items.length > 0,
    heading: BEER_FUND_HEADING,
    items,
  }
}

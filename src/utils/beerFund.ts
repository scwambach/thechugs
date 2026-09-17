// "Buy Us A Beer" tip items.
//
// These are deliberately NOT Sanity `merch` documents. Keeping them out of that
// type means they can never leak into the /merch category lists, the POS query
// or the garage sale, and it keeps their ids stable constants — which is what
// lets /api/products/[id] validate them for Snipcart without a Studio round
// trip. Prices are still editable in the studio via globalInfo.beerFund.

export const BEER_FUND_SINGLE_ID = 'buy-us-a-beer-single'
export const BEER_FUND_THIRTY_PACK_ID = 'buy-us-a-beer-30-pack'

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
  single: BeerFundItem
  thirtyPack: BeerFundItem
}

/** Shape of the optional `beerFund` object on the globalInfo document. */
export interface BeerFundSettings {
  enabled?: boolean
  heading?: string
  singleLabel?: string
  singlePrice?: number
  thirtyPackLabel?: string
  thirtyPackPrice?: number
  image?: { src?: string }
}

export const BEER_FUND_DEFAULTS: BeerFundConfig = {
  enabled: true,
  heading: 'Buy Us A Beer',
  single: {
    id: BEER_FUND_SINGLE_ID,
    name: 'Buy Us A Beer',
    description: 'One cold one for the band. Thanks, legend.',
    price: 6,
  },
  thirtyPack: {
    id: BEER_FUND_THIRTY_PACK_ID,
    name: 'Buy Us A 30 Pack',
    description: 'Thirty cold ones for the band. You absolute hero.',
    price: 30,
  },
}

/** True for the tip items, which never ship and never go to Printful. */
export const isBeerFundItem = (id?: string | number | null): boolean =>
  id === BEER_FUND_SINGLE_ID || id === BEER_FUND_THIRTY_PACK_ID

/** Snipcart validates every cart item against this URL. */
export const beerFundItemUrl = (id: string) => `/api/products/${id}`

/** GROQ projection for the beerFund object on globalInfo. */
export const beerFundQuery = `beerFund {
    enabled,
    heading,
    singleLabel,
    singlePrice,
    thirtyPackLabel,
    thirtyPackPrice,
    image { "src": asset->url }
  }`

/**
 * Merge whatever the studio has set over the code defaults, so the feature
 * works on a fresh dataset with no globalInfo.beerFund filled in at all.
 */
export const resolveBeerFund = (
  settings?: BeerFundSettings
): BeerFundConfig => {
  const image = settings?.image?.src

  return {
    enabled: settings?.enabled ?? BEER_FUND_DEFAULTS.enabled,
    heading: settings?.heading || BEER_FUND_DEFAULTS.heading,
    single: {
      ...BEER_FUND_DEFAULTS.single,
      name: settings?.singleLabel || BEER_FUND_DEFAULTS.single.name,
      price: settings?.singlePrice ?? BEER_FUND_DEFAULTS.single.price,
      ...(image && { image }),
    },
    thirtyPack: {
      ...BEER_FUND_DEFAULTS.thirtyPack,
      name: settings?.thirtyPackLabel || BEER_FUND_DEFAULTS.thirtyPack.name,
      price: settings?.thirtyPackPrice ?? BEER_FUND_DEFAULTS.thirtyPack.price,
      ...(image && { image }),
    },
  }
}

/** Fetches + resolves the beer fund config for server components / routes. */
export const beerFundSettingsQuery = `*[_type == 'globalInfo'][0] {
  ${beerFundQuery}
}.beerFund`

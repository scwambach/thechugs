import { printful } from './printful-client'

import type {
  SnipcartWebhookContent,
  PrintfulShippingItem,
} from '@utils/storeTypes'
import { isBeerFundItem } from '@utils/beerFund'

const createOrder = async ({
  invoiceNumber,
  email,
  shippingAddress,
  items,
  shippingRateUserDefinedId,
}: SnipcartWebhookContent) => {
  const recipient = {
    ...(shippingAddress.fullName && { name: shippingAddress.fullName }),
    ...(shippingAddress.address1 && { address1: shippingAddress.address1 }),
    ...(shippingAddress.address2 && { address2: shippingAddress.address2 }),
    ...(shippingAddress.city && { city: shippingAddress.city }),
    ...(shippingAddress.country && { country_code: shippingAddress.country }),
    ...(shippingAddress.province && {
      state_code: shippingAddress.province,
    }),
    ...(shippingAddress.postalCode && { zip: shippingAddress.postalCode }),
    ...(shippingAddress.phone && { phone: shippingAddress.phone }),
    email,
  }

  const printfulOnlyItems = items.filter(
    (item: any) =>
      !isBeerFundItem(item.id) &&
      !item?.customFields?.some(
        (field: any) =>
          field.name === 'PrintfulProduct' && field.value === 'false'
      )
  )

  const printfulItems: PrintfulShippingItem[] = printfulOnlyItems.map(
    (item: any): PrintfulShippingItem => ({
      external_variant_id: item.id,
      quantity: item.quantity,
    })
  )

  if (printfulItems.length) {
    const { result } = await printful.post('orders', {
      external_id: invoiceNumber,
      recipient,
      items: printfulItems,
      shipping: shippingRateUserDefinedId,
    })

    return result
  }
}

export default createOrder

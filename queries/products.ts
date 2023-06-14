export const PRODUCTS_QUERY = `*[_type == "product" && ((_id in path('drafts.**')) == false)] {
  _id,
  price,
}`

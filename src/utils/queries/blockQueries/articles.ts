import { commonProps, imageQuery } from '../queryParts'

const article = `
_id,
title,
link,
date,
description,
image {
  ${imageQuery}
}`

export const articles = `_type == 'articles' => {
  ${commonProps},
  latest,
  articles[] -> {
    ${article}
  },
  defined(latest) => {
    "articles": *[_type == 'article'] | order(date desc)[0..3] {
      ${article}
    }
  },
}`

import dayjs from 'dayjs'
import { MediaCardProps } from './types/modules/MediaCardProps'
import { PostCardProps } from './types/modules/PostCardProps'

export const postToMediaCard = (post: PostCardProps): MediaCardProps => {
  const { _id, mainImage, publishedAt, slug, ...rest } = post
  return {
    ...rest,
    _id,
    image: post.mainImage,
    info: dayjs(publishedAt).format('MMMM DD, YYYY'),
    link: `/blog/${slug}`,
  }
}

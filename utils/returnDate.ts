import moment from 'moment'

export const returnDate = (date: string) => {
  return moment(date).format('MMMM DD, YYYY')
}

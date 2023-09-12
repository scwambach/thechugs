import { can } from '@utils/can'

export const Loading = () => {
  return (
    <div className="loading">
      <img src={can} alt="" className="can" />
    </div>
  )
}

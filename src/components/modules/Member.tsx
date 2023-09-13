import { MemberProps } from '@utils/types/modules/Member'
import { ImageBlock } from './ImageBlock'
import { ButtonList } from './ButtonList'

export const Member = ({ image, name, role, links }: MemberProps) => {
  return (
    <div className="member">
      <div className="image-container">
        <ImageBlock
          image={image}
          width={368}
          height={368}
          alt={name}
          isBackground
        />
      </div>

      <p>
        <strong>{name}</strong>
      </p>
      <p>{role}</p>
      {links && <ButtonList items={links} />}
    </div>
  )
}

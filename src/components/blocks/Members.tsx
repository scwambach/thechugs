import { Container } from '@components/modules/Container'
import { Member } from '@components/modules/Member'
import { PageBlockProps } from '@utils/types'
import { MemberProps } from '@utils/types/modules/Member'

interface MembersProps extends PageBlockProps {
  members: MemberProps[]
}

export const Members = ({ members }: MembersProps) => {
  return (
    <div className="members">
      <Container size="wide">
        <div className="inner">
          {members.map((item) => (
            <Member key={item._key} {...item} />
          ))}
        </div>
      </Container>
    </div>
  )
}

import { Container } from '@components/modules/Container'
import { breakpoints } from '@utils/settings'

export const Music = ({ player }: { player: string }) => {
  return (
    <section id="music" className="music">
      <Container maxWidth={breakpoints.lg}>
        <div
          dangerouslySetInnerHTML={{
            __html: player,
          }}
        />
      </Container>
    </section>
  )
}

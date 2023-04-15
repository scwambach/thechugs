import { Container } from '@components/modules/Container'
import { breakpoints } from '@utils/settings'

export const Music = () => {
  return (
    <section id="music" className="music">
      <Container maxWidth={breakpoints.lg}>
        <iframe
          style={{
            borderRadius: '12px',
          }}
          src="https://open.spotify.com/embed/playlist/2ZHRvvkRgCqtuF9WQQOJeP?utm_source=generator"
          width="100%"
          height="500"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </Container>
    </section>
  )
}

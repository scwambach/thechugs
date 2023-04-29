import { Container } from '@components/modules/Container'
import { Form } from '@components/modules/Form'
import { breakpoints } from '@utils/settings'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container maxWidth={breakpoints.xl}>
        <h2 className="section-heading">
          What is it that you need to&nbsp;know?!
        </h2>
      </Container>
      <Container maxWidth={breakpoints.md}>
        <Form _id="contact" />
      </Container>
    </section>
  )
}

export { Contact }

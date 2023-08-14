import { Container } from '@components/modules/Container'

export default function Home() {
  return (
    <main>
      <Container>
        <h1>This is a Heading 1</h1>
        <h2>This is a Heading 2</h2>
        <h3>This is a Heading 3</h3>
        <h4>This is a Heading 4</h4>
        <h5>This is a Heading 5</h5>
        <h6>This is a Heading 6</h6>
        <p>
          This is a <strong>strong</strong> word and this is an{' '}
          <em>emphasized</em> word in a paragraph.
        </p>
        <p>
          Here's a <a href="#">link</a> and some <code>code</code> inline within
          this paragraph.
        </p>
        <p>
          You can also use <sup>superscript</sup> and <sub>subscript</sub> text
          if needed.
        </p>
        <button>Maecenas convallis ligula.</button>
        <p>
          This is <span style={{ color: 'blue' }}>colored blue</span> text in a
          paragraph.
        </p>
        <p>
          <del>This text is deleted</del> while <ins>this text is inserted</ins>{' '}
          in the paragraph.
        </p>
        <h2>Unordered List:</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>

        <h2>Ordered List:</h2>
        <ol>
          <li>First Item</li>
          <li>Second Item</li>
          <li>Third Item</li>
        </ol>

        <h2>Description List:</h2>
        <dl>
          <dt>HTML</dt>
          <dd>HyperText Markup Language</dd>
          <dt>CSS</dt>
          <dd>Cascading Style Sheets</dd>
          <dt>JS</dt>
          <dd>JavaScript</dd>
        </dl>
      </Container>
    </main>
  )
}

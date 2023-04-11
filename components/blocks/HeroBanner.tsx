import { BannerProps } from '@utils/types'

const HeroBanner = (props: BannerProps) => {
  return (
    <section className="hero-banner">
      <pre
        style={{
          fontFamily: 'monospace',
          display: 'block',
          padding: '50px',
          color: '#88ffbf',
          backgroundColor: 'black',
          textAlign: 'left',
          whiteSpace: 'pre-wrap',
        }}
      >
        {JSON.stringify(props, null, '    ')}
      </pre>
    </section>
  )
}

export { HeroBanner }

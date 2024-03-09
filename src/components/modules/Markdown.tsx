import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'

export const Markdown = ({
  children,
  className,
}: {
  className?: string
  children: string
}) => {
  return (
    <div
      className={`markdown${className ? ` ${className}` : ''}`}
      dangerouslySetInnerHTML={{
        __html: parseMarkdownToHTML(children),
      }}
    />
  )
}

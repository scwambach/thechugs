import { ButtonProps } from '@utils/types/modules/Button'

export const Button = ({
  children,
  className,
  disabled,
  onClick,
  tagType,
  text,
  url,
}: ButtonProps) => {
  const ButtonTag =
    tagType === 'a'
      ? ('a' as keyof JSX.IntrinsicElements)
      : ('button' as keyof JSX.IntrinsicElements)

  const isExternal = url?.startsWith('http')

  return (
    <ButtonTag
      className={`button${className ? ` ${className}` : ''}`}
      href={tagType === 'a' ? url : undefined}
      target={tagType === 'a' ? (isExternal ? '_blank' : undefined) : undefined}
      disabled={disabled}
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
      rel={
        tagType === 'a'
          ? isExternal
            ? 'noopener noreferrer'
            : undefined
          : undefined
      }
    >
      {children || text}
    </ButtonTag>
  )
}

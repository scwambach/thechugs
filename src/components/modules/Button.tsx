import { ButtonProps } from '@utils/types/modules/Button'

export const Button = ({
  buttonStyle,
  children,
  className,
  disabled,
  lessPadding,
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
      className={`button${className ? ` ${className}` : ''}${
        buttonStyle ? ` ${buttonStyle}` : ''
      }${lessPadding ? ' lessPadding' : ''}`}
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
      {children || text || url}
    </ButtonTag>
  )
}

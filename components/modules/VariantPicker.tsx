interface VariantPickerProps {
  variants: { external_id: string; name: string }[]
  name: string
  id: string
  onChange: (value: string) => void
}

const VariantPicker = ({
  variants,
  name,
  id,
  ...props
}: VariantPickerProps) => {
  if (variants.length === (0 || 1)) return null

  return (
    <div className="variant-picker">
      <select
        name={name}
        id={id}
        onChange={(e) => {
          props.onChange(e.target.value)
        }}
      >
        <option value="">Select a variant</option>
        {variants.map((variant: { external_id: string; name: string }) => (
          <option value={variant.external_id} key={variant.external_id}>
            {variant.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default VariantPicker

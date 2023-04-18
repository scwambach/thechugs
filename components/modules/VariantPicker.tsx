import React, { useState } from "react";

//@ts-ignore
const VariantPicker = ({ variants, ...props }) => {
  const [open, setOpen] = useState(false);
  if (variants.length === (0 || 1)) return null;

  return (
    <div className="variant-picker">
      <button onClick={() => setOpen(!open)}>Size: {variants.find((x: any) => x.external_id === props.value).name}</button>
      <ul className={open ? 'open' : ''}>
        {variants.map(({ external_id, name }) => (
        <li key={external_id}>
          <button onClick={() => { props.onChange(external_id); setOpen(!open); }}>
            {name}
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default VariantPicker;

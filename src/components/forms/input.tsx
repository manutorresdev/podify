import Search from './icons/search'

interface TextFieldProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function TextField (props: TextFieldProps) {
  const { name, type, placeholder, onChange, value, disabled = false } = props

  return (
    <label>
      <Search />
      <input disabled={disabled} value={value} onChange={onChange} type={type} placeholder={placeholder} name={name} id={name} />
    </label>
  )
}

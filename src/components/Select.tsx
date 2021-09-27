import '../styles/inputs.scss';

type Options = {
  label: string;
  value: string;
}

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  options: Options[];
  title: string;

}

export function Select (props: SelectProps) {
  return (
    <div className="inputs">
    <h3>{props.title}</h3>
    <select className="select" {...props} >
      {props.options.map(option => (
        <option value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    </div>
  )
}
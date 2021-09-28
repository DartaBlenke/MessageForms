import '../comp_styles/inputs.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
}

export function Input(props: InputProps) {
  return (
    <div className="inputs">
    <h3>{props.title}</h3>
    <input {...props} />
    </div>
  )
}
import '../comp_styles/check.scss';

interface CheckProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
}

export function Check(props: CheckProps) {
  return (
    <div className="checks">
    <input {...props} />
    <h4>{props.title}</h4>
    </div>
  )
}
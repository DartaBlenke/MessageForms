import '../comp_styles/inputs.scss';

interface MessageProps extends React.HTMLProps<HTMLTextAreaElement> {
  title: string;
}

export function Message(props: MessageProps){

  return (
    <div className="inputs">
      <h3>{props.title}</h3>
      <textarea {...props} />
    </div>
  )
}
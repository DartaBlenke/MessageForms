import '../styles/title.scss';

interface TitleProps extends React.HTMLProps<HTMLTitleElement> {
  title: string;
}

export function Title(props: TitleProps) {
  return (
    <div className="title">
    <h1>{props.title}</h1>
    </div>
  )
}
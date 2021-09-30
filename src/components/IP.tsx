import { useCallback } from 'react';
import '../comp_styles/inputs.scss';

interface IPInputProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
}

export function IpInput(props: IPInputProps){

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) =>{
    e.currentTarget.maxLength = 15;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{3})/, "$1.$2.$3.$4");
    e.currentTarget.value = value;
  }, 
    []
  );

  return (
    <div className="inputs">
      <h3>{props.title}</h3>
      <input {...props} onKeyUp={handleKeyUp}/>
    </div>
  )
}
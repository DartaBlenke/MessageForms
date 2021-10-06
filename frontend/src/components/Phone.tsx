import { useCallback } from 'react';
import '../comp_styles/inputs.scss';

interface PhoneProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
}

export function Phone(props: PhoneProps){

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) =>{
    // (DDD) 9XXXX-XXXX
    e.currentTarget.maxLength = 15;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d{5})(\d)/, "($1) $2-$3");
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
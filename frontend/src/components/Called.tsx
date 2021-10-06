import { useCallback } from 'react';
import '../comp_styles/inputs.scss';

interface CalledProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
}

export function Called(props: CalledProps){

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) =>{
    // xxxxxxxx
    e.currentTarget.maxLength = 8;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
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
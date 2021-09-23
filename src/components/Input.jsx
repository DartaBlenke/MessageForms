import React from 'react';
import '../styles/global.scss';

function Input(props) {

  return (
    <div>
      <p>{props.title}</p>
      <input type={props.type} name={props.name} required placeholder={props.placeholder}/>
    </div>
  )
}

export default Input;

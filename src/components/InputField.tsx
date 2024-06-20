import React, { useRef, useState } from 'react';
import "./styles.css";

interface Props {
  toDo: string;
  setToDo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e: React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({toDo, setToDo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <form className='input' onSubmit={(e)=> {
      handleAdd(e);
      inputRef.current?.blur();
    }}> 
    <input className='input-box' 
      ref={inputRef}
      value = {toDo}
      onChange={
        (e) => {
          setToDo(e.target.value);
        }
      }
      type="input" placeholder='Enter a task'/>
    <button className='input-submit' type="submit" >Add</button>
  </form>;
};

export default InputField;

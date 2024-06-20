import React, { useEffect, useRef, useState } from 'react'
import { ToDo } from '../model';
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
    toDo: ToDo;
    toDoList: ToDo[];
    setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const SingleToDo = ({toDo, toDoList, setToDoList}:Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editToDo, setEditToDo] = useState<string>(toDo.toDo);

    const handleEdit = (e:React.FormEvent,id: number) => {
       e.preventDefault();
       setToDoList(
        toDoList.map((toDo) => 
            toDo.id === id? {...toDo,toDo:editToDo}: toDo
        )
         );
         setEdit(false);
    };

    const handleDone = (id: number) => {
        setToDoList(
            toDoList.map((toDo) => 
                toDo.id === id? {...toDo,isDone:!toDo.isDone}:toDo
            )
        );
    };

    const handleDelete = (id: number) => {
        setToDoList(
            toDoList.filter((toDo) => 
                toDo.id !== id
            )
        );
    };

    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);
    

  return (
    <form className="single-to-do" onSubmit={(e) => handleEdit(e,toDo.id)}>

        {
            edit? (
                <input value={editToDo} onChange={(e)=> {setEditToDo(e.target.value)}} 
                className='todolist-single-text'
                ref={inputRef}
                />
            ):(
                toDo.isDone? (
                    <s className="todolist-single-text">{toDo.toDo}</s>
                ): (
                    <span className="todolist-single-text">{toDo.toDo}</span>
                )
            )

        }
       
      
        <div>
            <span className="icon" onClick={ () => {
                if(!edit && !toDo.isDone) {
                    setEdit(!edit);

                   }
                }
                }>
            <AiFillEdit />
            </span>
            <span className="icon" onClick={() => {handleDelete(toDo.id);}}>
            <AiFillDelete />
            </span>
            <span className="icon" onClick={() => {handleDone(toDo.id);}}>
            <MdDone />
            </span>
        </div>
    </form>
  )
}

export default SingleToDo

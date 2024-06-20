import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { ToDo } from './model';
import ToDoList from './components/ToDoList';

// let name:string;
// let age:number | string;

// let isStudent:boolean;
// let hobbies:string[];
// let role:[number, string]; //tuple
//Object
// type Person = {
//   name:String,
//   age?:number
// }

// interface Person {
//   name:String,
//   age?:number
// }

// interface Guy extends Person{
//   profession:String; 
// }

// let person:Person;

// person = {
//   name:"Abhijit",
// }

const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(toDo) {
      setToDoList([...toDoList,{id:Date.now(), toDo: toDo, isDone:false}]);
      setToDo("");
    }
  };

  console.log(toDoList);
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
      <ToDoList toDoList={toDoList} setToDoList={setToDoList}/>
    </div>
  );
}

export default App;

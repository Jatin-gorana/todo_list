import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import Addtodo from './MyComponents/Addtodo';
import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import About from './MyComponents/About';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  } else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);

  }
  
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <BrowserRouter>
    <Header title="Todos List" searchBar={false} />
    <Routes>
      <Route exact path='/' element={<><Addtodo addTodo={addTodo}/><Todos todos={todos} onDelete={onDelete}/></>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>


    // <>
    //   <Header title="Todos List" searchBar={false} />
    //   <Addtodo addTodo={addTodo} />
    //   <Todos todos={todos} onDelete={onDelete} />
    //   <Footer />
    // </>
  );
}

export default App;

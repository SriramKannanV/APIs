import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Todos = () => {

  const [todos, setTodos] = useState([]);

  let url = "https://dummyjson.com/todos";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setTodos(data.todos))
  }, [])

  return (
    <div>
      <Navbar />

      <div className='container px-5 px-md-0'>
        <h4 className='fw-bolder my-4'>Todos</h4>

        <div className='p-bottom col-12 col-md-6 mx-auto'>

          {todos.length === 0 ? (<p>Loading Todos</p>) : (
            todos.map(todo => {
              return (<div className='d-flex gap-2 px-4 align-items-center todos-card rounded mb-3 shadow'>
                <div className={todo.completed ? 'custom-circle-true' : 'custom-circle-false'}></div>
                <h5 className={todo.completed ? 'mb-0 fw-normal text-decoration-line-through text-secondary' : 'mb-0 fw-normal'}>{todo.todo}</h5>
              </div>)
            })
          )}

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Todos

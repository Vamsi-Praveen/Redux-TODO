import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

const Todo = () => {
  const dispatch = useDispatch()
  const { todo } = useSelector((state) => state.todo)
  const [task, setTask] = useState('')
  const handleClick = (e) => {
    if (task == '') {
      return alert('Please add content')
    }
    dispatch(addTodo(task))
    setTask('')
  }
  return (
    <div className="h-screen w-full flex items-center justify-center bg-emerald-100 flex-col gap-5">
      <h1 className='font-bold text-xl'>TODO LIST</h1>
      <div className='flex gap-3'>
        <input placeholder='Enter task' type='text' className='px-2 py-1' value={task} autoFocus onChange={(e) => setTask(e.target.value)} />
        <button className='bg-green-400 px-2 py-1 text-white capitalize' onClick={handleClick}>Add task</button>
      </div>
      <div className='mt-5 flex flex-col gap-4'>
        {
          todo.map((task, index) => {
            return <TodoItem key={index} content={task} />
          })
        }
      </div>
    </div>
  )
}

export default Todo

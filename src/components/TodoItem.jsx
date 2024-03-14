import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../redux/todoSlice'
import Modal from './modal'

const TodoItem = ({ content }) => {
  const dispatch = useDispatch()
  const handleDelete = (task) => {
    dispatch(removeTodo(task))
  }
  const [modalOpen, setModelOpen] = useState(false)
  const handleEdit = () => {
    setModelOpen(!modalOpen)
  }
  return (
    <div className='flex gap-3 w-full items-center'>
      <h1 className='font-medium capitalize'>{content.task}</h1>
      <button className='bg-red-500 px-2 py-1 text-white' onClick={() => handleDelete(content.id)}>Delete</button>
      <button className='bg-sky-400 px-2 py-1 text-white' onClick={handleEdit}>Edit</button>
      {
        modalOpen && <Modal content={content} modelClose={handleEdit} />
      }
    </div>
  )
}

export default TodoItem
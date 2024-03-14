import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTodo } from '../redux/todoSlice'

const Modal = ({ content, modelClose }) => {
    const dispatch = useDispatch()
    const [taskEdited, setTaskEdited] = useState(content.task)
    const handleClick = () => {
        if (taskEdited != '') {
            dispatch(editTodo({'task':taskEdited,'id':content.id}))
            modelClose()
        }
    }
    return (
        <div className='fixed top-0 left-0 h-screen w-full bg-black/70 backdrop-blur-sm flex items-center justify-center flex-col gap-10 px-5'>
            <h1 className='text-xl text-white flex items-center justify-end w-full md:mr-[10rem] cursor-pointer' onClick={modelClose}>X</h1>
            <h1 className='text-4xl text-white'>Edit</h1>
            <div className=' min-w-[300px] px-2 py-1 rounded-sm flex flex-col gap-3'>
                <input type='text' className='px-2 py-1' value={taskEdited} onChange={(e) => setTaskEdited(e.target.value)} />
                <button className='bg-green-400 px-2 py-1 font-medium' onClick={handleClick}>Edit task</button>
            </div>
        </div>
    )
}

export default Modal
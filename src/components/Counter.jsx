import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice.js'

const Counter = () => {
    const counter = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div className='h-screen w-full flex items-center justify-center flex-col gap-10'>
            <h1>{counter}</h1>
            <div>
                <button className='bg-black/80 text-white px-2 mx-5'
                    onClick={() => dispatch(increment())}

                >Inc</button>
                <button className='bg-black/80 text-white px-2 mx-5'
                    onClick={() => dispatch(decrement())}

                >Dec</button>
            </div>
        </div>
    )
}


export default Counter
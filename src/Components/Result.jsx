import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Result() {
    const { correctA,correctB,correctC,correctD, setExit, setStart, quizzes } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[40%] border shadow-lg rounded-md overflow-hidden text-center'>
                <h2 className='text-2xl p-3 my-2'>{correctA} are A</h2>
                <h2 className='text-2xl p-3 my-2'>{correctB} are B</h2>
                <h2 className='text-2xl p-3 my-2'>{correctC} are C</h2>
                <h2 className='text-2xl p-3 my-2'>{correctD} are D</h2>
                <button onClick={playAgain} className='border border-orange-500 p-3 text-2xl rounded'>Play agian</button>
            </div>
        </div>
    )
}

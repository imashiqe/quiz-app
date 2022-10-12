import React from "react"
import { Link } from "react-router-dom";
import {  toast, ToastContainer } from 'react-toastify';

const Question = ({ question}) => {

    const { correctAnswer, options } = question;


    const handleCorrectAnswer = (text) => {
        if (correctAnswer === text) {
             toast.success('Correct Answer', {autoClose: 500})
          
        } else {
             toast.warning('Wrog Answer', {autoClose:500})
        }
    }
    
    
    // eye button  handleer
    const eyeBtnHandlar = () => {
        toast.success(`Correct Answer: ${correctAnswer}`,  {autoClose: 3000})
        
    }




    return (
        <div className="">
                  <div className="bg-blue-300 m-2 w-60 md:w-1/2 mx-auto p-16 rounded-2xl relative">
            <p className="text-3xl text-indigo-900 my-3 font-bold">

                {question.question}
            </p>
            <div className="'grid grid-cols-2 md:grid-cols-1 gap-5 ">
                {
                    options.map((option, idx) => <li
                        onClick={(e)=>handleCorrectAnswer(e.target.innerText)}
                        className="bg-indigo-900 no-underline list-none my-3 py-2 rounded-2xl shadow-xl font-semibold text-white cursor-pointer hover:bg-sky-700  hover:text-white duration-500 " key={idx}>{option}</li>)
                }
            </div>

            <button onClick={eyeBtnHandlar} className='font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-extrabold absolute right-2 top-2 hover:text-pink-500 text-dark cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>

            <div>
        <button onClick={eyeBtnHandlar}></button>
       <ToastContainer></ToastContainer>
      </div>

        </div>
        </div>
 
    )
}

export { Question }
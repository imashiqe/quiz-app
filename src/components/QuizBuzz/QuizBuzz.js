import React from "react"
import { useLoaderData } from 'react-router-dom';
import { Question } from "../Question/Question";


const QuizBuzz = () =>{
    const quizLoaderData = useLoaderData();
    const quizName = quizLoaderData.data.name;
    // const quizData = (quizLoaderData.data)
    // console.log(quizLoaderData.data.questions)
    const questions = quizLoaderData.data.questions
    return(
        <div className="mt-32">
            <h1 className="font-bold text-4xl py-10">{ quizName}</h1>
            <div className="my-3">
                {
                    questions.map(question => <Question
                        key={question.id}
                        question={question}
                        quizName={quizName}
                    ></Question>)
                }
            </div>
        </div>
    )
}


export { QuizBuzz }
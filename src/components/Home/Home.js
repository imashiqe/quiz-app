import React, { useContext } from 'react';
import image from '../Images/buzzfeed-quiz.jpg'
import Quiz from '../Quiz/Quiz';
import { QuizBuzz } from '../Layouts/Layouts';
import './Home.css';



const Home = () => {

    const quizDataLoader = useContext(QuizBuzz);
    const quizes = (quizDataLoader.data)


    return (
        <div className='home-container'>
            <div className='header-container'>
            <img className='w-4/6 mx-auto h-56 rounded-lg mt-5' src={image} alt="" /> 

            <h3 className='text-3xl pt-2 '>Your mind will answer most questions if you learn to relax and wait for the answer.</h3>
              
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-10 w-3/5 mx-auto'>
                {
                    quizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;
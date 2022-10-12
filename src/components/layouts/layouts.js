import React, {createContext} from 'react';
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


export const QuizBuzz = React.createContext();

const Root = () => {

    const quizData = useLoaderData();
    // console.log(products.quizData.data)

    return (
        <QuizBuzz.Provider value={quizData.quizData}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </QuizBuzz.Provider>
    );
};

export default Root;
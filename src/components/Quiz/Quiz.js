import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    // console.log(quiz)
    const { logo, id, name, total } = quiz;
    return (


            <div className="card w-50 bg-base-50 shadow-xl image-full">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>

            <div className="card-actions justify-end">
                <Link to={`quiz/${id}`}>
                <button className="btn btn-primary">Lets Answer</button>
                </Link>
            
            </div>
            </div>
            </div>
    );
};

export default Quiz;
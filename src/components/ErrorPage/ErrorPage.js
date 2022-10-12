import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const ErrorPage = () => {
    return (
              
               <div>
                  <Header></Header>
                    <div class="card w-96 bg-primary text-primary-content m-auto mt-8">
                    <div class="card-body">
                        <h2 class="card-title">404 Error !</h2>
                        <p>No Antrhing Here</p>
                        <div class="card-actions justify-end">
                            <Link to="/">
                            <button class="btn" >Go Back</button>
                            </Link>
                       
                        </div>
                    </div>
                    </div>

               </div>
              
    );
};

export default ErrorPage;
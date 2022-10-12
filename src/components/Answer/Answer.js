import React from 'react';

const Answer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10 w-3/8 mx-auto'>
             <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-dark  bg-dark" >
            <div class="collapse-title text-xl font-medium">
            What is the perpose of reacr router ..?
            </div>
            <div class="collapse-content"> 
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            </div>
            
             <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-dark bg-dark">
            <div class="collapse-title text-xl font-medium">
            React Context API: What is it and How it works?
            </div>
            <div class="collapse-content"> 
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
              Context API is a kind of new feature added in version 16.3 of React that allows one to share state across the entire app or part of it lightly and with ease.</p>
            </div>
            </div>

             <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-dark bg-dark">
            <div class="collapse-title text-xl font-medium">
            why use useref react  ..?
            </div>
            <div class="collapse-content"> 
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly</p>
            </div>
            </div>


        </div>
    );
};

export default Answer;
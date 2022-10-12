
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Statement from './components/Statement/Statement';
import { GetQuizAndDynamicId } from './components/GetQuizAndDynamicId/GetQuizAndDynamicId';
import Layouts from './components/Layouts/Layouts';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';
import { QuizBuzz } from './components/QuizBuzz/QuizBuzz';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: GetQuizAndDynamicId,
      element: <Layouts></Layouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'home',
          element: <Home></Home>,
        },
        {
          path: '/quiz/:id',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizBuzz></QuizBuzz>,
        },
        {
          path: 'Statement',
          element: <Statement></Statement>,
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
          <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

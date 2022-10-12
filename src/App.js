import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
 
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: GetQuizAndDynamicId,
      element: <Root></Root>,
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
          element: <QuizPractice></QuizPractice>,
        },
        {
          path: 'flowCart',
          element: <FlowCart></FlowCart>,
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

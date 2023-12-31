import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/About/About';

    const router = createBrowserRouter([

        {
            path: '/',
            element: <Main></Main>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/contact',
                    element:<Contact></Contact>
                },
                {
                    path: '/about',
                    element: <About/>
                }
            ]
        }
    ])
   

export default router;
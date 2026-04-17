import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer} from 'react-toastify';
import {  RouterProvider } from 'react-router'

import { router } from './Routes/Routes.jsx'
import FriendsContext from './context/FriendsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FriendsContext>
     <RouterProvider router={router} />
   </FriendsContext>
   <ToastContainer />
  </StrictMode>,
)

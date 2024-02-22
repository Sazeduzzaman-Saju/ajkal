import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import 'react-loading-skeleton/dist/skeleton.css'


function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

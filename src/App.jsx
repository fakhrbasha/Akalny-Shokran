import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Details from "./pages/Details";




const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      {path:"meal/:id" , element:<Details />}
    ]
  }
])
function App() {

  return (
    <>  
    <RouterProvider router = {router}></RouterProvider>
    </> 
  );
}

export default App

import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import ListComponent from "./component/ListComponent.jsx";
import HeaderComponent from "./component/HeaderComponent.jsx";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import HomeComponent from "./component/HomeComponent.jsx";
import AddComponent from "./component/AddComponent.jsx";
import EditComponent from "./component/EditComponent.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <HeaderComponent/>
      <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path={"/customers"} element={<ListComponent/>}/>
          <Route path={"/customers/create"} element={<AddComponent/>}/>
          <Route path="/customers/edit/:id" element={<EditComponent />}/>
      </Routes>
    </>
  )
}

export default App

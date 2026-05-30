import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import './App.css'
import ListComponent from "./component/ListComponent.jsx";
import {Route, Routes} from "react-router-dom";
import HomeComponent from "./component/HomeComponent.jsx";
import HeaderComponent from "./component/HeaderComponent.jsx";
import DeleteModal from "./component/DeleteModal.jsx";
import AddComponent from "./component/AddComponent.jsx";
import EditComponent from "./component/EditComponent.jsx";

function App() {

  return (
    <>
        <HeaderComponent/>
      <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/list" element={<ListComponent/>} />
          <Route path="/create" element={<AddComponent/>} />
          <Route path="/edit/:id" element={<EditComponent/>} />
      </Routes>
    </>
  )
}

export default App

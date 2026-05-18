import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import HeaderComponent from "./component/HeaderComponent.jsx";
import ListComponent from "./component/ListComponent.jsx";

function App() {
    return (
        <>
            <HeaderComponent />
            <ListComponent/>
        </>
    )
}

export default App
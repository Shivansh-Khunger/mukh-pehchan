
import "../App.css";
import "../index.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import App from "../App";
import Attendence from "./Attendence";

function LandingPage(){
    return (
        <BrowserRouter>
      
        <Routes>
            <Route index element= {<App/>}/>
            <Route path="/a" element = {<Attendence/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default LandingPage;
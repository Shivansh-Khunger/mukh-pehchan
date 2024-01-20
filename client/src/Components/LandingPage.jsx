
import "../App.css";
import "../index.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import App from "../App";
import Attendence from "./Attendence";
import UploadAttendence from "./UploadAttendence";

function LandingPage(){
    return (
        <BrowserRouter>

        <Routes>
            <Route index element= {<App/>}/>
            <Route path="/a" element = {<Attendence/>}/>
            <Route path='/asd' element = {<UploadAttendence/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default LandingPage;


import { Suspense } from "react";
import  { Routes, Route } from "react-router-dom";
import EditContainer from "../../ships/infrastructure/ShipContainer";
import ShipManagement from "../../ships/views/ShipManagement";
import Loading from "./Loading";
import NavBar from './NavBar'
const MainContent=()=> {
    return (
        <div>
            
            <NavBar/>
            <div className="content">
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<ShipManagement/>} />
                        <Route path="/create" element={<EditContainer />} />
                        <Route path="/edit" element={<EditContainer />} />
                    </Routes>    
                </Suspense>
            </div>
        </div>
    )
}

export default MainContent;
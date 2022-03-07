
import { Suspense } from "react";
import  { Routes, Route } from "react-router-dom";
import ShipController from "../../ships/controllers/ShipController";
import ShipsController from "../../ships/controllers/ShipsController";
import Loading from "./Loading";
import NavBar from './NavBar'
const MainContent=()=> {
    return (
        <div>
            
            <NavBar/>
            <div className="content">
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<ShipsController/>} />
                        <Route path="/create" element={<ShipController />} />
                        <Route path="/edit" element={<ShipController />} />
                    </Routes>    
                </Suspense>
            </div>
        </div>
    )
}

export default MainContent;
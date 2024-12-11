import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
const App: React.FC = () => {
    return (
        <Router>
            <div className="flex">
                {/* Sidebar */}
                <Sidebar />
                {/* Main Content */}
                <div className="flex-grow p-4">
                    <Routes>
                        <Route path="/"/>
                        <Route path="/dashboard"/>
                        <Route path="/profile"/>
                        <Route path="/settings"/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

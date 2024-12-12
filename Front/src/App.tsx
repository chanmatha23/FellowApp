import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import POManagement from "./pages/POManagement";
import Inventory from "./pages/Inventory";
import Header from "./components/Header";
const App: React.FC = () => {
    return (
        <Router>
            <div className="flex">
                {/* Sidebar */}
                <Sidebar />
                <div className="flex-grow">
                    <Header />
                    <div className="p-4">
                        <Routes>
                            <Route path="/" element={ <Dashboard /> } />
                            <Route path="/po-management" element={ <POManagement /> } />
                            <Route path="/inventory" element={ <Inventory /> } />
                            <Route path="/profile"/>
                            <Route path="/settings"/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;

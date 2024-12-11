import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "../assets/Dashboard.svg";
import InventoryIcon from "../assets/Inventory.svg";
import MonitoringIcon from "../assets/Monitoring.svg";
import POIcon from "../assets/PO.svg";
import ReportIcon from "../assets/report.svg";
import ReturnIcon from "../assets/return.svg";
import SettingIcon from "../assets/setting.svg";
import SupplierIcon from "../assets/supplier.svg";

const Sidebar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const menuItems = [
        { id: 1, name: "Dashboard", path: "/", Icon: DashboardIcon },
        { id: 2, name: "PO Management", path: "/po-management", Icon: POIcon },
        { id: 3, name: "Inventory", path: "/inventory", Icon: InventoryIcon },
        { id: 4, name: "Monitoring", path: "/monitoring", Icon: MonitoringIcon },
        { id: 5, name: "Reports", path: "/reports", Icon: ReportIcon },
        { id: 6, name: "Suppliers", path: "/suppliers", Icon: SupplierIcon },
        { id: 7, name: "Return Management", path: "/return-management", Icon: ReturnIcon },
        { id: 8, name: "Settings", path: "/settings", Icon: SettingIcon },
    ];

    const filteredMenu = menuItems.filter((item) =>
        new RegExp(searchQuery, "i").test(item.name)
    );

    return (
        <div
            className="h-screen w-60 text-white flex flex-col"
            style={{
                backgroundColor: "#253751",
                padding: "1rem",
                margin: "0 auto",
            }}
        >
            <h2 className="text-3xl font-thin text-center mb-4">FELLOW</h2>
            <form>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="mt-4 block w-full p-2 ps-10 text-sm text-gray-900 bg-white rounded-xl focus: outline-none"
                        placeholder="Search ..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </form>
            <nav className="pt-6">
                <ul className="space-y-6 ">
                    {filteredMenu.map(({ id, name, path, Icon }) => (
                        <li key={id}>
                            <div className="flex items-center space-x-3 transform transition duration-300 hover:scale-110 ml-2">
                                <img src={Icon} alt={`${name} Icon`} className="w-5" />
                                <Link to={path} className="block px-2 py-1 text-sm font-thin">
                                    {name}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;

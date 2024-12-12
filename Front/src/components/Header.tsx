import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const location = useLocation();
  const { pathname } = location;
  const headerName = [
    { id: 1, name: "Dashboard", path: "/" },
    { id: 2, name: "PO Management", path: "/po-management" },
    { id: 3, name: "Inventory", path: "/inventory" },
    { id: 4, name: "Monitoring", path: "/monitoring" },
    { id: 5, name: "Reports", path: "/reports" },
    { id: 6, name: "Suppliers", path: "/suppliers" },
    {
      id: 7,
      name: "Return Management",
      path: "/return-management",
    },
    { id: 8, name: "Settings", path: "/settings" },
  ];
  const filterHeader = headerName.filter((header) => header.path === pathname);
  return (
    <header className="border-b border-gray-300">
      <div className="px-8 h-20 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-[#253751]">
          {filterHeader[0].name}
        </h1>
        <div className="flex justify-center items-center gap-7 h-full">
          <div className="border-x relative border-gray-300 h-full px-6 flex items-center">
            <IoNotificationsSharp className="w-9 h-9 text-[#253751]" />
            <span className="text-white bg-red-600 w-4 h-4 flex items-center justify-center rounded-full absolute right-5 top-3">
                <p className="text-xs">5</p>
            </span>
          </div>
          <div className="relative">
            <button onClick={() => setOpen(!isOpen)} className="flex items-center">
              <img className="w-12 h-12 mr-2 bg-black/30 rounded-full" />
              <MdOutlineKeyboardArrowDown className="w-6 h-6 text-[#253751]" />
            </button>
            <div
              className={`absolute right-0 top-full px-5 bg-white border border-gray-200 rounded-md shadow-md mt-2 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Sign out
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

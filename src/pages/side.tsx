import React from "@/assets/react.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const toggle = () => {
        setOpen(!open)
    }
    const path = window.location.pathname
    return (
        <>
        <div className={`min-w-full w-full max-w-full h-full fixed z-50 lg:hidden ${open ? "hidden" : "flex"} transition-all duration-500`}>
                <div className=" bg-white min-h-full">
                    <div className={`items-center justify-center h-[60px] w-full mb-1 transition-all duration-500 flex lg:hidden`}>
                        <div>
                            <img src={React} alt="react-icon" />
                        </div>
                    </div>
                    <div>
                    <ul className="m-0 p-0 text-gray-400 transition-all duration-500">
                        <div className={`block lg:hidden w-[250px]`}>
                            <li className="py-3 pl-5 text-sm tracking-[1.5px] font-[400] uppercase">Dashboard</li>
                            <Link to="/" className="transition-all duration-500">
                                <li className={`w-full h-[50px] flex items-center ${path === "/" && "text-[#0d4a3e]"} hover:bg-gray-100`}>
                                    {  path === "/" && <div className="w-[4px] h-[25px] bg-[#0d4a3e]"></div>}
                                    <i className="fa-solid fa-fire-flame-curved px-7 h-[1rem]"></i>
                                    <span className="font-normal tracking-wide text-lg">
                                        Home
                                    </span>
                                </li>
                            </Link>
                            <Link to="/user" className="transition-all duration-500">
                                <li className={`w-full h-[50px] flex items-center ${path === "/user" && "text-[#0d4a3e]"} hover:bg-gray-100`}>
                                    {  path === "/user" && <div className="w-[4px] h-[25px] bg-[#0d4a3e]"></div>}
                                    <i className="fa-solid fa-table-columns px-7 h-[1rem]"></i>
                                    <span className="font-normal tracking-wide text-lg">
                                        User
                                    </span>
                                </li>
                            </Link>
                        </div>
                    </ul>
                    </div>
                </div>
                <div className="max-w-full opacity-50 bg-black w-full h-full" onClick={toggle}>
                </div>
            </div>
            <div className={`w-full ${open ? "lg:max-w-[250px]" : "lg:max-w-[65px]"} h-full sm:hidden lg:fixed bg-white overflow-x-hidden overflow-y-auto z-[1] shadow-lg transition-all duration-500 `}>
                <div className={`items-center justify-center h-[60px] w-full mb-1 transition-all duration-500 lg:flex hidden`}>
                    <div>
                        <img src={React} alt="react-icon" />
                    </div>
                </div>
                <div className="transition-all duration-500">
                    <ul className="m-0 p-0 text-gray-400 transition-all duration-500">
                        <div className={`lg:block hidden`}>
                            {open &&
                                <>
                                <li className="py-3 pl-5 text-sm tracking-[1.5px] font-[400] uppercase">Dashboard</li>
                                <Link to="/" className="transition-all duration-500">
                                    <li className={`w-full h-[50px] flex items-center ${path === "/" && "text-[#0d4a3e]"} hover:bg-gray-100`}>
                                        {  path === "/" && <div className="w-[4px] h-[25px] bg-[#0d4a3e]"></div>}
                                        <i className="fa-solid fa-fire-flame-curved px-7 h-[1rem]"></i>
                                        <span className="font-normal tracking-wide text-lg">
                                            Home
                                        </span>
                                    </li>
                                </Link>
                                <Link to="/user" className="transition-all duration-500">
                                    <li className={`w-full h-[50px] flex items-center ${path === "/user" && "text-[#0d4a3e]"} hover:bg-gray-100`}>
                                        {  path === "/user" && <div className="w-[4px] h-[25px] bg-[#0d4a3e]"></div>}
                                        <i className="fa-solid fa-table-columns px-7 h-[1rem]"></i>
                                        <span className="font-normal tracking-wide text-lg">
                                            User
                                        </span>
                                    </li>
                                </Link>
                                </>           
                            }
                        </div>
                    </ul>
                    {!open &&
                        <div className="hidden lg:block">
                            <li className="w-full h-full flex items-center justify-center transition-all duration-500 mb-5">
                                <Link to="/" className={`${path === "/" ? "bg-[#0d4a3e] shadow-[#0d4a3e] shadow-sm" : "bg-none"} transition-all duration-500 p-5 rounded-sm mt-3 `}>
                                    <i className={`fa-solid fa-fire-flame-curved px-[3px] fa-xl ${path === "/" && "text-white"}`}></i>
                                </Link>
                            </li>
                            <li className="w-full h-full flex items-center justify-center transition-all duration-500">
                                <Link to="/user" className={`${path === "/user" ? "bg-[#0d4a3e] shadow-[#0d4a3e] shadow-sm" : "bg-none"} transition-all duration-500 p-5 rounded-sm mt-3 `}>
                                        <i className={`fa-solid fa-table-columns fa-xl ${path === "/user" && "text-white fill-white"}`}></i>
                                </Link>
                            </li>
                        </div>
                    }
                </div>
            </div></>
    )
}
export default Sidebar
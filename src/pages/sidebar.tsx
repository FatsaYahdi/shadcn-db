import Bar from "@/assets/bar.svg"
import LineChart from "@/components/LineChart"
import { Link } from "react-router-dom"
import { useState } from "react"
import React from "@/assets/react.svg"
const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const toggle = () => {
        setOpen(!open)
    }
    const path = window.location.pathname
    return (
        <div className="bg-[#fafdfb] w-full max-w-full min-h-screen overflow-x-hidden transition-all duration-500">
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
            </div>
            <div className={`${open ?  "lg:pl-[250px]" : "lg:pl-[65px]"} transition-all duration-500 h-full min-h-screen`}>
                <div className="h-[70px] w-full bg-[#0D4A3E] flex items-center flex-start px-6 py-2">
                    <img src={Bar} alt="bar" className="h-7 fill-white w-7 cursor-pointer ml-3" onClick={toggle} />
                </div>
                <div className="relative">
                    <div className="bg-white relative p-8 pl-10 mb-3 items-center flex shadow-sm">
                        <h1 className={`md:text-3xl text-2xl font-semibold ml-1 tracking-wider`}>
                            Dashboard
                        </h1>
                    </div>
                    <div className="py-6 px-10 grid grid-cols-12 gap-x-8 gap-y-6">
                        <div className="col-span-12 md:col-span-6 lg:col-span-3 md:row-span-6 bg-white text-black rounded-sm shadow-sm w-auto h-full flex p-4">
                            <div className="w-[80px] h-[80px] bg-[#FCD34D] mr-2 px-10 flex items-center justify-center rounded-[4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 fill-white" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                            </div>
                            <div className="h-full w-full flex items-center text-gray-500 ml-3">
                                <div className="mb-5">
                                    <h4 className="text-lg font-semibold">Total Admin</h4>
                                    <p className="text-xl text-black font-bold">69</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3 md:row-span-6 bg-white text-black rounded-sm shadow-sm w-auto h-full flex p-4">
                            <div className="w-[80px] h-[80px] bg-[#EF4444] mr-2 px-10 flex items-center justify-center rounded-[4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"  className="h-7 fill-white" ><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>
                            </div>
                            <div className="h-full w-full flex items-center text-gray-500 ml-3">
                                <div className="mb-5">
                                    <h4 className="text-lg font-semibold">News</h4>
                                    <p className="text-xl text-black font-bold">321</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3 md:row-span-6 bg-white text-black rounded-sm shadow-sm w-auto h-full flex p-4">
                            <div className="w-[80px] h-[80px] bg-[#10B981] mr-2 px-10 flex items-center justify-center rounded-[4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"  className="h-7 fill-white" ><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>
                            </div>
                            <div className="h-full w-full flex items-center text-gray-500 ml-3">
                                <div className="mb-5">
                                    <h4 className="text-lg font-semibold">Reports</h4>
                                    <p className="text-xl text-black font-bold">2907</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3 md:row-span-6 bg-white text-black rounded-sm shadow-sm w-auto h-full flex p-4">
                            <div className="w-[80px] h-[80px] bg-[#FFA824] mr-2 px-10 flex items-center justify-center rounded-[4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"  className="h-7 fill-white" ><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>
                            </div>
                            <div className="h-full w-full flex items-center text-gray-500 ml-3">
                                <div className="mb-5">
                                    <h4 className="text-lg font-semibold">User</h4>
                                    <p className="text-xl text-black font-bold">117013</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12  bg-white text-black rounded-sm shadow-sm h-fit">
                            <h1 className="text-xl font-semibold tracking-wider p-4 border-b border-grey-400 mb-4">Statistics</h1>
                            <LineChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
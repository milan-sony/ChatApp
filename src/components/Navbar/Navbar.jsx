import React from 'react'
import { userAuthStore } from '../../store/userAuthStore'
import logo from "/assets/images/chatIcon.png"
import { Link } from 'react-router'
import { LogOut, Settings, User } from 'lucide-react'

function Navbar() {
    const { logout, authUser } = userAuthStore()

    return (
        <>
            <nav className="bg-slate-100 dark:bg-slate-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className='flex items-center space-x-3 rtl:space-x-reverse'><img src={logo} className='h-8' alt='logo' /><span className="self-center text-2xl whitespace-nowrap text-custblue dark:text-custblue uppercase font-black font-Open-Sans">Chatly</span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link to={"/settings"} className='py-2 px-3 text-black md:border-0 md:hover:text-custblue md:p-0 dark:text-white dark:hover:text-custblue flex justify-center items-center capitalize font-Open-Sans text-base'>
                                    <Settings className='size-4' />
                                    <span>&nbsp;Settings</span>
                                </Link>
                            </li>
                            {
                                authUser ? (
                                    <>
                                        <li>
                                            <Link to={"/profile"} className='py-2 px-3 text-black md:border-0 md:hover:text-custblue md:p-0 dark:text-white dark:hover:text-custblue flex justify-center items-center capitalize font-Open-Sans text-base'>
                                                <User className='size-4' />
                                                <span>&nbsp;Profile</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <button className='py-2 px-3 text-black md:border-0 md:hover:text-custblue md:p-0 dark:text-white dark:hover:text-custblue flex justify-center items-center capitalize font-Open-Sans text-base' onClick={logout}>
                                                <LogOut className='size-4' />
                                                <span>&nbsp;Logout</span>
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

import  { NextPage } from "next";
import  { AppProps } from "next/app";
import React from "react";
import { FC, useState, useEffect } from "react";
import { useRef } from "react";
import { useSession, signOut, signIn } from 'next-auth/react'
import Link from "next/link";
const Navbar = ({tab}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {data: session, status} = useSession()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    if(session){
        if(tab === 1){
            return(<>
                <nav className="bg-black-100">
                    <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
        
                        <div className="flex space-x-4">
                        
                        <div>
                            <div className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6761 19.9589C12.9508 20.0228 12.976 20.3827 12.7084 20.4719L11.1284 20.9919C7.15839 22.2719 5.06839 21.2019 3.77839 17.2319L2.49839 13.2819C1.21839 9.31187 2.27839 7.21187 6.24839 5.93187L6.77238 5.75834C7.17525 5.62493 7.56731 6.02899 7.45292 6.43766C7.39622 6.64023 7.34167 6.85164 7.28839 7.07188L6.30839 11.2619C5.20839 15.9719 6.81839 18.5719 11.5284 19.6919L12.6761 19.9589Z" fill="#292D32"/>
                                <path d="M17.1702 3.20854L15.5002 2.81854C12.1602 2.02854 10.1702 2.67854 9.00018 5.09854C8.70018 5.70854 8.46018 6.44854 8.26018 7.29854L7.28018 11.4885C6.30018 15.6685 7.59018 17.7285 11.7602 18.7185L13.4402 19.1185C14.0202 19.2585 14.5602 19.3485 15.0602 19.3885C18.1802 19.6885 19.8402 18.2285 20.6802 14.6185L21.6602 10.4385C22.6402 6.25854 21.3602 4.18854 17.1702 3.20854ZM15.2902 13.3285C15.2002 13.6685 14.9002 13.8885 14.5602 13.8885C14.5002 13.8885 14.4402 13.8785 14.3702 13.8685L11.4602 13.1285C11.0602 13.0285 10.8202 12.6185 10.9202 12.2185C11.0202 11.8185 11.4302 11.5785 11.8302 11.6785L14.7402 12.4185C15.1502 12.5185 15.3902 12.9285 15.2902 13.3285ZM18.2202 9.94854C18.1302 10.2885 17.8302 10.5085 17.4902 10.5085C17.4302 10.5085 17.3702 10.4985 17.3002 10.4885L12.4502 9.25854C12.0502 9.15854 11.8102 8.74854 11.9102 8.34854C12.0102 7.94854 12.4202 7.70854 12.8202 7.80854L17.6702 9.03854C18.0802 9.12854 18.3202 9.53854 18.2202 9.94854Z" fill="#292D32"/>
                            </svg>
                            <span className="font-bold text-white px-2">What? ToDO!</span>
                            </div>
                        </div>
                        </div>
        
                    
                        <div className="hidden md:flex items-center space-x-5">
                        <Link href={"/done"} className="py-5 px-3 text-white-700 hover:text-gray-300">Completed Tasks</Link>
                        <button className="py-2 px-3 bg-red-400 hover:bg-red-300 text-red-900 hover:text-red-800 rounded transition duration-300" onClick={() => signOut()}>Sign Out</button>
                        </div>
        
                    
                        <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={toggleMenu}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        </div>
                    
                    </div>
                    </div>
        
                {/* Menu in mobile view */}
                <div className={`mobile-menu ${isMenuOpen ? 'block' : 'hidden'} md:hidden justify-center content-center`}>
                    <Link href={"/done"} className="block py-2 px-4 text-sm hover:bg-gray-200">Completed Tasks</Link>
                    <div className="pl-4">
                        <button className="py-1 px-2 bg-red-400 hover:bg-red-300 text-red-900 hover:text-red-800 rounded transition duration-300 justify-center" onClick={() => signOut()}>Sign Out</button>
                    </div>
                </div>
              </nav>
            </>)
        }
        else if (tab===2) {
            return(<>
                <nav className="bg-black-100">
                    <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
        
                        <div className="flex space-x-4">
                        
                        <div>
                            <div className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6761 19.9589C12.9508 20.0228 12.976 20.3827 12.7084 20.4719L11.1284 20.9919C7.15839 22.2719 5.06839 21.2019 3.77839 17.2319L2.49839 13.2819C1.21839 9.31187 2.27839 7.21187 6.24839 5.93187L6.77238 5.75834C7.17525 5.62493 7.56731 6.02899 7.45292 6.43766C7.39622 6.64023 7.34167 6.85164 7.28839 7.07188L6.30839 11.2619C5.20839 15.9719 6.81839 18.5719 11.5284 19.6919L12.6761 19.9589Z" fill="#292D32"/>
                                <path d="M17.1702 3.20854L15.5002 2.81854C12.1602 2.02854 10.1702 2.67854 9.00018 5.09854C8.70018 5.70854 8.46018 6.44854 8.26018 7.29854L7.28018 11.4885C6.30018 15.6685 7.59018 17.7285 11.7602 18.7185L13.4402 19.1185C14.0202 19.2585 14.5602 19.3485 15.0602 19.3885C18.1802 19.6885 19.8402 18.2285 20.6802 14.6185L21.6602 10.4385C22.6402 6.25854 21.3602 4.18854 17.1702 3.20854ZM15.2902 13.3285C15.2002 13.6685 14.9002 13.8885 14.5602 13.8885C14.5002 13.8885 14.4402 13.8785 14.3702 13.8685L11.4602 13.1285C11.0602 13.0285 10.8202 12.6185 10.9202 12.2185C11.0202 11.8185 11.4302 11.5785 11.8302 11.6785L14.7402 12.4185C15.1502 12.5185 15.3902 12.9285 15.2902 13.3285ZM18.2202 9.94854C18.1302 10.2885 17.8302 10.5085 17.4902 10.5085C17.4302 10.5085 17.3702 10.4985 17.3002 10.4885L12.4502 9.25854C12.0502 9.15854 11.8102 8.74854 11.9102 8.34854C12.0102 7.94854 12.4202 7.70854 12.8202 7.80854L17.6702 9.03854C18.0802 9.12854 18.3202 9.53854 18.2202 9.94854Z" fill="#292D32"/>
                            </svg>
                            <span className="font-bold text-white px-2">What? ToDO!</span>
                            </div>
                        </div>
                        </div>
        
                    
                        <div className="hidden md:flex items-center space-x-5">
                        <Link href={"/todos"} className="py-5 px-3 text-white-700 hover:text-gray-300">Return</Link>
                        <button className="py-2 px-3 bg-red-400 hover:bg-red-300 text-red-900 hover:text-red-800 rounded transition duration-300" onClick={() => signOut()}>Sign Out</button>
                        </div>
        
                    
                        <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={toggleMenu}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        </div>
                    
                    </div>
                    </div>
        
                {/* Menu in mobile view */}
                <div className={`mobile-menu ${isMenuOpen ? 'block' : 'hidden'} md:hidden justify-center content-center`}>
                    <Link href={"/todos"} className="py-5 px-3 text-white-700 hover:text-gray-300">Return</Link>
                    <div className="pl-4">
                        <button className="py-1 px-2 bg-red-400 hover:bg-red-300 text-red-900 hover:text-red-800 rounded transition duration-300 justify-center" onClick={() => signOut()}>Sign Out</button>
                    </div>
                </div>
              </nav>
            </>)
        }
    }
    else {
        return(<>
            <nav className="bg-black-100">
                <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
    
                    <div className="flex space-x-4">
                    
                    <div>
                        <div className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6761 19.9589C12.9508 20.0228 12.976 20.3827 12.7084 20.4719L11.1284 20.9919C7.15839 22.2719 5.06839 21.2019 3.77839 17.2319L2.49839 13.2819C1.21839 9.31187 2.27839 7.21187 6.24839 5.93187L6.77238 5.75834C7.17525 5.62493 7.56731 6.02899 7.45292 6.43766C7.39622 6.64023 7.34167 6.85164 7.28839 7.07188L6.30839 11.2619C5.20839 15.9719 6.81839 18.5719 11.5284 19.6919L12.6761 19.9589Z" fill="#292D32"/>
                            <path d="M17.1702 3.20854L15.5002 2.81854C12.1602 2.02854 10.1702 2.67854 9.00018 5.09854C8.70018 5.70854 8.46018 6.44854 8.26018 7.29854L7.28018 11.4885C6.30018 15.6685 7.59018 17.7285 11.7602 18.7185L13.4402 19.1185C14.0202 19.2585 14.5602 19.3485 15.0602 19.3885C18.1802 19.6885 19.8402 18.2285 20.6802 14.6185L21.6602 10.4385C22.6402 6.25854 21.3602 4.18854 17.1702 3.20854ZM15.2902 13.3285C15.2002 13.6685 14.9002 13.8885 14.5602 13.8885C14.5002 13.8885 14.4402 13.8785 14.3702 13.8685L11.4602 13.1285C11.0602 13.0285 10.8202 12.6185 10.9202 12.2185C11.0202 11.8185 11.4302 11.5785 11.8302 11.6785L14.7402 12.4185C15.1502 12.5185 15.3902 12.9285 15.2902 13.3285ZM18.2202 9.94854C18.1302 10.2885 17.8302 10.5085 17.4902 10.5085C17.4302 10.5085 17.3702 10.4985 17.3002 10.4885L12.4502 9.25854C12.0502 9.15854 11.8102 8.74854 11.9102 8.34854C12.0102 7.94854 12.4202 7.70854 12.8202 7.80854L17.6702 9.03854C18.0802 9.12854 18.3202 9.53854 18.2202 9.94854Z" fill="#292D32"/>
                        </svg>
                        <span className="font-bold text-white px-2">What? ToDO!</span>
                        </div>
                    </div>
                    </div>
    
                
                    <div className="hidden md:flex items-center space-x-1">
                    <button className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300" onClick={() => signIn()}>Sign In</button>
                    </div>
    
                
                    <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button" onClick={toggleMenu}>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    </div>
                
                </div>
                </div>
    
            {/* Menu in mobile view */}
            <div className={`mobile-menu ${isMenuOpen ? 'block' : 'hidden'} md:hidden justify-center content-center`}>
                <button className="py-1 px-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 justify-center" onClick={() => signIn()}>Sign In</button>
            </div>
          </nav>
        </>)
    }
}

export default Navbar
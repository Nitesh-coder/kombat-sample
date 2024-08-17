import React from 'react'
import { BiStats } from "react-icons/bi"
import { FaHome } from "react-icons/fa";
import {useNavigate} from "react-router-dom"


export const Nav = () => {

    let navigate = useNavigate()
    function handleStatsClick(){
        navigate('/stats')
    }
    function handleHomeClick(){
      navigate('/')
    }
  return (
    <div className=' relative text-red-200 bg-blue-800 text-center shadow-lg font-bold text-lg py-3'>
        My App
        <div className=' absolute right-2 top-2 font-normal select-none hover:text-orange-400 transition-all duration-100'>
            <BiStats onClick={handleStatsClick} size={35} />
        </div>
        <div className=' absolute left-2 top-2 font-normal select-none hover:text-orange-400 transition-all duration-100'>
            <FaHome onClick={handleHomeClick} size={35} />
        </div>
    </div>
  )
}

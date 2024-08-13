import React, { useContext } from 'react'
import { MenuContext } from '../Context/MenuContext';

const MenuBar = () => {
  const {showCollect, setShowCollect, showSpecial, setShowSpecial, showSkin, setShowSkin, showAchvement, setShowAchivement} = useContext(MenuContext)

  function handleCollection(){
    setShowCollect(true)
    setShowSpecial(false)
    setShowSkin(false)
    setShowAchivement(false)

  }
  function handleSpecial(){
    setShowCollect(false)
    setShowSpecial(true)
    setShowSkin(false)
    setShowAchivement(false)

  }
  function handleSkins(){
    setShowCollect(false)
    setShowSpecial(false)
    setShowSkin(true)
    setShowAchivement(false)

  }
  function handleAchivement(){

    setShowCollect(false)
    setShowSpecial(false)
    setShowSkin(false)
    setShowAchivement(true)
  }
  return (
    <div className=' flex justify-center mt-1'>
        <ul className=' flex space-x-1 rounded-lg shadow-lg bg-blue-500 py-1 text-yellow-100 w-max px-4 text-lg'>
            <li onClick={handleCollection} className=' bg-orange-600 text-sm py-1 w-32 text-center px-3 rounded-md hover:bg-orange-400 transition-all duration-300 select-none'>Collection</li>
            <li onClick={handleSpecial} className=' bg-orange-600 text-sm py-1 w-32 text-center px-3 rounded-md hover:bg-orange-400 transition-all duration-300 select-none'>Special</li>
            <li onClick={handleSkins} className=' bg-orange-600 text-sm py-1 w-32 text-center px-3 rounded-md hover:bg-orange-400 transition-all duration-300 select-none'>Skins</li>
            <li onClick={handleAchivement} className=' bg-orange-600 text-sm py-1 w-32 text-center px-3 rounded-md hover:bg-orange-400 transition-all duration-300 select-none'>Achivement</li>
        </ul>
    </div>
  )
}

export default MenuBar
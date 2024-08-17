import React from 'react'
import { useContext, useState } from 'react'


import MenuBar from './MenuBar'
import Collection from './Collection'
import Special from './Special'
import Skin from './Skin'
import Achivement from './Achivement'
import { MenuContext } from '../Context/MenuContext'

export const Home = () => {
    const {showCollect, setShowCollect, showSpecial, setShowSpecial, showSkin, setShowSkin, showAchvement, setShowAchivement} = useContext(MenuContext)
  return (
    <div>
        
      <MenuBar />
      <div className=' flex justify-center mt-1'>

        <div className={`transition-opacity duration-200 ${showCollect ? 'opacity-100' : 'opacity-0'}`}>
          {showCollect && <Collection />}
        </div>

        <div className={`transition-opacity duration-200 ${showSpecial ? 'opacity-100' : 'opacity-0'}`}>
          {showSpecial && <Special />}
        </div>

        <div className={`transition-opacity duration-200 ${showSkin ? 'opacity-100' : 'opacity-0'}`}>
          {showSkin && <Skin />}
        </div>

        <div className={`transition-opacity duration-200 ${showAchvement ? 'opacity-100' : 'opacity-0'}`}>
          {showAchvement && <Achivement />}
        </div>

      </div>
    </div>
  )
}

import { useContext, useState } from 'react'
import MenuBar from './components/MenuBar'
import Collection from './components/Collection'
import Special from './components/Special'
import Skin from './components/Skin'
import Achivement from './components/Achivement'
import { MenuContext } from './Context/MenuContext'


function App() {
  const {showCollect, setShowCollect, showSpecial, setShowSpecial, showSkin, setShowSkin, showAchvement, setShowAchivement} = useContext(MenuContext)

  return (
    <>
      <div className=' text-red-200 bg-blue-800 text-center shadow-lg font-bold text-lg py-3'>My App</div>

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
    </>
  )
}

export default App

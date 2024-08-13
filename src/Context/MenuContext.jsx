import { Children, createContext, useState } from "react";

export const MenuContext = createContext(0)

export const MenuWrapper = ({children})=>{
    const [showCollect, setShowCollect] = useState(true)
    const [showSpecial, setShowSpecial] = useState(false)
    const [showSkin, setShowSkin] = useState(false)
    const [showAchvement, setShowAchivement] = useState(false)
    return(
        <MenuContext.Provider value={{showCollect, setShowCollect, showSpecial, setShowSpecial, showSkin, setShowSkin, showAchvement, setShowAchivement}}>
            {children}
        </MenuContext.Provider>
    )
}
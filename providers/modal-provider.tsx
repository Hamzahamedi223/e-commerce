"use client"

import { StoreModal } from "@/components/modal/store-modal"
import { useState,useEffect } from "react"

const ModalProvider = () => {
    const [isMouted, setIsMouted] = useState(false)
    
    useEffect(() => {
      setIsMouted(true)
    }, [])
    if(!isMouted){
        return null
    }

    
  return (
    <>
      <StoreModal/>
    </>
  )
}

export default ModalProvider

'use client'

import { useEffect } from 'react'
import style from "../../../assets/styles/menber.module.css"

const Menber = () => {
    useEffect(() => {
        console.log("chay client")
    },[])
  return (
    <div className={style["main-test"]}>Menber</div>
  )
}

export default Menber
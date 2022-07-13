import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Porta from '../components/porta'
import Presente from '../components/Presente'
import PortaModel from '../model/portaModel'
import styles from '../styles/divGlobal.module.css'


export default function Home() {
   const [p1, setP1] = useState(new PortaModel(1))
  
  
  return (
    <div className={styles.div_global}>
      <Presente></Presente>
      <Porta porta={p1} /> 
  
    </div>
  )
}

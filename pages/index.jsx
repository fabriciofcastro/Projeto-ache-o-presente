import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Porta from '../components/porta'
import Presente from '../components/Presente'
import PortaModel from '../model/portaModel'
import styles from '../styles/divGlobal.module.css'
import PortaLogica from '../logic/portaLogica'



export default function Home() {
   const [p1, setP1] = useState(new PortaModel(3))
  
   PortaLogica(2, 3)

  return (
    <div className={styles.div_global}>
      <Presente />
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)} /> 
      
    </div>
  )
}

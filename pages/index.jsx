import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Porta from '../components/porta'
import Presente from '../components/Presente'
import styles from '../styles/divGlobal.module.css'
import portaLogica, { atualizarPortas } from '../logic/portaLogica'



export default function Home() {
  const [portas, setPortas] = useState( portaLogica(3, 3))
  
  function renderizarPortas() {
    return portas.map( porta => {
      return <Porta key={ porta.numero } value={ porta } 
      onChange={ novaPorta => {
        setPortas(atualizarPortas( portas, novaPorta)) }
       } />
    })
  }
 
  return (
    <div className={styles.div_global}>
      <Presente />
      { renderizarPortas() }

      
    </div>
  )
}

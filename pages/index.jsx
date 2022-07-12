import Head from 'next/head'
import Image from 'next/image'
import Porta from '../components/porta'
import Presente from '../components/Presente'
import styles from '../styles/divGlobal.module.css'


export default function Home() {
  return (
    <div className={styles.div_global}>
      <Presente></Presente>
      <Porta /> 
      <Porta />
    </div>
  )
}

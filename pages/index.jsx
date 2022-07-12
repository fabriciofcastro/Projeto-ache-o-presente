import Head from 'next/head'
import Image from 'next/image'
import Porta from '../components/porta'
import Presente from '../components/Presente'


export default function Home() {
  return (
    <div >
     <Presente></Presente>
     <Porta />
    </div>
  )
}

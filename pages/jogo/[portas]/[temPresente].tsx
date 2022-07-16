import { useState } from "react"
import Porta from '../../../components/porta'
import Presente from '../../../components/Presente'
import styles from '../../../styles/divGlobal.module.css'
import portaLogica, { atualizarPortas } from '../../../logic/portaLogica'
import stylesJogo from '../../../styles/jogo.module.css'
import Link from 'next/link'
import { useRouter } from "/next/router"


export default function Jogo() {
    const [portas, setPortas] = useState( portaLogica(10, 3))
  
    function renderizarPortas() {
      return portas.map( porta => {
        return <Porta key={ porta.numero } value={ porta } 
        onChange={ novaPorta => {
          setPortas(atualizarPortas( portas, novaPorta)) }
         } />
      })
    }

    return (
        <div className={styles.div_global} id={stylesJogo.jogo} > 
          <div className={stylesJogo.portas}>
              { renderizarPortas() }
          </div>
           <div className={stylesJogo.botoes}>
              <Link href="/">
                <button >Reiniciar Jogo</button>
              </Link>
           </div>
        </div>
    )
}
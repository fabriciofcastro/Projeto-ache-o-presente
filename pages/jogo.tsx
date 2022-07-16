import { useState } from "react"
import Porta from '../components/porta'
import Presente from '../components/Presente'
import styles from '../styles/divGlobal.module.css'
import portaLogica, { atualizarPortas } from '../logic/portaLogica'
import stylesJogo from '../styles/jogo.module.css'


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
           <div className="botoes">

           </div>
        </div>
    )
}
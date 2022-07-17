import { useEffect, useState } from "react"
import Porta from '../../../components/porta'
import Presente from '../../../components/Presente'
import styles from '../../../styles/divGlobal.module.css'
import portaLogica, { atualizarPortas } from '../../../logic/portaLogica'
import stylesJogo from '../../../styles/jogo.module.css'
import Link from 'next/link'
import { useRouter } from "next/router"


export default function Jogo() {
    const router = useRouter()
    const [portas, setPortas] = useState( []) 
    const [valido, setValido] = useState(false)

    useEffect(() => {
        const portas = +router.query.postas
        const temPresente = +router.query.temPresente

        const qtdaPortasValida = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        setValido(qtdaPortasValida && temPresenteValido)

    }, [portas])
  
      useEffect(() => {
        const qtdPortas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(portaLogica(qtdPortas, temPresente))
      }, [router?.query])

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
              { valido ?
                  renderizarPortas() :
                  <h2 style={{
                    fontSize: "30px"
                  }}>Valores Ivalidos! Forneça no minimo 3 portas para iniciar o jogo</h2>
                }
          </div>
           <div className={stylesJogo.botoes}>
              <Link href="/">
                <button >Reiniciar Jogo</button>
              </Link>
           </div>
        </div>
    )
}
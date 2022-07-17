import Cartao from '../components/cartao'
import styles from '../styles/formulario.module.css';
import Link from 'next/link';
import EntradaNumerica from '../components/EntradaNumerica'
import { useState } from 'react';



export default function Formulario() {
  
  const [qtdadePortas, setQtdaPortas] = useState(0)
  const [comPresente, setComPrsente] = useState(0)
 
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao >
          <EntradaNumerica text={'Quantidade de Portas?'} 
                           value={qtdadePortas} 
                           onChange={novaQtda => setQtdaPortas(novaQtda)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text={'Porta com Presente'} 
                            value={comPresente}
                            onChange={novaPortaComPresente => setComPrsente(novaPortaComPresente)}
          />
        </Cartao>

        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdadePortas}/${comPresente}`}>
            <h2 className={styles.link} >Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  
  )
}

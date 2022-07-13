import styles from '../styles/porta.module.css'
import PortaModel from '../model/portaModel'


interface PortaProps {
    porta: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada ? styles.selecionada : " "

    const alternaSelecao = () => props.onChange(porta.alternaSelecao())

    return (
        
        <div className={styles.area} onClick={alternaSelecao}>
            <div className={` ${styles.estrutura} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>{ porta.numero} </div>
                    <div className={styles.macaneta}> </div>
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>
        
       
    )
}
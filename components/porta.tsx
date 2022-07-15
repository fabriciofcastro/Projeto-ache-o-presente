import styles from '../styles/porta.module.css'
import PortaModel from '../model/portaModel'
import Presente from './Presente'


interface PortaProps {
    porta: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta? styles.selecionada : " "

    const alternaSelecao = () => props.onChange(porta.alternaSelecao())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir()) 
    }

    function renderizarPorta() {
        return (
           
                <div className={ styles.porta }> 
                    <div className={ styles.numero }>{ porta.numero } </div>
                    <div className={ styles.macaneta } 
                        onClick={ abrir }> </div>
                </div>
        ) 
    }

    return (
        
        <div className={ styles.area } onClick={ alternaSelecao }>
             <div className={` ${ styles.estrutura } ${ selecionada }`}>
               { porta.fechada ?
                    renderizarPorta() : 
                    porta.temPresente ? <Presente /> : false
               }
           
            </div>
            <div className={ styles.chao }></div>
        </div>
        
       
    )
}
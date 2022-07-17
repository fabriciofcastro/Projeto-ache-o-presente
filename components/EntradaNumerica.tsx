import styles from '../styles/entradaNumerica.module.css'

interface EntradaNumerica {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function EntradaNumerica(props: EntradaNumerica) {

    const decrem = () =>  props.onChange(props.value - 1)
    const increm = () => props.onChange(props.value + 1)

    return (
        <div className={styles.entradaNumerica}>
            <span className={ styles.text }>{ props.text }</span>
            <span className={ styles.value }>{ props.value }</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={decrem}>Decrem - </button>
                <button className={styles.btn} onClick={increm}>increm + </button>
            </div>
        </div>
    )
}
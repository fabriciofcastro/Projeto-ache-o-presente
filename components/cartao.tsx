import styles from '../styles/cartao.module.css'

interface CartaoProps {
    bgcolor?: string
    children?: any
}

export default function cartao(props: CartaoProps) {

    return (
        <div className={styles.cartao} 
            style={{
                backgroundColor: props.bgcolor ?? "#fff"
            }}>
                {props.children}
        </div>
    )
}
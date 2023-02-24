import styles from './Cabecalho.module.scss'
import Logo from "./logo.png"
import Search from "./search.png"

export default function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            <img src={Logo} alt="Logo JA-Space"/>
            <div className={styles.cabecalho__container}>
                <input type="text" 
                placeholder="O que procura?"
                className={styles.cabecalho__input} />
                <img src={Search} alt="Icone de Lupa" />
            </div>
        </header>
    )
}
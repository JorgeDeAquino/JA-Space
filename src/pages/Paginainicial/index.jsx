import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import banner from './banner.png';
import styles from './PaginaInicial.module.scss';

export default function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="Banner da terra vista do espaco" />
          </div>
        </section>
      </main>
    </>
  );
}

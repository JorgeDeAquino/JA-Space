import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://github.com/JorgeDeAquino"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="icon-sm" />
        </a>
        <a
          href="https://www.linkedin.com/in/jorge-alexandre-de-aquino/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="icon-sm" />
        </a>
      </div>
      <p>
        Desenvolvido por 
        <a 
          href="https://www.linkedin.com/in/jorge-alexandre-de-aquino/" 
          target="_blank" 
          rel="noreferrer"
        >
          Jorge Alexandre
        </a>
        </p>
    </footer>
  );
}

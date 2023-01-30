import { ThumbsUp } from 'phosphor-react';
import { Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment () {
    return(
        <div className={styles.Comment}>
            <img src='https://github.com/Palflinho.png' alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>    
                        <div className={styles.authorAndTime}>
                            <strong>Paulo Cavalheiro</strong>
                            <time dataTime="2023-01-25 17:10:40">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
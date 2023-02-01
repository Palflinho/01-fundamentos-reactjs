import { ThumbsUp } from 'phosphor-react';
import { Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment ({src, name, content}) {
    return(
        <div className={styles.Comment}>
            <Avatar hasBorder={false} src={src}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>    
                        <div className={styles.authorAndTime}>
                            <strong>{name}</strong>
                            <time dateTime="2023-01-25 17:10:40">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
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
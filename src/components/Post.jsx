
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/Guds-SB.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Gustavo Berwanger</strong>
                        <span>React Developer</span>
                    </div>
                </div>

                <time dataTime="2023-01-25 17:10:40">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto </a>{'  '}
                    <a href="">#nlw </a>{'  '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário' />
                
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
              
            </form>

            <div className={styles.commentList}>
                <Comment src="https://github.com/Jmnardes.png" name="João Marcus" comment="Muito Bom!"/>
                <Comment src="https://github.com/ananeridev.png" name="Ana Neri" comment="Que legal!"/>
            </div>
        </article>
    )
}
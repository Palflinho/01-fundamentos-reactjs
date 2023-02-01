import { Header } from './components/header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar'

import styles from './App.module.css';

import './global.css';

const posts=[
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/Guds-SB.png',
      name: 'Gustavo Berwanger',
      role: 'React Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare',},
    ],
    publishedAt: new Date('2023-01-29 10:52:26')
  },  
  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/Palflinho.png',
      name: 'Paulo Cavalheiro',
      role: 'Junior Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal o/',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare',},
    ],
    publishedAt: new Date('2023-01-30 10:53:00')
  }, 
];

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

import { Header } from './components/header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar'

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Post 
            author="Paulo Cavalheiro"
            content="Teste"
          />
        </main>
      </div>
    </div>
  )
}

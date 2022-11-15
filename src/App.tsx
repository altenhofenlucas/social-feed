import { Header } from './components/Header'
import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts: Post[] = [
  {
    id: 1,
    author: {
      name: 'Lucas Altenhofen',
      avatarUrl: 'https://github.com/altenhofenlucas.png',
      role: 'Web Developer'
    },
    content: [
      { id: 1, type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis omnis quibusdam facilis ratione laboriosam.' },
      { id: 2, type: 'paragraph', text: 'Non eos quisquam necessitatibus veritatis, officiis tempora accusantium blanditiis ipsa, quae nemo omnis eligendi. Modi?' },
      { id: 3, type: 'link', text: '#nlw' },
      { id: 4, type: 'link', text: '#css' },
      { id: 5, type: 'link', text: '#reactjs' },
    ],
    publishedAt: new Date('2022-11-08 19:30:49'),
  },
  {
    id: 2,
    author: {
      name: 'Lucas Altenhofen 2',
      avatarUrl: 'https://github.com/altenhofenlucas.png',
      role: 'Web Developer 2'
    },
    content: [
      { id: 1, type: 'paragraph', text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis omnis quibusdam facilis ratione laboriosam.' },
      { id: 2, type: 'paragraph', text: '2 Non eos quisquam necessitatibus veritatis, officiis tempora accusantium blanditiis ipsa, quae nemo omnis eligendi. Modi?' },
      { id: 3, type: 'link', text: '#nlw' },
      { id: 4, type: 'link', text: '#css' },
      { id: 5, type: 'link', text: '#reactjs' },
    ],
    publishedAt: new Date('2022-11-10 10:30:49'),
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => ( <Post key={ post.id } id={post.id} post={post} /> ) )
          }
        </main>
      </div>
    </>
  )
}

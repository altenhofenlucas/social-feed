import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { PostComment } from './Post';

interface CommentProps {
  comment: PostComment;
  onDelete: (id: number) => void;
}

export function Comment({ comment, onDelete }: CommentProps) {
  const [claps, setClaps] = useState(0);

  function handleAddClap() {
    setClaps(state => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar borderless src="https://github.com/altenhofenlucas.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Altenhofen</strong>
              <time dateTime="2022-11-08 19:30:49">há 1h</time>        
            </div>
            <button 
              className={styles.deleteButton}
              title="Deletar comentário"
              type="button"
              onClick={() => onDelete(comment.id)}
            >
              <Trash size={20} />
            </button>
          </header>
          <p className={styles.commentText}>
            { comment.content }
          </p>
        </div>
        <footer>
          <button 
            className={styles.clapButton}
            type="button"
            onClick={handleAddClap}
          >
            <ThumbsUp size={16} />
            Aplaudir <span>{claps}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}
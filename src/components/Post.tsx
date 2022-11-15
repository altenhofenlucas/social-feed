import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useEffect, useState } from 'react';

import { Avatar } from './Avatar'
import { Comment as PostComment } from './Comment'

import styles from './Post.module.css'

interface PostProps {
  id: number;
  post: Post;
}

export interface Post {
  id: number;
  publishedAt: Date;
  author: Author;
  content: PostContent[];
}

interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface PostContent {
  id: number;
  type: 'paragraph' | 'link'; 
  text: string;
}

export interface PostComment {
  id: number;
  content: string;
}

export function Post({id,  post}: PostProps) {
  const [comments, setComments] = useState<PostComment[]>([]);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormated = format(post.publishedAt, "dd 'de' LLLL 'ás' HH:mm", { locale: ptBR });
  const publishedDateDistanceToNow = formatDistanceToNow(post.publishedAt, { locale: ptBR, addSuffix: true });

  const isNewCommentEmpty = newComment.trim() === '';

  useEffect(() => {
    async function fetchComments() {
      setComments([
        {id: 1, content: 'Comentário 1'},
        {id: 2, content: 'Comentário 2'}
      ]);
    }

    fetchComments();
  }, [id]);

  function handleAddNewComment(event: React.FormEvent) {
    event.preventDefault();
    setComments([...comments , {id: comments.length + 1, content: newComment}]);
    setNewComment('');
  }

  function handleChangeNewComment(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid(event: React.InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('O comentário não pode estar vazio');
  }

  function handleDeleteComment(commentId: number) {
    setComments(comments.filter(comment => comment.id !== commentId));
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>
          {publishedDateDistanceToNow}
        </time>
      </header>
      <div className={styles.content}>
        {
          post.content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.text}>{line.text}</p>
            }
            if (line.type === 'link') {
              return <p key={line.text}><a href={line.text}>{line.text}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleAddNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          name="comment"
          value={newComment}
          onChange={handleChangeNewComment}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.comments}>
        {
          comments.map(comment => (
            <PostComment 
              key={comment.id}
              comment={comment}
              onDelete={handleDeleteComment}
            />
          ))
        }
      </div>
    </article>
  )
}
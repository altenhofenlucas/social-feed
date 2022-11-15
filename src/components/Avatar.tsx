import styles from './Avatar.module.css'

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  borderless?: boolean;
}

export function Avatar({ borderless = false, ...rest }: AvatarProps) {
  return (
    <img 
      className={styles.avatar + (borderless ? ` ${styles.borderless}` : '')}
      {...rest}
    />
  )
}
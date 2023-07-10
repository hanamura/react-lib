import styles from './Sample.module.css'

interface Props {
  text: string
}

export const Sample = ({ text }: Props) => {
  return <div className={styles.root}>{text}</div>
}

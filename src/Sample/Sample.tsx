interface Props {
  text: string
}

export const Sample = ({ text }: Props) => {
  return <div style={{ color: 'red' }}>{text}</div>
}

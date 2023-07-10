interface Props {
  text: string
}

export const Component = ({ text }: Props) => {
  return <div style={{ color: 'red' }}>{text}</div>
}

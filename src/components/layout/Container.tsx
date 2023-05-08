import Header from './Header'

interface Props {
  children: React.ReactNode;
  showInput?: boolean;
}

export default function Container (props: Props) {
  const { showInput } = props
  return (
    <section id='container'>
      <Header showInput={showInput} />
      {props.children}
    </section>
  )
}

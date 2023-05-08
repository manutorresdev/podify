import { ERROR } from '@utils/constants'
import { Link } from 'react-router-dom'
interface Props {
  status?: string;
  message?: string;
}

export default function ErrorCard (props: Props) {
  const { status = '', message = ERROR.DEFAULT.message } = props
  return (
    <article className='error'>
      <h2>ERROR {status}</h2>
      <p>{message}</p>
      <Link to='/' className='button'>
        Go back to home
      </Link>
    </article>
  )
}

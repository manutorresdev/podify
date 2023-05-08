import { Podcast } from '@_types/types'
import { Link } from 'react-router-dom'

interface CardProps {
  podcast: Podcast;
}

export default function Card (props: CardProps) {
  const { podcast } = props
  const { name, artist, image, link } = podcast
  const { attributes } = link
  const { href } = attributes
  return (
    <li data-testid='podcast-item'>
      <Link data-testid='podcast-card-url' className='podcast-card' to={href} rel='noreferrer'>
        <img data-testid='podcast-card-img' src={image} alt={name} />
        <h3 data-testid='podcast-card-name' title={name}>{name}</h3>
        <p data-testid='podcast-card-artist'>{artist}</p>
      </Link>
    </li>
  )
}

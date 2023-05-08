import Container from '@components/layout/Container'
import { HeaderSkeleton } from './PodcastDetailSkeleton'

export default function EpisodeDetailSkeleton () {
  return (
    <Container showInput={false}>
      <section id='podcast-detail-skeleton'>
        <HeaderSkeleton />
        <div className='episode-description-skeleton pulse' />
        <div className='episode-player-skeleton pulse' />
      </section>
    </Container>
  )
}

import Container from '@components/layout/Container'
import Podcast from '@components/podcast/Podcast'

import { useParams } from 'react-router-dom'

export default function PodcastDetail () {
  const { podcastId } = useParams<{ podcastId: string }>()

  return (
    <Container showInput={false}>
      {podcastId && <Podcast podcastId={podcastId} />}
    </Container>
  )
}

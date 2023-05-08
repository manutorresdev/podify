import Container from '@components/layout/Container'
import Podcast from '@components/podcast/PodcastDetail'
import { useParams } from 'react-router-dom'
import PodcastDetailSkeleton from '@components/podcast/loaders/PodcastDetailSkeleton'
import { getPodcastDetails } from '@services/podcasts'
import useSWR from 'swr'
import { ERROR, SWRConfig } from '@utils/constants'
import ErrorCard from '@components/error/ErrorCard'

export default function PodcastPage () {
  const { podcastId } = useParams<{ podcastId: string }>()
  const {
    data: podcastDetail,
    isValidating,
    error
  } = useSWR(
    {
      podcastId
    },
    getPodcastDetails,
    SWRConfig
  )

  if (isValidating) return <PodcastDetailSkeleton />
  if (!podcastDetail || error) {
    return (
      <Container showInput={false}>
        <ErrorCard message={ERROR.CLIENT.message} />
      </Container>
    )
  }
  return (
    <Container showInput={false}>
      {podcastId && <Podcast podcastDetail={podcastDetail} />}
    </Container>
  )
}

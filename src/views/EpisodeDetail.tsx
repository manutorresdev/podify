import ErrorCard from '@components/error/ErrorCard'
import Container from '@components/layout/Container'
import PodcastDetailHeader from '@components/podcast/details/Header'
import EpisodeDetailSkeleton from '@components/podcast/loaders/EpisodeDetailSkeleton'
import { getEpisodeDetails } from '@services/podcasts'
import { ERROR, SWRConfig } from '@utils/constants'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import EpisodeDetails from '@components/podcast/EpisodeDetails'

export default function EpisodePage () {
  const { podcastId, episodeId } = useParams()
  const {
    data: podcast,
    error,
    isValidating
  } = useSWR(
    {
      podcastId,
      episodeId
    },
    getEpisodeDetails,
    SWRConfig
  )

  if (isValidating) return <EpisodeDetailSkeleton />
  if (!podcast || error) {
    return (
      <Container showInput={false}>
        <ErrorCard message={ERROR.CLIENT.message} />
      </Container>
    )
  }
  return (
    <Container showInput={false}>
      <section className='podcast-detail'>
        <PodcastDetailHeader
          showDescription={false}
          podcast={{
            ...podcast,
            name: podcast.episodes[0].trackName
          }}
        />
        <EpisodeDetails episode={podcast.episodes[0]} />
      </section>
    </Container>
  )
}

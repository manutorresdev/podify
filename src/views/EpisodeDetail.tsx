import { Episode as EpisodeType } from '@_types/types'
import ErrorCard from '@components/error/ErrorCard'
import PlayIcon from '@components/icons/play'
import Container from '@components/layout/Container'
import PodcastDetailHeader from '@components/podcast/details/Header'
import EpisodeDetailSkeleton from '@components/podcast/loaders/EpisodeDetailSkeleton'
import { getEpisodeById } from '@services/podcasts'
import { ERROR } from '@utils/constants'
import { dateParser, durationParser, parseDescription } from '@utils/helpers'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import DOMPurify from 'dompurify'
import Audio from '@components/podcast/Audio'
import Spinner from '@components/Spinner'

const SWRConfig = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false
}

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
    getEpisodeById,
    SWRConfig
  )

  if (isValidating) return <EpisodeDetailSkeleton />
  if (!podcast || error) {
    return <ErrorCard message={ERROR.CLIENT.message} />
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
        <Episode episode={podcast.episodes[0]} />
      </section>
    </Container>
  )
}

interface Props {
  episode: EpisodeType;
}

function Episode (props: Props) {
  const { episode } = props
  const {
    releaseDate,
    episodeFileExtension,
    episodeUrl,
    trackTimeMillis,
    description
  } = episode

  const cleanDescription = DOMPurify.sanitize(parseDescription(description))
  const [played, setIsPlayed] = useState(false)
  const [loading, setLoading] = useState(false)

  const startLoading = () => {
    setLoading(true)
  }

  const stopLoading = () => {
    setLoading(false)
  }
  return (
    <article data-testid='episode-detail' className='episode-details'>
      <div className='episode-header'>
        <time data-testid='episode-detail-release-date'>{dateParser(releaseDate)}</time>
        <time data-testid='episode-detail-duration'>{durationParser(trackTimeMillis)}</time>
      </div>
      <div
        data-testid='episode-detail-description'
        className='description'
        dangerouslySetInnerHTML={{ __html: cleanDescription }}
      />
      {!played && (
        <button
          data-testid='podcast-detail-episode-play-btn'
          onClick={() => {
            setIsPlayed(true)
          }}
        >
          <PlayIcon />
          Play
        </button>
      )}
      {played && (
        <Audio
          loading={loading}
          startLoading={startLoading}
          stopLoading={stopLoading}
          episodeUrl={episodeUrl}
          episodeFileExtension={episodeFileExtension}
        />
      )}
      {loading && <Spinner />}
    </article>
  )
}

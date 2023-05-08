import { Episode as EpisodeType } from '@_types/types'
import PlayIcon from '@components/icons/play'
import { dateParser, durationParser, parseDescription } from '@utils/helpers'
import { useState } from 'react'
import DOMPurify from 'dompurify'
import Audio from '@components/podcast/Audio'
import Spinner from '@components/Spinner'

interface Props {
  episode: EpisodeType;
}

export default function EpisodeDetails (props: Props) {
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
        <time data-testid='episode-detail-release-date'>
          {dateParser(releaseDate)}
        </time>
        <time data-testid='episode-detail-duration'>
          {durationParser(trackTimeMillis)}
        </time>
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

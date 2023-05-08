import { Episode } from '@_types/types'
import PlayIcon from '@components/icons/play'
import { dateParser, durationParser, parseDescription, shortenString } from '@utils/helpers'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify'

export default function PodcastEpisode (props: { episode: Episode }) {
  const { episode } = props
  const {
    trackName,
    releaseDate,
    shortDescription,
    episodeFileExtension,
    episodeUrl,
    trackTimeMillis,
    trackId,
    description
  } = episode
  const [played, setIsPlayed] = useState(false)
  const cleanDescription = DOMPurify.sanitize(shortenString(parseDescription(description)))

  return (
    <li data-testid='podcast-detail-episode-card'>
      <Link data-testid='podcast-detail-episode-url' to={`episode/${trackId}`}>
        <div className='episode-header'>
          <time data-testid='podcast-detail-episode-release-date'>{dateParser(releaseDate)}</time>
          <time data-testid='podcast-detail-episode-duration'>{durationParser(trackTimeMillis)}</time>
        </div>
        <h4 data-testid='podcast-detail-episode-name'>{trackName}</h4>
        {shortDescription
          ? (
            <p data-testid='podcast-detail-episode-summary' className='episode-info'>{shortDescription}</p>
            )
          : (
            <div
              data-testid='podcast-detail-episode-summary'
              className='description'
              dangerouslySetInnerHTML={{ __html: cleanDescription }}
            />
            )}
      </Link>
      {played
        ? (
          <audio controls className='player' autoPlay data-testid='podcast-detail-episode-audio'>
            <source
              src={`${episodeUrl}`}
              type={`audio/${episodeFileExtension}`}
            />
          </audio>
          )
        : (
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
    </li>
  )
}

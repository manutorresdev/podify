import { PodcastDetailsProps } from '@_types/types'
import { useState } from 'react'
import PodcastEpisode from './EpisodeCard'

export default function PodcastDetailBody (props: PodcastDetailsProps) {
  const { episodes } = props.podcast
  const [episodesShown, setEpisodesShown] = useState(10)
  return (
    <section data-testid='podcast-detail-episodes' className='podcast-detail-episodes'>
      <ul data-testid='podcast-detail-episodes'>
        {episodes.slice(0, episodesShown).map((episode) => {
          const { trackId: id } = episode
          return <PodcastEpisode key={id} episode={episode} />
        })}
      </ul>
      {episodes.length > 10 && (
        <button
          data-testid='podcast-detail-episodes-show-more'
          onClick={() => {
            setEpisodesShown(episodesShown + 10)
          }}
          disabled={episodesShown >= episodes.length}
        >
          Show more episodes
        </button>
      )}
    </section>
  )
}

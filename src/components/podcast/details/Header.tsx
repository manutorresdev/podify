import { PodcastDetailsProps } from '@_types/types'
import useDocumentTitle from '@utils/hooks/useDocumentTitle'
import { useState } from 'react'

export default function PodcastDetailHeader (props: PodcastDetailsProps) {
  const { podcast, showDescription = true } = props
  const { title, name, artist, summary, artworkUrl600, trackCount } = podcast
  const [summaryClassName, setSummaryClassName] = useState('hide-half-text')
  useDocumentTitle(name + ' | Podify')

  return (
    <header className='podcast-detail-header'>
      <div className='header-info'>
        <img data-testid='podcast-detail-img' src={artworkUrl600} alt={title} />
        <div className='title-wrapper'>
          <h2 data-testid='podcast-detail-name'>{name}</h2>
          <h4 data-testid='podcast-detail-artist'>{artist}</h4>
          <p data-testid='podcast-detail-episode-number'>{trackCount} episodes</p>
        </div>
      </div>
      <div className='header-description'>
        {showDescription && (
          <>
            <p data-testid='podcast-detail-summary' className={summaryClassName}>{summary}</p>
            <button
              data-testid='podcast-detail-description-btn'
              onClick={() => {
                setSummaryClassName(
                  summaryClassName === '' ? 'hide-half-text' : ''
                )
              }}
            >
              {summaryClassName === '' ? 'Hide' : 'Show More'}
            </button>
          </>
        )}
      </div>
    </header>
  )
}

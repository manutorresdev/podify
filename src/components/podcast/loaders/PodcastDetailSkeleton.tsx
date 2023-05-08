export default function PodcastDetailSkeleton () {
  const episodes = Array.from({ length: 5 })
  return (
    <section id='podcast-detail-skeleton'>
      <HeaderSkeleton />
      <div className='episodes'>
        <ul>
          {episodes.map((_, index) => (
            <li key={index} className='episode-card pulse'>
              <div className='episode-header'>
                <div className='episode-header-time' />
                <div className='episode-header-time' />
              </div>
              <div className='episode-description'>
                <div className='episode-description-title' />
                <div className='episode-description-summary' />
              </div>
              <div className='episode-play-button' />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function HeaderSkeleton () {
  return (
    <div className='header pulse'>
      <div className='header-info'>
        <div className='img' />
        <div className='title-wrapper'>
          <h2 />
          <h4 />
        </div>
      </div>
      <div className='header-description' />
    </div>
  )
}

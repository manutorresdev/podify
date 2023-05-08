export default function PodcastListSkeleton () {
  const podcasts = Array.from({ length: 10 })
  return (
    <ul id='podcast-list-skeleton' data-testid='podcast-loader'>
      {podcasts.map((_, index) => (
        <li key={index} className='podcast-card pulse'>
          <div className='img' />
          <h3 />
          <p />
        </li>
      ))}
    </ul>
  )
}

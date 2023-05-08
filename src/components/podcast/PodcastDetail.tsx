
import PodcastDetailHeader from './details/Header'
import PodcastDetailBody from './details/Body'
import { PodcastDetail as PodcastDetailType } from '@_types/types'

interface Props {
  podcastDetail: PodcastDetailType
}

export default function PodcastDetail (props: Props) {
  const { podcastDetail } = props

  return (
    <section className='podcast-detail'>
      <PodcastDetailHeader podcast={podcastDetail} />
      <PodcastDetailBody podcast={podcastDetail} />
    </section>
  )
}

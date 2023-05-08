import PodcastDetailSkeleton from '@components/podcast/loaders/PodcastDetailSkeleton'
import { getPodcastDetails } from '@services/podcasts'
import useSWR from 'swr'
import { ERROR } from '@utils/constants'
import ErrorCard from '@components/error/ErrorCard'
import PodcastDetailHeader from './details/Header'
import PodcastDetailBody from './details/Body'

interface Props {
  podcastId: string;
}

const SWRConfig = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false
}

export default function Podcast (props: Props) {
  const { podcastId } = props
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
    return <ErrorCard message={ERROR.CLIENT.message} />
  }
  return (
    <section className='podcast-detail'>
      <PodcastDetailHeader podcast={podcastDetail} />
      <PodcastDetailBody podcast={podcastDetail} />
    </section>
  )
}

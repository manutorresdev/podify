import PodcastCard from '@components/podcast/PodcastCard'
import { getPodcasts, podcastFiltering } from '@services/podcasts'
import useSWR from 'swr'
import PodcastListSkeleton from '@components/podcast/loaders/PodcastListSkeleton'
import ErrorCard from '@components/error/ErrorCard'
import NotFoundSearch from '@components/layout/NotFoundSearch'

interface Props {
  search: string;
}

const SWRConfig = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false
}

export default function PodcastList (props: Props) {
  const { search } = props

  const {
    data: podcasts,
    error,
    isValidating
  } = useSWR('GET PODCASTS', getPodcasts, SWRConfig)

  if (isValidating) return <PodcastListSkeleton />
  if (!podcasts || error) return <ErrorCard />

  const filteredPodcasts = podcastFiltering(podcasts, search)
  const hasPodcasts = filteredPodcasts.length > 0

  if (!hasPodcasts && search) return <NotFoundSearch />

  return (
    <ul data-testid='podcast-list'>
      {filteredPodcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </ul>
  )
}

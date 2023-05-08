import { Episode, Podcast, PodcastDetail } from '@_types/types'
import { apiParser } from '.'
import { calculateOneDayDiff } from '@utils/helpers'

interface StorageItem {
  list: Podcast[]
  date: string
}

export async function getPodcasts (): Promise<Podcast[]> {
  const data = localStorage.getItem('podcasts')
  if (data) {
    const { date, list } = JSON.parse(data) as StorageItem
    const oneDayPassed = calculateOneDayDiff(date)

    if (oneDayPassed) {
      const fetchedPodcasts = await fetchPodcasts()
      const storageItem = {
        list: fetchedPodcasts.list,
        date: new Date().toISOString()
      }
      saveToStorage(storageItem)
      return fetchedPodcasts.list
    }

    return list
  }

  const fetchedPodcasts = await fetchPodcasts()
  saveToStorage(fetchedPodcasts)
  return fetchedPodcasts.list
}

export function podcastFiltering (podcasts: Podcast[], search: string): Podcast[] {
  const searchRegExp = new RegExp(search, 'i')
  return podcasts.filter(podcast => {
    const nameMatch = podcast.name.match(searchRegExp)
    const authorMatch = podcast.artist.match(searchRegExp)
    return nameMatch || authorMatch
  })
}

export async function getPodcastDetails ({ podcastId }: { podcastId: string }): Promise<PodcastDetail> {
  const content = await fetchDetails({ podcastId })
  const podcasts = await getPodcasts()

  const podcastInfo = podcasts?.find(podcast => podcast.id === podcastId)

  const episodes = await fetchEpisodes({ podcastId })

  return {
    ...content,
    ...podcastInfo,
    episodes
  }
}

export async function getEpisodeDetails ({ podcastId, episodeId }: {
  podcastId: string
  episodeId: string
}): Promise<PodcastDetail> {
  const podcastDetails = await getPodcastDetails({ podcastId })
  const episodes = await fetchEpisodes({ podcastId })
  const episode = episodes.find((episode: Episode) => episode.trackId.toString() === episodeId)

  if (!episode) {
    throw new Error('Episode not found')
  }

  return {
    ...podcastDetails,
    episodes: [episode]
  }
}

async function fetchPodcasts (): Promise<StorageItem> {
  const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
  const data = await res.json()
  const content = data.feed.entry
  return {
    list: apiParser(content),
    date: new Date().toISOString()
  }
}

async function fetchDetails ({ podcastId }: { podcastId: string }) {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}`)
  const data = await res.json()
  return data.results[0]
}

async function fetchEpisodes ({ podcastId }: { podcastId: string }) {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`)
  const data = await res.json()
  return data.results.slice(1)
}

function saveToStorage (data: StorageItem): void {
  localStorage.setItem('podcasts', JSON.stringify(data))
}

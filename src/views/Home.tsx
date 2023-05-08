import Container from '@components/layout/Container'
import PodcastList from '@components/podcast/PodcastList'
import { SearchContext } from '@context/search/context'
import useDocumentTitle from '@utils/hooks/useDocumentTitle'
import { useContext } from 'react'

export default function Home () {
  const { search, isSearchDisabled, enableSearch } = useContext(SearchContext)
  if (isSearchDisabled) enableSearch()
  useDocumentTitle('Most Popular Music Podcasts | Podify')
  return (
    <Container>
      <section className='podcast-list'>
        <h2 data-testid='home-title'>Most popular podcasts</h2>
        <PodcastList search={search} />
      </section>
    </Container>
  )
}

import ErrorCard from '@components/error/ErrorCard'
import Container from '@components/layout/Container'
import { SearchContext } from '@context/search/context'
import { ERROR } from '@utils/constants'
import { useContext, useEffect } from 'react'

interface Props {
  error?: {
    status?: string;
    message: string;
  };
}

export default function ErrorPage (props: Props) {
  const { status = '', message = ERROR.DEFAULT.message } = props.error || {}
  const { disableSearch, enableSearch } = useContext(SearchContext)

  useEffect(() => {
    disableSearch()

    return () => {
      enableSearch()
    }
  }, [disableSearch, enableSearch])

  return (
    <Container>
      <ErrorCard status={status} message={message} />
    </Container>
  )
}

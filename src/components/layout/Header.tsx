import TextField from '@components/forms/input'
import Logo from '@components/logo'
import { SearchContext } from '@context/search/context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  showInput?: boolean;
}

export default function Header (props: Props) {
  const { showInput = true } = props
  const { handleSearch, search, isSearchDisabled } = useContext(SearchContext)

  return (
    <header className={`${showInput ? '' : 'h-50'}`}>
      <Link to='/'>
        <Logo />
      </Link>
      {showInput && <TextField
        disabled={isSearchDisabled}
        name='buscar'
        type='text'
        placeholder='Search by title or author'
        value={search || ''}
        onChange={handleSearch || (() => null)}
                    />}
    </header>
  )
}

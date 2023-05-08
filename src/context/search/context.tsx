import { createContext, useState } from 'react'

interface SearchContextType {
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSearchDisabled: boolean;
  disableSearch: () => void;
  enableSearch: () => void;
}

export const SearchContext = createContext({} as SearchContextType)

export default function SearchProvider (props: { children: React.ReactNode }) {
  const [search, setSearch] = useState('')
  const [isSearchDisabled, setIsSearchDisabled] = useState(false)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const disableSearch = () => {
    setIsSearchDisabled(true)
  }

  const enableSearch = () => {
    setIsSearchDisabled(false)
  }

  const providerObject = {
    search,
    handleSearch,
    isSearchDisabled,
    disableSearch,
    enableSearch
  }

  return (
    <SearchContext.Provider value={providerObject}>
      {props.children}
    </SearchContext.Provider>
  )
}

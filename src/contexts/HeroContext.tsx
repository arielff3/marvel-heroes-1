import React, { createContext, useContext } from 'react'
import MD5 from 'crypto-js/md5'
import API from '../services/api'

export interface Character {
  id: string
  name: string
  description: string
  thumbnail: Thumbnail
  comics: Details
  series: Details
  stories: Details
  events: Details
  urls: Url[]
}

interface Thumbnail {
  path: string
  extension: string
}

interface Details {
  items: Item[]
}

interface Item {
  name: string
  type: string
}

interface Url {
  type: string
  url: string
}

interface ServicePayload {
  data: {
    results: Character[]
    offset: string
    total: string
  }
  attributionText: string
}

interface HeroContextProps {
  onSearch(textSearch: string): void
  onPaginate(page: number): void
  getDetails(characterId: number): void
  attributionText: string
  characters: Character[]
  characterDetails: any
  pageInfo: { page: string; total: string }
  loading: boolean
}

// https://stackoverflow.com/a/59106817
interface Props {
  children: React.ReactNode
}

const HeroContext = createContext<HeroContextProps>({} as HeroContextProps)

export const HeroProvider: React.FC<Props> = ({ children }) => {
  const textSearch = React.useRef<string>('')
  const [loading, setLoading] = React.useState(false)
  const [values, setValues] = React.useState<ServicePayload>({} as ServicePayload)
  const [details, setDetails] = React.useState<ServicePayload>({} as ServicePayload)

  const characters = React.useMemo(() => {
    if (!values.data) return []
    const { data } = values
    return data.results
  }, [values])

  const characterDetails = React.useMemo(() => {
    if (!details.data) return undefined
    const { data } = details
    return data.results
  }, [details])

  const getList = React.useCallback(
    (page = 0, searchValue = '') => {
      setLoading(true)
      const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY || ''
      const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY || ''
      const ts = new Date().getTime()
      const hash = MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString()

      API.get<ServicePayload>('/characters', {
        params: {
          nameStartsWith: searchValue,
          apikey: PUBLIC_KEY,
          ts,
          hash,
          limit: 10,
          offset: page,
        },
      })
        .then((response) => {
          textSearch.current = searchValue
          setValues(response.data)
        })
        .finally(() => setLoading(false))
    },
    [setValues],
  )

  const getDetails = React.useCallback(
    (characterId: number) => {
      setLoading(true)

      const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY || ''
      const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY || ''
      const ts = new Date().getTime()
      const hash = MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString()

      API.get<ServicePayload>(`/characters/${characterId}/events`, {
        params: {
          apikey: PUBLIC_KEY,
          ts,
          hash,
          limit: 10,
        },
      })
        .then((response) => {
          setDetails(response.data)
        })
        .finally(() => setLoading(false))
    },
    [setDetails],
  )

  const onSearch = React.useCallback(
    (text) => {
      const stringText = text || null
      getList(0, stringText)
    },
    [getList],
  )

  const onPaginate = React.useCallback(
    (page: number) => {
      getList(page, textSearch.current)
    },
    [getList, textSearch],
  )

  const pageInfo = React.useMemo(() => {
    const { data } = values
    return { page: data?.offset, total: data?.total }
  }, [values])

  const attributionText = React.useMemo(() => {
    return values.attributionText
  }, [values])

  return (
    <HeroContext.Provider
      value={{
        onSearch,
        onPaginate,
        getDetails,
        pageInfo,
        attributionText,
        characters,
        characterDetails,
        loading,
      }}
    >
      {children}
    </HeroContext.Provider>
  )
}

export function useSearch(): HeroContextProps {
  return useContext(HeroContext)
}

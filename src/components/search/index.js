import React from 'react'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'

import algoliasearch from 'algoliasearch/lite'

import Hit from './hit'

import * as s from './styles'

const algolia = {
  appID: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appID, algolia.searchOnlyApiKey)

const Search = () => {
  return (
    <s.SearchContainer>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox
          autoFocus
          translations={{ placeholder: 'Procure aqui...' }}
        />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontratos em ${timeSpentMs}ms`
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </s.SearchContainer>
  )
}

export default Search

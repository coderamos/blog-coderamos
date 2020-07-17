import React from 'react'
import * as s from './styles'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

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
        <SearchBox />
        <Hits />
      </InstantSearch>
    </s.SearchContainer>
  )
}

export default Search

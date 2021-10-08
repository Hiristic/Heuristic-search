import React from "react";

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { useDisclosure, FormControl, Switch, FormLabel, Modal, ModalBody, ModalCloseButton, ModalHeader, Button, onOpen, isOpen , onClose, ModalOverlay, ModalContent, ChakraProvider , Box} from "@chakra-ui/react"


import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  PagingInfo,
  ResultsPerPage,
  Paging,
  SearchBox,
  Sorting,
  WithSearch,
  Results,
  Result
} from "@elastic/react-search-ui";

//import { MyResult as Result } from "./components/Result";
//import { ResultsContainer as Results } from "./components/Results";
import Navbar from "./components/NavBar";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import {
  buildAutocompleteQueryConfig,
  buildFacetConfigFromConfig,
  buildSearchOptionsFromConfig,
  buildSortOptionsFromConfig,
  getConfig,
  getFacetFields
} from "./config/config-helper";

const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();
const connector = new AppSearchAPIConnector({
  searchKey,
  engineName,
  hostIdentifier,
  endpointBase
});
const config = {
  searchQuery: {
    facets: buildFacetConfigFromConfig(),
    ...buildSearchOptionsFromConfig()
  },
  autocompleteQuery: buildAutocompleteQueryConfig(),
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true
};



export default function App() {


  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <SearchProvider config={config}>
      <WithSearch
        mapContextToProps={({ searchTerm, setSearchTerm, results }) => ({
          searchTerm,
          setSearchTerm,
          results
        })}
      >
        {({ searchTerm, setSearchTerm, results }) => {
          return (
            <ChakraProvider>
            <div>
              <input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />

              <Box maxW="xl" borderWidth="1px" borderColor="#4FD1C5" borderRadius="lg" overflow="hidden" ml="350" mt="3" mb="3">
              {results.map(r => (
                  <div key={r.produkt.raw}>{r.kategori.raw}

                  <Box p="5" borderWidth="1px" borderColor="#4FD1C5">
                    <Button onClick={onOpen}>Ser mer</Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>Information om:</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                            <FormControl display="flex" alignItems="center">
                              <FormLabel htmlFor="email-alerts" mb="0">
                                Enable email alerts?
                              </FormLabel>
                              <Switch id="email-alerts" />
                              <Switch colorScheme="red" />
                            </FormControl>
                            </ModalBody>
                        </ModalContent>
                      </Modal>
                    </Box>
                    </div> ))}
                  </Box>

            </div>
            </ChakraProvider>
          );
        }}
      </WithSearch>

   {/*   <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
        {({ wasSearched }) => {
          return (
            <div className="App">
              <Switch colorScheme="red" />
              <ErrorBoundary>
                <Layout
                  header={<SearchBox autocompleteSuggestions={true} />}
                  sideContent={
                    <div>
                      {wasSearched && (
                        <Sorting
                          label={"Sort by"}
                          sortOptions={buildSortOptionsFromConfig()}
                        />
                      )}
                      {getFacetFields().map(field => (
                        <Facet key={field} field={field} label={field} />
                      ))}
                    </div>
                  }
                  bodyContent={
                    <Results
                      titleField={getConfig().titleField}
                      urlField={getConfig().urlField}
                      shouldTrackClickThrough={true}
                    />
                  }
                  bodyHeader={
                    <React.Fragment>
                      {wasSearched && <PagingInfo />}
                      {wasSearched && <ResultsPerPage />}
                    </React.Fragment>
                  }
                  bodyFooter={
                    <ChakraProvider>
                      <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="email-alerts" mb="0">
                          Enable email alerts?
                        </FormLabel>
                        <Switch id="email-alerts" />
                        <Switch colorScheme="red" />
                      </FormControl>
                    </ChakraProvider>
                  }
                />
              </ErrorBoundary>
              <Switch colorScheme="teal" size="lg" />
            </div>
          );
        }}
      </WithSearch>*/}
    </SearchProvider>
  );
}

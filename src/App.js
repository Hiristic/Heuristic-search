import React from "react";

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { purityuidashboard } from "@chakra-ui/react";

import { ChakraProvider, Tabs, TabList, Box, Image, TabPanels, Tab, TabPanel, Input, Button, useDisclosure } from "@chakra-ui/react";


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"


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

// import { MyResult as Result } from "./components/MyResult";
// import { MyResults as Results } from "./components/MyResults";
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
    <ChakraProvider>
      <SearchProvider config={config}>
        <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
          {({ wasSearched }) => {


            return (
              <div className="App">
                <ErrorBoundary>

                  <Navbar />

                  <Layout
                    header={
                      <Box>
                        <SearchBox autocompleteSuggestions={true} />
                      </Box>
                    }

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

                    bodyFooter={<Paging />}
                  />
                  <footer>Copyright ©2021 Hiristic</footer>
                </ErrorBoundary>
              </div>
            );
          }}
        </WithSearch>
      </SearchProvider>
    </ChakraProvider>
  );
}

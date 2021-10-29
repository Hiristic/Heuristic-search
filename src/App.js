import React from "react";

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { Grid, Link, Flex, useDisclosure, FormControl, Switch, FormLabel, Modal, ModalBody, ModalCloseButton, ModalHeader, Button, onOpen, isOpen, onClose, ModalOverlay, ModalContent, ChakraProvider, Box, Text, Center } from "@chakra-ui/react"


import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  PagingInfo,
  ResultsPerPage,
  Paging,
  Sorting,
  WithSearch,
  Results,
  Result
} from "@elastic/react-search-ui";

import SearchBox from "./components/SearchBox"
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import { MyResult } from "./components/MyResult";
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
              <Center>
                <Box w="1000px">
                  <NavBar w="100%" />
                  <Box w="100%">
                    <input
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                    />
                    <SearchBox />
                    <Flex w="100%">
                      <Box w="30%">
                        <SideBar />
                      </Box>
                      <Box w="70%" borderWidth="1px" borderColor="#4FD1C5" borderRadius="lg" overflow="hidden" ml="20px" mb="3">
                        {results.map((r, i) => {
                          return (
                            <MyResult key={i} result={r} />
                          );
                        })}
                      </Box>
                    </Flex>

                  </Box>
                  <footer>
                    Copyright © 2021 <Link href="http://hiristic.se/">Hiristic.se</Link>
                  </footer>
                </Box>
              </Center>
            </ChakraProvider>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
}
import React from "react";
import { Checkbox, Box, Text, Flex, Grid, GridItem } from "@chakra-ui/react"


export function FilterList({ list, listName }) {


    console.log("list", list);
    return (
        <Box w="100%" borderRadius="lg" overflow="hidden" my="20px">
            <Text>{listName}</Text>
            {list && list.length > 0 &&
                list.map(function (item, i) {
                    return (
                        <Flex key={i} flexDirection="row">
                            <Checkbox w="70%">{item.name}</Checkbox>
                            <Text w="30%">{item.quantity}</Text>
                        </Flex>
                    )
                })
            }
        </Box>

    );

}

export default FilterList;
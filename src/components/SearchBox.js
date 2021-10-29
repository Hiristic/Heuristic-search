import React from "react";
import { FormControl, Input } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

function SearchBox() {

    return (
        <FormControl id="Search" w="100%" mt="20px" mb="30px" position="relative" >
            <IconButton
                color="White"
                backgroundColor="#4FD1C5"
                icon={<Search2Icon />}
                position="absolute"
            />

            <Input type="search"
                placeholder="Search"
                p="0px 0px 0px 55px"
                borderWidth="1px"
                borderColor="#4FD1C5"
                focusBorderColor="#4FD1C5"
            />
        </FormControl>
    );
}

export default SearchBox;
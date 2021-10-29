import React from "react";
import { useState, useEffect } from "react";
import { Checkbox, Box, Text, UnorderedList, ListItem, Select, GridItem } from "@chakra-ui/react"
import { FilterList } from "./FilterList"


function SideBar() {

    const categories = [
        { name: "category 1", quantity: 3 },
        { name: "category 2", quantity: 2 },
        { name: "category 3", quantity: 1 },
        { name: "category 4", quantity: 1 },
        { name: "category 5", quantity: 2 }];

    const dangerousComponent = [
        { name: "101-02212", quantity: 3 },
        { name: "110-20012", quantity: 2 },
        { name: "1260-0021", quantity: 1 },
        { name: "12331-054", quantity: 1 },
        { name: "1221-3311", quantity: 2 }];

    const protectionDeclarations = [
        { name: "P103", quantity: 3 },
        { name: "P101", quantity: 2 },
        { name: "P104", quantity: 1 },
        { name: "P133", quantity: 1 },
        { name: "P245", quantity: 2 }];

    const hazardStatements = [
        { name: "H317", quantity: 3 },
        { name: "H411", quantity: 2 },
        { name: "H335", quantity: 1 },
        { name: "H423", quantity: 1 },
        { name: "H772", quantity: 2 }];

    const [categoryList, setCategoryList] = useState([]);
    const [dangerousComponentList, setDangerousComponentList] = useState([]);
    const [protectionDeclarationList, setProtectionDeclarationList] = useState([]);
    const [hazardStatementList, setHazardStatementList] = useState([]);

    useEffect(() => {
        setCategoryList(categories);
        setDangerousComponentList(dangerousComponent);
        setProtectionDeclarationList(protectionDeclarations);
        setHazardStatementList(hazardStatements)
    }, []);



    console.log("categoryList", categoryList);
    return (

        <Box w="100%" borderRadius="lg" overflow="hidden" h="100%" colSpan={2} borderWidth="1px" borderColor="#4FD1C5" px="10px">

            <Box className="Kemikalier" >
                <Box>

                    <Text mt="3" color="#4FD1C5" fontFamily="Old Standard TT" fontSize="20">
                        Sort By
                    </Text>
                    <Select placeholder="Relevance">
                        <option value="option1">Kategori ASC</option>
                        <option value="option2">Kategori DESC</option>
                    </Select>
                </Box>
                {hazardStatementList && hazardStatementList.length > 0 &&
                    <FilterList list={hazardStatementList} listName={"FAROANGIVELSE"} />}
                {categoryList && categoryList.length > 0 &&
                    <FilterList list={categoryList} listName={"KATEGORI"} />}
                {protectionDeclarationList && protectionDeclarationList.length > 0 &&
                    <FilterList list={protectionDeclarationList} listName={"SKYDDSANGIVELSE"} />}
                {dangerousComponentList && dangerousComponentList.length > 0 &&
                    <FilterList list={dangerousComponentList} listName={"FARLIGA_KOMPONENTER"} />}



            </Box>
        </Box>

    );

}

export default SideBar;
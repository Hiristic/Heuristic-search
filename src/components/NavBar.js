import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@chakra-ui/react";

function NavBar() {

    return (

        <BrowserRouter>
            <Breadcrumb spacing="8px" marginLeft="73%" color="#4FD1C5">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/home">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/signIn">Sign In</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/singUp">Sign Up</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

        </BrowserRouter>


    );
}

export default NavBar;
import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <NavBar />
            <Box padding={5}>
            <Heading>Oops</Heading>
            <Text>{isRouteErrorResponse(error) ? 'Error 404' : 'An unexpected error occurred'}</Text>
            </Box>
        </>
    );
};

export default ErrorPage;

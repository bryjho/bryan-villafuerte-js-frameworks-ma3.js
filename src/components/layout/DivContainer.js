import React from "react";
import Container from "react-bootstrap/Container";

function divContainer({ children }) {
    return (
        <Container className>
            { children }
        </Container>
    );
}

export default divContainer;
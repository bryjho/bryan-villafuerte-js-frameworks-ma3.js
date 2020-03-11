import React from 'react';
import DivContainer from "./DivContainer";
import Heading from "./Heading";
import NewsList from "./NewsList";

export function About() {
    return (
        <DivContainer>
            <Heading title="News" />

            <NewsList />
        </DivContainer>
    );
}

export default About;
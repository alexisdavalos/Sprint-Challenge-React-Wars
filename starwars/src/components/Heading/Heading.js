import React from 'react';
import styled from 'styled-components';
import {Badge} from 'reactstrap';

const HeadingWrapper = styled.div`
    background: #ffffffd6;
    padding: 3% 0;
`

const Heading = () => {

    return (
        <HeadingWrapper>
        <h1>Star Wars <Badge color="danger">Characters</Badge></h1>
        </HeadingWrapper>
    );
    


}

export default Heading
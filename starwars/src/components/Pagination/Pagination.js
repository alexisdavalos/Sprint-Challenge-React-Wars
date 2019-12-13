import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import styled from 'styled-components';

const Paginations = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Pages = styled(Pagination)`
    display:flex;
    justify-content:center;
  `
  const AnchorLink = styled(PaginationLink)`
    background-color: #00000085;
    border: 1px solid #00000000;
    color:white;
  `
//   console.log(`This is loggin from Pagination.js`);
//   console.log(props.page);
//   console.log(props.charData);
  const nextPage = () =>{
    //   props.setNextPage(props.charData.next);
    console.log(`This is loggin After NextPage Click`);
      console.log(props.charData);
  }
  const lastPage = () =>{
    props.setNextPage(props.charData.next);
}
  return (
    <Pages aria-label="Page navigation example">
    <PaginationItem>
        <AnchorLink first href="#" onClick={() => nextPage()} />
      </PaginationItem>
      
      <PaginationItem>
        <AnchorLink last href="#" onClick={() => lastPage()} />
      </PaginationItem>
    </Pages>
  );
}

export default Paginations;

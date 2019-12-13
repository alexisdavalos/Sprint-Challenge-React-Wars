import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const Header = styled.div`
    width:100%;
    background-position: center;
    background-image: url(https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars-c6452e016c73.jpg);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  `
  const Img = styled.img`
    padding:1%;
    width:10%;
  `
  const Nav = styled.div`
    display:flex;
    justify-content:center;
    align-item:center;
    width:75%;
  `
  const Anchor = styled.a`
    color:white;
    padding: 2%;
    text-decoration: none;
  `
  const navItems = ["Films", "Series", "Interactive", "Community", "DataBank"]
  return (
    <Header>
        <Img alt="star wars logo" src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"></Img>
        <Nav>
            {navItems.map((item, index) =>{
                return <Anchor key={index} href="#">{item}</Anchor>
            })}
            </Nav>
        </Header>
  );
}

export default Nav;

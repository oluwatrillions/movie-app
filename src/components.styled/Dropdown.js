import styled from "styled-components";

const Dropdown = styled.div`
    height: 15vh;
    width: 10vw;
    margin-top: 10vh;
    margin-left: 5vw;
`

const DropdownContainer = styled.label`
    font-weight: 100;
    font-size: 1.2em;
    color: aliceblue
`

const DropdownListContainer = styled.select`
    height: 10vh;
    display: block;
`

const DropdownList = styled.option`
     color: aliceblue;
     display: flex;
     flex-direction: column;
     justify-content: center;

`


export {Dropdown, DropdownContainer, DropdownList, DropdownListContainer}

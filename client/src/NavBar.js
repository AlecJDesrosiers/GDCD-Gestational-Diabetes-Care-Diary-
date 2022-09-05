import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Profile from "./profile";

const NavBar = () => {
return (
    <StyledHeader>
        <Profile />
        <H1>Gestational Diabetes Care Diary</H1>
        <Wrapper>
        <ItemStyled to="/"> Sign in </ItemStyled>
        <ItemStyled to= '/PrescirptionChart'> Prescription </ItemStyled>
        <ItemStyled to= '/PatientScore'> Patient Scores </ItemStyled>
        </Wrapper>
    </StyledHeader>
)
}

export default NavBar

const Wrapper = styled.div`
float: right;
margin-right: 30px;
margin-top: 0px;
`
const H1 = styled.div`
float: left;
font-size: 50px;
margin-top: 0px;
`


const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
const ItemStyled = styled(NavLink)`
text-decoration: none;
margin-left: 30px;
color: Black;
&:active {
    background-color: lightblue;

    text-decoration: underline;
}
`
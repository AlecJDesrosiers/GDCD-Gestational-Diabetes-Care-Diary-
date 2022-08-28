import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
return (
    <StyledHeader>
        <Wrapper>
        <H1>Gestational Diabetes Care Diary</H1>
        <Link to="/"> Sign In </Link>
        <Link to= '/PatientScore'> Patient Score </Link>
        <Link to= '/PrescirptionChart'> Prescription </Link>
        </Wrapper>
    </StyledHeader>
)
}

export default NavBar

const Wrapper = styled.div`

`
const H1 = styled.div`
`


const StyledHeader = styled.div`
`
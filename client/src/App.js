import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import PatientScore from "./PatientScore";
import PrescirptionChart from "./PrescriptionChart"
import SignIn from "./SignIn"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./profile";



const App = () => {
return (
  <div>
    <BrowserRouter>
      <div>
        <NavBar />
        <ContentWrapper>
          <Routes>
            <Route exact path = "/" element = {<SignIn /> } >
            </Route>
            <Route exact path="/PatientScore" element = {<PatientScore /> } >
            </Route>
            <Route exact path="/PrescirptionChart" element = {<PrescirptionChart /> } >
            </Route>
          </Routes>
        </ContentWrapper>
      </div>
    </BrowserRouter>
  </div>
);
}

export default App;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1400px;
  margin: auto;
`

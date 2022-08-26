import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <div>
        <NavBar />
        <h1>Auth0 Login</h1>
        <LoginButton />
        <LogoutButton />
        <Profile />
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
    </Router>
  </div>
);
}



export default App;

const ContentWrapper = styled.div`

`

import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import PatientScore from "./PatientScore";
import PrescirptionChart from "./PrescriptionChart"
import SignIn from "./SignIn"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./profile";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
const { user, isAuthenticated, isLoading } = useAuth0();
useEffect (()=>{
  if(isAuthenticated){
    fetch("/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user,
      }),
    })
    .then((response) => response.json()
    ).then((output) =>
    console.log(output)
    )
  }
},[isAuthenticated]);



return (
  <div>
    <Router>
      <div>
        <NavBar />
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

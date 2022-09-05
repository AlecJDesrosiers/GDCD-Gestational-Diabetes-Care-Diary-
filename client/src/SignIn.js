import styled from "styled-components"
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


const SignIn = () => {
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


    const isLoggedIn = this.state.isLoggedIn;

    return (
    <>
    <StyledDiv>
    <router>
        <div>
    <H1>Welcome to your gestional diabetes diary.</H1>
        </div>
        <Div>
        {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
        }
        </Div>
    </router>
    </StyledDiv>
    </>
    )
};


export default SignIn;


const H1 = styled.div`
display: flex;
justify-content: center;
color: #f5cb42;
font-size: 83px;
height: 100px;
`
const StyledDiv = styled.div`
background-image: url('../Img/sign_in_nurse.png');
background-repeat: no-repeat;
background-position: center; 
background-size: cover;
min-height: 100%;
min-width: 1024px;
width: 100%;
height: auto;
position: fixed;
left: 0;
`

const Div = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`
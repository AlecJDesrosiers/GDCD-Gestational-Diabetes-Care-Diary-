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
    fetch("/api/patientDetails",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            dateofscores: "",
            patientNumber: 0,
            bgvBeforeBreakfast: 0,
            bgvAfterBreakfast: 0,
            bgvAfterLunch: 0,
            bgvAfterSupper: 0,
            idBeforeBreakfast: 0,
            idBeforeLunch: 0,
            idBeforeSupper: 0,
            idEvening: 0,
            comments: "",
            email:user.email,
            }),
    })
}
},[isAuthenticated]);

    return (
    <>
    <StyledDiv>
    <router>
        <div>
    <H1>Welcome to your Gestational Diabetes Diary.</H1>
        </div>
        {!isAuthenticated ?
        <Div>
        <LoginButton />
        </Div>
        :
        <Div>
        <LogoutButton />
        </Div> 
        }
    </router>
    </StyledDiv>
    </>
    )
};


export default SignIn;


const H1 = styled.div`
display: flex;
justify-content: center;
color: #0384fc;
font-size: 83px;
height: 100px;
background-color: white;
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

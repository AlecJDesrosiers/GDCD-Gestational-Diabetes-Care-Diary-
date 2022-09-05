import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
console.log(isAuthenticated)
  return (
    <StyledDiv>
    {isAuthenticated && (
      <Div>
        {/* {JSON.stringify(user)} */}
        <img src={user.picture} alt={user.name} />
        <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </div>
      </Div>
    )
}
    </StyledDiv>
  );
};

export default Profile;

const Div = styled.div`
display: flex;
align-items: center;
gap: 8px;
img{
  height: 75px;
  width: 75px;
}
`
const StyledDiv =styled.div`
min-width: 100px;
`
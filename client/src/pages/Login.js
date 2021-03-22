import React from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom'
import styled from '@emotion/styled';

function Login() {
  return (
    <div>
      <Header />
      <Container>
        <LoginBoxOuter>
        <LoginBoxInner>
            <BoxTitle>FS app</BoxTitle>
          <Input placeholder="Enter your email" />
          <br/>
          <Input placeholder="Enter your password" />
          <br/>
          <Button>Log me in</Button>
          <p>Click here to <Link to="/signup">Sign up</Link></p>
          </LoginBoxInner>
        </LoginBoxOuter>
      </Container>
    </div>
  );
}

export default Login;


const BoxTitle = styled.h1`
text-align: center;`

const Button = styled.button`
  padding: 5px 10px;
  margin: 15px 0;
  background-color: white;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  &: focus {
    outline: none;
  }
  &:hover {
    color: white;
    background-color: grey;
  }
`;

const LoginBoxInner = styled.div`
  padding: 75px 35px`

const LoginBoxOuter = styled.div`
  box-shadow: 0px 16px 24px 2px rgba(0,0,0,0.14) , 0px 6px 30px 5px rgba(0,0,0,0.12) , 0px 8px 10px -7px rgba(0,0,0,0.2) ;
  width: 400px;
  height: 500px;
  border-radius: 3px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin: 15px 0;
  ::-webkit-input-placeholder {
    font-size: 25px;
  }
  font-size: 25px;
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
`;


import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Header />
      <Container>
        <LoginBoxOuter>
          <LoginBoxInner>
            <BoxTitle>FS app</BoxTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                ref={register({ required: true, minLength: 3 })}
                name="name"
                placeholder="Enter your name"
              />
              {errors.name && <span>This is required</span>}
              <Input
                ref={register({ required: true })}
                name="email"
                placeholder="Enter your email"
              />
              {errors.email && <span>This is required</span>}
              <Input
                ref={register({ required: true })}
                name="password"
                placeholder="Enter your password"
              />
              {errors.password && <span>This is required</span>}
              <br/>
              <Button type="submit">Sign me up</Button>
              <p>
                Click here to <Link to="/login">Log in</Link>
              </p>
            </form>
          </LoginBoxInner>
        </LoginBoxOuter>
      </Container>
    </div>
  );
}

export default Signup;

const BoxTitle = styled.h1`
  text-align: center;
`;

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
  padding: 45px 35px;
`;

const LoginBoxOuter = styled.div`
  box-shadow: 0px 16px 24px 2px rgba(0, 0, 0, 0.14),
    0px 6px 30px 5px rgba(0, 0, 0, 0.12), 0px 8px 10px -7px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: auto;
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

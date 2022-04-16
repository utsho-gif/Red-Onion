import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = event => {
      const email = emailRef.current.value;
      const password = passRef.current.value;
      createUserWithEmailAndPassword(email, password);
  }
  if(user){
    navigate('/home');
  }

  return (
    <div className="container w-50">
      <h2 className="text-secondary text-center my-5">Sign In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-50 mx-auto d-block rounded-pill mb-1" variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
      <p className="mt-2">
        New To Genius?{" "}
        <Link className="text-decoration-none text-primary" to={"/signup"}>
          Create An Account
        </Link>
      </p>
      <p>Forget Password? <button className='btn btn-link text-primary text-decoration-none' >Reset Password</button> </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
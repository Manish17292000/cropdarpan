import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div class="card">
        <div class="d-flex flex-lg-row flex-column-reverse">
            <div class="card card11">
                <div class="row justify-content-center my-auto">
                    <div class="col-md-11 col-10 my-5">
                          <h2 class="mb-5 text-center heading" style={{color: "white"}}><b>Login with Email</b></h2>
                          {error && <Alert variant="danger">{error}</Alert>}
                          <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                              <Form.Label><b>Email</b></Form.Label>
                              <Form.Control type="email" placeholder="Enter Email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                              <Form.Label><b>Password</b></Form.Label>
                              <Form.Control type="password" placeholder="Enter Password" ref={passwordRef} required />
                            </Form.Group>
	  		    <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password"><medium style={{color:"#b5b7bd"}}>Forgot Password?</medium></Link>
                    	    </div>
	                    <br/>
	  		    <div>
                            <Button disabled={loading} className="w-100" style={{backgroundColor:"white",color:"green"}} type="submit">
                              <b>Login</b>
                            </Button>
	                    </div>
                          </Form>
	  	    </div>
                    </div></div>
      <div class="card card1">
      	<div class="my-auto mx-md-15 px-md-15 right">
        	<p style={{color: "green"}} class="text-center">Don't have an account?</p>
        	<Button className="w-100" style={{backgroundColor:"green"}}><Link to="/signup"><medium class="text-white"><b>Sign up</b></medium></Link></Button>
      </div></div>
   </div></div>
    </>
  )
}

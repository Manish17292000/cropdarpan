import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
  return (
    <> 	  
      <div class="card">
      <div class="d-flex flex-lg-row flex-column-reverse">
	  <div class="card card11">
          <div class="row justify-content-center my-auto">
          <div class="col-md-10 col-10 my-5">
          <p style={{color:"white"}} class="text-center"> Already have an account?</p>
	  <div className="w-100 text-center mt-3">
          <Button className="w-100" class="btn-outline-success" style={{backgroundColor:"white"}}> <Link to="/loginViaEmail" style={{color:"green"}}><b>Login with Email</b></Link></Button>
	  </div>
	  <div className="w-100 text-center mt-3">
	  <Button className="w-100" class="btn-outline-success" style={{backgroundColor:"white"}}> <Link to="/loginViaPhone" style={{color:"green"}}><medium><b>Login with Phone</b> </medium></Link></Button>
          </div>
	  <div className="w-100 text-center mt-3">
	  <Button className="w-100" class="btn-outline-success" style={{backgroundColor:"white"}}> <Link to="/loginViaGoogle" style={{color:"green"}}><medium><b>Login with Google</b> </medium></Link></Button>
	  </div>
	  </div>
	  </div>
          </div>
          <div class="card card1">
          <div class="mx-md-15 px-md-15 right">
	  	<h2 class="mb-5 text-center heading" style={{color: "green"}}>Sign Up</h2>
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
            	<Form.Group id="password-confirm">
              		<Form.Label><b>Password Confirmation</b></Form.Label>
              		<Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
            	</Form.Group>
            	<Button disabled={loading} style={{backgroundColor:"green"}} className="w-100" type="submit">
              		<b>Sign up</b>
            	</Button>
          	</Form>
	   </div>
           </div>
	  </div></div>
    </>
  )
}

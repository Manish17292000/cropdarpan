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
      <div className="w-100 text-center mt-2" class="split right">
      <div class="centered">
        <p style={{color:"green"}}>Already have an account?</p>
	  <Button style={{backgroundColor:"green"}}> <Link to="/loginViaEmail"><medium class="text-white"><b>Login with Email</b></medium></Link></Button>
      <Button style={{backgroundColor:"green"}}> <Link to="/loginViaPhone"><medium class="text-white"><b>Login with Phone</b> </medium></Link></Button>
      <Button style={{backgroundColor:"green"}}> <Link to="/loginViaGoogle"><medium class="text-white"><b>Login with Google</b> </medium></Link></Button></div></div>
      <Card class="centered">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} class="split left">
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} style={{backgroundColor:"green"}} className="w-100" type="submit">
              <b>Sign up</b>
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

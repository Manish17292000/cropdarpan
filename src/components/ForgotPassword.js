import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <Card class="centered">
      <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit} class="split left">
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} style={{backgroundColor:"green"}} className="w-100" type="submit">
             <b> Reset Password</b>
            </Button></Form>
	  </Card.Body></Card>
	  <Card style={{backgroundColor:"#008000"}}></Card>
	  <Card style={{backgroundColor:"#008000"}}></Card>
	  <Card style={{backgroundColor:"#008000"}}></Card>

	  <Card class="centered"><Card.Body>
	  <Form class="split left">
          <div className="w-100 text-center mt-3">
            <Button className="w-100"><Link to="/loginViaEmail"><medium class="text-white"><b>Login with Email</b></medium></Link></Button>
          </div>
	  <div className="w-100 text-center mt-3">
            <Button className="w-100" style={{backgroundColor:"#66CDAA"}}><Link to="/loginViaPhone"><medium class="text-white"><b>Login with Phone</b></medium></Link></Button>
          </div>
	  <div className="w-100 text-center mt-3">
            <Button className="w-100" style={{backgroundColor:"#9ACD32"}}><Link to="/loginViaGoogle"><medium class="text-white"><b>Login with Google</b></medium></Link></Button>
          </div></Form></Card.Body></Card>
      <div className="w-100 text-center mt-2" class="split right">
      <div class="centered">
        <p style={{color: "green"}}>Need an account?</p>
        <Button className="w-100" style={{backgroundColor:"green"}}><Link to="/signup"><medium class="text-white"><b>Sign up</b></medium></Link></Button>
      </div></div>
    </>
  )
}

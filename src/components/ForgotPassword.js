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
    <div class="card">
    <div class="d-flex flex-lg-row flex-column-reverse">
    <div class="card card1111">
    <div class="row justify-content-center my-auto">
    <div class="col-md-12 col-10 my-5">
    <h3 class="mb-5 text-center" style={{color: "white"}}><b>Password Reset</b></h3>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label><b>Email</b></Form.Label>
              <Form.Control type="email" placeholder="Enter Email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} style={{backgroundColor:"white",color:"green"}} className="w-100" type="submit">
             <b> Reset Password</b>
            </Button></Form>
	  <br/>
          <div className="w-100 text-center mt-3">
            <Button className="w-100"><Link to="/loginViaEmail"><medium class="text-white"><b>Login with Email</b></medium></Link></Button>
          </div>
	  <div className="w-100 text-center mt-3">
            <Button className="w-100" style={{backgroundColor:"#66CDAA"}}><Link to="/loginViaPhone"><medium class="text-white"><b>Login with Phone</b></medium></Link></Button>
          </div>
	  <div className="w-100 text-center mt-3">
            <Button className="w-100" style={{backgroundColor:"#9ACD32"}}><Link to="/loginViaGoogle"><medium class="text-white"><b>Login with Google</b></medium></Link></Button>
          </div>
	  </div></div></div>
      <div class="card card111">
        <div class="my-auto mx-md-15 px-md-15 right">
        <p style={{color: "green"}} class="text-center">Don't have an account?</p>
        <Button className="w-100" style={{backgroundColor:"green"}}><Link to="/signup"><medium class="text-white"><b>Sign up</b></medium></Link></Button>
      </div></div>
      </div></div>
    </>
  )
}

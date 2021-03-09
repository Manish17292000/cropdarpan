import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const phoneRef = useRef()
  
  const { loginViaPhone } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    await loginViaPhone(phoneRef.current.value)
    // 
    // history.push("/")
  
  }

  return (
    <>
      <Card class="centered">
        <Card.Body>
          <h2 className="text-center mb-4">Login with Phone</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} class="split left">
            <Form.Group id="Phone Number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone Number"  ref={phoneRef} required />
            </Form.Group>
            <div id="recaptcha"></div> 
            <Button disabled={loading} style={{backgroundColor:"green"}} className="w-100" type="submit">
             <b> Login</b>
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password"><small class="text-muted">Forgot Password?</small></Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2" class="split right">
      <div class="centered">
        <p style={{color:"green"}}>Need an account?</p>
	<Button className="w-100" style={{backgroundColor:"green"}}><Link to="/signup"><medium class="text-white"><b>Sign up</b></medium></Link></Button>
     </div>
      </div>
    </>
  )
}



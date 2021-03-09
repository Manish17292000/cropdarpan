import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { loginViaGoogle } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    await loginViaGoogle()
    history.push("/")
  
  }

  return (
    <>
	<div class="card">
        <div class="d-flex flex-lg-row flex-column-reverse">
        <div class="card card11">
        <div class="row justify-content-center my-auto">
        <div class="col-md-12 col-10 my-5">
        <h2 class="mb-5 text-center heading" style={{color: "white"}}><b>Login with Google</b></h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          
            <Button disabled={loading} className="w-100" style={{backgroundColor:"white",color:"green"}} type="submit">
              <b>Login</b>
            </Button>
          </Form>
        </div></div></div>
      <div class="card card1">
        <div class="my-auto mx-md-15 px-md-15 right">
        <p style={{color: "green"}} class="text-center">Don't an account?</p>
	<Button className="w-100" style={{backgroundColor:"green"}}><Link to="/signup"><medium class="text-white"><b>Sign up</b></medium></Link></Button>
      </div></div>
      </div></div>
    </>
  )
}

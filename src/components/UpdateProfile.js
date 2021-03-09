import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div class="card">
      <div class="d-flex flex-lg-row flex-column-reverse">
      <div class="card card11">
      <div class="row justify-content-center my-auto">
      <div class="col-md-11 col-10 my-5">
      <h3 class="mb-5 text-center heading" style={{color: "white"}}><b>Update Profile</b></h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label><b>Email</b></Form.Label>
              <Form.Control
                type="email"
	        placeholder="Enter Email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label><b>Password</b></Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label><b>Password Confirmation</b></Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} style={{backgroundColor:"white",color:"green"}} className="w-100" type="submit">
            <b>  Update</b>
            </Button>
          </Form>
       </div></div></div>
       <div class="card card1">
        <div class="my-auto mx-md-15 px-md-15 right">
	  <p style={{color: "green"}} class="text-center"> Doesn't want to update Profile? </p>
        <Button className="w-100" style={{backgroundColor:"green"}}><Link to="/"><medium class="text-white"><b>Cancel</b></medium></Link></Button>
      </div></div>
      </div></div>
    </>
  )
}

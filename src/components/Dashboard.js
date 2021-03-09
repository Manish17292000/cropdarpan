import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/SignInMethods")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
	<div class="card">
        <div class="d-flex flex-lg-row flex-column-reverse">
        <div class="card card11">
        <div class="row justify-content-center my-auto">
        <div class="col-md-11 col-10 my-5">
        <h3 class="mb-5 text-center heading" style={{color: "white"}}><b>Profile</b></h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong><u>Email ID:</u>  {currentUser.email}</strong>
	  <br/>
	  <br/>
	  <Button className="w-100" class="btn-outline-success" style={{backgroundColor:"white"}}> <Link to="/update-profile" style={{color:"green"}}><medium><b>Update Profile</b> </medium></Link></Button> 
       </div></div></div>
       <div class="card card1">
        <div class="my-auto mx-md-15 px-md-15 right">
	<p style={{color:"green"}} class="text-center"> Want to Logout?</p>
        <Button className="w-100" variant="link" onClick={handleLogout} style={{backgroundColor:"green",color:"white"}}>
         <b> Log Out</b>
        </Button>
      </div></div>
      </div></div>
    </>
  )
}

import React, { useState } from "react"
import { Card, Button, Alert, Navbar, Nav, NavDropdown, Form, FormControl, CardGroup, CardDeck } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import wheat from '../images/wheat.png';
import cotton from '../images/cotton.png';
import sunflower from '../images/sunflower.png';
import sugarcane from '../images/sugar-cane.png';




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
   <CardDeck >
  <Card>
    <Card.Img variant="top" src={cotton} width="200" height="200" />
    <Card.Body>
      <Card.Text>
        Cotton
      </Card.Text>
    </Card.Body>
   </Card>
   <Card>
    <Card.Img variant="top" src={wheat} width="200" height="200"/>
    <Card.Body>
      <Card.Text>
        Wheat
      </Card.Text>
    </Card.Body>
   </Card>
   <Card>
    <Card.Img variant="top" src={sugarcane} width="200" height="200" />
    <Card.Body>
      <Card.Text>
        Sugar Cane
      </Card.Text>
    </Card.Body>
   </Card>
   <Card>
    <Card.Img variant="top" src={sunflower} width="200" height="200"/>
    <Card.Body>
      <Card.Text>
        Sun Flower
      </Card.Text>
    </Card.Body>
   </Card>

   
</CardDeck>

      {/* <Card class="split left">
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
        <Button className="w-100" style={{backgroundColor:"green"}}><Link to="/update-profile"><medium class="text-white"><b>Update Profile</b></medium></Link></Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2" class="split right">
      <div class="centered">
	<p style={{color:"green"}}> Want to Logout?</p>
        <Button variant="link" onClick={handleLogout} style={{backgroundColor:"green",color:"white"}}>
         <b> Log Out</b>
        </Button>
      </div></div> */}

    </>
  )
}

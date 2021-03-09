import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  
  function handleSubmitViaEmail(e) {
    e.preventDefault()
    history.push("/loginViaEmail")
    setLoading(false)
  }
  function handleSubmitViaPhone(e) {
    e.preventDefault()
    history.push("/loginViaPhone")
    setLoading(false)
  }
  function handleSubmitViaGoogle(e) {
    e.preventDefault()
    history.push("/loginViaGoogle")
    setLoading(false)
  }

  return (
    <>
     <div class="d2">
       <h1 className="text-center mb-4">Crop Darpan </h1></div>
      <div class="d1">
          <h4 className="text-center mb-4">Login Methods </h4>
          <Form onSubmit={handleSubmitViaEmail}>
            <Button disabled={loading} className="w-100" type="submit">
                <b>Email</b>
            </Button>
        
          </Form>
          <Form onSubmit={handleSubmitViaPhone}>
            <Button disabled={loading} style={{backgroundColor:"#66CDAA"}} className="w-100 mt-3" type="submit">
               <b>Phone</b>
            </Button>
          </Form>
          <Form onSubmit={handleSubmitViaGoogle}>
            <Button disabled={loading} style={{backgroundColor:"#9ACD32"}}className="w-100 mt-3" type="submit">
               <b> Google </b>
            </Button>
          </Form>
   </div>
    </>
  )
}

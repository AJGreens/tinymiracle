import React, { useState } from "react";
import { Card, Form, Button, Alert} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import UserNav from '../User/UserNav'

function Login() {
  let navigate = useNavigate();

  const { signIn } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signIn(email, password);
      navigate("/admin");
    } catch {
      setError("Error Signing in");
      console.log("error sigining in buddy");
    }
    setLoading(false);
  }

  return (
    <>
          <div
        className="container-fluid text-center userHtml themeBlue"
        id="noPadding"
      >
      <div className="outer">
        <UserNav/>
        <Card className="innerFlex">
          <Card.Body className="d-flex align-items-center adminTan">
            <div className="container-fluid">
              <h2 className="text-center">Login</h2>
              {error !== "" && <Alert variant="danger"> {error} </Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    type="password"
                  />
                </Form.Group>
                <div className="text-center">
                  <Button disabled={loading} type="submit" className="mt-4">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  );
}

export default Login;

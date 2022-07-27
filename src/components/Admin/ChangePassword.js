import React, { useRef, useState } from "react";
import { Alert, Card, Form, Button } from "react-bootstrap";
import AdminNav from "./AdminNav";
import { useAuth } from "./AuthContext";

export default function ChangePassword() {
  const newPassword = useRef();
  const newPasswordConfirm = useRef();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const { updatePass } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");
    const newPassVal = newPassword.current.value;
    const newPassConfirmVal = newPasswordConfirm.current.value;
    if (newPassVal !== newPassConfirmVal) {
      setError("Passwords do not match!");
    } else if (newPassVal.length < 6) {
      setError("Passwords must be at least 6 characters");
    } else {
      setError("");
      updatePass(newPassVal)
        .then(() => {
          setSuccess("Password Updated Successfully!");
        })
        .catch((error) => {
          setError(error);
        });
    }
  }

  return (
    <div className="specialOuter">
      <AdminNav />
      <Card className="innerFlex">
        <Card.Body className="d-flex align-items-center">
          <div className="container-fluid">
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <h2 className="text-center">Change Password</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" ref={newPassword} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control type="password" ref={newPasswordConfirm} />
              </Form.Group>
              <div className="text-center mt-4">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

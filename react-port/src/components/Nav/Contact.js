import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="name" placeholder="Please enter Full Name" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" placeholder="Please enter Email Address" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Commments</Form.Label>
        <Form.Control as="textarea" placeholder="Comments" />
      </Form.Group>
      <Button href="mailto:kayla.vangel@comcast.net">Submit</Button>
    </Form>

  );

}

export default Contact






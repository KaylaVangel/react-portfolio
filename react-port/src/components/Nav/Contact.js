import Footer from '../Footer';
//copied from class work//
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact= () => {  
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Commments</Form.Label>
        <Form.Control  as="textarea" placeholder="Comments" />
      </Form.Group>
      <a className="button" href="mailto:kayla.vangel@comcast.net">Submit</a> 
    </Form>
    
  );
  <Footer/>
}

export default Contact
  





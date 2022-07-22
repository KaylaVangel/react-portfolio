import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Nav = ({pages = [], setCurrentPage, currentPage}) => {

    return (
        <Container fluid>
            <Row>
                {pages.map((Page, index) => (
                    <Col key={index}>
                        <span onClick={() => setCurrentPage(Page)}>{(Page.name)}</span>
                    </Col>
                )
                )}
            </Row>
        </Container>

    )
}


export default Nav;
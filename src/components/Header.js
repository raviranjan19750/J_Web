import React from 'react'

import { Container, Navbar, Nav } from 'react-bootstrap'

function Header() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Jain Samaj</Navbar.Brand>

          <Nav >
            <Nav.Link href="/">
              Profile
            </Nav.Link>
            <Nav.Link href="/">
              Logout
            </Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </React.Fragment>

  )
}

export default Header
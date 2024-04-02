import React from "react"
import './App.css'
import { Container, Row, Col, Button } from 'reactstrap'

const Home = () => {
    const logOut = () => {
        localStorage.removeItem('auth-token')
        window.location.href = '/login'
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>Congratulations You have accessed Authorized Page!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Want to <Button type="button" onClick={logOut} color="info">LogOut</Button> ?
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import '../../assets/authentication/LoginForm.scss'

const SignUpView = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const onSubmit = () => {
        setUser({
            email: '',
            username: '',
            password: '',
            confirmPassworld: ''
        })
    }

    return (
        <div className="login-form">
            <img src={logo}
                alt="not available"
                width="35%"
                className="rounded-circle mx-auto d-block" />
            <h2 className="text-center">Sign Up</h2>

            <Form className="p-3">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(e) => setUser({ ...user, username: e.target.value })} value={user.username} type="text" placeholder="Enter username..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} type="email" placeholder="Enter email..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} type="password" placeholder="Password..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} value={user.confirmPassword} type="password" placeholder="Confirm Password..." />
                </Form.Group>

                <div className="content">
                    <Button onClick={ onSubmit } className="m-3 px-3 p-2" variant="dark"> Sign up </Button>
                    <Button className="m-3 px-3 p-2" variant="dark"> Sign up with Google </Button>
                <p> Already have an account? Sign in  <Link to="/login">here</Link> </p>
            </div>
            </Form>
        </div>
    );
}

export default SignUpView;
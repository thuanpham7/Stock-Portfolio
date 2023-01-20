import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import '../../assets/authentication/LoginForm.scss'

const LoginView = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const onSubmit = () => {
        console.log(process.env)
        setUser({
            username: '',
            password: ''
        })
    }

    return (
        <div className="login-form">
            <img src={logo}
                alt="not available"
                width="35%"
                className="rounded-circle mx-auto d-block" />
            <h2 className="text-center">Login</h2>

            <Form className="p-3">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(e) => setUser({ ...user, username: e.target.value })} value={user.username} type="text" placeholder="Enter username..." />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} type="password" placeholder="Password..." />
                </Form.Group>

                <div className="content">
                    <Button onClick={ onSubmit } className="m-3 px-3 p-2" variant="dark"> Login </Button>
                    <Button className="m-3 px-3 p-2" variant="dark"> Login with Google </Button>
                <p> Don't have an account? Sign up  <Link to="/signup">here</Link> </p>
            </div>
            </Form>
        </div>
    );
}

export default LoginView;
import React from "react";
import DivContainer from "../layout/DivContainer";
import Heading from "../layout/Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
	firstName: yup.string().required("Username is required."),
	password: yup.string()
        .required('No password provided.') 
        .min(4, 'Password is too short - should be 4 characters minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

function Login() {
    const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <DivContainer>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Heading title="Please Login" />
                    <Form onSubmit={handleSubmit(onSubmit)} className="form-signin">
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="firstName" placeholder="Enter your username" ref={register} />
                            {errors.firstName && <p>{errors.firstName.message}</p>}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" placeholder="Enter your password" ref={register} />
                            {errors.password && <p>{errors.password.message}</p>}
                        </Form.Group>

                        <Button type="submit">Login</Button>
                    </Form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </DivContainer>
    );
}

export default Login;
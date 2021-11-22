import { useState, Fragment } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const validationSchema = Yup.object({
  full_name: Yup.string().required(
    "Required: Please enter your full name"
  ),
  email: Yup.string()
    .email("Invalid Email address")
    .required("Required: Please enter your email address"),
  password: Yup.string().required(
    "Required: Please enter a password"
  ),
  password2: Yup.string()
    .required("Required: Please retype your password")
    .oneOf(
      [Yup.ref("password"), null],
      "Required: Passwords must match"
    ),
});

const SignUpPage = () => {
  const [signupComplete, setSignupComplete] = useState(false);
  const identity = useIdentityContext();

  if (signupComplete) {
    return (
      <div>
        <h3>Signup complete</h3>
        <p>
          Please check your email for a confirmation message. Click the link to
          complete the signup process.
        </p>
      </div>
    );
  }

  const onSubmit = async (values, { setSubmitting }) => {
    const data = {
      email: values.email,
      password: values.password,
      user_metadata: { full_name: values.full_name },
    };

    try {
      await identity.signup(data);
      setSignupComplete(true);
    } catch (err) {
      alert(`System error: ${err.message}`);
    }

    setSubmitting(false);
  }

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box />
        <h2>Sign Up For an Account</h2>

        <Formik
          initialValues={{
            full_name: "",
            email: "",
            password: "",
            password2: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <label htmlFor="full_name">Full Name</label>
              <TextField
                fullWidth
                name="full_name"
                type="text"
                margin="dense"
                onChange={formik.handleChange}
                value={formik.values.full_name}
                disabled={formik.isSubmitting}
                
              />
              <ErrorMessage name="full_name" />

              <label htmlFor="email">Email Address</label>
              <TextField
                fullWidth
                name="email"
                type="email"
                margin="dense"
                onChange={formik.handleChange}
                value={formik.values.email}
                disabled={formik.isSubmitting}
              />
              <ErrorMessage name="email" />

              <label htmlFor="password">Password</label>
              <TextField
                fullWidth
                name="password"
                type="password"
                margin="dense"
                onChange={formik.handleChange}
                value={formik.values.password}
                disabled={formik.isSubmitting}
              />
              <ErrorMessage name="password" />

              <label htmlFor="password2">Retype Password</label>
              <TextField
                fullWidth
                name="password2"
                type="password"
                margin="dense"
                onChange={formik.handleChange}
                value={formik.values.password2}
                disabled={formik.isSubmitting}
              />
              <ErrorMessage name="password2" />

              <Button
                variant="contained"
                type="submit"
                fullWidth
                margin="dense"
                sx={{marginTop:"1rem"}}
                disabled={formik.isSubmitting}
              >
                Submit
              </Button >
            </Form>
          )}
        </Formik>
      </Container>
    </Fragment>
  );
};
export default SignUpPage;

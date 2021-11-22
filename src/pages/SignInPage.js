import { Fragment } from "react";
import { useNavigate } from "react-router";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const validationSchema=Yup.object({
  email: Yup.string()
    .email("Invalid Email address")
    .required("Required: Please enter your email address"),
  password: Yup.string().required(
    "Required: Please enter a password"
  ),
});

const SignInPage = () => {
  const navigate = useNavigate();
  const identity = useIdentityContext();

  const onSubmit = async (values, { setSubmitting }) => {
    const data = {
      email: values.email,
      password: values.password,
    };

    try {
      await identity.login(data);

      navigate("/");
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
        <h2>Sign In to Your Account</h2>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
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

              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{marginTop:"1rem"}}
                disabled={formik.isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Fragment>
  );
};
export default SignInPage;

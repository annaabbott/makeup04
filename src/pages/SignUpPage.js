import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useIdentityContext } from "react-netlify-identity-gotrue";

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

  return (
    <Formik
      initialValues={{
        full_name: "",
        email: "",
        password: "",
        password2: "",
      }}
      validationSchema={Yup.object({
        full_name: Yup.string().required(
          "Required: Please enter your full name"
        ),
        email: Yup.string()
          .email("Invalid Email address")
          .required("Required: Please enter your email address"),
        password: Yup.string().required("Required: Please enter a password"),
        password2: Yup.string()
          .required("Required: Please retype your password")
          .oneOf([Yup.ref("password"), null], "Required: Passwords must match"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const data = {
          email: values.email,
          password: values.password,
          user_metadata: { full_name: values.full_name },
        };

        try {
          await identity.signup(data);
          setSignupComplete(true);
        } catch (err) {
          alert(`System error: ${err.message}`)
        }

        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form>
          <label htmlFor="full_name">Full Name</label>
          <Field name="full_name" type="text" disabled={formik.isSubmitting} />
          <ErrorMessage name="full_name" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" disabled={formik.isSubmitting} />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            disabled={formik.isSubmitting}
          />
          <ErrorMessage name="password" />

          <label htmlFor="password2">Retype Password</label>
          <Field
            name="password2"
            type="password"
            disabled={formik.isSubmitting}
          />
          <ErrorMessage name="password2" />

          <button type="submit" disabled={formik.isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignUpPage;

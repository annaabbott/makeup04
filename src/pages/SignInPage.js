import { useNavigate } from "react-router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useIdentityContext } from "react-netlify-identity-gotrue";

const SignInPage = () => {
  const navigate = useNavigate();
  const identity = useIdentityContext();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid Email address")
          .required("Required: Please enter your email address"),
        password: Yup.string().required("Required: Please enter a password"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const data = {
          email: values.email,
          password: values.password,
        };

        try {
          await identity.login(data);

          navigate("/");
        } catch (err) {
          alert(`System error: ${err.message}`)
        }

        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form>
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

          <button type="submit" disabled={formik.isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignInPage;

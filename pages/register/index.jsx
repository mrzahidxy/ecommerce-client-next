import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { publicRequest } from "../../services/requestMethod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

const index = () => {
  const RegisterSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Too Short!")
      .max(10, "Too Long!")
      .required("Username Required"),
    email: Yup.string()
      .required("Email Is Required")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter a Valid email"),
    password: Yup.string()
      .required("Password Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "Minimum six characters, at least one uppercase letter, one lowercase letter and one number"
      ),
  });

  const handleSubmit = (values) => {
    console.log(values);
    //axios.post("", values);
    try {
      publicRequest.post("/auth/register", values);
      toast.success("Succesfully Register!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container w-screen h-screen bg-banner flex justify-center items-center">
      <ToastContainer />

      <div className="w-1/3 bg-gray-100 shadow flex flex-col">
        <Formik
          initialValues={{ username: "", password: "", email: "" }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full p-8 space-y-2">
            <h1 className="text-lg align-middle">Register</h1>
            <Field name="username">
              {({ field, form: { touched, errors, isSubmitting } }) => (
                <div>
                  <input
                    {...field}
                    type="text"
                    placeholder="Username"
                    disabled={isSubmitting}
                    className="w-full outline-none rounded-md pl-2 py-2 focus:ring-1 focus:ring-blue-500"
                  />
                  {touched[field.name] && errors[field.name] && (
                    <div className="text-red-600 text-xs whitespace-pre-wrap">
                      {errors[field.name]}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name="email">
              {({ field, form: { touched, errors, isSubmitting } }) => (
                <div>
                  <input
                    {...field}
                    type="text"
                    placeholder="Email"
                    disabled={isSubmitting}
                    className="w-full outline-none rounded-md pl-2 py-2 focus:ring-1 focus:ring-blue-500"
                  />
                  {touched[field.name] && errors[field.name] && (
                    <div className="text-red-600 text-xs whitespace-pre-wrap">
                      {errors[field.name]}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ field, form: { touched, errors, isSubmitting } }) => (
                <div>
                  <input
                    {...field}
                    type="text"
                    placeholder="Password"
                    disabled={isSubmitting}
                    className="w-full outline-none rounded-md pl-2 py-2 focus:ring-1 focus:ring-blue-500"
                  />
                  {touched[field.name] && errors[field.name] && (
                    <div className="text-red-600 text-xs whitespace-pre-wrap">
                      {errors[field.name]}
                    </div>
                  )}
                </div>
              )}
            </Field>

            <button
              type="submit"
              className="bg-blue-500 w-full text-sm text-white p-2 rounded-md hover:bg-blue-400 transition ease-in-out"
            >
              Submit
            </button>
          </Form>
        </Formik>

        <Link href="/login" className="px-8 pb-4 text-blue-500 text-sm">
          Login
        </Link>
      </div>
    </div>
  );
};

index.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default index;

import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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
  const router = useRouter();

  const handleSubmit = async (values) => {
    const status = await signIn("credentials", {
      redirect: false,
      username: values.username,
      password: values.password,
      callbackUrl: "/",
    });

    console.log("Log In :: >>", status);

    if (status.ok) {
      router.push(status.url);
    }
  };

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Too Short!")
      .max(10, "Too Long!")
      .required("Username Required"),
    password: Yup.string()
      .required("Password Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "Minimum six characters, at least one uppercase letter, one lowercase letter and one number"
      ),
  });

  return (
    <div className="container w-screen h-screen bg-banner flex justify-center items-center">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-1/3 shadow p-8 bg-gray-100 space-y-2">
          <h1 className="text-lg align-middle">LOG IN</h1>
          <Field name="username">
            {({ field, form: { touched, errors, isSubmitting } }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  placeholder="username"
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
                  placeholder="password"
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
    </div>
  );
};

index.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default index;

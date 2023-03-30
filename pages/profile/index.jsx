import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

const index = ({ session }) => {
  return (
    <div className="container py-8 font-medium text-3xl capitalize">
      Profile
    </div>
  );
};

export default index;

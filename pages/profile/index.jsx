import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const { data: session, status } = useSession();

  const router = useRouter();
  // const [loading, setLoading] = useState(true);
  // const session = getSession();

  // useEffect(() => {
  //   const securePage = async () => {
  //     const session = await getSession();
  //     if (!session) {
  //       router.push("/login");
  //     } else {
  //       setLoading(false);
  //     }
  //   };

  //   securePage();
  // }, []);
  // if (loading) {
  //   return <h1>Loading</h1>;
  // }

  if (status === "unauthenticated") {
    router.push("/login");
  }
  return (
    <div className="container py-8 font-medium text-3xl capitalize">
      Profile
    </div>
  );
};

export default index;

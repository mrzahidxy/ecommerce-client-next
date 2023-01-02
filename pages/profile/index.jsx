import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const session = getSession();

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    securePage();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container py-8 font-medium text-3xl capitalize">
      Profile
    </div>
  );
};

export default index;

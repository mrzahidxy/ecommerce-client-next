import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function BlockedRoute(Component) {
  return function AuthenticatedComponent(props) {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
      return <p>Loading...</p>;
    }

    if (status === "authenticated") {
      router.push("/");
    }

    return Component.getLayout(<Component {...props} />);

    //return <Component {...props} />;
  };
}

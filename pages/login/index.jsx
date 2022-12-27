import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: e.target.user.value,
      password: e.target.pass.value,
    };

    fetch("https://ecommerce-mern-api.vercel.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        router.push('/')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container w-screen h-screen text-2xl capitalize flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-primary p-10 rounded-sm text-white flex flex-col"
      >
        <label htmlFor="user">First Name</label>
        <input type="text" id="user" name="user" required className="border" />

        <label htmlFor="password">Last Name</label>
        <input
          type="text"
          id="pass"
          name="password"
          required
          className="border"
        />

        <button
          type="submit"
          className="bg-gray-200 text-black mt-3 p-1 rounded-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

index.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default index;

const index = () => {
  return (
    <div className="container py-8 font-medium text-3xl capitalize">Login</div>
  );
};

index.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default index;

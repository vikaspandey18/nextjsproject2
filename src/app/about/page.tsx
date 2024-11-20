import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="container-md p-3">
        <h1>Welcome to About Us Page</h1>
        <p className="mt-3">
          <Link href="/" className="bg-blue-400 p-3 rounded-md">
            Home Page
          </Link>
        </p>
      </div>
    </>
  );
};
export default AboutUs;

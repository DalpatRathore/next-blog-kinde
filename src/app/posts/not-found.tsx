import Image from "next/image";

const NotFound = () => {
  return (
    <div className="relative">
      <Image
        alt=""
        width={500}
        height={250}
        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="h-64 w-full object-cover sm:h-80 lg:h-96"
      />
      <p className="w-full text-gray-900 text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  py-10 px-8 backdrop-blur-xl text-center">
        Post(s) available at the moment!
      </p>
    </div>
  );
};
export default NotFound;

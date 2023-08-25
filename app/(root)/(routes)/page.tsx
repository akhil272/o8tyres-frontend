import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="md:h-[720px] h-[480px] w-full relative">
        <Image
          className="object-cover"
          src="https://img.freepik.com/free-photo/mechanic-changing-tires-car-service_1303-26894.jpg?w=1380&t=st=1692931729~exp=1692932329~hmac=2aac0d26570044e15302ed3ab612ce3f82a780cebd703bf45d98f5f22b7fbf7a"
          alt="home-cover"
          fill={true}
        />
      </div>
    </div>
  );
};

export default HomePage;

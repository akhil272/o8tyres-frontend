import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="py-10 px-4 bg-secondary h-full flex justify-center">
      <div className="w-full xl:w-1/2 ">
        <div>
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
        <div className="py-4">
          <div className="flex justify-center py-4 ">
            <div className="w-1/3 xl:w-1/5">
              <Image
                src="/images/o8tyres-about-us-cover-art.png"
                width={400}
                height={600}
                layout="responsive"
                alt="o8tyres-about-us-cover"
              />
            </div>
          </div>
          <p>
            Welcome to O8Tyres – Your Trusted Tyre Partner. We are an online
            tyre retailer that proudly extends the legacy of DBS Tyres, a name
            synonymous with quality and reliability in the tyre industry. At
            O8Tyres, our mission is to provide top-notch tyres and exceptional
            service to both businesses and individual customers across Kerala
            and beyond.
          </p>
        </div>
        <div className="py-4 flex flex-col space-y-4">
          <h5 className="text-2xl font-bold text-center md:text-left">
            Our Journey
          </h5>
          <div className="lg:flex flex-col lg:flex-row justify-start items-center lg:space-x-4 ">
            <div className="flex relative w-full h-64 md:h-72 xl:h-56 ">
              <Image
                quality={90}
                src="/images/our-journey.jpg"
                fill
                className="rounded-lg object-cover"
                alt="o8tyres-about-us-cover"
              />
            </div>
            <p className="py-4 ">
              With a proud history dating back to 2002, DBS Tyres has been a
              household name in Kerala for tyre solutions. Our dedication to
              excellence and unwavering commitment to customer satisfaction have
              been the cornerstones of our success. Recognizing the changing
              landscape of the automotive industry and the growing demand for
              online shopping, we proudly introduce O8Tyres as our digital
              venture.
            </p>
          </div>
        </div>
        <div className="py-4 flex flex-col space-y-4">
          <h5 className="text-2xl font-bold text-center ">Our Team</h5>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 lg:gap-10">
            <div className="flex relative w-full h-56  ">
              <Image
                src="/images/bibin-profile.jpg"
                fill
                className="rounded-lg object-cover"
                alt="o8tyres-about-us-cover"
              />
            </div>
            <div className="flex relative w-full h-56  ">
              <Image
                src="/images/bibin-profile.jpg"
                fill
                className="rounded-lg object-cover"
                alt="o8tyres-about-us-cover"
              />
            </div>
            <div className="flex relative w-full h-56  ">
              <Image
                src="/images/bibin-profile.jpg"
                fill
                className="rounded-lg object-cover"
                alt="o8tyres-about-us-cover"
              />
            </div>
            <div className="flex relative w-full h-56  ">
              <Image
                src="/images/bibin-profile.jpg"
                fill
                className="rounded-lg object-cover"
                alt="o8tyres-about-us-cover"
              />
            </div>
          </div>
          <p>
            Meet the driving force behind O8Tyres - a team of passionate tyre
            experts who share a deep-rooted love for automobiles and a wealth of
            experience in the tyre industry. Our founders, Bibin George, bring a
            combined experience of over 10 years to the table, making them
            invaluable guides in your tyre-buying journey.
          </p>
        </div>
        <div className="py-4 flex flex-col space-y-4">
          <h5 className="text-2xl font-bold text-center md:text-right">
            Our Commitment
          </h5>
          <div className="lg:flex flex-col lg:flex-row items-center">
            <div className="flex relative w-full h-64 md:h-72 xl:h-56 order-1 lg:order-2">
              <Image
                src="/images/our-commitment.jpg"
                fill
                className="rounded-lg object-cover"
                alt="o8tyres-about-us-cover"
              />
            </div>
            <p className="pt-4 order-2 lg:order-1 ">
              At O8Tyres, we are committed to delivering only the best. Our
              tyres are sourced from trusted manufacturers and undergo quality
              checks to ensure they meet our high standards. We are proud to be
              [certification/accreditation] certified, a testament to our
              unwavering dedication to quality and sustainability.
            </p>
          </div>
        </div>
        <div className="py-4 flex flex-col space-y-4">
          <h5 className="text-2xl font-bold text-center md:text-left">
            Customer Stories
          </h5>
          <p>
            “Good service and friendly staff. I know Aneesh for a very long
            time, tyre change, rotation, balancing and alignment all are done
            with his expertise. He does not suggest anything extra which is not
            good for the vehicle or out pocket. Also a great variety of tyres
            for all type of cars and top up of air also done here. Customer
            waiting area is also clean and tidy.”
          </p>
          <p className="text-center font-semibold">-Vinayak Muraleedharan</p>
        </div>
        <div className="py-4 flex flex-col space-y-4">
          Have questions or need assistance? We are here to help. Feel free to
          reach out to us at hello@o8tyres.com or +9199999999. Our friendly team
          is always ready to assist you with your tyre needs.
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

"use client";
import ContactUsForm from "@/components/form/ContactUsForm";
import { Button } from "@/components/ui/button";
import React from "react";

const ContactPage = () => {
  const onClickCall = () => {
    window.location.href = "tel:+919745222566";
  };
  const onClickWhatsApp = () => {
    window.open("https://wa.me/+919745222566", "_blank");
  };
  const onClickEmail = () => {
    window.location.href = "mailto:hello@o8tyres.com?subject=Contact%20Us";
  };
  return (
    <div className="py-10 px-4 bg-secondary h-full flex justify-center">
      <div className="w-full xl:w-1/2  ">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
        <div className="py-4">
          <p>
            We are here to help and we would love to hear from you. Whether you
            have a question, a comment or just want to chat you can reach out to
            us through our contact form on this page, or by phone or email.
          </p>
        </div>
        <div className="flex py-8 space-x-4">
          <Button onClick={onClickCall} className="w-full">
            Call
          </Button>
          <Button onClick={onClickWhatsApp} className="w-full">
            WhatsApp
          </Button>
          <Button onClick={onClickEmail} className="w-full">
            Email
          </Button>
        </div>
        <div className="bg-white p-8 rounded-lg">
          <div className="w-2/3">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

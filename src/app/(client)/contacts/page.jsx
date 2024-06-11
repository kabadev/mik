import React from "react";

const page = () => {
  return (
    <div>
      <section className="py-5 sm:py-7 bg-primary text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2">Contacts</h2>
        </div>
      </section>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
        {" "}
        <div className="flex flex-col md:flex-row p-4 bg-white md:w-[80%]">
          <div className="md:w-1/2 pr-8">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg mb-4">
              Feel free to contact us with any questions or inquiries:
            </p>
            <p className="text-lg mb-4">Email: info@mikpalmoil.com</p>
            <p className="text-lg mb-4">Phone: +232-76-542-256</p>
            <p className="text-lg mb-4">
              Address: 13B wilkinson road, Freetown, Sierra Leone
            </p>
          </div>
          <div className="md:w-1/2 pl-8">
            <h2 className="text-2xl font-bold mb-4">Social Media</h2>
            <p className="text-lg mb-4">
              Follow us on social media for updates and news:
            </p>
            <p className="text-lg mb-4">Facebook: facebook.com/mikpalmoil</p>
            <p className="text-lg mb-4">Twitter: twitter.com/mikpalmoil</p>
            <p className="text-lg mb-4">Instagram: instagram.com/mikpalmoil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

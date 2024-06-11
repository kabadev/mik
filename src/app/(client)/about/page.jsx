import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="md:flex gap-5 p-3 md:p-20 bg-slate-100">
        <div className="md:w-1/2">
          <Image
            src="/team.png"
            className="rounded-2xl"
            alt="Banner"
            height={1000}
            width={1000}
          />
        </div>
        <div className="md:w-1/2 p-4 rounded-md max-md:mt-4 pb-10 ">
          <div className="mb-4">
            <p className="text-primary">Who we are</p>
            <h2 className="text-2xl font-bold tracking-tight text-text">
              About MIK Palm Oil
            </h2>
          </div>
          <p className="leading-[1.6]">
            ChatGPT MIK Palm Oil is a company established in 2024 by three
            sisters: Mariama, Isatu, and Kadiatu. The company was founded with
            the vision of producing and distributing high-quality palm oil. MIK
            Palm Oil stands out for its unparalleled quality and dedication to
            sustainability. Our palm oil is extracted from the finest palm
            fruits, ensuring a rich, natural flavor that elevates any dish. We
            adhere to strict environmental standards, promoting sustainable
            farming and fair trade practices to support local communities and
            preserve natural habitats.
          </p>
        </div>
      </div>
      <div className="p-3 md:p-20 bg-white">
        <div className=" mx-auto">
          <div className="flex max-md:flex-col gap-5 items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                MIK Palm Oil prides itself on its exceptional quality and
                unwavering commitment to sustainability. Our palm oil is
                meticulously sourced from the choicest palm fruits, guaranteeing
                a premium product with a distinct, natural taste that enhances
                the essence of every culinary creation.
              </p>
              <p className="text-lg mb-4">
                {` Committed to environmental stewardship, we uphold rigorous standards
            that prioritize sustainability at every stage of production. By
            advocating for sustainable farming techniques and fostering fair
            trade practices, we not only bolster local economies but also
            safeguard precious natural ecosystems. Through our steadfast
            dedication to ethical sourcing, we strive to foster a harmonious
            balance between progress and preservation, ensuring that future
            generations can continue to reap the benefits of our planet's
            resources.`}
              </p>
            </div>
            <Image
              src="/image.png"
              className="rounded-2xl md:w-1/2"
              alt="Banner"
              height={1000}
              width={1000}
            />
          </div>

          <div className="md:flex gap-6 mt-10">
            <div className="md:w-1/2 p-4 bg-primary rounded-lg text-white mb-6">
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-lg mb-4">
                At MIK Palm Oil, our mission is to revolutionize the palm oil
                industry by setting the standard for unparalleled quality,
                sustainability, and ethical practices. We are dedicated to
                delivering superior palm oil products while upholding the
                highest standards of environmental responsibility, social
                equity, and economic viability. Through our commitment to
                innovation and collaboration, we aim to inspire positive change
                within the industry and contribute to a more sustainable future
                for our planet and its inhabitants.
              </p>
              <h2 className="text-2xl font-bold mb-2">Our vision</h2>
              <p className="text-lg mb-4">
                Our vision at MIK Palm Oil is to be recognized globally as the
                foremost provider of premium palm oil products renowned for
                their exceptional quality and sustainability. We envision a
                future where palm oil production is synonymous with
                environmental stewardship, social responsibility, and economic
                prosperity. By pioneering innovative solutions and fostering
                partnerships across the supply chain, we aspire to lead the
                transformation towards a more sustainable palm oil industry that
                respects the planet, supports local communities, and ensures the
                well-being of future generations.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">
                Our Commitment to Quality
              </h2>
              <p className="text-lg mb-4">
                {`At MIK Palm Oil, we prioritize quality at every step of the
                production process. Our palm oil is meticulously extracted from
                the finest palm fruits using advanced techniques to ensure
                purity and freshness.`}
              </p>

              <h2 className="text-2xl font-bold mb-2">
                Sustainability at the Core
              </h2>
              <p className="text-lg mb-4">
                We are deeply committed to sustainability. Our palm oil is
                sourced from farms that adhere to strict environmental
                standards, promoting biodiversity and minimizing carbon
                footprint.
              </p>

              <h2 className="text-2xl font-bold mb-2">
                Empowering Communities
              </h2>
              <p className="text-lg mb-4">
                We believe in fair trade principles. By partnering with local
                farmers and communities, we ensure fair wages and support
                economic development initiatives, fostering a brighter future
                for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

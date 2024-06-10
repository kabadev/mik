import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="md:flex gap-5 p-3 md:p-20 bg-slate-100">
      <div className="md:w-1/2">
        <Image
          src="/image.png"
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
          MIK Palm Oil stands out for its unparalleled quality and dedication to
          sustainability. Our palm oil is extracted from the finest palm fruits,
          ensuring a rich, natural flavor that elevates any dish. We adhere to
          strict environmental standards, promoting sustainable farming and fair
          trade practices to support local communities and preserve natural
          habitats.
        </p>
        <div className="mt-[30px] ">
          <Link
            href={"#"}
            className="text px-10 py-3 rounded-3xl bg-primary text-white"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

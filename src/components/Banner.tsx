import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="w-full md:w-1/2 text-center md:text-left">

          <h1 className="text-4xl md:text-5xl font-bold">
            Build Your Ideal
            <br />
            <span className="gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-center md:text-left">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-7">

            <button className="gradient-brand text-white px-5 py-2.5 rounded-md text-sm">
              Explore Technologies
            </button>

            <button className="border border-gray-300 px-5 py-2.5 rounded-md text-sm">
              Learn More
            </button>

          </div>

        </div>

        <div className="w-full md:w-1/2 flex justify-center">

          <img
            src={banner}
            alt="Development Stack"
            className="w-72 md:w-full max-w-md"
          />

        </div>

      </div>
    </section>
  );
};

export default Banner;
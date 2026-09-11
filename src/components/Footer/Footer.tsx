import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-10">
      <div className="max-w-6xl mx-auto px-5 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="text-center md:text-left">

            <img
              src={logo}
              alt="Dev Stack"
              className="w-28 mx-auto md:mx-0"
            />

            <p className="text-sm text-gray-500 mt-4 text-center md:text-left max-w-[500px] mx-auto md:mx-0">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex justify-center md:justify-start gap-3 mt-5 text-sm">
              <a href="#">GitHub</a>
              <span className="md:hidden">•</span>
              <a href="#">Twitter</a>
              <span className="md:hidden">•</span>
              <a href="#">LinkedIn</a>
            </div>

          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold mb-4">
              PRODUCT
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>

          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold mb-4">
              COMPANY
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>

          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold mb-4">
              LEGAL
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>

          </div>

        </div>

        <div className="border-t border-gray-200 mt-8 pt-5 flex justify-center gap-6 text-sm text-gray-500 whitespace-nowrap md:justify-between">

          <p>
            © 2026 Dev Stack. All Rights Reserved
          </p>

          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

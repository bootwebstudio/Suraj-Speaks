import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-full mt-12 text-mainText bg-brandBackground">
      <div className="w-full xl:w-[100%] mx-auto p-6 xl:p-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* About */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Suraj Speaks</h2>
          <p className="w-full md:w-[80%] text-lg text-mainText/75">
            Helping YOU break free from porn addiction. Porn Is Your
            Favorite Poison and it's killing your focus, confidence, and
            future every single day.
          </p>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Links */}
          <div className="flex flex-col gap-2 text-mainText/75">
            <h4 className="text-xl font-semibold mb-2 text-mainText">
              Quick Links
            </h4>
            <a href="#Problems" className="text-lg hover:underline">
              Why You're Struggling
            </a>
            <a href="#Solutions" className="text-lg hover:underline">
              How It Works
            </a>
            <a href="#Value" className="text-lg hover:underline">
              What's Inside
            </a>
            <a href="#FAQs" className="text-lg hover:underline">
              FAQs
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2 text-mainText/75">
            <h4 className="text-xl font-semibold mb-2 text-mainText">
              Company
            </h4>
            <Link to="/help-support" className="text-lg hover:underline">
              Help & Support
            </Link>
            <Link to="/privacy-policies" className="text-lg hover:underline">
              Privacy Policies
            </Link>
            <Link to="/terms-conditions" className="text-lg hover:underline">
              Terms & Conditions
            </Link>
            <Link to="/refund-policies" className="text-lg hover:underline">
              Refund Policies
            </Link>
            <Link to="/shipping-policies" className="text-lg hover:underline">
              Shipping Policies
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 text-mainText/75">
            <h4 className="text-xl font-semibold mb-2 text-mainText">
              Contact
            </h4>
            <a href="mailto:" className="text-lg hover:underline">
              Email Us
            </a>
            <a href="mailto:" className="text-lg hover:underline">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="p-4 text-sm text-center border border-x-0 border-mainText/75">
        © {new Date().getFullYear()} Suraj Speaks. All rights reserved.
      </div>

      {/* MFP Promotion */}
      <div className="p-4 text-center text-mainText/75 bg-brandBackground">
        <p className="text-sm md:text-base">
          This website is powered by{" "}
          <a
            href="https://www.instagram.com/magnetfunnelspro/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-mainText"
          >
            Magnet Funnels Pro
          </a>{" "}
          — client acquistions systems.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

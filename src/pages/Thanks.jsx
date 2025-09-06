import main from "../main";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Assets
import EbookPreview from "../assets/Ebook-Preview.png";

const Thanks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const inviteLink =
    location.state?.inviteLink || localStorage.getItem("inviteLink") || "";
  const DISCOUNT_PRICE = import.meta.env.VITE_DISCOUNT_PRICE;

  const handleDOWNLOAD = () => {
    if (inviteLink.trim()) {
      window.open(inviteLink, "_blank");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col text-mainText bg-mainBackground font-['Space_Grotesk']">
      {/* Infinite Text Scroll */}
      <div
        id="Infinite-Scroll"
        className="w-full p-2 overflow-hidden text-mainText bg-brand"
      >
        <div className="space-x-6 flex whitespace-nowrap animate-scroll">
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
        </div>
      </div>

      {inviteLink ? (
        <div className="w-full h-full p-6 xl:p-12 flex flex-col items-center justify-center gap-6">
          <div className="w-full xl:w-1/2 h-[25vh] sm:h-[35vh] xl:h-auto rounded">
            <img
              src={EbookPreview}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-center">
            Wahoo!
          </h2>
          <p className="w-full md:w-1/2 text-lg md:text-xl text-center">
            You have successfully purchased the ebook. Remember, it's a one-time
            link, so be careful. If you're facing any problem, contact us.
          </p>
          <button
            onClick={handleDOWNLOAD}
            className="w-full md:w-1/2 mt-2 p-4 px-6 md:px-12 text-xl font-semibold text-center rounded text-mainText bg-brand"
          >
            Get Instant Access
          </button>
        </div>
      ) : (
        <div className="w-full h-full p-6 xl:p-12 flex flex-col items-center justify-center gap-6">
          <div className="w-full xl:w-1/2 h-[25vh] sm:h-[35vh] xl:h-auto rounded">
            <img
              src={EbookPreview}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-center">
            Oops!
            <br />
          </h2>
          <p className="w-full md:w-1/2 text-lg md:text-xl text-center">
            Looks like you didn't puschased the ebook. Click the link below to
            purchase the ebook, if you're facing any problem, contact us.
          </p>
          <button
            onClick={handleDOWNLOAD}
            className="w-full md:w-1/2 mt-2 p-4 px-6 md:px-12 text-xl font-semibold text-center rounded text-mainText bg-brand"
          >
            Get Instant Access for ₹{DISCOUNT_PRICE}
          </button>
        </div>
      )}
    </div>
  );
};

export default Thanks;

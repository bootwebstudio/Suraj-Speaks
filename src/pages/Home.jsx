import main from "../main";

import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

// Icons
import { RiAddLargeLine } from "react-icons/ri";

// Assets
import EbookCover from "../assets/Ebook-Cover.png";
import EbookPreview from "../assets/Ebook-Preview.png";

// Components
import Footer from "../components/Footer";

const problems = [
  "Your brain keeps craving fake pleasure while real life feels boring.",
  "Every relapse leaves you weaker, guilty, and afraid to face people.",
  "Porn rewires your brain, making it impossible to study, work, or stay disciplined.",
  "Instead of solving problems, you run to screens for relief and stay stuck.",
];

const solutions = [
  "The e-book shows to break free from cheap dopamine and build real control.",
  "Learn how to stop hiding in shame and start living boldly again.",
  "Practical steps inside the e-book to regain clarity, discipline, and focus.",
  "Discover the truth beyond fake pleasure and unlock a life with meaning.",
];

const valueStack = [
  {
    name: "Main e-book (Value ₹499)",
    brief: "6 powerful chapters to reset your mind, purpose & habits.",
  },
  {
    name: "7-Day Dopamine Detox (₹299)",
    brief: "Simple plan to escape fake pleasure traps.",
  },
  {
    name: "Cheat Sheet PDF (Value ₹199)",
    brief: "Stay accountable & build permanent change.",
  },
  {
    name: "Rank System PDF (₹399)",
    brief: "Earn levels as you follow do's & don'ts of real Brahmacharya",
  },
  {
    name: "7-Day Money Back Guarantee",
    brief:
      "If you don't find the content valuable, you get 100% of your money back.",
  },
];

const testimonials = [
  {
    name: "Rohit, 19",
    review:
      "I tried quitting so many times, but this ebook finally made me understand WHY I was stuck. Now I'm on day 27 clean.",
  },
  {
    name: "Aditya, 22",
    review:
      "The dopamine detox plan was a game changer. I feel more energy and focus in college than ever before.",
  },
  {
    name: "Karan, 17",
    review:
      "Bro, this hit me hard. It felt like the author was talking directly to me. I finally feel in control.",
  },
  {
    name: "Manish, 24",
    review:
      "I used to waste hours daily. After following the tracker, I cut down my screen time and actually started working on my goals.",
  },
];

const faqs = [
  {
    question: "Will this help me quit porn and masturbation?",
    answer:
      "Yes. This ebook shows why you're addicted, rewires your brain, and gives step-by-step actions to quit for good — if you actually follow it.",
  },
  {
    question: "Is this just about motivation or discipline?",
    answer:
      "No. Motivation fades. This teaches how your brain works, dopamine traps, real Brahmacharya, and practical daily actions to win.",
  },
  {
    question: "How fast will I see change?",
    answer:
      "The 7-day dopamine detox starts your reset immediately. Real transformation comes as you track 100 days and apply the system consistently.",
  },
  {
    question: "I've failed multiple times before. Will this work?",
    answer:
      "Yes, if you follow the system. Most failures are from ignoring the real cause — this book hits the root: brain rewiring + mindset + habits.",
  },
  {
    question: "Do I need extra tools or courses?",
    answer:
      "No. Everything is inside: the ebook, 7-day cheat sheet, 100-day tracker, and rank system. Follow them — nothing else needed.",
  },
  {
    question: "What if I don't find it useful?",
    answer:
      "Read it for 7 days. If it gives no value, email us and get a full refund.",
  },
];

const Home = () => {
  const ORIGINAL_PRICE = import.meta.env.VITE_ORIGINAL_PRICE;
  const DISCOUNT_PRICE = import.meta.env.VITE_DISCOUNT_PRICE;
  const targetDate = new Date(import.meta.env.VITE_TARGET_DATE).getTime();

  const [openIndex, setOpenIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0)
      return { DAYS: 0, HOURS: 0, MINUTES: 0, secondsSECONDS: 0 };

    return {
      DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
      HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
      MINUTES: Math.floor((difference / 1000 / 60) % 60),
      SECONDS: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full text-mainText bg-mainBackground font-['Space_Grotesk']">
      {/* Infinite Text Scroll */}
      <div id="Infinite-Scroll" className="w-full p-2 overflow-hidden bg-brand">
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
      {/* Hero Section */}
      <div
        id="Home"
        className="w-full h-full p-6 xl:p-12 flex flex-col xl:flex-row gap-6 xl:gap-12 items-stretch"
      >
        <div className="w-full xl:w-1/2 h-[25vh] sm:h-[35vh] xl:h-auto rounded">
          <img
            src={EbookPreview}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full xl:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl md:text-4xl font-black text-center xl:text-left">
            Porn Is Your Favorite Poison — And It's Killing Your Confidence
            Everyday
          </h2>
          <p className="text-lg md:text-xl text-center xl:text-left">
            Every night you say “bas aaj last time”.
            <br />
            But the next day, it's the same loop — guilt, weakness, and zero
            control.
            <br />
            This addiction is not giving you freedom, it's stealing your energy,
            focus, and confidence.
          </p>
          <p className="text-lg md:text-xl text-center xl:text-left font-semibold">
            Help over 100+ young people quit their addiction.
          </p>
          <Link
            to="/checkout"
            className="w-full xl:w-fit p-4 px-6 text-xl font-semibold rounded bg-brand"
          >
            Get Instant Access for ₹{DISCOUNT_PRICE}
          </Link>
        </div>
      </div>
      {/* Problems Section */}
      <div
        id="Problems"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          You Know It's Poison — So Why Can't You Quit?
        </h2>
        <p className="w-full md:w-[80%] xl:w-1/2 text-lg md:text-xl text-center">
          This isn't just a habit, it's a dopamine trap. It rewires your brain
          for instant pleasure and leaves you with guilt, zero focus, and no
          control.
        </p>
        {/* Problems */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="w-full p-6 flex gap-6 rounded bg-brandBackground"
            >
              <h2 className="text-2xl md:text-4xl font-black">#{index + 1}</h2>
              <p className="text-lg md:text-xl">{problem}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Solutions Section */}
      <div
        id="Solutions"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          Every Poison Has a Cure — Here's Yours
        </h2>
        <p className="w-full md:w-[80%] xl:w-1/2 text-lg md:text-xl text-center">
          Your brain doesn't need more dopamine hits — it needs rewiring. With
          the right mindset and clarity, you can take back control.
        </p>
        {/* Solutions */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="w-full p-6 flex gap-6 rounded bg-brandBackground"
            >
              <h2 className="text-2xl md:text-4xl font-black">#{index + 1}</h2>
              <p className="text-lg md:text-xl">{solution}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Value Stack Section */}
      <div
        id="Value"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          What You'll Get Inside Your Favorite Poison
        </h2>
        <div className="w-full h-full flex flex-col xl:flex-row gap-6 xl:gap-12 items-stretch">
          {/* Image */}
          <div className="w-full xl:w-1/2 h-[25vh] sm:h-[35vh] xl:h-auto rounded">
            <img
              src={EbookPreview}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* Value Stack */}
          <div className="w-full xl:w-1/2 flex flex-col gap-6">
            {/* Values */}
            {valueStack.map((value, index) => (
              <div key={index} className="space-x-2">
                <span className="text-lg md:text-xl font-semibold">
                  {value.name}:
                </span>
                <span className="text-lg md:text-xl">{value.brief}</span>
              </div>
            ))}
            {/* Prices */}
            <div className="space-x-2">
              <span className="text-lg md:text-xl font-semibold">
                Total Price:
              </span>
              <span className="text-lg md:text-xl font-semibold line-through">
                ₹{ORIGINAL_PRICE}
              </span>
              <span className="text-lg md:text-xl font-semibold">
                ₹{DISCOUNT_PRICE}
              </span>
              <span className="text-lg md:text-xl font-semibold text-brand">
                (
                {Math.round(
                  ((ORIGINAL_PRICE - DISCOUNT_PRICE) / ORIGINAL_PRICE) * 100
                )}
                % OFF)
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div
        id="Testimonials"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          Proof That This Works
        </h2>
        <p className="w-full md:w-[80%] xl:w-1/2 text-lg md:text-xl text-center">
          If you're wondering whether this ebook can really change anything…
          read what they have to say.
        </p>
        {/* Testimonials */}
        <div className="w-full h-auto mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full p-6 flex gap-6 rounded bg-brandBackground"
            >
              <h2 className="text-2xl md:text-4xl font-black">#{index + 1}</h2>
              <div className="flex flex-col gap-2">
                <p className="text-lg md:text-xl">{testimonial.review}</p>
                <p className="text-lg md:text-xl font-semibold">
                  —{testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Guarantee Section */}
      <div
        id="Guarantee"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          If It's Useless, You Get Your Money Back
        </h2>
        <p className="w-full md:[75%] xl:w-1/2 text-lg md:text-xl text-center">
          Try the ebook risk-free for 7 days. If you don't feel it's worth your
          time and money, just email us — we'll return every rupee.
        </p>
        {/* CTA */}
        <div className="w-full h-full flex flex-col xl:flex-row gap-6 xl:gap-12 items-stretch">
          {/* Image */}
          <div className="w-full xl:w-1/2 h-[25vh] sm:h-[35vh] xl:h-full rounded">
            <img
              src={EbookPreview}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* Offer */}
          <div className="w-full xl:w-1/2 p-6 flex flex-col gap-6 rounded bg-brandBackground">
            <div className="w-full flex gap-6">
              {[
                { label: "DAY", value: timeLeft.DAYS },
                { label: "HOUR", value: timeLeft.HOURS },
                { label: "MIN", value: timeLeft.MINUTES },
                { label: "SEC", value: timeLeft.SECONDS },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-1/4 min-w-0 flex flex-col items-center gap-2 flex-1"
                >
                  <span className="w-full p-6 px-0 text-2xl md:text-4xl font-semibold text-center rounded text-brandBackground bg-white">
                    {item.value}
                  </span>
                  <span className="text-xl md:text-2xl font-semibold text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <Link
              to="/checkout"
              className="w-full p-4 px-6 text-xl font-semibold text-center rounded text-mainText bg-brand"
            >
              Get Instant Access for ₹{DISCOUNT_PRICE}
            </Link>
            <p className="text-lg md:text-xl text-center font-semibold">
              This launch price of ₹{DISCOUNT_PRICE} is strictly for the first
              100 buyers after that, it goes to ₹499.
            </p>
            <motion.div className="text-center">
              <motion.span
                className="text-lg md:text-xl font-semibold"
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                Only 100 ebooks Left at this price — Hurry up!
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
      {/* FAQs Section */}
      <div
        id="FAQs"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          Questions You're Too Afraid to Ask — Answered
        </h2>
        <p className="w-full md:[75%] xl:w-1/2 text-lg md:text-xl text-center">
          Every question you've been holding back, we've already answered for
          you right here.
        </p>
        {/* FAQs */}
        <div className="w-full xl:w-[60%] mt-2 flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded bg-brandBackground">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-6 p-4 px-6 text-left text-lg md:text-xl font-medium"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 225 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <RiAddLargeLine size="16px" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 px-6 pt-0 md:text-lg text-mainText/75">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      {/* Free Trial Section */}
      <div
        id="Trial"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          See The Proof Yourself
        </h2>
        <p className="w-full md:w-[80%] xl:w-1/2 text-lg md:text-xl text-center">
          Get the first chapter 100% FREE and test-drive the process risk-free.
          Inside, you'll uncover why you're stuck in this loop.
        </p>
        <div className="w-full md:w-1/2 xl:w-[20%] h-full rounded">
          <img src={EbookCover} alt="" className="w-full h-full object-cover" />
        </div>
        <button className="w-full md:w-1/2 xl:w-fit p-4 px-6 xl:px-12 text-xl font-semibold space-x-2 rounded text-mainText bg-brand">
          Download Chapter 1 Free
        </button>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;

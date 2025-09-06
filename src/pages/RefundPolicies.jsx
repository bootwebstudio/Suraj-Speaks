import main from "../main";

// Components
import Footer from "../components/Footer";

const RefundPolicies = () => {
  return (
    <div className="w-full min-h-screen flex flex-col text-mainText bg-mainBackground font-['Space_Grotesk']">
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

      {/* Content */}
      <div className="w-full h-full p-6 xl:p-12 xl:px-80 flex flex-col gap-6">
        <h2 className="text-2xl md:text-4xl font-black text-center underline">
          REFUND POLICIES
        </h2>

        <p className="text-lg md:text-xl">
          Our goal is to provide you with a powerful ebook that delivers results
          when followed exactly as instructed. Since this is a digital product,
          we generally <strong>do not offer refunds</strong>.
        </p>

        <h2 className="text-xl md:text-2xl font-black">
          When You Can Request a Refund:
        </h2>
        <p className="text-lg md:text-xl">
          If you go through the ebook, apply what's inside, and still feel like
          it
          <strong>didn't deliver real value</strong>, we don't want your money.
          Here's how to get your refund:
        </p>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>
            Email us at <strong>{main.email}</strong>.
          </li>
          <li>
            Share a quick proof (tracker, notes, or screenshots) that you
            actually applied the steps.
          </li>
          <li>
            Once we verify it, you'll get{" "}
            <strong>100% of your money back</strong>
            straight to your original payment method.
          </li>
        </ul>
        <p className="text-lg md:text-xl mt-4">
          Simple deal: If you put in the effort and it doesn't work, you don't
          pay. If you don't even try, please don't ask for a refund.
        </p>

        <h2 className="text-xl md:text-2xl font-black">
          When Refunds Will NOT Be Given:
        </h2>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>
            If you only “read” the ebook but did not actually apply the steps.
          </li>
          <li>If you simply change your mind after purchasing.</li>
          <li>
            If you request a refund without showing proof of consistent
            implementation.
          </li>
          <li>
            For minor technical issues (we'll re-send the file/link instead).
          </li>
          <li>
            For duplicate payments (a separate refund process is already in
            place).
          </li>
        </ul>
        <p className="text-lg md:text-xl mt-4">
          Reading is not enough. Results only come from action. Refunds are
          for those who <strong>tried and applied</strong>, not for those who
          just consumed the content and quit.
        </p>

        <p className="mt-2 text-sm text-text-mainText/75">
          *Refund approval is subject to verification. We are committed to
          fairness but also need to prevent misuse of this policy.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RefundPolicies;

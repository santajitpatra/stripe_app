import { loadStripe } from "@stripe/stripe-js";

export async function Checkout({ lineItems }) {
  let streipepromise = null;

  let getStripe = () => {
    if (!streipepromise) {
      streipepromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      );
    }
    return streipepromise;
  };

  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}

export default Checkout;

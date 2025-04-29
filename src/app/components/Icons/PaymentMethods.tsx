import { Visa, MasterCard, Paypal, ApplePay, GooglePay } from "./index";

function PaymentMethods() {
  return (
    <>
      <Visa />
      <MasterCard />
      <Paypal />
      <ApplePay />
      <GooglePay />
    </>
  );
}

export default PaymentMethods;

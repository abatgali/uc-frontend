import React from "react";

export default function Donate() {
  return (
    <>
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>

      <stripe-buy-button
        buy-button-id="buy_btn_1O0pL5AkvwHnCGKIvpSKsIvN"
        publishable-key="pk_test_51NzC35AkvwHnCGKIqMzjuLyfHnvmF8MdzPu19KHz9fURueaSAHtGFL9FxD2XHQUigEml8hdb3tEUXpbiXsQQGJQF00S0SiKlRh"
      ></stripe-buy-button>
    </>
  );
}

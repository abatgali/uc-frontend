import { oswald } from "../pages/_app";

export default function BoardLogin() {
  return (
    <>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <img
              className="mx-auto h-10 w-auto text-center"
              src="https://storage.googleapis.com/uci-public/Branding/icon%20only/white%20icon/3x/UCI%20white%20icon%403x.png"
              alt="United Chin International Ltd"
            />
            <h2
              className={`mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white ${oswald.className}`}
            >
              Board Member Portal
            </h2>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div className="relative -space-y-px  shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10  ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-950 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-950 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-white focus:ring-indigo-600"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                    Remember me
                  </label> */}
              </div>

              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-gray-200 hover:text-gray-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="text-center text-sm leading-6 text-gray-800">
            Want to join our board?{" "}
            <a
              href="/contact"
              className="font-semibold text-white hover:text-gray-500"
            >
              Contact Us
            </a>
          </p>
          <div className="w-auto flex items-center justify-center">
            <script async src="https://js.stripe.com/v3/buy-button.js"></script>

            <stripe-buy-button
              buy-button-id="buy_btn_1O0pL5AkvwHnCGKIvpSKsIvN"
              publishable-key="pk_test_51NzC35AkvwHnCGKIqMzjuLyfHnvmF8MdzPu19KHz9fURueaSAHtGFL9FxD2XHQUigEml8hdb3tEUXpbiXsQQGJQF00S0SiKlRh"
            ></stripe-buy-button>
          </div>
        </div>
      </div>
    </>
  );
}

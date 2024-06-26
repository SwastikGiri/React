import React from 'react'
import { formlogo } from '../../public/images/image'

function Signin() {
  return (
    <section>
  <div class="grid grid-cols-1 lg:grid-cols-2 h-screen">
    <div class="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
      <div class="absolute inset-0">
        <img
          class="h-full w-full rounded-md object-cover object-top"
          src={formlogo}
          alt=""
        />
      </div>
    </div>
    <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 class="text-3xl font-semibold leading-tight text-blue-800 sm:text-4xl">
          Experience the Future Tech
        </h2>
        <h6 className='text-sm text-gray-500'>Sign In to get into Zairzest</h6>
        <form action="#" method="POST" class="mt-8">
          <div class="space-y-5">
            <div>
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label for="" class="text-base font-medium text-gray-900">
                  {" "}
                  Password{" "}
                </label>
                <a
                  href="#"
                  title=""
                  class="text-sm font-semibold text-pink-500 hover:underline"
                >
                  {" "}
                  Forgot password?{" "}
                </a>
              </div>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <p class="mt-2 text-sm text-gray-600">
              Not a member yet?{" "}
              <a
                href="#"
                title=""
                class="font-semibold text-pink-500 transition-all duration-200 hover:underline"
              >
                Sign up
              </a>
            </p>
            <div>
              <button
                type="button"
                class="inline-flex w-full items-center justify-center rounded-md bg-blue-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Login{" "}
              </button>
            </div>
          </div>
        </form>
        <div class="mt-3 space-y-3">
          <button
            type="button"
            class="relative inline-flex w-full items-center justify-center rounded-md border-2  border-blue-800 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-200 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span class="mr-2 inline-block">
              <svg
                class="h-6 w-6 text-rose-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
              </svg>
            </span>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Signin
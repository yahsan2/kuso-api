import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type Item = {
  title: string;
  description: string;
  createdAt: string;
  url: string;
};
type IndexData = {
  items: Item[];
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async (): Promise<IndexData> => {
  const res = await fetch("https://api.sssapi.app/wAR1fWuTyRyQJxLPzpqQf");

  const data = {
    items: await res.json(),
  };

  // https://remix.run/api/remix#json
  return data;
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let { items } = useLoaderData<IndexData>();

  return (
    <>
      <section className="relative py-20">
        <img
          className="hidden lg:block absolute top-0 left-0 mt-16 z-10"
          src="https://shuffle.dev/zeus-assets/icons/dots/blue-dot-left-bars.svg"
          alt=""
          data-config-id="auto-img-1"
        />
        <img
          className="hidden lg:block absolute bottom-0 right-0 mb-16"
          src="https://shuffle.dev/zeus-assets/icons/dots/yellow-dot-right-shield.svg"
          alt=""
          data-config-id="auto-img-2"
        />
        <div className="absolute top-0 left-0 lg:bottom-0 h-128 lg:h-auto w-full lg:w-8/12 bg-gray-50" />
        <div className="relative container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <h2
                  className="mb-10 text-4xl font-semibold font-heading"
                  data-config-id="header"
                >
                  Kuso API
                </h2>
                <p className="text-xl text-gray-500" data-config-id="desc">
                  This is a very useless API at any time and in any scene. Using
                  this API doesn't change anything at all in your life .
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="lg:max-w-md p-6 lg:px-10 lg:py-12 bg-white text-center border rounded-xl">
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSdz5yYrR6vmUeUC_kUg7OmssOCVfxzsS3__GJ6gdWRrWsiL-w/viewform"
                  target="blank"
                >
                  <span
                    className="inline-block mb-4 text-xs text-blue-400 font-semibold"
                    data-config-id="caption"
                  >
                    register
                  </span>
                  <h3
                    className="mb-12 text-3xl font-semibold font-heading"
                    data-config-id="form-header"
                  >
                    Register your "Kuso" data
                  </h3>
                  <div className="relative flex flex-wrap mb-6">
                    <input
                      className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                      name="entry.1359096461"
                      type="text"
                      placeholder="にゃーん"
                    />
                    <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                      Title
                    </span>
                  </div>
                  <div className="relative flex flex-wrap mb-6">
                    <input
                      className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                      name="entry.1571918664"
                      placeholder="にゃーん"
                      type="text"
                    />
                    <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                      Description
                    </span>
                  </div>
                  <div className="relative flex flex-wrap mb-6">
                    <input
                      className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                      type="url"
                      name="entry.860066518"
                      placeholder="クソアプリのURLでも入れてください :D"
                    />
                    <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                      url
                    </span>
                  </div>
                  <label className="inline-flex mb-10 text-left">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="terms"
                      defaultValue={1}
                    />
                    <span
                      className="-mt-1 inline-block text-sm text-gray-500"
                      data-config-id="terms"
                    >
                      Please check your data is kuso.
                    </span>
                  </label>
                  <button
                    className="w-full inline-block py-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
                    data-config-id="primary-action"
                  >
                    Register
                  </button>
                  <p className="text-xs text-gray-600 mt-2">
                    入力内容を引き継いで Google Form に飛びます。
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20">
        <img
          className="hidden lg:block absolute top-0 left-0 mt-20"
          src="https://shuffle.dev/zeus-assets/icons/dots/blue-dot-left-bars.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute top-0 right-0 mt-52"
          src="https://shuffle.dev/zeus-assets/icons/dots/yellow-dot-right-shield.svg"
          alt=""
        />
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <span className="text-xs text-blue-400 font-semibold">
              Why do you choose kuso api?
            </span>
            <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
              This is an amazing api because it's made with remixjs!
              <br />I just wanted to create app based on remix :D
            </h2>
          </div>
          <div className="max-w-2xl mx-auto pt-20 mb-10 text-center">
            <span className="text-xs text-blue-400 font-semibold">
              API sample
            </span>
          </div>
          <div className="flex flex-wrap -mx-2 -mb-12 lg:-mb-16">
            {items.reverse().map((item) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-12 lg:mb-16">
                <div className="border border-red-200 px-4 py-4 rounded-lg">
                  <span className="inline-block mb-4 text-xs text-gray-500">
                    {item.createdAt}
                  </span>
                  <h2 className="mb-4 text-3xl font-semibold font-heading">
                    {item.title}
                  </h2>
                  <p className="mb-4 lg:mb-8 text-base text-gray-500">
                    {item.description}
                  </p>
                  {item.url && (
                    <a
                      className="text-lg font-medium text-red-500 underline hover:no-underline"
                      href={item.url}
                      target="_blank"
                    >
                      Read more
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-20">
        <img
          className="hidden lg:block absolute top-0 left-0 mt-64"
          src="https://shuffle.dev/zeus-assets/icons/dots/blue-dot-left-bars.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute top-0 right-0 mt-40"
          src="https://shuffle.dev/zeus-assets/icons/dots/yellow-dot-right-shield.svg"
          alt=""
        />
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <span className="text-xs text-blue-400 font-semibold">Price</span>
            <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
              This is an amazing api because it's made with remixjs!
              <br />I just wanted to create app based on remix :D
            </h2>
            <div className="max-w-max mx-auto p-1 bg-gray-50 rounded">
              <button className="px-10 py-4 bg-white rounded text-sm font-semibold leading-normal">
                Monthly
              </button>
              <button className="px-10 py-4 text-sm font-semibold text-gray-500 hover:text-gray-900 leading-normal">
                Yearly
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
              <div className="pt-12 pb-8 px-8 border rounded-xl lg:text-center">
                <h3 className="mb-6 font-medium text-gray-500">Starter</h3>
                <div className="flex lg:justify-center mb-8">
                  <span className="self-start inline-block mr-1 text-xl font-semibold text-gray-500">
                    $
                  </span>
                  <p className="self-end text-5xl font-semibold font-heading">
                    3499,99
                  </p>
                </div>
                <ul className="mb-6 text-left">
                  <li className="flex items-center py-4 border-b">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Complete documentation</p>
                  </li>
                  <li className="flex items-center py-4 border-b">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Working materials in Figma</p>
                  </li>
                  <li className="flex items-center py-4 border-b">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">100GB cloud passtion</p>
                  </li>
                  <li className="flex items-center py-4 mb-8">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">50000 team members</p>
                  </li>
                </ul>
                <a
                  className="block py-4 text-sm text-center text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
                  href=""
                >
                  Coming soon
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
              <div className="pt-12 pb-8 px-8 bg-red-400 rounded-xl lg:text-center">
                <h3 className="mb-6 font-medium text-red-300">Pro</h3>
                <div className="flex lg:justify-center mb-8">
                  <span className="self-start inline-block mr-1 text-xl font-semibold text-red-300">
                    $
                  </span>
                  <p className="self-end text-5xl font-semibold text-white">
                    6599,99
                  </p>
                </div>
                <ul className="mb-6 text-left">
                  <li className="flex items-center py-4 border-b border-red-400">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium text-white">
                      Complete documentation
                    </p>
                  </li>
                  <li className="flex items-center py-4 border-b border-red-400">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium text-white">
                      Working materials in Figma
                    </p>
                  </li>
                  <li className="flex items-center py-4 border-b border-red-400">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium text-white">
                      100GB cloud storage
                    </p>
                  </li>
                  <li className="flex items-center py-4 border-b border-red-400">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium text-white">500 team members</p>
                  </li>
                  <li className="flex items-center py-4 mb-8">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium text-white">Premium support</p>
                  </li>
                </ul>
                <button className="inline-block py-4 w-full text-sm text-center font-medium leading-normal text-white rounded bg-blue-400 hover:bg-blue-500 transition duration-200">
                  Coming soon
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
              <div className="pt-12 pb-8 px-8 border rounded-xl lg:text-center">
                <h3 className="mb-6 font-medium text-gray-500">Premium</h3>
                <div className="flex lg:justify-center mb-8">
                  <span className="self-start inline-block mr-1 text-xl font-semibold text-gray-500">
                    $
                  </span>
                  <p className="self-end text-5xl font-semibold font-heading">
                    9999,99
                  </p>
                </div>
                <ul className="mb-6 text-left -mx-8">
                  <li className="flex items-center py-4 pl-8 border-b">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Complete documentation</p>
                  </li>
                  <li className="flex items-center py-4 pl-8 border-b">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Working materials in Figma</p>
                  </li>
                  <li className="flex items-center py-4 pl-8 border-b">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">100GB cloud storage</p>
                  </li>
                  <li className="flex items-center py-4 mb-8 pl-8">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">500 team members</p>
                  </li>
                </ul>
                <a
                  className="inline-block py-4 w-full text-sm text-center font-medium leading-normal text-white rounded bg-red-400 hover:bg-red-300 transition duration-200"
                  href=""
                >
                  Coming soon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20">
        <img
          className="hidden lg:block absolute top-0 right-0 mt-40"
          src="https://shuffle.dev/zeus-assets/icons/dots/yellow-dot-right-shield.svg"
          alt=""
        />
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <span className="text-xs text-blue-400 font-semibold"> Docs</span>
            <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
              This API is created by using SSSAPI.
              <br />
              Please check{" "}
              <a
                href="https://sssapi.app/"
                target="_blank"
                className="bg-red-400  hover:bg-red-300"
              >
                SSSAPI site.
              </a>
            </h2>
          </div>
          <div className="">
            <p className="text-xs">
              iframe で
              <a href="https://console.sssapi.app/tools/testRun?u=https%3A%2F%2Fapi.sssapi.app%2FwAR1fWuTyRyQJxLPzpqQf">
                SSSAPI のページ
              </a>
              埋め込んでいます
            </p>
            <iframe
              src="https://console.sssapi.app/tools/testRun?u=https%3A%2F%2Fapi.sssapi.app%2FwAR1fWuTyRyQJxLPzpqQf"
              frameBorder="0"
              width="100%"
              height="1500"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

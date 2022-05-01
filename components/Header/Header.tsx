import Image from "next/Image";

function Header() {
  return (
    <section className="relative pb-20">
      <div className="hidden lg:block lg:absolute top-0 left-0 mt-32">
        <Image
          src="/icons/dots/blue-dot-left-bars.svg"
          alt=""
          width="200%"
          height="200%"
          objectFit="contain"
        />
      </div>

      <div className="hidden lg:block lg:absolute bottom-0 right-0 mt-20">
        <Image
          src="/icons/dots/yellow-dot-right.svg"
          alt=""
          width="200%"
          height="200%"
          objectFit="contain"
        />
      </div>
      <div className="hidden lg:hidden absolute bottom-0 left-0 -mb-20">
        <Image
          src="/icons/dots/blue-dot-left-bars.svg"
          alt=""
          width="200%"
          height="200%"
          objectFit="contain"
        />
      </div>
      <div className="relative container pt-12 px-4 mx-auto text-center">
        <span className="text-blue-400 font-semibold">
          What&apos;s new at Shuffle
        </span>
        <h2 className="mt-8 mb-8 lg:mb-12 text-4xl lg:text-6xl font-semibold">
          Take care of your performance every day.
        </h2>
        <p className="max-w-3xl mx-auto mb-8 lg:mb-12 text-xl text-gray-500">
          Build a well-presented brand that everyone will love. Take care to
          develop resources continually and integrity them with previous
          projects.
        </p>
        <a
          className="inline-block w-full md:w-auto mb-2 md:mb-0 px-8 py-4 mr-4 text-sm font-medium leading-normal bg-red-400 hover:bg-red-300 text-white rounded transition duration-200"
          href="#"
        >
          Track your performance
        </a>
      </div>
    </section>
  );
}

export default Header;

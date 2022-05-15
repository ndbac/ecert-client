/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

function Postcard() {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-3">
      <div className="p-6 border rounded-xl">
        <div className="relative h-52 mb-6">
          <span className="absolute top-0 right-0 mt-4 mr-4 text-xs text-white px-2 py-1 font-semibold bg-gray-600 bg-opacity-50 rounded-md uppercase">
            Development
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
            alt=""
          />
        </div>
        <span className="inline-block mb-4 text-xs text-white">
          10 jun 2020 19:40
        </span>
        <Link href="/post/postId" passHref>
          <h2 className="text-white mb-4 text-2xl font-semibold font-heading cursor-pointer">
            Lorem ipsum dolor sit amet consectutar
          </h2>
        </Link>
        <p className="mb-4 text-white leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.
        </p>
      </div>
    </div>
  )
}

export default Postcard

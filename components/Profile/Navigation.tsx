import Link from "next/link"

const Navigation = () => {
    return(
        <div className="w-full flex text-white bg-black border-t border-b border-white font-medium">
            <div className="w-full py-2 text-center "><Link href="/profiledetail">View Profile</Link></div>
            <div className="w-full py-2 text-center "><Link href="/profile">Posts</Link></div>
        </div>
    )
}

export default Navigation;
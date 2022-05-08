const ProfileDetail = () => {
    return (
        <div className="mt-10 w-11/12  sm:w-2/3 md:w-1/2 mx-auto text-white sm:text-center border rounded flex flex-wrap">    
            <div className="w-full flex">
                <div className="w-1/2 py-5 font-light">
                    <div className="w-full p-5">Username:</div>
                    <div className="w-full p-5">First Name:</div>
                    <div className="w-full p-5">Last Name:</div>
                    <div className="w-full p-5">Email:</div>
                    <div className="w-full p-5">Joined since:</div>
                </div>
                <div className="w-1/2 py-5">
                    <div className="w-full p-5">User</div>
                    <div className="w-full p-5">String</div>
                    <div className="w-full p-5">String</div>
                    <div className="w-full p-5">string@gmail.co</div>
                    <div className="w-full p-5">2022-04-29</div>
                </div>
            </div>
        </div> 
    )
}

export default ProfileDetail
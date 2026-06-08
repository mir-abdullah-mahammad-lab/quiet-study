import Image from "next/image";


const Navbar = () => {
    return (
        <div className="navbar bg-gray-50 shadow-sm">
            <div className="flex-1">
                <Image
                src='https://i.ibb.co.com/bjZngS5p/Chat-GPT-Image-Jun-8-2026-08-01-12-PM.png'
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full"></Image>
            </div>
            <div className="flex-none">
                
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {/* <Image
                            src='NotAVAILABLE'
                            alt="picture Loading"
                            >

                            </Image> */}
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
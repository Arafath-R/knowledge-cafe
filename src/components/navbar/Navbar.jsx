import profileImg from '../../assets/images/profile.png'

const Navbar = () => {
    return (
        <div className="navbar max-w-300 mx-auto border-b-2 py-5">
            <div className="flex-1">
                <h1 className='font-bold text-3xl'>Knowledge Cafe</h1>
            </div>
            <div className="avatar">
                <div className="w-14 rounded-full">
                    <img
                        alt="A beauty"
                        src={profileImg} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
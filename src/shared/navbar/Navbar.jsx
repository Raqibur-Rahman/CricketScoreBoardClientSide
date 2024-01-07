import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/upcoming">Up Coming </Link>
        </li>
        <li>
            <Link to="/teams">Teams</Link>
        </li>
        <li>
            <Link to="/rankings">Rankings</Link>
        </li>
        <li>
            <Link to="/news">News</Link>
        </li>
        <li>
            <Link to="/about-us">About Us</Link>
        </li>
       

    </>
    return (
        <div>
            <div className="navbar  bg-base-200  fixed h-24 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className=" flex text-xl ">
                        <><img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/10102/10102765.png" alt="" /></>
                        <p className="">
                            <p className="font-bold">CricketScoreBD</p>
                            <p className="font-semibold text-sm" > Your go-to for live cricket scores</p>
                        </p>
                    </Link>
                </div>
                <div className="hidden lg:flex navbar-end font-semibold">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>

        </div>
    );
};

export default Navbar;
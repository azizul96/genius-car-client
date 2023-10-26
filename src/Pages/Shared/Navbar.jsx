import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const {user, userLogOut} = useContext(AuthContext)

  

  const menu = (
    <>
      <li className="font-semibold ">
        <NavLink to="/" className={({ isActive, isPending }) =>
          isActive ? "bg-orange-500 rounded-lg text-white" : isPending ? "pending" : ""}>Home</NavLink>
      </li>
      <li className="font-semibold ">
        <NavLink to="/about" className={({ isActive, isPending }) =>
          isActive ? "bg-orange-500 rounded-lg text-white" : isPending ? "pending" : ""}>About</NavLink>
      </li>
      
      <li className="font-semibold">
        <NavLink to="/blog" className={({ isActive, isPending }) =>
          isActive ? "bg-orange-500 rounded-lg text-white" : isPending ? "pending" : ""}>Blog</NavLink>
      </li>
      <li className="font-semibold ">
        <NavLink to="/contact " className={({ isActive, isPending }) =>
          isActive ? "bg-orange-500 rounded-lg text-white" : isPending ? "pending" : ""}>Contact</NavLink>
      </li>
      {
        user?.email ? 
        <li className="font-semibold">
        <NavLink to="/bookings" className={({ isActive, isPending }) =>
          isActive ? "bg-orange-500 rounded-lg text-white" : isPending ? "pending" : ""}>My Booking</NavLink>
      </li>
      :
      <li></li>
      }
    </>
  );

  const handleLogOut = () =>{
    userLogOut()
    
  }


  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-20 " src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <Link>
              <button className="btn btn-outline text-orange-500 hover:bg-orange-500 hover:border-none ">Appointment</button>
            </Link>
          </div>
          <div className="">
                    {user?.email?
                         <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className=" w-10 rounded-full">
                                    <img src={user?.photoURL ? user.photoURL: "/user.png"} alt="" />
                                </div>
                                
                            </label>
                            
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="btn btn-sm  btn-ghost">Logout</button>
                                </li>
                            </ul>
                            
                        </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost font-bold">Login</button>
                        </Link>
                    }
                </div>  
        </div>
      </div>
    </div>
  );
};

export default Navbar;

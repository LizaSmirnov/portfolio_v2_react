const Navbar = () => {
  return (
    <div className="navbar bg-primary">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} data-theme="light" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52" >
          <li><a href='#AboutMe'>About</a></li>
          <li><a href='#Footer'>Portfolio</a></li>
          <li><a href='#Contact'>Contact</a></li>
          <li><a href=''>Resume</a></li>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost normal-case text-xl">Welcome!</a>
    </div>
    <div className="navbar-end">
     
 
    </div>
  </div>
  );
};

export default Navbar;

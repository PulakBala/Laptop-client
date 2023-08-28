import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleItem1Hover = () => {
    setIsSubmenuOpen(true);
  };

  const handleItem1Leave = () => {
    setIsSubmenuOpen(false);
  };

  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);

  if(!jsonData){
    <div>loading...</div>
  }

  return (
    <nav className="bg-blue-500 p-4 flex justify-around z-50 sticky top-0">
      <div className="flex items-center justify-between">
        <div>
          <img src="" alt="Company Logo" className="h-8" />
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
      </div>
      <div
        className={`md:flex ${
          isMenuOpen ? "block" : "hidden"
        } md:block mt-4 md:mt-0`}
      >
        <ul className="md:flex space-x-4  mt-3">
          <li className="text-white">
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li className="text-white">
        <Link to='/about'>About</Link>
          </li>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1">
              Services/Products
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu  bg-slate-600 rounded-box w-2"
            >
              {
                jsonData.map(data => <ul key={data}><label className="btn w-52 mt-4">{data.title}</label></ul>)
              }
              <li
                className="dropdown relative"
                onMouseEnter={handleItem1Hover}
                onMouseLeave={handleItem1Leave}
              >


                <ul
                  className={`dropdown-content ${
                    isSubmenuOpen ? "block" : "hidden"
                  } absolute left-full top-0 mt-0 ml-1 space-y-2 bg-base-100 w-52`}
                >
                </ul>

              </li>
              
            </ul>
          </div>

          <li className="text-white">
            <a href="/" className="hover:text-gray-200">
              Portfolio
            </a>
          </li>
          <li className="text-white">
            <a href="/" className="hover:text-gray-200">
              Career
            </a>
          </li>
          <li className="text-white">
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
        <button className="btn btn-outline mx-4">report issue</button>
      </div>
    </nav>
  );
};

export default Header;

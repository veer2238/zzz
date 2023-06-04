import "./Header.scss";

import {CgMenuGridO} from  "react-icons/cg";


import {BiSearchAlt} from  "react-icons/bi";



const Header = () => {
   
    return (
        <>
            <div className="main-header">
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    <div className="center">V-Ex Tech</div>

                    <div className="right">
                        <BiSearchAlt/>
                        <CgMenuGridO/>
                    </div>
                </div>
            </div>
        </>

      

     
    )
    
    
};

export default Header;

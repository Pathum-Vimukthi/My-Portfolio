import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ParticlesBg from 'particles-bg'

function sidenav() {

    const [nav, setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    }

  return (
    <div>
        <GiHamburgerMenu />
    </div>
  );
}

export default sidenav;

import React from "react";
import {Link} from "@inertiajs/inertia-react";
import LogoLight2x from "../../images/logo2x.png";
import LogoDark2x from "../..//images/logo-dark2x.png";

const Logo = () => {
    return (
        <Link href={import.meta.env.BASE_URL} className="logo-link">
            <img className="logo-light logo-img" src={LogoLight2x} alt="logo" />
            <img className="logo-dark logo-img" src={LogoDark2x} alt="logo" />
        </Link>
    );
};

export default Logo;

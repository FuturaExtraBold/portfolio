import React from "react";
import "./brand-quilt.scss";
import disney from "assets/images/disney.svg";
import dreamworks from "assets/images/dreamworks.svg";
import findingnemo from "assets/images/findingnemo.svg";
import fox from "assets/images/fox.svg";
import honda from "assets/images/honda.svg";
import kajabi from "assets/images/kajabi.svg";
import kia from "assets/images/kia.svg";
import kswiss from "assets/images/kswiss.svg";
import lexus from "assets/images/lexus.svg";
import mickey from "assets/images/mickey.svg";
import pixar from "assets/images/pixar.svg";
import southpark from "assets/images/southpark.svg";

// import Disney from "./Logos/Disney";

function BrandQuilt() {
  return (
    <div className="container">
      <div className="brand-quilt">
        {/* <Disney /> */}
        <img alt="Disney logo" className="brand-quilt__logo" src={disney} />
        <img
          alt="Mickey Mouse logo"
          className="brand-quilt__logo"
          src={mickey}
        />
        <img
          alt="DreamWorks logo"
          className="brand-quilt__logo"
          src={dreamworks}
        />
        <img alt="PIXAR logo" className="brand-quilt__logo" src={pixar} />
        <img
          alt="Finding Nemo logo"
          className="brand-quilt__logo"
          src={findingnemo}
        />
        <img
          alt="South Park logo"
          className="brand-quilt__logo"
          src={southpark}
        />
        <img alt="Fox logo" className="brand-quilt__logo" src={fox} />
        <img alt="KIA logo" className="brand-quilt__logo" src={kia} />
        <img alt="Honda logo" className="brand-quilt__logo" src={honda} />
        <img alt="Lexus logo" className="brand-quilt__logo" src={lexus} />
        <img alt="Kajabi logo" className="brand-quilt__logo" src={kajabi} />
        <img alt="K•Swiss logo" className="brand-quilt__logo" src={kswiss} />
      </div>
    </div>
  );
}

export default BrandQuilt;

import React, { Fragment } from "react";
import { useContext } from "react/cjs/react.development";
import { LayoutContext } from "../../context/LayoutContext";

const Layout = () => {
  let { changeLayout, layout, changecolor } = useContext(LayoutContext);
  const change2 = () => {
    changeLayout("2");
    changecolor("2");
  };

  const change3 = () => {
    changeLayout("3");
    changecolor("3");
  };
  const change1 = () => {
    changeLayout("1");
    changecolor("1");
  };
  return (
    <Fragment>
      <div
        className={`mainLayout ${
          layout === "2"
            ? "mainLayoutGreen"
            : layout === "3"
            ? "mainLayoutPurple"
            : layout === "0"
            ? "mainLayoutDark"
            : ""
        }`}
      >
        <h1 className={`${layout === "0" ? "darkwriting1" : ""}`}>
          Choose Your Layout
        </h1>
        <div className="Lay one" onClick={change1}>
          11
        </div>
        <div className="Lay two" onClick={change2}>
          22
        </div>
        <div className="Lay three" onClick={change3}>
          33
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;

import React, { lazy, useEffect, useState } from "react";
import * as actions from "../../actions/stock";
import { connect } from "react-redux";
const Setting = lazy(() => import("../userProfile/main"));
const BrandBar = lazy(() => import("./micro-comp/brand.js"));
const SideMenu = lazy(() => import("../dashboard/main"));
const Search = lazy(() => import("./micro-comp/search"));
//const CircleMenu = lazy(() => import("./micro-comp/circleMenu"));
const AddBrandForm = lazy(() => import("./micro-comp/crud/brand"));
const Stock = ({ brands, getBrands, addBrand, removeBrand }) => {
  const [crudFormToggle, setcrudFormToggle] = useState(false);
  const [addBrandToggle, setAddBrandToggle] = useState(false);
  const [circleMenuToggle, setCircleMenuToggle] = useState(false);

  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div className="root-container flex justify-start items-start  h-screen">
      <SideMenu />
      <div className="content-container h-auto w-full ">
        <div className="content-header  bg-ocean flex justify-between items-center ">
          <h4 className="p-1  text-md text-white font-bold tracking-wider ">
            Brands
          </h4>
          <Search />
          <Setting />
        </div>
        <div
          style={{ height: "94vh" }}
          className="brand-bar-container flex flex-col  overflow-y-scroll "
        >
          {brands.map((brand, index) => (
            <BrandBar
              key={index}
              brand={brand}
              removeBrandHandler={removeBrand}
            />
          ))}
        </div>
      </div>

      {/*absolute dives*/}
      <div
        onClick={() => setcrudFormToggle((prevState) => !prevState)}
        className="curd-op-circle flex justify-center cursor-pointer items-center absolute bottom-12 right-12 rounded-full  bg-ocean-light w-12 h-12 hover:bg-ocean-dark"
      >
        <p className="font-bold text-white text-2xl select-none  ">+</p>
      </div>
      {crudFormToggle ? (
        <div className="absolute top-1/4 right-1/4 bg-gray-200 rounded h-80 w-80 p-2">
          <AddBrandForm addBrand={addBrand} />
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    brands: state.stock.brands,
  };
};
export default connect(mapStateToProps, actions)(Stock);

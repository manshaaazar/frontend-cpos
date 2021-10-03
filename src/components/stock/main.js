import React, { lazy, useEffect, useState } from "react";
import * as actions from "../../actions/stock";
import { connect } from "react-redux";
const Setting = lazy(() => import("../setting/main"));
const SideMenu = lazy(() => import("../dashboard/main"));
const Search = lazy(() => import("./micro-comp/search"));
const AddBrandForm = lazy(() => import("./micro-comp/form/addBrand"));
const Filter = lazy(() => import("./filter/main"));
const Loading = lazy(() => import("../../skeletons/spinner"));
const ConfirmationBox = lazy(() => import("../lib/confirmationBox/main"));
const ProductCard = lazy(() => import("./detail-card/main"));
const Stock = ({
  getBrands,
  addBrand,
  removeBrand,
  brands,
  filterProducts,
  loadingBrands,
  productsPerBrand,
}) => {
  const [crudFormToggle, setcrudFormToggle] = useState(false);
  const [confirmationBox, setConfirmationBox] = useState(false);
  const [filterMenuToggle, setFilterMenuToggle] = useState(false);

  useEffect(() => {
    getBrands();
  }, []);

  const btnCancelHandler = () => {
    setConfirmationBox(false);
  };

  return (
    <div className="root-container flex justify-start items-start  h-screen ">
      <SideMenu />
      <div className="content-container  w-full  ">
        <div className=" b content-header h-12  bg-white flex justify- items-center w-full">
          <Search />
          <div className="flex flex-row justify-between items-center w-full h-full">
            <Filter
              filterMenuToggle={filterMenuToggle}
              setFilterMenuToggle={setFilterMenuToggle}
              filters={brands}
              filterBtnHandler={filterProducts}
              loadingState={loadingBrands}
              LoadingComp={Loading}
            />
            <Setting color="black" />
          </div>
        </div>
        <main style={{ height: "94vh" }}>
          <ProductCard items={productsPerBrand} />
        </main>
      </div>

      {/*absolute dives*/}
      <div
        onClick={() => setcrudFormToggle((prevState) => !prevState)}
        className="curd-op-circle flex justify-center cursor-pointer items-center absolute bottom-12 right-12 rounded-full  bg-ocean-light w-12 h-12 hover:bg-ocean-dark"
      >
        <p className="font-bold text-white text-2xl select-none  ">+</p>
      </div>
      {crudFormToggle && (
        <div className="absolute top-1/4 right-1/4 bg-gray-200 rounded h-80 w-80 p-2 flex flex-col justify-between items-center">
          <AddBrandForm addBrand={addBrand} />

          <div className="w-full flex justify-end items-center h-14  ">
            <button
              onClick={() => setcrudFormToggle(false)}
              type="submit"
              className=" ml-2 mr-4 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-dark"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {confirmationBox && (
        <ConfirmationBox
          btnproceedText="Remove"
          setConfirmationBox={setConfirmationBox}
          btnCancelText="Cancel"
          message="Under this Brand all products will also be removed"
          btnProceedHandler={removeBrand}
          btnCancelHandler={btnCancelHandler}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state", state);
  const { stock } = state;
  const {
    brands,
    productsPerBrand,
    activeBrand,
    loadingProducts,
    loadingBrands,
  } = stock;
  return {
    loadingBrands,
    productsPerBrand,
    activeBrand,
    loadingProducts,
    brands,
  };
};

export default connect(mapStateToProps, actions)(Stock);

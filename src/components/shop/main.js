import React, { useEffect, useState, lazy } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/shop";
import { useHistory } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import { FcShop } from "react-icons/fc";
import Logo from "../logo/main";
import Poster from "./resources/shop-poster.svg";
import "./shop.scss";
//import AddForm from "./micro-comp/form";
const UserProfile = lazy(() => import("../userProfile/main"));
const AddForm = lazy(() => import("./micro-comp/form"));
const Box = lazy(() => import("./micro-comp/shopbox"));
const Shop = ({
  accessToken,
  getAllShops,
  shopCatalog,
  addShop,
  removeShop,
  updateShop,
}) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => getAllShops(), []);
  const history = useHistory();
  if (!accessToken) {
    history.push("/");
  }

  return (
    <div className="master-cotainer h-screen">
      <div className="sticky top-0">
        <div className="flex flex-row">
          <Logo />
          <UserProfile />
        </div>
      </div>
      <div
        className="poster bg-no-repeat bg-scroll bg-clip-content bg-contain bg-left h-1/5 font-bold"
        style={{ backgroundImage: `url(${Poster})` }}
      ></div>
      <div className="shop-container p-2 h-3/4 border border-black">
        <p className=" select-none font-medium text-lg text-gray-700 ">
          Your Shops
          <span className="h-1 w-full bg-ocean-light rounded-sm block m-1"></span>
        </p>
        <div className="shops-box  flex flex-row flex-wrap justify-center items-center">
          <div
            onClick={() => setToggle(true)}
            className="select-none w-48 h-40  text-gray-700 flex flex-col justify-between items-center p-2 rounded-md   hover:shadow-inner-ocean-sm transition-shadow duration-200 ease-in-out"
          >
            <div className="flex flex-col justify-cneter mt-12 items-center ">
              <HiPlus className="w-14 h-14" />
              <p className="text-medium tracking-normal font-heading text-center">
                Add Shop
              </p>
            </div>
            <div className="h-1 w-full bg-ocean-light rounded-sm"></div>
          </div>

          {toggle ? (
            <div className="absolute top-1/4 left-2/5  bg-gray-200 rounded">
              <AddForm
                setToggle={setToggle}
                action="Add"
                operation={addShop}
                shop={null}
              />
            </div>
          ) : (
            ""
          )}
          {/* render user shops here  */}
          {shopCatalog.shops
            ? shopCatalog.shops.map((shop) => (
                <Box
                  handleRemove={removeShop}
                  Icon={FcShop}
                  heading={shop.shopName}
                  details={shop.location}
                  operation={updateShop}
                  shopId={shop._id}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { shop, login } = state;
  return {
    accessToken: login.accessToken,
    shopCatalog: shop,
  };
};
export default connect(mapStateToProps, actions)(Shop);

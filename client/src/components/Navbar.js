import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getCardsByName, getCardsByType } from "../redux/cards/cardActions";

const Navbar = ({ setCards }) => {
  const { type } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState();
  const [isSubs, setIsSubs] = useState(false);
  const [isBur, setIsBur] = useState(false);
  const [types, setTypes] = useState();

  function searchStringHandler(e) {
    setSearchString(e.target.value);
  }

  function menuShowHandler() {
    setIsMenuOpen(!isMenuOpen);
  }

  function searchHandler() {
    console.log(searchString);
    dispatch(getCardsByName({ title: searchString })).then((data) => {
      console.log(data);
      setCards(data.payload.data.cards);
    });
  }

  useEffect(() => {
    console.log(types)
    dispatch(getCardsByType({ cardtype: types })).then((data) => {
      console.log(data);
      setCards(data.payload.data.cards);
    });
  }, [types]);

  function changeSubsHandler(e) {
    if (!isSubs) {
      if (types) setTypes(undefined);
      else setTypes("Subscription");
    } else {
      if (types) setTypes(undefined);
      else setTypes("Burner");
    }
    setIsSubs(!isSubs);
  }

  function changeBurHandler(e) {
    if (!isBur) {
      if (types) setTypes(undefined);
      else setTypes("Burner");
    } else {
      if (types) setTypes(undefined);
      else setTypes("Subscription");
    }
    setIsBur(!isBur);
  }

  return (
    <nav className="bg-gray-100 border-b-gray-200 border-b-2">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4 ml-5">
          <Link to={"/your"}>
            <h1
              className={classNames("py-3 px-1 text-lg", {
                "border-b-red-600 border-b-2": type == "your",
              })}
            >
              Your
            </h1>
          </Link>
          <Link to={"/all"}>
            <h1
              className={classNames("py-3 px-1 text-lg", {
                "border-b-red-600 border-b-2": type == "all",
              })}
            >
              All
            </h1>
          </Link>
          <Link to={"/blocked"}>
            <h1
              className={classNames("py-3 px-1 text-lg", {
                "border-b-red-600 border-b-2": type == "blocked",
              })}
            >
              Blocked
            </h1>
          </Link>
        </div>
        <div className="flex-row flex justify-center items-center">
          <div className="mr-3 text-gray-700 hover:text-gray-500 cursor-pointer flex flex-row items-center">
            <input
              type="text"
              className="h-5 w-64 bg-gray-300 rounded-lg text-lg px-3 py-4 mr-2"
              onChange={searchStringHandler}
            ></input>
            <IoIosSearch className="text-3xl" onClick={searchHandler} />
          </div>
          <div
            className="text-gray-700 bg-gray-300 cursor-pointer mr-4 px-2 py-1 rounded-lg flex-row flex justify-center items-center ml-2"
            onClick={menuShowHandler}
          >
            <IoFilter />
            <h1 className="text-lg ml-2">Filter</h1>
          </div>
          {isMenuOpen && (
            <div className="absolute top-12 right-5 bg-gray-200 w-72 rounded-lg py-2 px-5">
              <div className="flex flex-row justify-start items-center border-b-gray-500 border-b-2">
                <h1 className="text-black text-lg mb-2">Filters</h1>
              </div>
              <div className="flex flex-col items-start mt-3 text-lg">
                <h1>Type</h1>
                <div className="flex flex-row justify-between w-full">
                  <div>
                    <input
                      type="checkbox"
                      value={"Subscription"}
                      checked={isSubs}
                      onChange={changeSubsHandler}
                    />
                    <label className="ml-3">Subscription</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={"Burner"}
                      checked={isBur}
                      onChange={changeBurHandler}
                    />
                    <label className="ml-3">Burner</label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ label }) => {
  return (
    <div className="text-grey hover:text-gray-300 cursor-pointer">{label}</div>
  );
};

export default Navbar;

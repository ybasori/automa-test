import React, { useState } from "react";
import styles from "./InputSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { getCity } from "../../../Domain/city/city.thunk";

const InputSearch = () => {
  const dispatch: AppDispatch = useDispatch();
  const cityState = useSelector((state: RootState) => state.city);
  const [keyword, setKeyword] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      getCity({
        keyword,
      })
    );
  };
  return (
    <>
      <form className={styles["container"]} onSubmit={onSubmit}>
        <input
          className={styles["input"]}
          value={keyword}
          onChange={(e) => setKeyword(e.currentTarget.value)}
        />
        <button
          className={styles["btn-submit"]}
          type="submit"
          disabled={cityState.loadingCities}
        >
          {cityState.loadingCities ? "loading ..." : "Search"}
        </button>
      </form>
    </>
  );
};

export default InputSearch;

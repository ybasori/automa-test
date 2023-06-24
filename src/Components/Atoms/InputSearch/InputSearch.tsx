import React, { useEffect, useState } from "react";
import styles from "./InputSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { getCity } from "../../../Domain/city/city.thunk";
import { getWeather } from "../../../Domain/weather/weather.thunk";

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

  useEffect(() => {
    if (!cityState.loadingCity && cityState.city !== null) {
      dispatch(
        getWeather({ lat: cityState.city.lat, lng: cityState.city.lng })
      );
    }
  }, [cityState.city, cityState.loadingCity, dispatch]);

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
          disabled={cityState.loadingCity}
        >
          {cityState.loadingCity ? "..." : "Search"}
        </button>
      </form>
    </>
  );
};

export default InputSearch;

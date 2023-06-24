import React, { useEffect, useState } from "react";
import styles from "./InputSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { getCity } from "../../../Domain/city/city.thunk";
import { getForecast, getWeather } from "../../../Domain/weather/weather.thunk";

const InputSearch = () => {
  const dispatch: AppDispatch = useDispatch();
  const { city: cityState } = useSelector((state: RootState) => ({
    city: state.city,
  }));
  const [keyword, setKeyword] = useState("Jakarta");

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
      dispatch(
        getForecast({
          lat: cityState.city.lat ?? 0,
          lng: cityState.city.lng ?? 0,
        })
      );
    }
  }, [cityState.city, cityState.loadingCity, dispatch]);

  useEffect(() => {
    dispatch(
      getCity({
        keyword: "Jakarta",
      })
    );
  }, [dispatch]);

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

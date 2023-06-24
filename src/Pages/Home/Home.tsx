import React from "react";

import styles from "./Home.module.css";
import ListWeather from "../../Components/Molecules/ListWeather/ListWeather";
import WeatherForecast from "../../Components/Molecules/WeatherForecast/WeatherForecast";
import MainWeather from "../../Components/Molecules/MainWeather/MainWeather";
import Sun from "../../Components/Atoms/Sun/Sun";
import InputSearch from "../../Components/Atoms/InputSearch/InputSearch";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const cityState = useSelector((state: RootState) => state.city);
  return (
    <div className={styles["container"]}>
      <InputSearch />
      {cityState.loadingCities ? (
        <div className={styles["white-text"]}>...</div>
      ) : (
        <>
          <div className={styles["main-weather"]}>
            <MainWeather
              temperatureOne={12}
              temperatureTwo={9}
              temperatureThree={22}
              temperatureFour={11}
              title={"Sunny"}
              icon={<Sun />}
            />
          </div>
          <div className={styles["forecast"]}>
            <WeatherForecast wind={29} rain={6.33} storm={20} uv={3} />
          </div>
          <ListWeather
            data={[
              {
                title: "Monday",
                icon: <Sun height={50} width={50} />,
                temperatureOne: 20,
                temperatureTwo: 11,
              },
              {
                title: "Monday",
                icon: <Sun height={50} width={50} />,
                temperatureOne: 20,
                temperatureTwo: 11,
              },
              {
                title: "Monday",
                icon: <Sun height={50} width={50} />,
                temperatureOne: 20,
                temperatureTwo: 11,
              },
              {
                title: "Monday",
                icon: <Sun height={50} width={50} />,
                temperatureOne: 20,
                temperatureTwo: 11,
              },
              {
                title: "Monday",
                icon: <Sun height={50} width={50} />,
                temperatureOne: 20,
                temperatureTwo: 11,
              },
            ]}
          />
        </>
      )}
    </div>
  );
};

export default Home;

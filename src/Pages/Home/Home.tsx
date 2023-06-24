import React from "react";

import styles from "./Home.module.css";
import ListWeather from "../../Components/Molecules/ListWeather/ListWeather";
import WeatherForecast from "../../Components/Molecules/WeatherForecast/WeatherForecast";
import MainWeather from "../../Components/Molecules/MainWeather/MainWeather";
import Sun from "../../Components/Atoms/Sun/Sun";

const Home: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <MainWeather
        temperatureOne={12}
        temperatureTwo={9}
        temperatureThree={22}
        temperatureFour={11}
        title={"Sunny"}
        icon={<Sun />}
      />
      <WeatherForecast wind={29} rain={6.33} storm={20} uv={3} />
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
    </div>
  );
};

export default Home;

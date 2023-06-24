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
  const { city: cityState, weather: weatherState } = useSelector(
    (state: RootState) => ({
      city: state.city,
      weather: state.weather,
    })
  );
  return (
    <div className={styles["container"]}>
      <InputSearch />
      {cityState.loadingCity ? (
        <div className={styles["white-text"]}>...</div>
      ) : (
        <>
          {weatherState.loadingWeather ? (
            <div className={styles["white-text"]}>...</div>
          ) : (
            <>
              {weatherState.weather !== null ? (
                <div className={styles["main-weather"]}>
                  <MainWeather
                    temperatureOne={weatherState.weather?.main.temp}
                    temperatureTwo={weatherState.weather?.main.temp_min}
                    temperatureThree={weatherState.weather?.main.temp_max}
                    temperatureFour={weatherState.weather?.main.feels_like}
                    title={weatherState.weather?.weather[0].main}
                    icon={<Sun />}
                  />
                </div>
              ) : (
                <div className={styles["whit-text"]}>Not Available</div>
              )}
            </>
          )}
          <>
            {weatherState.loadingForecast ? (
              <div className={styles["white-text"]}>...</div>
            ) : (
              <>
                {weatherState.forecast !== null ? (
                  <>
                    <div className={styles["forecast"]}>
                      <WeatherForecast
                        wind={29}
                        rain={6.33}
                        storm={20}
                        uv={3}
                      />
                    </div>
                    <ListWeather
                      data={weatherState.forecast.map((item) => ({
                        title: item.title,
                        temperatureOne: item.temp_max,
                        temperatureTwo: item.temp_min,
                        icon: <Sun height={50} width={50} />,
                      }))}
                    />
                  </>
                ) : (
                  <div className={styles["whit-text"]}>Not Available</div>
                )}
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};

export default Home;

import React from "react";
import styles from "./MainWeather.module.css";

const MainWeather: React.FC<{
  temperatureOne: number;
  temperatureTwo: number;
  temperatureThree: number;
  temperatureFour: number;
  title: string;
  icon: React.ReactNode;
}> = ({
  temperatureOne,
  temperatureTwo,
  temperatureThree,
  temperatureFour,
  title,
  icon,
}) => {
  return (
    <>
      <div className={styles["today-weather"]}>
        <div className={styles["detail-weather"]}>
          <div className={styles["temperature"]}>
            <div className={styles["temperature-main"]}>
              {temperatureOne} <sup>o</sup>
            </div>
            <div className={styles["temperature-below"]}>
              <span className={styles["temperature-left"]}>
                {temperatureTwo} <sup>o</sup>
              </span>{" "}
              <span className={styles["temperature-sparator"]}>/</span>{" "}
              <span className={styles["temperature-right"]}>
                {temperatureThree} <sup>o</sup>
              </span>
            </div>
          </div>
          <div className={styles["weather"]}>
            {icon}
            <div className={styles["weather-container"]}>
              <div className={styles["space"]}>&nbsp;</div>
              <div className={styles["weather-text"]}>
                RealFeel<sup>&reg;</sup>{" "}
                <span className={styles["weather-temperature"]}>
                  {temperatureFour}
                  <sup>o</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["describe-weather"]}>{title}</div>
      </div>
    </>
  );
};

export default MainWeather;

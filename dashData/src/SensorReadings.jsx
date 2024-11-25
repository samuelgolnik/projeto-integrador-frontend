// SensorReadings.jsx
import React from "react";
import { useState, useEffect } from "react";
import "./SensorReadings.css";
import {
  FaThermometerHalf,
  FaTint,
  FaSoundcloud,
  FaBatteryHalf,
  FaClock,
  FaWind,
  FaCloudRain,
  FaSun,
  FaRadiation,
  FaCompass
} from "react-icons/fa";

const SensorReadings = () => {
    const [dados_k7, setDados_k7] = useState(null);
    const [dados_n2, setDados_n2] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response_k7 = await fetch("api/k72623_lo/latest-readings");
                const data_k7 = await response_k7.json();
                setDados_k7(data_k7[0]);
                const response_n2 = await fetch("api/nit2xli/latest-readings");
                const data_n2 = await response_n2.json();
                setDados_n2(data_n2[1]);
            } catch (error) {
                console.error("Erro ao buscar dados_k7:", error);
            }
        };

        fetchData()
    }, []);
    return (

        <div className="sensor-readings-container">
            <h1 className="title">Painel Inicial</h1>
            {/* Primeira seção: Leituras do sensor original */}
            <div className="sensor-readings">
                <h2>{dados_k7 ? dados_k7.devicename : ''}</h2>
                <div className="readings-container">
                    <div className="reading-card temperature">
                        <FaThermometerHalf className="icon" />
                        <div>
                            <h3>Temperatura</h3>
                            <p>{dados_k7 ? dados_k7.temperature : ''} °C</p>
                        </div>
                    </div>
                    <div className="reading-card humidity">
                        <FaTint className="icon" />
                        <div>
                            <h3>Umidade</h3>
                            <p>{dados_k7 ? dados_k7.humidity : ''} %</p>
                        </div>
                    </div>
                    <div className="reading-card noise">
                        <FaSoundcloud className="icon" />
                        <div>
                            <h3>Ruído</h3>
                            <p>{dados_k7 ? dados_k7.noise : ''} dB</p>
                        </div>
                    </div>
                    <div className="reading-card pm">
                        <FaWind className="icon" />
                        <div>
                            <h3>PM2.5</h3>
                            <p>{dados_k7 ? dados_k7.pm2_5 : ''} µg/m³</p>
                        </div>
                    </div>
                    <div className="reading-card voltage">
                        <FaBatteryHalf className="icon" />
                        <div>
                            <h3>Voltagem</h3>
                            <p>{dados_k7 ? dados_k7.voltage : ''} V</p>
                        </div>
                    </div>
                    <div className="reading-card time">
                        <FaClock className="icon" />
                        <div>
                            <h3>Hora da Leitura</h3>
                            <p>{new Date(dados_k7 ? dados_k7.time : '').toLocaleString([], {hourCycle: "h23"})}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Segunda seção: Leituras da Estação Cruzeiro */}
            <div className="sensor-readings">
                <h2>{dados_n2 ? dados_n2.devicename : ''}</h2>
                <div className="readings-container">
                    <div className="reading-card rain">
                        <FaCloudRain className="icon" />
                        <div>
                            <h3>Nível de Chuva</h3>
                            <p>{dados_n2 ? dados_n2.emw_rain_lvl : ''} mm</p>
                        </div>
                    </div>
                    <div className="reading-card wind-speed">
                        <FaWind className="icon" />
                        <div>
                            <h3>Velocidade do Vento</h3>
                            <p>Média: {dados_n2 ? dados_n2.emw_avg_wind_speed : ''} km/h</p>
                            <p>Rajada: {dados_n2 ? dados_n2.emw_gust_wind_speed : ''} km/h</p>
                        </div>
                    </div>
                    <div className="reading-card wind-direction">
                        <FaCompass className="icon" />
                        <div>
                            <h3>Direção do Vento</h3>
                            <p>{dados_n2 ? dados_n2.emw_wind_direction : ''}°</p>
                        </div>
                    </div>
                    <div className="reading-card temperature">
                        <FaThermometerHalf className="icon" />
                        <div>
                            <h3>Temperatura</h3>
                            <p>{dados_n2 ? dados_n2.emw_temperature : ''} °C</p>
                        </div>
                    </div>
                    <div className="reading-card humidity">
                        <FaTint className="icon" />
                        <div>
                            <h3>Umidade</h3>
                            <p>{dados_n2 ? dados_n2.emw_humidity : ''} %</p>
                        </div>
                    </div>
                    <div className="reading-card luminosity">
                        <FaSun className="icon" />
                        <div>
                            <h3>Luminosidade</h3>
                            <p>{dados_n2 ? dados_n2.emw_luminosity : ''} lux</p>
                        </div>
                    </div>
                    <div className="reading-card uv">
                        <FaRadiation className="icon" />
                        <div>
                            <h3>Índice UV</h3>
                            <p>{dados_n2 ? dados_n2.emw_uv : ''}</p>
                        </div>
                    </div>
                    <div className="reading-card solar-radiation">
                        <FaSun className="icon" />
                        <div>
                            <h3>Radiação Solar</h3>
                            <p>{dados_n2 ? dados_n2.emw_solar_radiation : ''} W/m²</p>
                        </div>
                    </div>
                    <div className="reading-card pressure">
                        <FaThermometerHalf className="icon" />
                        <div>
                            <h3>Pressão Atmosférica</h3>
                            <p>{dados_n2 ? dados_n2.emw_atm_pres : ''} hPa</p>
                        </div>
                    </div>
                    <div className="reading-card internal-temp">
                        <FaThermometerHalf className="icon" />
                        <div>
                            <h3>Temperatura Interna</h3>
                            <p>{dados_n2 ? dados_n2.internal_temperature : ''} °C</p>
                        </div>
                    </div>
                    <div className="reading-card internal-humidity">
                        <FaTint className="icon" />
                        <div>
                            <h3>Umidade Interna</h3>
                            <p>{dados_n2 ? dados_n2.internal_humidity : ''} %</p>
                        </div>
                    </div>
                    <div className="reading-card time">
                        <FaClock className="icon" />
                        <div>
                            <h3>Hora da Leitura</h3>
                            <p>{new Date(dados_n2 ? dados_n2.time : '').toLocaleString([], {hourCycle: "h23"})}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SensorReadings;

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./ChartPage.css";

const SensorCharts = () => {
  const [dados_n2, setDados_n2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/nit2xli/last-24h");
        const data = await response.json();

        const formattedData = data.map((item) => ({
          ...item,
          time: new Date(item.time).toLocaleTimeString([], {hourCycle: "h23"}),
        }));

        setDados_n2(formattedData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const renderChart = (dataKey, label, unit = "", color = "#000") => (
    <div>
      <h3>{label}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dados_n2}>
          <CartesianGrid />
          <XAxis dataKey="time" />
          <YAxis unit={unit} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke={color} name={label} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="wrapper">
      <h2 className="title">Medições das Últimas 24 Horas - Estação Cruzeiro</h2>
      <div className="grid">
        {renderChart("emw_rain_lvl", "Nível de Chuva", "mm", "#3498db")}
        {renderChart("emw_avg_wind_speed", "Velocidade Média do Vento", "m/s", "#27ae60")}
        {renderChart("emw_gust_wind_speed", "Rajada de Vento", "m/s", "#e67e22")}
        {renderChart("emw_wind_direction", "Direção do Vento", "°", "#9b59b6")}
        {renderChart("emw_temperature", "Temperatura Externa", "°C", "#e74c3c")}
        {renderChart("emw_humidity", "Umidade Externa", "%", "#2ecc71")}
        {renderChart("emw_luminosity", "Luminosidade", "lux", "#f1c40f")}
        {renderChart("emw_uv", "Índice UV", "", "#8e44ad")}
        {renderChart("emw_solar_radiation", "Radiação Solar", "W/m²", "#d35400")}
        {renderChart("emw_atm_pres", "Pressão Atmosférica", "hPa", "#2980b9")}
        {renderChart("internal_temperature", "Temperatura Interna", "°C", "#c0392b")}
        {renderChart("internal_humidity", "Umidade Interna", "%", "#16a085")}
      </div>
    </div>
  );
};

export default SensorCharts;

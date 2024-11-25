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
import "./ChartPage.css"
const SensorCharts = () => {
  const [dados_k7, setDados_k7] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response_k7 = await fetch("api/k72623_lo/last-24h");
        const data_k7 = await response_k7.json();

        const formattedData = data_k7.map((item) => ({
          ...item,
          time: new Date(item.time).toLocaleTimeString([], {hourCycle: "h23", hour: '2-digit', minute: '2-digit'}),
        }));

        setDados_k7(formattedData);
      } catch (error) {
        console.error("Erro ao buscar dados_k7:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <h2 className="title">Medições das Últimas 24 Horas - Rótula do Taffarel</h2>
      <div className="grid">
        {/* Gráfico de Temperatura */}
        <div>
          <h3>Temperatura</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dados_k7}>
              <CartesianGrid />
              <XAxis dataKey="time" />
              <YAxis unit="°C" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#8884d8" name="Temperatura" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Ruído */}
        <div>
          <h3>Ruído</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dados_k7}>
              <CartesianGrid />
              <XAxis dataKey="time" />
              <YAxis unit="dB" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="noise" stroke="#82ca9d" name="Ruído" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Umidade */}
        <div>
          <h3>Umidade</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dados_k7}>
              <CartesianGrid />
              <XAxis dataKey="time" />
              <YAxis unit="%" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="humidity" stroke="#ffc658" name="Umidade" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Partículas PM2.5 */}
        <div>
          <h3>Partículas PM2.5</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dados_k7}>
              <CartesianGrid />
              <XAxis dataKey="time" />
              <YAxis unit="µg/m³" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pm2_5" stroke="#d62728" name="PM2.5" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Voltagem */}
        <div>
          <h3>Voltagem</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dados_k7}>
              <CartesianGrid />
              <XAxis dataKey="time" />
              <YAxis unit="V" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="voltage" stroke="#00c0ff" name="Voltagem" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SensorCharts;
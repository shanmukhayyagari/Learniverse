import React,{useRef,useEffect,useState} from "react";
import "../css/Analytics.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chart from 'chart.js/auto'
import axios from 'axios'

// ChartJS.register(ArcElement);

const Analytics = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    axios
    .get("http://localhost/lerniverse/backend/getAnalytics.php")
    .then((res) => {
      setData(res.data);
      console.log(res.data);
    });

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: ['label 1', 'label 2', 'label 3'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255,99,112)',
            'rgb(54,162,235)',
            'rgb(255,205,82)',
            
          ]
        }
      ]
      }
    }); 
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    }
     
  },[])
  return (
    <>
      <Navbar />
      <div className="analytics-container">
        <h3>Analytics</h3>
        <canvas ref={chartRef} style={{ width: '100', height:'100' }} />
      </div>
      <Footer />
    </>
  );
};

export default Analytics;

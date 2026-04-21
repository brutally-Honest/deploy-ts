import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState<string>("Loading...");
  const [error, setError] = useState<string>("");

  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Request failed");
        }
        return res.json();
      })
      .then((resData) => {
        setData(resData.msg || JSON.stringify(resData));
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Backend Response</h1>

      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
}

export default App;
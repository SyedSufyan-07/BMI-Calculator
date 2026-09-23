import React, { useState } from "react";
function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>BMI Calculator</h1>
        <input type="number" placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={styles.input}
        />
        <input type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={styles.input}
        />
        <button onClick={calculateBMI} style={styles.button}>
          Calculate BMI
        </button>
        {bmi !== null && (
          <div style={styles.result}>
            <h2>Your BMI: {bmi}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  box: {
    width: "350px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "90%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    width: "98%",
    padding: "12px",
    marginTop: "15px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    color: "#333",
  },
};

export default App;

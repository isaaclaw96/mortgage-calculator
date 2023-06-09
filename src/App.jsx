import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Container, Grid } from "@mui/material";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";

function App() {

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 600,
    loanAmount: 2800,
    loanTerm: 5,
    interestRate: 5
  })

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6} >
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

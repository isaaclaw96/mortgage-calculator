import { Container, Stack } from "@mui/material";
import React, { useState } from "react";
import SliderComponent from "./common/SliderComponent";

function SliderSelect({ data, setData }) {
  const bank_limit = 10000;
  console.log(data);

  return (
    <Stack spacing={2} padding={2}>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            loanAmount: value * 0.8
          });
        }}
      
        max={bank_limit}
        min={1000}
        steps={100}
        unit="$"
        label="Home Value"
        amount={data.homeValue}
        value={data.homeValue}
      />
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: value,
            loanAmount: (data.homeValue - value).toFixed(0)       
          });
        }}
        max={data.homeValue}
        min={0}
        steps={100}
        unit="$"
        label="Down Payment"
        amount={data.downPayment}
        value={data.downPayment}
      />
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            loanAmount: value,
            downPayment: (data.homeValue - value).toFixed(0)
          });
        }}
   
        max={data.homeValue}
        min={0}
        steps={100}
        unit="$"
        label="Loan Amount"
        amount={data.loanAmount}
        value={data.loanAmount}
      />
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            interestRate: value,
          });
        }}

        max={18}
        min={2}
        steps={1}
        unit="%"
        label="Interest Rate"
        amount={data.interestRate}
        value={data.interestRate}
      />
    </Stack>
  );
}

export default SliderSelect;

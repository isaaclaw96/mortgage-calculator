import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Result({ data }) {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12;
  const intrestPerMonth = interestRate / 100 / 12;

  // Calculate Monthly Payment
  // Monthly Payment = (Loan Amount * Monthly Interest Rate) / (1 - (1 + Monthly Interest Rate)^(-Total Loan Months))
  const monthlyPayment =
    (loanAmount * intrestPerMonth) /
    (1 - Math.pow(1 + intrestPerMonth, -totalLoanMonths));

  // Calculate Total Interest
  // totalInterest = monthlyPayment * totalLoanMonths - loanAmount
  const totalInterest = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, totalInterest],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Stack>
      <Typography textAlign="center" variant="h5">
        Monthly Payment: $ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
}

export default Result;

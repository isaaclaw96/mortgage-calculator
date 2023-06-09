import { Slider, Stack, Typography } from "@mui/material";
import React from "react";

function SliderComponent({
  min = 0,
  max = 100,
  steps = 5,
  unit = "$",
  label = "Label",
  onChange,
  value,
}) {
  return (
    <Stack my={1.4}>
      <Typography variant="subtitle">{label}</Typography>
      <Typography variant="h6">{value}</Typography>
      <Slider
        aria-label="Default"
        value={value}
        min={min}
        max={max}
        step={steps}
        unit={unit}
        marks={[
          {
            value: min,
            label: `${unit}${min}`,
          },
          {
            value: max,
            label: `${unit}${max}`,
          },
        ]}
        valueLabelDisplay="auto"
        onChange={onChange}
      />
    </Stack>
  );
}

export default SliderComponent;

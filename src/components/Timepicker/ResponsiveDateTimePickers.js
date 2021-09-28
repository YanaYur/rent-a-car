import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Stack from "@mui/material/Stack";

import "./styles.scss";

export default function ResponsiveDateTimePickers({ label, onChange, value }) {
  return (
    <div className="datepicker-container">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={1}>
          <DateTimePicker
            label={label}
            inputFormat="dd/MM/yyyy HH:mm"
            fullWidth={true}
            renderInput={(params) => <TextField {...params} label={label} />}
            value={value}
            onChange={(newValue) => {
              onChange(newValue);
              // setValue(newValue);
            }}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}

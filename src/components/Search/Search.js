import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ResponsiveDateTimePickers from "../Timepicker/ResponsiveDateTimePickers";
import Button from "@mui/material/Button";
import { useState } from "react";

import "./styles.scss";

export default function Search({ onSubmit, params }) {
  const offices = [
    { label: "calle Bailen, 34, Barcelona", value: "bcn" },
    { label: "calle Serrano, 56 Madrid", value: "bcn" },
    { label: "via Palazzo Reale 78, Milan", value: "bcn" },
    { label: "Rue de Verneuil 5, Paris", value: "bcn" },
    { label: "via Flaminia 23, Roma", value: "bcn" },
    { label: "calle Blanco White 1, Sevilla", value: "bcn" },
  ];

  const [location, setLocation] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const [error, setError] = useState();

  const handleSubmit = () => {
    if ((location, fromDate, toDate)) {
      onSubmit({ from: fromDate, to: toDate, location });
    } else {
      setError("Pease, select all fields");
    }
  };

  return (
    <div className="search-bar">
      <div className="search-bar__searcher">
        <div className="search-bar__autocomplete">
          <Autocomplete
            disablePortal
            id="office-searcher"
            options={offices}
            onChange={(_, value) => setLocation(value)}
            fullWidth={true}
            renderInput={(params) => (
              <TextField {...params} label={"Choose your city"} />
            )}
          />
        </div>
        <ResponsiveDateTimePickers
          onChange={setFromDate}
          value={fromDate || params.from}
          label={"Choose date from"}
        />
        <ResponsiveDateTimePickers
          onChange={setToDate}
          value={toDate || params.to}
          label={"Choose date to"}
        />
        <Button
          variant="outlined"
          className="button-submit"
          onClick={handleSubmit}
        >
          Search
        </Button>
        <div>{error && <p>{error}</p>}</div>
      </div>
    </div>
  );
}

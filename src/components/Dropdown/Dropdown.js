import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const DropDown = (props) => {
  return (
    <FormControl className="input" fullWidth>
      <InputLabel style={{ color: "black" }}>{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={props.label}
        value={props.value}
        onChange={props.onChange}
      >
        {props.data.map((d, idx) => (
          <MenuItem key={idx} value={d.id}>
            {d.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;

import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "../../screens/Tracking/style.css";

const Searchbar = () => {
  return (
    <div>
      <FormControl className="input" fullWidth>
        <InputLabel>Search</InputLabel>
        <OutlinedInput
          //   value={values.amount}
          //   onChange={handleChange("amount")}
          endAdornment={<SearchIcon style={{ color: "#00000087" }} />}
          label="Search"
        />
      </FormControl>
    </div>
  );
};

export default Searchbar;

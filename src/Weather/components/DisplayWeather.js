import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const DisplayWeather = ({current})=> {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-read-only"
          label="Temperature"
          defaultValue="0"
          value={JSON.stringify(current.temperature)}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only"
          label="Wind Speed"
          defaultValue="0"
          value={JSON.stringify(current.windspeed)}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only"
          label="Wind Direction"
          defaultValue="-"
          value={JSON.stringify(current.winddirection)}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only"
          label="Time"
          defaultValue="-"
          value={JSON.stringify(current.time)}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only"
          label="Day/Night"
          defaultValue="Yes"
          value={JSON.stringify(current.is_day) === '1' ? "Day" : "Night"}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only"
          label="Weather Code"
          defaultValue="0"
          value={JSON.stringify(current.weathercode)}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Box>
  );
}

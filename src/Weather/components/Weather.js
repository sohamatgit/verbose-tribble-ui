import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { debounce } from "@mui/material/utils";
import { fetchLocation, fetchWhether } from "../apis/fetchData";
import { DisplayWeather } from "./DisplayWeather";
import "./Weather.css"

export const Weather = () => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [weather, setWeather] = useState(null);

  // Custom debounce function
  const debouncedFetchLocation = debounce((searchValue) => {
    fetchLocation(searchValue)
      .then((data) => {
        console.log(data.results);
        setOptions(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error here
      });
  }, 500); // Set the debounce delay (in milliseconds)

  useEffect(() => {
    console.log("useEffect Called");

    if (inputValue === "") {
      setWeather(null)
      setOptions(value ? [value] : []);
      return undefined;
    }

    // Call the debounced function with the current inputValue
    debouncedFetchLocation(inputValue);
  }, [value, inputValue]);

  const handleValueChange = (event, newValue) => {
    setOptions(newValue ? [newValue, ...options] : options);
    setValue(newValue);
    console.log(newValue);
    if(newValue){
      const [latitude, longitude] = [newValue.latitude, newValue.longitude]
      console.log(latitude, longitude)

      fetchWhether(latitude, longitude)
        .then((data) => {
          console.log(data);
          setWeather(data)
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle the error here
        });
    }
    else{
      setWeather(null)
    }

  };

  return (
    <div>
      <div className="search-loc">
        <Autocomplete
          disablePortal
          id="search-location"
          options={options || []}
          noOptionsText="No locations"
          onChange={handleValueChange}
          getOptionLabel={(option) => option && option.id.toString()}
          filterOptions={(x) => x}
          sx={{ align: "center", width: 300 }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            console.log(newInputValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Enter Location" />
          )}
          renderOption={(props, option) => {
            return <li {...props}>{option.name + " " + option.country}</li>;
          }}
        />
      </div>
      <div className="weather-info">
        {weather ? (
          <DisplayWeather current={weather.current_weather} />
        ) : (
          <p>Select Location to see weather details</p>
        )}
      </div>
    </div>
  );
};

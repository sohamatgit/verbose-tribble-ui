import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";

export const Clock = ()=> {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MultiSectionDigitalClock"]}>
        <DemoItem label={'"minutes" and "seconds"'}>
          <MultiSectionDigitalClock
            timeSteps={{ minutes: 1, seconds: 1 }}
            views={["minutes", "seconds"]}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

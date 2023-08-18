import Slider from "@mui/material/Slider";
import { useContext } from "react";
import SettingsContext from "./SettingsContext";
import BackButton from "./BackButton";

function Settings() {
  const settingsInfo = useContext(SettingsContext);

  const handleWorkMinutesChange = (newValue) => {
    settingsInfo.setWorkMinutes(newValue);
  };

  const handleBreakMinutesChange = (newValue) => {
    settingsInfo.setBreakMinutes(newValue);
  };
  
  return (
    <div style={{ textAlign: "left" }}>
      <label>Work minutes:{settingsInfo.workMinutes}</label>
      <Slider
        sx={{
          width: 300,
          color: "success.main",
        }}
        onChange={(event, value) => handleWorkMinutesChange(value)}
        value={settingsInfo.workMinutes}
        max={120}
        min={1}
      />
      <br />
      <label>Break minutes:{settingsInfo.breakMinutes}</label>
      <Slider
        max={120}
        min={1}
        onChange={(event, value) => handleBreakMinutesChange(value)}
        value={settingsInfo.breakMinutes}
        sx={{
          width: 300,
          color: "#b2102f",
        }}
      />
      <div style={{textAlign:'center',marginTop:'20px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
      </div>
    </div>
  );
}

export default Settings;

import "./App.css";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import { useState } from "react";
import SettingsContext from "./components/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [automatic,setAutomatic] = useState(false);
  return (
    <>
      <main>
          <div style={{marginBottom:'20px',fontSize:'35px',fontFamily:'Arial, Helvetica, sans-serif',fontWeight:600}}>Pomodoro Timer</div>
          <SettingsContext.Provider value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
            automatic,
            setAutomatic

          }}>
          {showSettings ? <Settings /> : <Timer />}
          </SettingsContext.Provider>
          
      </main>
    </>
  );
}

export default App;

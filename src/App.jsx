import "./App.css";
import { useState } from "react";
function App() {
  const [breakTimeSrting, setBreak] = useState("5:00");
  const [sessionTimeString, setSession] = useState("25:00");
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [bOrs, setbOrs] = useState(true);
  let seconds = 59;

  function handleBreakTime(e) {
    if (e.target.id == "sub") {
      if (breakTime > 1) {
        setBreakTime(breakTime - 1);
        setBreak(breakTime - 1 + ":00");
      } else {
        setBreakTime(1);
      }
    } else {
      setBreakTime(breakTime + 1);
      setBreak(breakTime + 1 + ":00");
    }
  }

  function handleStart() {
    setBreak(breakTime - 1 + ":" + seconds);
    seconds -= 1;
    setTimeout(handleStart, 1000);
  }

  function handleSessionTime(e) {
    if (e.target.id == "sub") {
      if (sessionTime > 1) {
        setSessionTime(sessionTime - 1);
        setSession(sessionTime - 1 + ":00");
      } else {
        setSessionTime(1);
      }
    } else {
      setSessionTime(sessionTime + 1);
      setSession(sessionTime + 1 + ":00");
    }
  }

  function handlebors() {
    setbOrs(!bOrs);
  }

  return (
    <div className="flex flex-col h-[100vh] w-[100%] justify-center items-center bg-[#2A2C31] gap-4">
      <h1 className="animate-pulse text-yellow-50 text-3xl font-semibold">
        Pomodoro Clock
      </h1>
      <div className="flex flex-col w-[350px] h-min gap-2 pt-2  items-center ">
        <div className="flex justify-between w-full ">
          <div className=" w-[100px] h-[100px] flex flex-col items-center justify-center gap-2 ">
            <p className="text-red-600 text-base">Break lenght</p>
            <div className="flex items-center">
              {/*this is break section*/}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-yellow-50 hover:text-gray-600"
                onClick={handleBreakTime}
                id="sub"
                name="sub"
              >
                <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
              </svg>

              <p className="text-3xl text-yellow-50">{breakTime}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-yellow-50 hover:text-gray-600"
                onClick={handleBreakTime}
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </div>
          </div>
          <div className="  h-[100px] w-[120px] flex flex-col items-center justify-center gap-2">
            <p className="text-green-600 text-base">Session Length</p>
            <div className="flex items-center">
              {/*this is session section*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-yellow-50 hover:text-gray-600"
                onClick={handleSessionTime}
                id="sub"
              >
                <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
              </svg>

              <p className="text-3xl text-yellow-50 ">{sessionTime}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-yellow-50 hover:text-gray-600"
                onClick={handleSessionTime}
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </div>
          </div>
        </div>

        {bOrs ? (
          <div className="flex justify-center items-center flex-col gap-1 h-72 w-72 border-4 rounded-[100%] border-green-500  ">
            <p className="text-yellow-50 text-5xl">{sessionTimeString}</p>
            <div className="flex gap-8">
              <button className="text-yellow-50">Start</button>
              <button className="text-yellow-50">Stop</button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col gap-1 h-72 w-72 border-4 rounded-[100%] bg-green-500 border-green-500  ">
            <p className="text-yellow-50 text-5xl">{breakTimeSrting}</p>
            <div className="flex gap-8">
              <button className="text-yellow-50">Start</button>
              <button className="text-yellow-50">Stop</button>
            </div>
          </div>
        )}

        <div className="flex w-full items-center justify-between">
          <button className="text-yellow-50" onClick={handlebors}>
            Next
          </button>
          <button
            className="text-yellow-50"
            onClick={() => {
              setBreakTime(5);
              setSessionTime(25);
              setBreak("5:00");
              setSession("25:00");
              setbOrs(true);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <p className="text-yellow-50 text-center text-xs">by jazim</p>
    </div>
  );
}

export default App;

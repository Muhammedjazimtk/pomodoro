import "./App.css";
// import { PlusIcon } from "@heroicons/react/20";
function App() {
  return (
    <div className="flex flex-col h-[100vh] w-[100%] justify-center items-center bg-[#2A2C31] gap-4">
      <h1 className="text-yellow-50 text-3xl font-semibold">Pomodoro Clock</h1>
      <div className="flex flex-col w-[350px] h-min gap-2 pt-2  items-center ">
        <div className="flex justify-around w-full ">
          <div className=" w-[100px] h-[100px] flex flex-col items-center justify-center gap-2 ">
            <p className="text-red-600 text-base">Break lenght</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-yellow-50"
              >
                <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
              </svg>

              <p className="text-3xl text-yellow-50">5</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-yellow-50"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </div>
          </div>
          <div className="  h-[100px] w-[120px] flex flex-col items-center justify-center gap-2">
            <p className="text-green-600 text-base">Sessionlength</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-yellow-50"
              >
                <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
              </svg>

              <p className="text-3xl text-yellow-50">25</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-yellow-50"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-1 h-72 w-72 border-4 rounded-[100%] border-green-500  ">
          <p className="text-yellow-50 text-5xl">25:00</p>
          <button className="text-yellow-50">Click to Start</button>
        </div>
        <div className="flex w-full items-center justify-between">
          <button className="text-yellow-50">Next</button>
          <button className="text-yellow-50">Reset</button>
        </div>
      </div>
      <p className="text-yellow-50 text-center text-xs">by jazim</p>
    </div>
  );
}

export default App;

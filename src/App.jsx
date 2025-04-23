import SunnyIcon from '@mui/icons-material/Sunny';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MailIcon from '@mui/icons-material/Mail';
import Mail from "./components/Mail";
import ToDoList from "./components/ToDoList";
import Calendar from "./components/Calendar";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import { Modal } from "@mui/material";
import { useEffect, useState } from "react";

function App() {

  const butSx = { position: 'absolute', left: 'calc(50% - 13px)', scale: '1.5', top: 'calc(50% - 13px)', color: 'white' }
  const widgetSx = { position: 'absolute', left: 'calc(50% - 13px)', scale: '1.5', top: 'calc(50% - 13px)', color: 'white' }

  let now = new Date()
  let curTime = [
    now.getHours(),
    ':',
    (now.getMinutes() / 10 < 1 ? `0${now.getMinutes()}` : now.getMinutes())
  ].join('');

  let day
  switch (now.getDay()) {
    case 1:
      day = 'Monday'
      break;
    case 2:
      day = 'Tuesday'
      break;
    case 3:
      day = 'Wednesday'
      break;
    case 4:
      day = 'Thursday'
      break;
    case 5:
      day = 'Friday'
      break;
    case 6:
      day = 'Saturday'
      break;
    case 0:
      day = 'Sunday'
      break;
  }

  let monthName
  switch (now.getMonth() + 1) {
    case 1:
      monthName = "January";
      break;
    case 2:
      monthName = "February";
      break;
    case 3:
      monthName = "March";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = "May";
      break;
    case 6:
      monthName = "June";
      break;
    case 7:
      monthName = "July";
      break;
    case 8:
      monthName = "August";
      break;
    case 9:
      monthName = "September";
      break;
    case 10:
      monthName = "October";
      break;
    case 11:
      monthName = "November";
      break;
    case 12:
      monthName = "December";
      break;
  }

  const [mailOpen, setMailOpen] = useState(false)
  const handleMailOpen = () => {
    setMailOpen(true);
  }
  const handleMailClose = () => {
    setMailOpen(false);
  }
  const [calendarOpen, setCalendarOpen] = useState(false)
  const handleCalendarOpen = () => {
    setCalendarOpen(true);
  }
  const handleCalendarClose = () => {
    setCalendarOpen(false);
  }
  const [todoOpen, setTodoOpen] = useState(false)
  const handleTodoOpen = () => {
    setTodoOpen(true);
  }
  const handleTodoClose = () => {
    setTodoOpen(false);
  }

  const [imgOpen, setimgOpen] = useState(false)
  const handleimgOpen = () => {
    setimgOpen(true);
  }
  const handleimgClose = () => {
    setimgOpen(false);
  }

  let isDay;
  if (now.getHours() > 6 && now.getHours() < 18) {
    isDay = true;
  } else {
    isDay = false;
  }

  const [imgNo, setImgNo] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgNo == 4) {
        setImgNo(1);
      } else {
        setImgNo(imgNo + 1);
      }
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }
  , [imgNo])
  const imgSrc = `./${imgNo}.jpeg`

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <div className={`h-screen md:w-50 w-30 ${isDay ? "bg-amber-200" : "bg-[#213448]"}`}>
          <div className="bg-gray-100/75 h-[95%] m-5 rounded-full md:w-25 w-15 flex flex-col justify-between">

            <div className="bg-black/75 button">
              <HomeFilledIcon sx={butSx} />
            </div>

            <div>
              <div className="my-4">
                {[1, 2, 3].map((i) => {
                  return (
                    <div className={`${i == 1 ? "bg-black/20" : "bg-black/5"} button`}>
                      <h1 className="absolute h1b md:text-2xl text-xl font-semibold text-black/50">{i}</h1>
                    </div>
                  )
                })}
                <hr className="w-[70%] mx-auto my-2" />
                <h1 className="text-center leading-3.75">W<br />O<br />R<br />K<br />S<br />P<br />A<br />C<br />E<br />S</h1>
              </div>
              <div className="rounded-full bg-black/25 button">
                <SettingsIcon sx={butSx} />
              </div>
            </div>

          </div>
        </div>

        {/* Widgets section */}
        <div className={`min-h-screen grid lg:grid-cols-4 grid-cols-2 grid-rows-4 max-h-screen w-full bg-linear-to-r ${isDay ? "from-amber-200" : "from-[#213448]"} to-gray-300 h-full lg:gap-0 gap-15`}>

          <div className="col-start-1 col-end-3 row-start-1 row-end-3 m-auto">
            <h1 className="font-inria text-6xl font-semibold text-gray-900"><span className="italic font-normal">Hola</span> Vinay!</h1>
            <p className="py-2 text-2xl">{day}, {now.getDate()} {monthName}<br /><SunnyIcon /> 29°C, Thane</p>
            <h2 className="text-4xl "><AccessTimeFilledIcon /> {curTime}</h2>
          </div>

          {/* Mail */}
          <div className='visibility widget row-start-3 col-span-2 col-end-5'>
            <Mail />
          </div>
          <div className="rounded-full bg-black/25 widgetIcons lg:hidden block" onClick={handleMailOpen}>
            <MailIcon sx={widgetSx} />
          </div>
          <Modal
            open={mailOpen}
            onClose={handleMailClose}
            className="flex justify-center items-center"
            sx={{
              backdropFilter: 'blur(5px)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div>
              <div className={`${isDay ? "bg-amber-200" : "bg-[#687b8f]"} rounded-2xl`}>
                <Mail />
              </div>
              <div className="flex justify-end">
                <button onClick={handleMailClose} className="bg-red-500/75 text-white px-4 py-2 rounded-full my-2">Close</button>
              </div>
            </div>
          </Modal>

          {/* Calendar */}
          <div className="visibility ">
            <Calendar />
          </div>
          <div className="rounded-full bg-black/25 widgetIcons lg:hidden block" onClick={handleCalendarOpen}>
            <CalendarMonthIcon sx={widgetSx} />
          </div>
          <Modal
            open={calendarOpen}
            onClose={handleCalendarClose}
            className="flex justify-center items-center"
            sx={{
              backdropFilter: 'blur(5px)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div>
              <div className={`${isDay ? "bg-amber-200" : "bg-[#687b8f]"} rounded-2xl`}>
                <Calendar />
              </div>
              <div className="flex justify-end">
                <button onClick={handleCalendarClose} className="bg-red-500/75 text-white px-4 py-2 rounded-full my-2">Close</button>
              </div>
            </div>
          </Modal>

          {/* ToDoList */}
          <div className="visibility widget">
            <ToDoList />
          </div>
          <div className="rounded-full bg-black/25 widgetIcons lg:hidden block" onClick={handleTodoOpen}>
            <TaskAltIcon sx={widgetSx} />
          </div>
          <Modal
            open={todoOpen}
            onClose={handleTodoClose}
            className="flex justify-center items-center"
            sx={{
              backdropFilter: 'blur(5px)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div>
              <div className={`${isDay ? "bg-amber-200" : "bg-[#687b8f]"} rounded-2xl`}>
                <ToDoList />
              </div>
              <div className="flex justify-end">
                <button onClick={handleTodoClose} className="bg-red-500/75 text-white px-4 py-2 rounded-full my-2">Close</button>
              </div>
            </div>
          </Modal>


          <div className={`visibility row-start-3 col-start-1 col-span-2 row-span-2 mx-auto w-85 h-100 bg-[#d3d3d3] shadow-xl transform ${imgNo % 2 == 0 ? "rotate-3" : "-rotate-3"} `}>
            <img className='m-2' src={imgSrc} alt="" />
          </div>
          <div className="rounded-full bg-black/25 widgetIcons lg:hidden block" onClick={handleimgOpen}>
            <PhotoCameraBackIcon sx={widgetSx} />
          </div>
          <Modal
            open={imgOpen}
            onClose={handleimgClose}
            className="flex justify-center items-center"
            sx={{
              backdropFilter: 'blur(5px)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div>
              <div className={`row-start-3 col-start-1 col-span-2 row-span-2 mx-auto w-85 h-100 bg-[#d3d3d3] shadow-xl transform ${imgNo % 2 == 0 ? "rotate-3" : "-rotate-3"} `}>
                <img className='m-2' src={imgSrc} alt="" />
              </div>
            </div>
          </Modal>

        </div>

      </div>
    </>
  )
}

export default App

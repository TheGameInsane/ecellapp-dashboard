import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers"
import { List, ListItem, Checkbox, ListItemButton, TableContainer, Table, TableBody, TableRow, TableCell, Paper, TablePagination, IconButton } from "@mui/material"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MailIcon from '@mui/icons-material/Mail';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SunnyIcon from '@mui/icons-material/Sunny';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListIcon from '@mui/icons-material/List';

import { useState } from "react";

function App() {
  const [page, setPage] = useState(0)
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const mails = [
    { name: 'Joel George', subject: 'Assignment-2 Graded', timeStamp: `${(new Date(Date.now())).toDateString()}` },
    { name: 'admin IITM', subject: '10 days vacations approved', timeStamp: `${(new Date(Date.now())).toDateString()}` },
    { name: 'Joel George', subject: 'Assignment-2 Graded', timeStamp: `${(new Date(Date.now())).toDateString()}` },
    { name: 'admin IITM', subject: '10 days vacations approved', timeStamp: `${(new Date(Date.now())).toDateString()}` },
    { name: 'Joel George', subject: 'Assignment-2 Graded', timeStamp: `${(new Date(Date.now())).toDateString()}` },
    { name: 'admin IITM', subject: '10 days vacations approved', timeStamp: `${(new Date(Date.now())).toDateString()}` },
  ]

  const butSx = { position: 'absolute', left: 'calc(50% - 13px)', scale: '1.5', top: 'calc(50% - 13px)', color: 'white' }
  const widgetSx = { position: 'absolute', left: 'calc(50% - 13px)', scale: '1.5', top: 'calc(50% - 13px)', color: 'white' }

  var now = new Date();
  var curTime = [
    now.getHours(),
    ':',
    now.getMinutes()
  ].join('');

  var day;
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

  let monthName = ''
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

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <div className={`h-screen md:w-50 w-30 ${now.getHours() > 6 ? "bg-amber-200" : "bg-[#213448]"}`}>
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
        <div className={`min-h-screen grid lg:grid-cols-4 grid-cols-2 grid-rows-4 max-h-screen w-full bg-linear-to-r ${now.getHours() > 6 ? "from-amber-200" : "from-[#213448]"} to-gray-300 h-full lg:gap-0 gap-15`}>

          <div className="col-start-1 col-end-3 row-start-1 row-end-3 m-auto">
            <h1 className="font-inria text-6xl font-semibold text-gray-900"><span className="italic font-normal">Hola</span> Vinay!</h1>
            <p className="py-2 text-2xl">{day}, {now.getDate()} {monthName}<br /><SunnyIcon /> 29°C, Thane</p>
            <h2 className="text-4xl "><AccessTimeFilledIcon /> {curTime}</h2>
          </div>

          <div className="widget min-h-95 relative row-start-3 col-span-2 col-end-5">
            <h1 className="text-2xl p-4"><MailOutlineIcon fontSize="large" /> Mails</h1>
            <TableContainer>
              <Table>
                <TableBody>
                  {
                    mails.slice(page * 5, page * 5 + 5).map((mail) => {
                      return (
                        <TableRow hover sx={{ cursor: 'pointer' }}>
                          <TableCell sx={{ border: 'none' }}><span className="font-bold">{mail.name}</span></TableCell>
                          <TableCell sx={{ border: 'none' }}>{mail.subject}</TableCell>
                          <TableCell sx={{ border: 'none' }}>{mail.timeStamp}</TableCell>
                        </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination className="absolute right-10 bottom-0" sx={{ border: 'none' }} page={page} rowsPerPageOptions={5} count={mails.length} rowsPerPage={5} onPageChange={handleChangePage} />
          </div>
          <div className="rounded-full bg-black/25 widgetIcons lg:hidden block">
            <MailIcon sx={widgetSx} />
          </div>

          <div className="widget w-[90%]">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar sx={{ width: '100%' }} />
            </LocalizationProvider>
          </div>
          <div className="rounded-full bg-black/25 widgetIcons lg:hidden block">
            <CalendarMonthIcon sx={widgetSx} />
          </div>

          <div className="widget">
            <h1 className="text-2xl pt-2"><TaskAltIcon fontSize="large" className="m-2" />To Do list</h1>
            <List>
              {[0, 1, 2].map((i) => {
                return (
                  <ListItem disableGutters disablePadding>
                    <ListItemButton >
                      <h1><Checkbox />E-Cell WMO</h1>
                    </ListItemButton>
                    <IconButton><DeleteIcon /></IconButton>
                  </ListItem>
                )
              })}
              <ListItem disableGutters>
                <ListItemButton>
                  <h1 className="flex"><AddTaskIcon fontSize="medium" className="mx-2" />Add Task</h1>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
          <div className="rounded-full bg-black/25 widgetIcons lg:hidden block">
            <ListIcon sx={widgetSx} />
          </div>
        </div>

      </div>
    </>
  )
}

export default App

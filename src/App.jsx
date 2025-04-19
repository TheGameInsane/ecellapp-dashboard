import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers"
import { List, ListItem, Checkbox, ListItemButton, TableContainer, Table, TableBody, TableRow, TableCell, Paper, TablePagination, IconButton } from "@mui/material"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SunnyIcon from '@mui/icons-material/Sunny';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SettingsIcon from '@mui/icons-material/Settings';

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

  return (
    <>
      <div className="flex">
        <div className="h-screen w-50 bg-amber-200 flex">
          <div className="bg-gray-100/75 h-[95%] m-5 rounded-full relative">

            <div className="w-30 h-30 rounded-full bg-black/75 mx-auto relative">
              <HomeFilledIcon sx={{position: 'absolute', left: 'calc(50% - 14px)', scale: '2', top: 'calc(50% - 14px)', color: 'white'}}/>
            </div>

            <div className="w-30 h-30 rounded-full bg-black/25 absolute bottom-0">
              <SettingsIcon sx={{position: 'absolute', left: 'calc(50% - 14px)', scale: '2', top: 'calc(50% - 14px)', color: 'white'}}/>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 grid-rows-4 max-h-screen w-full bg-linear-to-r from-amber-200 to-gray-300">

          <div className="col-start-1 col-end-3 row-start-1 row-end-3 m-auto">
            <h1 className="font-inria text-6xl font-semibold text-gray-900"><span className="italic font-normal">Hola</span> Vinay!</h1>
            <p className="py-2 text-2xl">Wednesday, 25th July<br /><SunnyIcon /> 29°C, Thane</p>
            <h2 className="text-4xl "><AccessTimeFilledIcon/> 13:24</h2>
          </div>

          <div className="widget min-w-200 min-h-95 relative row-start-3 col-span-2 col-end-5">
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

          <div className="widget">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar/>
            </LocalizationProvider>
          </div>

          <div className="widget min-w-75">
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
        </div>

      </div>
    </>
  )
}

export default App

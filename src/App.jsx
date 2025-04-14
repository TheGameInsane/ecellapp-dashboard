import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers"
import { List, ListItem, Checkbox, ListItemButton, TableContainer, Table, TableBody, TableRow, TableCell, Paper, TablePagination } from "@mui/material"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useState } from "react";

function App() {
  const [page , setPage] = useState(0)
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
      <div className="min-h-screen bg-linear-to-r flex p-2 from-lav1 to-lav2">

        <div className="flex flex-row justify-around w-full items-center">

          <h1 className="font-inria text-6xl font-semibold text-gray-900"><span className="italic font-normal">Hola</span> Vinay!</h1>

          <div className="flex flex-col gap-10 items-center">
            <div className="flex gap-10">
              <div className="widget">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider>
              </div>
              <div className="widget min-w-75">
                <h1 className="text-2xl pt-2"><TaskAltIcon fontSize="large" className="m-2"/>To Do list</h1>
                <List>
                  {[0, 1, 2].map((i) => {
                    return (
                      <ListItem disableGutters disablePadding>
                        <ListItemButton >
                          <h1><Checkbox />Help</h1>
                        </ListItemButton>
                      </ListItem>
                    )
                  })}
                  <ListItem disableGutters>
                    <ListItemButton>
                      <h1 className="flex"><AddTaskIcon fontSize="medium" className="mx-2"/>Add Task</h1>
                    </ListItemButton>
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="widget min-w-150 min-h-95 relative">
              <h1 className="text-2xl p-4"><MailOutlineIcon fontSize="large"/> Mails</h1>
              <TableContainer>
                <Table>
                  <TableBody>
                    {
                      mails.slice(page * 5, page * 5 + 5).map((mail) => {
                        return (
                          <TableRow hover sx={{ cursor: 'pointer' }}>
                            <TableCell sx={{border: 'none'}}><span className="font-bold">{mail.name}</span></TableCell>
                            <TableCell sx={{border: 'none'}}>{mail.subject}</TableCell>
                            <TableCell sx={{border: 'none'}}>{mail.timeStamp}</TableCell>
                          </TableRow>
                        )
                      })
                    }
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination className="absolute right-10 bottom-0" sx={{border: 'none'}} page={page} rowsPerPageOptions={5} count={mails.length} rowsPerPage={5} onPageChange={handleChangePage}/>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}

export default App

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers"
import { List, ListItem, Checkbox, ListItemButton } from "@mui/material"

function App() {

  return (
    <>
      <div className="min-h-screen bg-linear-to-r flex p-2 from-lav1 to-lav2">

        <div className="flex flex-row justify-around w-full items-center">

          <h1 className="font-inria text-6xl font-semibold text-gray-900"><span className="italic font-normal">Hola</span> Vinay!</h1>
          <div className="widget">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>
          <div className="widget min-w-75">
            <h1 className="text-2xl pt-2"><span className="material-icons scale-120 px-3">task_alt</span>To Do list</h1>
            <List>
              {[0, 1, 2].map((i) => {
                return (
                  <ListItem disableGutters disablePadding>
                    <ListItemButton >
                      <h1><Checkbox/>Help</h1>
                    </ListItemButton>
                  </ListItem>
                )
              })}
              <ListItem disableGutters>
                <ListItemButton>
                  <h1 className="flex"><span className="material-icons px-3" >add_task</span> Add Task</h1>
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

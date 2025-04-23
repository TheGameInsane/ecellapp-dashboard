import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers"

const Calendar = () => {
    return (
        <>
            <div className="widget lg:w-[90%]">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar sx={{ width: '100%' }} />
                </LocalizationProvider>
            </div>
        </>
    )
}

export default Calendar
import React, { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { TableContainer, Table, TableBody, TableRow, TableCell, TablePagination } from "@mui/material"

const Mail = () => {
    const [page, setPage] = useState(0)
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    let mails = [
        { id: 1, name: 'Joel George', subject: 'Assignment-2 Graded', timeStamp: `${(new Date(Date.now())).toDateString()}` },
        { id: 2, name: 'admin IITM', subject: '10 days vacations approved', timeStamp: `${(new Date(Date.now())).toDateString()}` },
        { id: 3, name: 'Joel George', subject: 'Assignment-2 Graded', timeStamp: `${(new Date(Date.now())).toDateString()}` },
        { id: 4, name: 'admin IITM', subject: '10 days vacations approved', timeStamp: `${(new Date(Date.now())).toDateString()}` },
        { id: 5, name: 'Joel George', subject: 'Assignment-2 Graded', timeStamp: `${(new Date(Date.now())).toDateString()}` },
        { id: 6, name: 'admin IITM', subject: '10 days vacations approved', timeStamp: `${(new Date(Date.now())).toDateString()}` },
    ]
    return (
        <>
            <div className="lg:min-h-95 min-h-98 relative mb-1">
                <h1 className="text-2xl p-4"><MailOutlineIcon fontSize="large" /> Mails</h1>
                <TableContainer>
                    <Table>
                        <TableBody>
                            {
                                mails.slice(page * 5, page * 5 + 5).map((mail) => {
                                    return (
                                        <TableRow hover sx={{ cursor: 'pointer' }} key={mail.id}>
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
        </>
    )
}

export default Mail
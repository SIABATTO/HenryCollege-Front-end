import React from 'react';
import { Pagination } from '@mui/material';
import { useState } from 'react';

const Paged = () => {
    const [page,setPage] = useState(1)
    const handleChange = (e,p) => {
        console.log(e,p)
        setPage(p)
    }
    return (
        <div>
        <h1>Esta pagina es {page}</h1>
<<<<<<< HEAD
        <Pagination count={10} color="secondary" onChange={handleChange}/>
=======
        <Pagination count={10} color="primary" onChange={handleChange}/>
>>>>>>> 7d4d2d13015c624da1df79b9c477dfa701b471dd
        </div>
    )
}
export default Paged;
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
        <Pagination count={10} color="secondary" onChange={handleChange}/>
        </div>
    )
}
export default Paged;
import React from "react";
import { Pagination } from "@mui/material";
import { useState } from "react";


const Paged = () => {
  const [page, setPage] = useState(1);
  const handleChange = (e, p) => {
    setPage(p);
  };
  return (
    <div>
      <h1>Esta pagina es {page}</h1>
      <Pagination
        count={10}
        color="secondary"
        onChange={handleChange}
        sx={{ 
            '& .Mui-selected': { color: 'gray' }, 
            '& .MuiPaginationItem-root': { fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', color: 'white'},
            '& .MuiPaginationItem-root.Mui-selected': { color: 'black' },
            '& .css-wjh20t-MuiPagination-ul': { justifyContent: 'center' }, 
        }}
      />
    </div>
  );
};

export default Paged;

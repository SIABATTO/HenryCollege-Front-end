import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const columns = [

  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'nombre', headerName: 'Nombre', width: 100 },
  { field: 'apellido', headerName: 'Apellido', width: 130 },
  {
    field: 'correo',
    headerName: 'Correo',
    type: 'string',
    width: 150,
  },
  {
    field: 'telefono',
    headerName: 'Telefono',
    type: 'string',
    width: 150,
  },
  {
    field: 'contraseña',
    headerName: 'Contraseña',
    type: 'string',
    width: 100,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];


const UserDashboard = () => {

  React.useEffect(() => {
  console.log(stateUsers)    
  }, [])
  const stateUsers = useSelector(state=>state.curses.users)
  const rows = stateUsers

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>    
  );
}

export default UserDashboard
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FormRegister=()=> {
    const [input, setInput] = React.useState({
        nombre : '',
        apellido : '',
        correo: '',
        telefono: '',
        contraseña: '',
        imagen: '',
        genero: ''
    });
  return (
    <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 2, display: 'flex', flexWrap: 'wrap' },
        }}
        noValidate
        autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-controlled"
          label="Nombre"
          value={input.nombre}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <TextField
          sx={{ml:2}}
          id="outlined-controlled"
          label="Apellido"
          value={input.apellido}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-controlled"
          label="Correo"
          value={input.correo}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <TextField
         sx={{ml:2}}
          id="outlined-controlled"
          label="Telefono"
          value={input.telefono}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-controlled"
          label="Contraseña"
          value={input.contraseña}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <TextField
         sx={{ml:2}}
          id="outlined-controlled"
          label="Repite la contraseña"
          value={input.contraseña}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-controlled"
          label="Imagen"
          value={input.imagen}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <TextField
         sx={{ml:2}}
          id="outlined-controlled"
          label="Genero"
          value={input.genero}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </div>
    </Box>
  );
}
export default FormRegister
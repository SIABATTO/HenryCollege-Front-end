import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const FormRegister=()=> {
    const [input, setInput] = React.useState({
        nombre : '',
        apellido : '',
        correo: '',
        telefono: '',
        contraseña: ''        
    });
    const onChange = (event) =>{
      event.preventDefault()
      const {name} = event.target
      const {value} = event.target
      setInput({
        ...input,
        [name] : value
      })
    }


    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 3, display: 'flex', flexWrap: 'wrap'},
        }}
        noValidate
        autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-controlled"
          label="Nombre"
          name='nombre'
          value={input.nombre}
          onChange={onChange}
        />
        <TextField
          sx={{ml:2}}
          id="outlined-controlled"
          label="Apellido"
          name='apellido'
          value={input.apellido}
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          id="outlined-controlled"
          label="Correo"
          name='correo'
          value={input.correo}
          onChange={onChange}
        />
        <TextField
         sx={{ml:2}}
          id="outlined-controlled"
          label="Telefono"
          name='telefono'
          value={input.telefono}
          onChange={onChange}
        />
      </div>
      <div>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        <TextField
         sx={{ml:2}}
          id="outlined-controlled"
          label="Repite la contraseña"
          name='contraseña'
          value={input.contraseña}
          onChange={onChange}
        />
      </div>
      <Button sx={{mr: 2 , bgcolor:'#ffff00',color:'#212121', width:'90%'}} variant="contained">Registrarse</Button>
      
    </Box>
  );
}
export default FormRegister
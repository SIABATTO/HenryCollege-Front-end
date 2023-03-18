import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { addUser } from '../../redux/slices/Slices';
import { useDispatch } from 'react-redux';

const FormRegister=()=> {

  const dispatch = useDispatch()

    const [input, setInput] = React.useState({
        id : 0,
        nombre : '',
        apellido : '',
        correo: '',
        telefono: '',
        contraseña: '',
        confirm_contraseña: ''        
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
    const onSubmit = (event) => {
       event.preventDefault()
       setInput({
        ...input,
        id : +1
       })
       input.contraseña !== input.confirm_contraseña ?
       alert('La contraseña no coincide') : 
       dispatch(addUser(input)) 
       alert('Usuario creado satisfactoriamente')      
    }
    
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
          type="email"
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
        <TextField
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            value={input.contraseña}
            name="contraseña"
            onChange={onChange}
          />  
        <TextField
            sx={{ml:2}}
            id="outlined-password-input"
            label="Repite contraseña"
            type="password"
            value={input.confirm_contraseña}
            name="confirm_contraseña"
            autoComplete="current-password"
            onChange={onChange}
              />   
      </div>
          <Button 
            sx={{mr: 2 , bgcolor:'#ffff00',color:'#212121', width:'90%'}} 
            variant="contained"
            onClick={onSubmit}
            type='submit'
            >Registrarse
          </Button>      
    </Box>
  );
}
export default FormRegister
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { postNewUser } from '../../redux/store/slices/users/getAllUsers';
import { useDispatch } from 'react-redux';

const FormRegister=()=> {

    const dispatch = useDispatch()

    const [input, setInput] = React.useState({
        firstName : '',
        lastName : '',
        email: '',
        phone: '',
        password: ''               
    });
    const [confirmPas, setConfirmPas] = React.useState('')

    const onConfirmPass = (event)=>{
      event.preventDefault()
      setConfirmPas(event.target.value)
    }
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
       input.password !== confirmPas ?
       alert('La contraseña no coincide') : 
       dispatch(postNewUser(input))             
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
          name='firstName'
          value={input.firstName}
          onChange={onChange}
        />
        <TextField
          sx={{ml:2}}
          id="outlined-controlled"
          label="Apellido"
          name='lastName'
          value={input.lastName}
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          id="outlined-controlled"
          label="Correo"
          name='email'
          type="email"
          value={input.email}
          onChange={onChange}
        />
        <TextField
         sx={{ml:2}}
          id="outlined-controlled"
          label="Telefono"
          name='phone'
          value={input.phone}
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            value={input.password}
            name="password"
            onChange={onChange}
          />  
        <TextField
            sx={{ml:2}}
            id="outlined-password-input"
            label="Repite contraseña"
            type="password"
            value={confirmPas}
            name="confirm_contraseña"
            autoComplete="current-password"
            onChange={onConfirmPass}
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
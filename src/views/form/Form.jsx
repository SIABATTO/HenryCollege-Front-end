import { 
  Grid, 
  TextField, 
  Box, 
  Card, 
  CardContent,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import styles from "./Form.module.css";
import React, { useState } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Form() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    // console.log([e.target.name], e.target.value)
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (email, password) => {
    console.log(email, password);
    setLoading(true)
    alert(`datos iniciar sesion:::, ${email}, ${password}`)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Box my={5}>
          <Grid container direction="row" spacing={2}>
            <Card>
              <CardContent>
                <Grid item xs={12} sm={12} md={20} lg={20} xl={20}>
                  <TextField
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  error={false}
                  label="Tu email"
                  type="text"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                  sx={{ width: 300 }}
                  />
                </Grid>
                
                <FormControl 
                name="password"
                value={password}
                onChange={handleOnChange}
                error={false}
                label="Tu contraseña"
                type="text"
                fullWidth
                variant="outlined"
                sx={{ m: 2, width: 300 }} 
                >
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
                <FormHelperText id="outlined-password-helper-text">Campo obligatorio</FormHelperText>
              </FormControl>

                <Box sx={{'& > button': { m: 1 } }}>
                  <LoadingButton
                  size="small"
                  onClick={() => handleSubmit(email, password)}
                  loading={loading}
                  variant="outlined"
                  disabled={ !loading ? false : true}
                  style={{ width: 300 }}
                  sx={{ mr: 2 ,bgcolor:'#ffff00',color:'#212121'}}
                  >
                    Iniciar Sesión
                  </LoadingButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default Form;
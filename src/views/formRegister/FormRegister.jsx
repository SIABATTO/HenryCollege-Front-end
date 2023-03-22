import {
  TextField,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import * as React from "react";
import { postNewUser } from "../../redux/store/slices/users/getAllUsers";
import { useDispatch } from "react-redux";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const FormRegister = () => {
  const dispatch = useDispatch();

  const [input, setInput] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [confirmPas, setConfirmPas] = React.useState("");

  const onConfirmPass = (event) => {
    event.preventDefault();
    setConfirmPas(event.target.value);
  };
  const onChange = (event) => {
    event.preventDefault();
    const { name } = event.target;
    const { value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    input.password !== confirmPas
      ? alert("La contraseña no coincide")
      : dispatch(postNewUser(input));
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleConfirmPasswordChange = () => setConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 3, display: "flex", flexWrap: "wrap" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextField
          label="Nombre"
          name="firstName"
          value={input.firstName}
          onChange={onChange}
          color="tertiary"
          sx={{ m: 2, width: 300 }}
          helperText="Campo obligatorio"
        />
        <TextField
          label="Apellido"
          name="lastName"
          value={input.lastName}
          onChange={onChange}
          color="tertiary"
          sx={{ m: 2, width: 300 }}
          helperText="Campo obligatorio"
        />
      </Box>
      <Box>
        <TextField
          label="Correo electrónico"
          name="email"
          type="email"
          value={input.email}
          onChange={onChange}
          color="tertiary"
          sx={{ m: 2, width: 300 }}
          helperText="Campo obligatorio"
        />
        <TextField
          label="Teléfono"
          name="phone"
          value={input.phone}
          onChange={onChange}
          color="tertiary"
          sx={{ m: 2, width: 300 }}
          helperText="Campo obligatorio"
        />
      </Box>
      <Box>
        <FormControl
          name="password"
          value={input.password}
          onChange={onChange}
          error={false}
          label="Nueva contraseña"
          type="text"
          fullWidth
          variant="outlined"
          sx={{ m: 2, width: 300 }}
          color="tertiary"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Nueva contraseña
          </InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
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
            label="Nueva contraseña"
            color="tertiary"
          />
          <FormHelperText id="outlined-password-helper-text">
            Campo obligatorio
          </FormHelperText>
        </FormControl>

        <FormControl
          name="password"
          value={confirmPas}
          onChange={onConfirmPass}
          error={false}
          label="Repite nueva Contraseña"
          type="text"
          fullWidth
          variant="outlined"
          sx={{ m: 2, width: 300 }}
          color="tertiary"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Repite nueva Contraseña
          </InputLabel>
          <OutlinedInput
            type={confirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleConfirmPasswordChange}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {confirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Repite nueva Contraseña"
            color="tertiary"
          />
          <FormHelperText id="outlined-password-helper-text">
            Campo obligatorio
          </FormHelperText>
        </FormControl>
      </Box>

      <Button
        sx={{
          m: 2,
          bgcolor: "#ffff00",
          "&:hover": {
            bgcolor: "#F0F0F0",
            color: "#000000",
          },
          color: "#212121",
          width: "93%",
        }}
        variant="contained"
        onClick={onSubmit}
        type="submit"
      >
        Registrarse
      </Button>
    </Box>
  );
};
export default FormRegister;

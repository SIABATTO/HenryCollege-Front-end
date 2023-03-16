import { 
  Grid, 
  TextField, 
  Box, 
  Card, 
  CardContent,
} from "@mui/material";
import styles from "./Form.module.css";
import React, { useState } from "react";
import {LoadingButton} from '@mui/lab';

function Form() {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Box my={2}>
          <Grid container direction="row" spacing={2}>
            <Card>
              <CardContent>
                <Grid item xs={12} sm={12} md={16} lg={16} xl={16}>
                  <TextField
                  error={false}
                  label="Tu email"
                  type="text"
                  name="email"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={16} lg={16} xl={16}>
                  <TextField
                  error={false}
                  label="Tu contraseña"
                  type="text"
                  name="password"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                  />
                </Grid>

                <Box sx={{'& > button': { m: 1 } }}>
                  <LoadingButton
                  size="small"
                  loading={loading}
                  variant="outlined"
                  disabled
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
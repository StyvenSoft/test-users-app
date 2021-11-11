import { React, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const theme = createTheme();

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handlerLogin = () => {};

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Card sx={{ minWidth: 275 }} style={{ marginTop: "2rem" }}>
          <CardContent>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <ValidatorForm
                onSubmit={handlerLogin}
                onError={(errors) => {
                  for (const err of errors) {
                    console.log(err.props.errorMessages[0]);
                  }
                }}
                style={{ width: "100%" }}
              >
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Email"
                  onChange={handleEmail}
                  name="email"
                  value={email}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                  autoComplete="off"
                />
                <TextValidator
                  variant="outlined"
                  fullWidth
                  label="Password"
                  onChange={handlePassword}
                  name="password"
                  type="password"
                  value={password}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  autoComplete="off"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link onClick={props.toggle} href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </ValidatorForm>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

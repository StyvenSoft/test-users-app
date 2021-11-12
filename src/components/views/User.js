import { React, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BeatLoader } from "react-spinners";
import { getUsers, addUser } from "../../data/userData";
import { ToastContainer, toast } from "react-toastify";
import UserModal from "./UserModal";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  // const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleAdd = () => {
    setOpen(true);
  };

  const getlist = async () => {
    try {
      setLoading(true);
      const list = await getUsers();
      setUsers(list);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const addUserHandler = async () => {
    try {
      const user = {
        name,
        age,
        address,
        email,
      };
      await addUser(user);
      toast.success("The User added successfully!");
      getlist();
      setOpen(false);
      setName("");
      setAge("");
      setAddress("");
      setEmail("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const override = `
        display: block;
        margin: 2rem auto;
        border-color: red;
    `;

  useEffect(() => {
    getlist();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <ToastContainer />
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h6" component="div">
            All USERS
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
            startIcon={<AddIcon />}
          >
            Add new
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Street Address</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  <BeatLoader css={override} loading={loading} />
                </TableCell>
              </TableRow>
            ) : (
              <>
                {users.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="right">{item.age}</TableCell>
                    <TableCell align="right">{item.address}</TableCell>
                    <TableCell align="right">{item.email}</TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <UserModal
        open={open}
        close={handleClose}
        name={name}
        age={age}
        address={address}
        email={email}
        changeName={handleName}
        changeAge={handleAge}
        changeAddress={handleAddress}
        changeEmail={handleEmail}
        addUser={addUserHandler}
      />
    </Container>
  );
}

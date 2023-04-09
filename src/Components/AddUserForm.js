import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import { FormControl } from '@mui/material';

export default function AddUser({onSubmit}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    let userId = 10

    const onFormSubmit = (e) => {
        userId++
        onSubmit({id: userId, firstName: e.target.firstName.value, lastName: e.target.lastName.value, age: e.target.age.value})
        e.preventDefault()
    }

    return (
        <div>
            <Button onClick={handleOpen}>Add User</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <form onSubmit={onFormSubmit}>
                            <FormControl>
                                <Input type="text" name='firstName' placeholder="First Name" />
                            </FormControl>
                            <FormControl>
                                <Input type="text" name='lastName' placeholder="Last Name" />
                            </FormControl>
                            <FormControl>
                                <Input type="text" name='age' placeholder="Age" />
                            </FormControl>
                            <Button style={{ width: '100%' }} type="submit">Submit</Button>
                        </form>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
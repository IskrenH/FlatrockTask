import './App.css';
import './sass/style.scss'
import * as React from 'react';
import UserList from './Components/UserList'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ p: 2, background: '#f3f3f3' }}>
                    <UserList />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default App;

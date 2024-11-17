import React, { useState } from 'react';
import { Container, Box, Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';

const theme = createTheme(); 
function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Container>
        <Box my={4}>
          <Typography variant="h3" gutterBottom>Contact Management</Typography>
          <ContactForm setContacts={setContacts}  />
          <Box my={4}>
            <ContactsTable contacts={contacts} setContacts={setContacts}   />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;

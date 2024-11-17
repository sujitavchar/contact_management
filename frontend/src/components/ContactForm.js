import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';
import axios from 'axios';

const ContactForm = ({ setContacts }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '', 
    company: '',
    jobTitle: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form data:', formData);
      console.log(formData);
      const response = await axios.post(
        'http://localhost:4000/api/contacts',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      console.log('Contact added:', response.data);
      setContacts((prevContacts = []) => [
        ...prevContacts, 
        { ...formData, id: response.data.id },
      ]);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
      });
    } catch (error) {
      console.error('Error adding contact:', error);
      alert('There was an error adding the contact');
    }
  };

  return (
    <Box>
      <Typography variant="h6">Add a New Contact</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="phone"
              label="Phone Number" // Label remains the same
              value={formData.phone} // Updated key
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="company"
              label="Company"
              value={formData.company}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="jobTitle"
              label="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>
              Add Contact
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;

import express from 'express';
import db from '../config/db.js'

const router  = express.Router();

// end point to Add a new contact
router.post('/contacts', async (req, res) => {
    const { firstName, lastName, email, phone, company, jobTitle } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO contacts (firstName, lastName, email, phone, company, jobTitle) VALUES (?, ?, ?, ?, ?, ?)',
            [firstName, lastName, email, phone, company, jobTitle]
        );
        console.log(result);
        res.status(201).json({ id: result.insertId, message: "Contact added sucessfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// end point to fetch all contacts
router.get('/contacts', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM contacts');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// end point to update a contact
router.put('/contacts/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, phone, company, jobTitle } = req.body;
    try {
        const [result] = await db.query(
            'UPDATE contacts SET firstName = ?, lastName = ?, email = ?, phone = ?, company = ?, jobTitle = ? WHERE id = ?',
            [firstName, lastName, email, phone, company, jobTitle, id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Contact not found' });

        res.status(200).json({ id, firstName, lastName, email, phone, company, jobTitle });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// end point to delete a contact
router.delete('/contacts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM contacts WHERE id = ?', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Contact not found' });

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;

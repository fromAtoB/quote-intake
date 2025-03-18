// server.js - Simple Express backend for handling form submissions
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Simple in-memory storage (replace with database in production)
const submissions = [];

// Email configuration
// In a real application, use environment variables for sensitive information
const transporter = nodemailer.createTransport({
  service: 'gmail',  // or another email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Routes
app.post('/api/submit-form', (req, res) => {
  try {
    // Generate a unique ID for the submission
    const submissionId = Date.now().toString();
    
    // Store the submission
    const submission = {
      id: submissionId,
      data: req.body,
      timestamp: new Date().toISOString()
    };
    
    submissions.push(submission);
    
    // Send confirmation email
    const emailHtml = `
      <h2>Thank You for Your Insurance Quote Request</h2>
      <p>Dear ${req.body.firstName} ${req.body.lastName},</p>
      <p>We have received your insurance quote request. A representative will contact you shortly.</p>
      <p>Your reference number is: <strong>${submissionId}</strong></p>
      <h3>Summary of Your Request:</h3>
      <ul>
        <li><strong>Name:</strong> ${req.body.firstName} ${req.body.lastName}</li>
        <li><strong>Email:</strong> ${req.body.email}</li>
        <li><strong>Phone:</strong> ${req.body.phone}</li>
      </ul>
      <p>If you have any questions, please contact us.</p>
      <p>Best regards,<br>Your Insurance Team</p>
    `;
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: 'Insurance Quote Request Confirmation',
      html: emailHtml
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
    
    // Notify the agent about the new submission
    const agentMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.AGENT_EMAIL, // Email address of the insurance agent
      subject: 'New Insurance Quote Request',
      html: `
        <h2>New Insurance Quote Request</h2>
        <p>A new quote request has been submitted with the following details:</p>
        <ul>
          <li><strong>Name:</strong> ${req.body.firstName} ${req.body.lastName}</li>
          <li><strong>Email:</strong> ${req.body.email}</li>
          <li><strong>Phone:</strong> ${req.body.phone}</li>
          <li><strong>Date of Birth:</strong> ${req.body.dateOfBirth}</li>
        </ul>
        <p>Please log in to the dashboard to view the complete submission.</p>
      `
    };
    
    transporter.sendMail(agentMailOptions);
    
    // Send success response
    res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully', 
      submissionId 
    });
    
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred while processing your request' 
    });
  }
});

// Get all submissions (protected route in production)
app.get('/api/submissions', (req, res) => {
  res.json(submissions);
});

// Get a specific submission
app.get('/api/submissions/:id', (req, res) => {
  const submission = submissions.find(sub => sub.id === req.params.id);
  
  if (submission) {
    res.json(submission);
  } else {
    res.status(404).json({ message: 'Submission not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
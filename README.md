
# Insurance Lead Form

A customizable multi-step form for collecting insurance lead information, built with React.

## Project Overview

This project provides a complete solution for collecting and managing insurance lead information. It includes:

1. **Multi-step React form** with a clean, responsive UI
2. **Form validation** to ensure data quality
3. **Backend server** for processing submissions
4. **Email notifications** for both customers and agents

## Project Structure

```
insurance-lead-form/
├── client/                  # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Form components
│   │   │   ├── FormProgress.js
│   │   │   ├── FormNavigation.js
│   │   │   ├── PersonalInfo.js
│   │   │   ├── VehicleInfo.js
│   │   │   ├── PropertyInfo.js
│   │   │   ├── CoverageOptions.js
│   │   │   └── Review.js
│   │   ├── App.js           # Main application component
│   │   ├── App.css          # Styling
│   │   └── index.js
│   └── package.json
│
├── server/                  # Express backend
│   ├── server.js            # API routes and email logic
│   └── package.json
│
└── README.md
```

## Features

- **Modern, responsive design** that works on all devices
- **Multi-step form** with progress tracking
- **Conditional fields** that only appear when relevant
- **Form validation** to ensure data completeness
- **Review page** before submission
- **Email confirmations** for leads and notifications for agents
- **Submission tracking** with unique IDs

## Setup and Installation

### Frontend (React)

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Build for production:
   ```
   npm run build
   ```

### Backend (Express)

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=3001
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-email-password
   AGENT_EMAIL=agent-email@example.com
   ```

4. Start the server:
   ```
   npm start
   ```

## Customization

### Adding New Form Fields

1. Update the `formData` state in `App.js` with your new field
2. Add the field to the appropriate component (e.g., PersonalInfo.js)
3. Include the field in the Review.js component

### Changing Form Steps

Modify the `renderStep` function in `App.js` to add or remove steps.

### Styling

The form uses CSS variables for easy customization. Edit the variables at the top of `App.css` to change colors, spacing, etc.

## Deployment

### Frontend

The React frontend can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS Amplify

### Backend

The Express backend can be deployed to:
- Heroku
- DigitalOcean
- AWS EC2
- Render
- Railway

## Extending the Application

### Database Integration

Replace the in-memory storage in the backend with a database:
- MongoDB
- PostgreSQL
- MySQL
- Firebase

### Authentication

Add admin authentication to access and manage leads:
- JWT-based authentication
- Auth0
- Firebase Authentication

### Analytics

Integrate analytics to track form completion rates:
- Google Analytics
- Mixpanel
- Custom event tracking

## License

MIT License

## Support

For questions or support, please open an issue in the GitHub repository or contact gclark@policycart.io.
# Trip Travel Go

## Overview
Trip Travel Go is a web application that showcases various trip packages. Users can explore different travel options, view details about each package, and plan their next adventure.

## Project Structure
```
taptravelgo
├── src
│   ├── components
│   │   ├── TripCard.jsx       # Component for displaying individual trip package details
│   │   └── TripList.jsx       # Component for fetching and displaying a list of TripCard components
│   ├── data
│   │   └── trips.js           # Data file containing an array of trip package objects
│   ├── pages
│   │   └── Home.jsx           # Main page component that renders the TripList
│   ├── App.jsx                # Main application component that sets up routing
│   ├── App.css                # Styles for the application
│   └── main.jsx               # Entry point of the application
├── package.json                # npm configuration file
├── vite.config.js             # Vite configuration file
└── README.md                  # Project documentation
```

## Features
- Display a list of trip packages with details such as title, description, price, and image.
- Responsive design for optimal viewing on various devices.
- Easy navigation to explore different trip options.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd taptravelgo
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
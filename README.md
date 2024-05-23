# Bosta Shipment Tracking App

This project is a React application for tracking shipments using Bosta's tracking API. The app is designed to be fully responsive and supports both English and Arabic languages. It utilizes the Cairo font for a consistent and clean UI.

## Features

- Fetch shipment tracking data from Bosta's API.
- Display tracking information in a user-friendly interface.
- Support for both English and Arabic languages.
- Responsive design that works across various devices.
- State management using Redux.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mahmudhmh/bosta-tracker-task.git
   cd bosta-tracker-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app should now be running at [http://localhost:5173/:trackingNumber](http://localhost:5173/:trackingNumber).

## Usage

The application allows users to enter a tracking number and view the shipment details. The data is fetched from the Bosta API and displayed in a format similar to the provided UI design.

### API Endpoint

The app uses the following API endpoint to fetch shipment data:

```
https://tracking.bosta.co/shipments/track/:trackingNumber
```

Replace `:trackingNumber` with the actual tracking number you want to query.

### Sample Tracking Numbers

You can use the following tracking numbers to test the application:

- 84043113 `Delivered`
- 3468570 `Cancelled`
- 40106705 `Not Yet Shipped`

## Internationalization (i18n)

The app supports both English and Arabic. The language can be switched using a language selector in the UI. All strings are mapped appropriately for both languages.

## UI Design

- The app uses the Cairo font, which you can find and import from Google Fonts.
- The font weight and styling follow the guidelines provided in the design reference.
- Ensure all UI elements are responsive and adapt to different screen sizes.

## State Management

The application uses Redux for state management. This helps manage the global state and makes it easier to scale the app in the future.

## Screenshots

Include screenshots of the application in both English and Arabic, demonstrating the responsive design and proper display of shipment details.

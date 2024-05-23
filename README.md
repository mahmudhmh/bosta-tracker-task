# Bosta Shipment Tracking App

This project is a React application for tracking shipments using Bosta's tracking API. The app is designed to be fully responsive and supports both English and Arabic languages. It utilizes the Cairo font for a consistent and clean UI.

## Features

- Fetch shipment tracking data from Bosta's API.
- Display tracking information in a user-friendly interface.
- Support for both English and Arabic languages.
- Responsive design that works across various devices.
- State management using Redux Toolkit.

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
- The font-weight and styling follow the guidelines provided in the design reference.
- Ensure all UI elements are responsive and adapt to different screen sizes.

## State Management

The application uses Redux for state management. This helps manage the global state and makes it easier to scale the app in the future.

## Screenshots

<img width="1440" alt="Bosta-web-view-Canceled-EN" src="https://github.com/mahmudhmh/bosta-tracker-task/assets/54104161/322787a1-878f-4946-ba3c-777b603c5a76">
<img width="1440" alt="Bosta-web-view-Canceled-AR" src="https://github.com/mahmudhmh/bosta-tracker-task/assets/54104161/c68b5782-9f12-4ea5-a45b-774efc201953">

<img width="1440" alt="Bosta-web-view-Complete-EN" src="https://github.com/mahmudhmh/bosta-tracker-task/assets/54104161/38b351a7-997a-40dd-8c48-c5d545de0eb6">
<img width="1440" alt="Bosta-web-view-Complete-AR" src="https://github.com/mahmudhmh/bosta-tracker-task/assets/54104161/4cd60d20-2805-47fc-bb7c-63be42604d1c">

<img width="1440" alt="Bosta-web-view-NotDeliveredYet-EN" src="https://github.com/mahmudhmh/bosta-tracker-task/assets/54104161/afaabba1-98d9-44fd-bece-7311a2a63e4d">
<img width="1440" alt="Bosta-web-view-NotDeliveredYet-AR" src="https://github.com/mahmudhmh/bosta-tracker-task/assets/54104161/e5a50167-25d5-4e3b-849f-c32ffe2681b5">

<img width="1440" alt="Bosta-web-view-Tracker-Input-EN" src="https://github.com/mahmudhmh/bosta-tracker-task/assets/54104161/4db244ca-2e97-40e6-98e6-6e99a507b3ea">
<img width="1440" alt="Bosta-web-view-Tracker-Input-AR" src="https://github.com/mahmudhmh/bosta-tracker-task/assets/54104161/541717dd-f908-45f9-bc4b-3d75c6d77060">

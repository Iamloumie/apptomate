# Healthcare Management System (AppToMate)

## Overview

A comprehensive healthcare patient management application built with Next.js, designed to streamline appointment booking and administration.

## Features

- Patient Registration and Profile Management
- Appointment Booking and Scheduling
- Administrative Appointment Management
- SMS Notifications for Appointment Confirmation
- Responsive Design
- Secure File Upload
- Performance Monitoring

## Technology Stack

- Next.js
- Appwrite
- TypeScript
- Tailwind CSS
- ShadCN
- Twilio
- Sentry

## Prerequisites

- Git
- Node.js
- npm

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/iamloumie/apptomate.git
cd apptomate
```

### Installation

1. Install dependencies:

```bash
npm install
```

2. Configure Environment Variables

Create a `.env.local` file in the project root with the following variables:

```
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=
NEXT_PUBLIC_ADMIN_PASSKEY=
```

Replace placeholder values with your Appwrite credentials.

### Run the Project

```bash
npm run dev
```

Access the application at `http://localhost:3000`

## Project Structure

- `types/`: TypeScript type definitions
- `lib/`: Utility functions and validations
- `constants/`: Project constants
- `app/`: Next.js application pages and components

## Contributing

This is an inspiration from the jsmastery class.. Thank you Adrian

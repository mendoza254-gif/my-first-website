
# Yolo Reliable Repairs
## Estimate Management System Architecture

### 1. Project Goal
Build a secure application to create, save, search,
and manage customer estimates.

### 2. Frontend
The frontend will allow users to:
- Enter customer information
- Select services and quantities
- View calculated estimates
- Search for previous estimates
- Print estimates

### 3. Backend
The backend will:
- Verify user authentication and permissions
- Validate submitted information
- Calculate official prices
- Save and retrieve estimates
- Communicate with other authorized systems

### 4. Database
The database will store:
- Customer ID
- Customer name and contact information
- Estimate ID and date
- Services, quantities, and unit prices
- Estimate total
- Estimate status

### 5. API
The application will use API requests:
- GET: Retrieve an estimate
- POST: Create an estimate
- PATCH: Update an estimate
- DELETE: Remove an estimate when authorized

### 6. Security
- Require authentication
- Restrict access to authorized users
- Keep passwords and API keys out of frontend code
- Validate information on the backend
- Protect customer information
- Use fictional data while testing

### 7. Future Features
- Email estimates to customers
- Track accepted and declined estimates
- Create invoices
- Connect with Wix or HighLevel

### 8. Current Status
Planning only. No backend or database has
been connected yet.
  
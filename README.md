# LeadFlow: Lead Management Project

## Overview

LeadFlow is a project designed to manage leads provided by affiliates, ensuring that leads are validated, verified, and properly handled to maximize conversion rates and efficiency. This project involves systematic handling from initial submission to final processing.

## Objective

The objective of LeadFlow is to:
1. Validate whether the lead is new or existing.
2. Request and verify the car registration number if the lead already exists.
3. Ensure that only unique and fresh leads proceed further in the process.
4. Engage the lead through an IVR call to confirm purchase interest.
5. Transition confirmed leads to the supply team for final processing.

## Process Flow

1. **Submission of Leads by Affiliates**
    - Affiliates send the mobile number of the lead to the system.
    - Mobile number is received and entered into the system for validation.

2. **Validation of Leads**
    - System checks if the submitted mobile number exists in the database.
    - If the lead does not exist, proceed to the registration inquiry.
    - If the lead exists, request the car registration number from the affiliate.

3. **Registration Inquiry (for New Leads)**
    - Notify the affiliate that a registration number of the car is requested but not compulsory.
    - Proceed based on whether the registration number is provided or not.

4. **Registration Number Verification**
    - Verify the provided registration number.
    - Notify the affiliate of verification failure if not verified.
    - Accept the lead if verified.

5. **IVR Call**
    - Send an IVR call to the lead's mobile number.
    - Proceed based on the lead's response to the IVR call.

6. **Supply Team Contact**
    - Supply team contacts the lead for further processing and to finalize the purchase.

## Exception Handling

- **Duplicate Leads:** Notify affiliate of existing lead and request a registration number.
- **Verification Failure:** Request re-entry of registration number.
- **Disinterest in Purchase:** Notify affiliate and end process.

## Tech Stack

- **Python**: Core programming language used.
- **Django**: Web framework used for developing the application.
- **Docker**: Containerization of the application.
- **SSO Authentication**: Single Sign-On authentication for secure login.
- **Wati Integration**: Integration with Wati for IVR and other communications.
- **Kafka**: Data communication and messaging system.
- **Company Packages:**
  - `sp-django-events`
  - `sp_auth_python`

## APIs

The project involves various APIs for:

- Submitting leads.
- Validating leads.
- Requesting and verifying registration numbers.
- Sending IVR calls.
- Communicating lead status and updates.

## Getting Started

### Prerequisites

- Docker
- Python 3.8+
- Django 3.2+
- Apache Kafka

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/leadflow.git
    cd leadflow
    ```

2. Build and start Docker containers:
    ```bash
    docker-compose up --build
    ```

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run migrations:
    ```bash
    python manage.py migrate
    ```

5. Start the Django server:
    ```bash
    python manage.py runserver
    ```

## Usage

1. Submit leads through the API endpoint.
2. Monitor the validation and verification processes.
3. Use the admin interface to manage leads and track their status.
4. Ensure the supply team follows up on confirmed leads for final processing.

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For further information or inquiries, please contact [your-email@example.com](mailto:your-email@example.com).

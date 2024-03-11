# web3

This project is a club website built with Django for the backend, Vue.js for the frontend, and REST APIs to connect them.

## Project Setup

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Python](https://www.python.org/downloads/).

- You have installed the latest version of [Node.js](https://nodejs.org/).


### Backend

The backend of the project is located in the `clubwebsite` directory.

1. Navigate to the `clubwebsite` directory.

2. Create a virtual environment and activate it:

    ```bash
    python3 -m venv env
    ```

    ### For Windows
    ```bash
    env/Scripts/activate
    ```

    *If you get an error saying you can't run the script, run this command:*
    ```bash
    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
    ```

    ### For Mac
    ```bash
    env/bin/activate  
    ```

3. Install the required Python packages:

    ```bash
    pip install -r requirements.txt
    ```

4. Run the Django migrations:

    ```bash
    python manage.py migrate
    ```

5. Start the Django server:

    ```bash
    python manage.py runserver
    ```
    *Make sure to keep this server running while you perfrom the next steps!*

### Frontend

The frontend of the project is located in the `clubwebsite_frontend` directory.

1. Open a seperate terminal, but keep the old one running!

2. Navigate to the `clubwebsite_frontend` directory.

3. Install the required Node.js packages:

    ```bash
    npm install
    ```

4. Install Vue Router:

    ```bash
    npm install vue-router
    ```

5. Start the Vue.js development server:

    ```bash
    npm run serve
    ```

Now, you should be able to access the application at http://localhost:8080.


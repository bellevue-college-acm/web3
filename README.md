# web3

This project is a club website built with Django for the backend, Vue.js for the frontend, and REST APIs to connect them.

## Project Setup

### Backend

The backend of the project is located in the `clubwebsite` directory.

1. Navigate to the `clubwebsite` directory.

2. Create a virtual environment and activate it:

    python3 -m venv env
    source env/bin/activate


3. Install the required Python packages:

    pip install -r requirements.txt

4. Run the Django migrations:

    python manage.py migrate

5. Start the Django server:
    
    python manage.py runserver


### Frontend
The frontend of the project is located in the clubwebsite_frontend directory.

1. Navigate to the clubwebsite_frontend directory.

2. Install the required Node.js packages:

    npm install

3. Install Vue Router:

    npm install vue-router

4. Start the Vue.js development server:

    npm run serve


Now, you should be able to access the application at http://localhost:8080.

Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

License
This project is licensed under the MIT License - see the LICENSE.md file for details

```

Again, please replace the CONTRIBUTING.md and LICENSE.md links with the actual paths to these files in your project if they exist. If they don't exist, you may want to consider adding them.
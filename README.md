📌 Crop Recommendation System
A machine learning-based web application that predicts the best crop to cultivate based on soil and environmental parameters.
🌟 Overview
This project utilizes LightGBM, a powerful gradient boosting algorithm, to recommend the most suitable crop for a given set of soil and climate conditions. The model achieves 98% accuracy and is integrated with a Flask-based backend to serve predictions through a web interface. The website allows users to input parameters such as Nitrogen, Phosphorus, Potassium, Temperature, Humidity, pH, and Rainfall and receive the best crop recommendation.

🔹 Features
✔ Accurate Crop Prediction: Uses LightGBM to suggest the optimal crop based on input parameters.
✔ User-Friendly Web Interface: Built with HTML, CSS, and JavaScript for a seamless experience.
✔ Flask Backend API: Handles user inputs and returns ML model predictions.
✔ Responsive Design: Works on desktop and mobile devices.
✔ GitHub Integration: Open-source and easy to deploy.

🛠️ Tech Stack
Machine Learning: Python, LightGBM
Backend: Flask, JavaScript
Frontend: HTML, CSS, JavaScript
Version Control: Git & GitHub

📂 Project Structure
📁 Crop-Recommendation-System
│── 📂 static              # Contains CSS and JavaScript files
│── 📂 templates           # Contains HTML files for the UI
│── 📂 model               # Stores the trained ML model
│── app.py                 # Main Flask backend file
│── requirements.txt       # Required dependencies
│── crop_model.pkl         # Trained ML model file
│── README.md              # Project Documentation
│── dataset.csv            # Dataset used for training (optional)
│── .gitignore             # Files to ignore in version control

🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/rasheed-nadaf/Crop-Recommender-Website-using-ML.git
cd Crop-Recommender-Website-using-ML
2️⃣ Create a Virtual Environment (Optional but Recommended for Python backend)
python -m venv venv
source venv/bin/activate  # For macOS/Linux
venv\Scripts\activate     # For Windows
3️⃣ Install Dependencies
For Python & Flask Backend:
pip install -r requirements.txt

For Node.js & Express Backend (If server.js is used):
npm install
4️⃣ Run the Application
✅ Start Flask Backend:
python app.py
Flask API will run at http://127.0.0.1:5000/

✅ Start Node.js Backend (server.js):
Open a new terminal window and run:
cd server  # Navigate to the server folder if applicable
node server.js
Express.js server will run at http://localhost:3000/

🔹 How to Use
1️⃣ Open the web application.
2️⃣ Enter the soil and climate parameters (N, P, K, Temperature, Humidity, pH, Rainfall).
3️⃣ Click the "Predict" button.
4️⃣ The model will recommend the best crop for the given conditions.

🤝 Contribution
Want to improve this project? Follow these steps:
Fork the repository.
Create a new branch (feature-name).
Commit your changes (git commit -m "Added new feature").
Push to your branch (git push origin feature-name).
Submit a Pull Request.

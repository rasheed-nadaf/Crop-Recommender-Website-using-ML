from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the ML model
with open('crop_recommender.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# Define the prediction route
@app.route('/predict-crop', methods=['POST'])
def predict_crop():
    # Get the data from the request
    data = request.get_json()
    
    # Extract parameters from JSON and convert them to float
    nitrogen = float(data['nitrogen'])
    phosphorus = float(data['phosphorus'])
    potassium = float(data['potassium'])
    temperature = float(data['temperature'])
    humidity = float(data['humidity'])
    pH = float(data['pH'])
    rainfall = float(data['rainfall'])
    
    # Make predictions
    features = np.array([[nitrogen, phosphorus, potassium, temperature, humidity, pH, rainfall]])
    prediction = model.predict(features)
    
    # Return the prediction as a JSON response
    return jsonify({'predicted_crop': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)

import flask
import urllib.request
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import pandas as pd
import io
import base64

# Load the pre-trained model
model = load_model('model.h5')

# Load the CSV file into a Pandas DataFrame
df = pd.read_csv("birds.csv")

# Define the list of class names
class_names = df['labels'].tolist()

# Define the Flask app
app = flask.Flask(__name__)

# Define a route for the API
@app.route('/classify', methods=['POST'])
def classify():
    # Get the image data from the request
    image_data = flask.request.get_json()['image']
    # Decode the image data from base64
    img_data = base64.b64decode(image_data.split(',')[1])
    # Convert the decoded image data to a format that can be processed by the model
    img = image.img_to_array(image.load_img(io.BytesIO(img_data), target_size=(224, 224))) / 255.0
    img = np.expand_dims(img, axis=0)
    # Use the pre-trained model to predict the class of the image
    predictions = model.predict(img)
    # Get the index of the predicted class
    class_index = np.argmax(predictions[0])
    # Get the name of the predicted class from the DataFrame
    class_name = class_names[class_index]
    class_probability = predictions[0][class_index] * 100
    # Return the predicted class name and probability in JSON format
    response = {'class': class_name, 'probability': class_probability}
    return flask.jsonify(response)

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)

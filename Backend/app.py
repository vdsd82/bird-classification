from flask import Flask, request, jsonify
import tensorflow as tf
from PIL import Image
import numpy as np
import pandas as pd

app = Flask(__name__)
model = tf.keras.models.load_model('model.h5')
class_data = pd.read_csv('birds.csv')

def preprocess_image(image):
    image = image.resize((224, 224))
    image = np.array(image)
    image = image / 255.0
    image = np.expand_dims(image, axis=0)
    return image

@app.route('/predict', methods=['POST'])
def predict():
    if request.files.get('image'):
        image = Image.open(request.files['image'])
        image = preprocess_image(image)
        prediction = model.predict(image)
        predicted_class = np.argmax(prediction, axis=1)[0]
        class_info = class_data[class_data['class id'] == predicted_class].iloc[0]
        response = {
            'class_id': int(class_info['class id']),
            'label': class_info['labels'],
            'scientific_name': class_info['scientific name'],
        }
        return jsonify(response)
    else:
        return jsonify({'error': 'No image provided'}), 400

if __name__ == '__main__':
    app.run()
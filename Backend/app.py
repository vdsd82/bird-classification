import streamlit as st
import pandas as pd
<<<<<<< HEAD
import tensorflow as tf
from PIL import Image
import numpy as np

# Load the class names
def load_classes():
    class_df = pd.read_csv("birds.csv")
    return class_df.set_index("class id")["labels"].to_dict()

# Load the image classification model
@st.cache(allow_output_mutation=True)
def load_model():
    model = tf.keras.models.load_model("model.h5")
    return model

# Make a prediction with the model
def predict_image(model, img):
    img = img.resize((224, 224))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    predictions = model.predict(img_array)
    class_id = np.argmax(predictions)
    return class_id

def main():
    st.title("Bird Image Classification")

    classes = load_classes()
    model = load_model()

    uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])

    if uploaded_file is not None:
        image = Image.open(uploaded_file)
        st.image(image, caption="Uploaded Image", use_column_width=True)

        if st.button("Classify"):
            class_id = predict_image(model, image)
            bird_name = classes.get(class_id, "Unknown")
            st.success(f"Classified as: {bird_name}")

if __name__ == "__main__":
    main()
=======
import io
import base64
import os

# Load the pre-trained model
current_path = os.getcwd()
print("Current Path: ",os.listdir() )
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
    app.run()
>>>>>>> 72c1f09f4583b245853d1c80195d052ba04c6819

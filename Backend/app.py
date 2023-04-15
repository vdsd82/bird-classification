import streamlit as st
import pandas as pd
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
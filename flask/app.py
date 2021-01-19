from flask import Flask, request
from flask_cors import CORS
import keras
import base64
from io import BytesIO
from PIL import Image
import numpy as np
import cv2

app = Flask(__name__)
CORS(app)

# MNIST 학습 모델 https://www.tensorflow.org/tutorials/quickstart/beginner?hl=ko

def ajaxImage(imageSize):
    content = request.values['image'].split(';')[1]
    image_encoded = content.split(',')[1]
    body = base64.decodebytes(image_encoded.encode('utf-8'))
    img = np.array(Image.open(BytesIO(body)).convert("L"))
    image = cv2.resize(img, imageSize)/255.0
    image = np.reshape(image, (1, imageSize[0], imageSize[1]))
    return image

@app.route('/predict', methods=['GET'])
def ajax():
    image = ajaxImage((28,28))
    ### code 작성 ###
    

if __name__ == '__main__':
    app.run(host='localhost', port=5000, threaded=False)
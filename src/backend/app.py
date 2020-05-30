from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World! This app is running with Flask and using an SSL certificate"


if __name__ == '__main__':
    app.run(debug=True)

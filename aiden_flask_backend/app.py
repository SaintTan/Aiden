import flask

app = flask.Flask(__name__)

@app.route("/")
def index():
    return "Congrats, you've accessed the homepage!"

if __name__ == "__main__":
    app.run(debug = True)
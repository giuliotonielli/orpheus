from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
@app.route("/home")

def home():
	return render_template("index.html")

@app.route("/result", methods = ["POST", "GET"])

def login():
	return render_template("login.html")

if __name__ == "__main__":
	app.run(debug = True, port = 5001)


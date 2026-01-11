from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from datetime import datetime

# 1️⃣ Create Flask app FIRST
app = Flask(__name__)
CORS(app)

DATA_FILE = "data.json"

# 2️⃣ Status API
@app.route("/api/status", methods=["GET"])
def status():
    return jsonify({
        "service": "Flask Backend",
        "status": "Running",
        "message": "DevOps backend is healthy",
        "tools": ["Docker", "CI/CD", "AWS", "Kubernetes"]
    })

# 3️⃣ Store data API
@app.route("/api/store", methods=["POST"])
def store_data():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data received"}), 400

    data["timestamp"] = datetime.now().isoformat()

    try:
        with open(DATA_FILE, "r") as f:
            existing = json.load(f)
    except:
        existing = []

    existing.append(data)

    with open(DATA_FILE, "w") as f:
        json.dump(existing, f, indent=4)

    return jsonify({
        "message": "Data stored successfully",
        "data": data
    }), 201

# 4️⃣ Get stored data API
@app.route("/api/data", methods=["GET"])
def get_data():
    try:
        with open(DATA_FILE, "r") as f:
            return jsonify(json.load(f))
    except:
        return jsonify([])

# 5️⃣ Run app LAST
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

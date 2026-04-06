from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from services.scanner import VTScanner
import os
from dotenv import load_dotenv

# Load API key from .env
load_dotenv()
VT_KEY = os.getenv("VT_API_KEY")

app = FastAPI(title="GuardianAI Backend")

# Enable CORS for HTML/JS frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Scanner
scanner = VTScanner(api_key=VT_KEY)

@app.post("/analyze")
async def analyze_url(payload: dict = Body(...)):
    url = payload.get("url")
    if not url:
        return {"error": "No URL provided"}
    
    # Process scanning
    result = scanner.scan_url(url)
    return result

if __name__ == "__main__":
    import uvicorn
    # Run the server on port 8000
    uvicorn.run(app, host="0.0.0.0", port=8001)
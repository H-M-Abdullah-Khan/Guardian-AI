import requests
import base64

class VTScanner:
    def __init__(self, api_key):
        self.api_key = api_key
        self.headers = {"x-apikey": self.api_key, "accept": "application/json"}

    def scan_url(self, url: str):
        try:
            # Base64 encoding for VT v3 API
            url_id = base64.urlsafe_b64encode(url.encode()).decode().strip("=")
            endpoint = f"https://www.virustotal.com/api/v3/urls/{url_id}"
            response = requests.get(endpoint, headers=self.headers)
            
            if response.status_code == 200:
                attr = response.json()['data']['attributes']
                
                # Trust Score Logic
                stats = attr.get('last_analysis_stats', {})
                malicious = stats.get('malicious', 0)
                score = 98 if malicious == 0 else max(5, 100 - (malicious * 15))

                return {
                    "url": url,
                    "trust_score": score,
                    "risk_level": "SECURE" if malicious == 0 else "CRITICAL",
                    "stats": stats,
                    "vendors": attr.get('last_analysis_results', {}),
                    "categories": attr.get('categories', {}),
                    "http_details": {
                        "status_code": attr.get('last_http_response_code'),
                        "body_length": attr.get('last_http_response_content_length'),
                        "server": attr.get('last_http_response_headers', {}).get('Server', 'N/A'),
                        "content_type": attr.get('last_http_response_headers', {}).get('Content-Type', 'N/A'),
                        "final_url": attr.get('last_final_url', url)
                    },
                    "metadata": {
                        "first_seen": attr.get('first_submission_date'),
                        "last_scan": attr.get('last_analysis_date'),
                        "reputation": attr.get('reputation', 0),
                        "tags": attr.get('tags', [])
                    },
                    "html_meta": attr.get('html_meta', {})
                }
            return {"error": "URL not in VirusTotal database."}
        except Exception as e:
            return {"error": str(e)}
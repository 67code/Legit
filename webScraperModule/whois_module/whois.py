import requests
from .config import WHOIS_API_KEY

class WhoisClient:
    BASE_URL = "https://jsonwhoisapi.com/api/v1/whois"

    def __init__(self, api_key):
        self.api_key = api_key

    def get_domain_details(self, domain):
        """Fetch WHOIS data for a given domain."""
        headers = {
            "Accept": "application/json",
            "Authorization": f"Token {self.api_key}"
        }
        try:
            response = requests.get(f"{self.BASE_URL}?identifier={domain}", headers=headers)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching WHOIS data: {e}")
            return None

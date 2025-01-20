import requests
from utils.request_helpers import make_request
from parsers.html_parser import parse_html

class WebScraper:
    def __init__(self, url):
        self.url = url

    def scrape(self):
        response = make_request(self.url)
        if response:
            data = parse_html(response.content)
            return data
        return None

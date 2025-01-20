# from web_scraper.scraper import WebScraper
# url = 'https://hunterclothing.in/'
# scrape = WebScraper(url)
# data = scrape.scrape()
# for index, product in enumerate(data, start=1):
#     print(f"Product {index}:")
#     print(f"  Title: {product['title']}")
#     print(f"  Discounted Price: {product['discounted_price']}")
#     print("-" * 40)    


from whois_module.whois import WhoisClient
from whois_module.config import WHOIS_API_KEY

def main():
    domain = input("Enter a domain to fetch WHOIS data: ")
    api_key = WHOIS_API_KEY
    whois_client = WhoisClient(api_key)
    result = whois_client.get_domain_details(domain)

    if result:
        print("\nDomain Details:")
        print(f"Domain Name: {result.get('name', 'N/A')}")
        print(f"Registrar: {result.get('registrar', {}).get('name', 'N/A')}")
        print(f"Registration Date: {result.get('created', 'N/A')}")
        print(f"Expiration Date: {result.get('expires', 'N/A')}")
        print(f"Nameservers: {result.get('nameservers', [])}")
    else:
        print("Failed to retrieve WHOIS data.")

if __name__ == "__main__":
    main()


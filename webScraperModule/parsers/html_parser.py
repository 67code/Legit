from bs4 import BeautifulSoup

def parse_html(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    products = []

    # Find all product cards
    product_cards = soup.find_all('div', class_='card')
    for card in product_cards:
        # Extract product title
        title_tag = card.find('h6', class_='product-short-title')
        product_title = title_tag.text.strip() if title_tag else None

        # Skip products without a title
        if not product_title:
            continue

        discounted_price_tag = card.find('div', class_='h6 fw-bold')
        discounted_price = discounted_price_tag.text.strip() if discounted_price_tag else None

        # Add product data to the list
        products.append({
            'title': product_title,
            'discounted_price': discounted_price
        })

    return products

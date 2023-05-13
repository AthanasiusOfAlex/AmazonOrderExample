from bs4 import BeautifulSoup

# Read the HTML file
with open('Amazon.it - Ordine 171-xxxxxxx-xxxxxxx.html', 'r') as f:
    html = f.read()

# Parse the HTML using BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

# Find all the table cells containing the text "Totale:"
total_cells = soup.find_all('td', string='Totdsfale:')

if total_cells:
    # Select only the first occurrence of the label
    total_cell = total_cells[0]
    
    # Find the next sibling table cell and extract the price
    price_cell = total_cell.find_next_sibling('td')
    price_str = price_cell.string.strip().replace(',', '.').replace('€', '')
    price_euros = float(price_str)
    print(f'Amount paid in Euros: {price_euros:.2f}')
else:
    print('Unable to find price information in the HTML file.')

# from selenium import webdriver

# # Create a new Edge web driver instance
# driver = webdriver.Edge()

# # Navigate to www.example.com
# driver.get("https://www.amazon.it/gp/css/summary/print.html/ref=oh_aui_ajax_invoice?ie=UTF8&orderID=171-0134948-4615514")

# # Get the HTML source code of the page
# html = driver.page_source

# # Print the HTML code
# print(html)

# # Close the driver
# driver.quit()




from selenium import webdriver
from selenium.webdriver.edge.options import Options

# Specify the path to your Edge profile directory
profile_directory = '/Users/louismelahn/Library/Application Support/Microsoft Edge'

# Create a new EdgeOptions object
options = Options()

# Set the EdgeOptions to use your current profile
options.add_argument(f'--user-data-dir={profile_directory}')

# Disable the "user data directory" clean-up feature
options.add_argument('--disable-features=EdgeCleaningOnExit')

# Create a new Edge web driver instance with the options
driver = webdriver.Edge(options=options)

# Navigate to www.example.com
driver.get("https://www.amazon.it/gp/css/summary/print.html/ref=oh_aui_ajax_invoice?ie=UTF8&orderID=171-0134948-4615514")

# Get the HTML source code of the page
html = driver.page_source

# Print the HTML code
print(html)

# Close the driver
driver.quit()

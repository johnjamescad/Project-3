from splinter import Browser
from bs4 import BeautifulSoup

import json

browser=Browser('chrome')

url = "https://globalvoices.org/?s=climate&se=internal"
browser.visit(url)

html = browser.html
soup = BeautifulSoup(html, 'html.parser')

browser.links.find_by_partial_text("No thanks").click()

# List to contain article info
articles_list = []

def get_summary():
    # Collect the HTML from the browser
    html = browser.html
    # Parse the HTML with Beautiful Soup
    soup = BeautifulSoup(html, 'html.parser')
    
    # Save the main area of the web page to a variable
    main_area = soup.find("div", class_="post-archive-container")
    
    # Find all the articles in the main area of the web page
    articles = main_area.find_all("div", class_="gv-promo-card-text")
    
    # Loop through the articles
    for article in articles:
        headerSpan = article.find("h3", class_="post-title")
        # Collect category
        categorySpan = article.find("span", class_="term-link-category")
        # Collect the article date
        dateSpan = article.find("span", class_="datestamp")
        if (headerSpan and categorySpan and dateSpan):
            # Collect the article title
            header = headerSpan.text.strip()
            link = headerSpan.find("a")["href"]

            category = categorySpan.find("a").text.strip()

            date = article.find("span", class_="datestamp")["title"]
            # Remove the underscore from the date
            date = date.replace('_', '')
            
            # Create the summary dictionary
            summary_dict = {
                "link": link,
                "header": header,
                "date": date,
                "category": category
            }
            # Append the summary dictionary to the list
            articles_list.append(summary_dict)

for x in range(10):
    get_summary()
    browser.links.find_by_partial_text("Older").click()

f = open("Climate-Events.json", "w")
f.write(json.dumps(articles_list, indent=4))

browser.quit()

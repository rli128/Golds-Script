from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()

driver.get("https://offers-socal.goldsgym.com/arcadia-guest-vip")

first_name = driver.find_element_by_name("firstname")
first_name.clear()
first_name.send_keys("Ricky")

last_name = driver.find_element_by_name("lastname")
last_name.clear()
last_name.send_keys("Li")
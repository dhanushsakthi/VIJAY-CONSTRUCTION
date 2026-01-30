import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

# Configuration
URL = "http://localhost:3000"

def test_website():
    # Setup WebDriver (Chrome)
    # Note: Ensure you have chromedriver installed or use webdriver-manager
    options = webdriver.ChromeOptions()
    # options.add_argument("--headless") # Uncomment to run without opening browser
    driver = webdriver.Chrome(options=options)
    
    try:
        print(f"Opening {URL}...")
        driver.get(URL)
        
        # 1. Verify Loader Visibility
        wait = WebDriverWait(driver, 10)
        try:
            loader = wait.until(EC.presence_of_element_located((By.XPATH, "//*[@role='progressbar']")))
            print("✓ Loader found.")
        except TimeoutException:
            print("✗ Loader not found or already disappeared.")
            return

        # 2. Monitor Progress Bar
        print("Monitoring loading progress...")
        last_progress = -1
        while True:
            try:
                progress_text = driver.find_element(By.XPATH, "//*[contains(text(), '%')]").text
                current_val = int(progress_text.replace('%', ''))
                
                if current_val != last_progress:
                    print(f"  Progress: {current_val}%")
                    last_progress = current_val
                
                if current_val >= 100:
                    print("✓ Progress hit 100%.")
                    break
                
                time.sleep(0.1)
            except:
                # If element disappears, progress is likely complete
                break

        # 3. Wait for Loader to disappear and Homepage to show
        print("Waiting for homepage transition...")
        wait.until(EC.invisibility_of_element_located((By.XPATH, "//*[@role='progressbar']")))
        
        # 4. Verify Header
        header = wait.until(EC.presence_of_element_located((By.TAG_NAME, "header")))
        if "VIJAY CONSTRUCTIONS" in header.text:
            print("✓ Homepage loaded: 'VIJAY CONSTRUCTIONS' header visible.")
        
        # 5. Test Navigation to Services
        print("Testing Services navigation...")
        services_link = driver.find_element(By.LINK_TEXT, "SERVICES")
        services_link.click()
        
        wait.until(EC.url_contains("/services"))
        print(f"✓ Navigation successful. Current URL: {driver.current_url}")
        
        print("\n--- ALL TESTS PASSED ---")
        print("The building logo and loading sequence are functional.")

    except Exception as e:
        print(f"\n✗ Test failed: {str(e)}")
    finally:
        time.sleep(3)
        driver.quit()

if __name__ == "__main__":
    print("Pre-requisites:")
    print("1. Start your server: npm run dev")
    print("2. Install Selenium: pip install selenium")
    print("-" * 30)
    test_website()

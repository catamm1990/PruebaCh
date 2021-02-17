package automationpractice;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertTrue;

import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class TestStepsCp001 {
    private WebDriver driver;
    static String TestString;

    @Before
    public void setUp() {

        // ChromeDriver path on development machine, which is Windows
        String OS = System.getProperty("os.name");
        if (OS.startsWith("Windows")) {
            System.setProperty("webdriver.chrome.driver",
                    Paths.get("src/test/resources/chromedriver_win32/chromedriver.exe").toString());

        }

        if (driver == null) {
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--headless");
            driver = new ChromeDriver(options);
        }

        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    @After
    public void tearDown() {
        if (driver!=null) {
            driver.close();
            driver.quit();
        }
    }

    @Given("Navigate index")
    public void navigateToPage() {
        driver.navigate().to("http://automationpractice.com/index.php");
    }

    @Given("Click en el boton Sing in")
    public void aClickHrefSigIn() {
        driver.findElement(By.className("login")).click();
    }
    
    @When("A User enters a valid email")
    public void aUserEntersEmailCreateAccount() {
        driver.findElement(By.name("email_create")).sendKeys("pepito4@perez.com");
    }

    @And("A User clicks on Create Account button")
    public void aUserClickOnCreateAccountButton() {
        driver.findElement(By.name("SubmitCreate")).click();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }
    
    @When("A User enters a customer first name")
    public void aUserEntersACustomerFirstName() {
        driver.findElement(By.id("customer_firstname")).sendKeys("Pepito");
    }
    
    @When("A User enters a customer last name")
    public void aUserEntersACustomerLastName() {
        driver.findElement(By.name("customer_lastname")).sendKeys("Perez");
    }
    
    @When("A User enters a email")
    public void aUserEntersAEmail() {
        driver.findElement(By.name("email")).sendKeys("pepito1@perez.com");
    }
    
    @When("A User enters a password")
    public void aUserEntersAPassword() {
        driver.findElement(By.name("passwd")).sendKeys("Admin1234*");
    }
    
    @When("A User enters a first name")
    public void aUserEntersAFirstName() {
        driver.findElement(By.name("firstname")).sendKeys("Pepito");
    }
    
    @When("A User enters a last name")
    public void aUserEntersALastName() {
        driver.findElement(By.name("lastname")).sendKeys("Perez");
    }
    
    @When("A User enters a address")
    public void aUserEntersAAddress() {
        driver.findElement(By.name("address1")).sendKeys("Street 0");
    }
    
    @When("A User enters a city")
    public void aUserEntersACity() {
        driver.findElement(By.name("city")).sendKeys("New York");
    }
    
    @When("A User select a state")
    public void aUserSelectAstate() {
    	Select selState = new Select(driver.findElement(By.name("id_state")));
    	selState.selectByVisibleText("New York");
    }
    
    @When("A User enters a zip postal code")
    public void aUserEntersAZip() {
        driver.findElement(By.name("postcode")).sendKeys("00000");
    }
    
    @When("A User select a country")
    public void aUserSelectACountry() {
    	Select selCountry = new Select(driver.findElement(By.name("id_country")));
    	selCountry.selectByVisibleText("United States");
    }
    
    @When("A User enters a mobile phone")
    public void aUserEntersAMobilePhone() {
        driver.findElement(By.name("phone_mobile")).sendKeys("987654321");
    }

    @And("A User clicks on Register button")
    public void aUserClickOnRegisterButton() {
        driver.findElement(By.name("submitAccount")).click();
    }

    @Then("Application shows welcome message")
    public void applicationShowsWelcomeMessage() {
        String actualMessage = driver.findElement(By.className("info-account")).getText();
        assertThat(actualMessage.trim(), is("Welcome to your account. Here you can manage all of your personal information and orders."));
    }

    @Then("Application shows error message")
    public void applicationShowsErrorMessage() {
        assertTrue("Email exists", driver.findElement(By.id("create_account_error")).isDisplayed());
    }

}

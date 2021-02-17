package automationpractice;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class TestStepsCp002 {
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

    @Given("Navigate index by login")
    public void navigateToPageIndex() {
        driver.navigate().to("http://automationpractice.com/index.php");
    }

    @Given("Click en el boton Sing in by login")
    public void aClickHrefSigIn() {
        driver.findElement(By.className("login")).click();
    }

    @When("A User enters a valid email login")
    public void aUserEntersEmailLogin() {
        driver.findElement(By.id("email")).sendKeys("pepito@perez.com");
    }
    
    @When("A User enters a valid password")
    public void aUserEntersPasswordLogin() {
        driver.findElement(By.id("passwd")).sendKeys("Admin1234*");
    }
    
    @And("A User clicks on Sign in button")
    public void aUserClicksOnSingInButton() {
        driver.findElement(By.name("SubmitLogin")).click();
    }

    @Then("Application shows welcome message login")
    public void applicationShowsWelcomeMessageLogin() {
        String actualMessage = driver.findElement(By.className("info-account")).getText();
        assertThat(actualMessage.trim(), is("Welcome to your account. Here you can manage all of your personal information and orders."));
    }
}

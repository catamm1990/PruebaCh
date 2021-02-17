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

public class TestStepsCp003 {
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

    @Given("Navigate index by search")
    public void navigateToPageIndex() {
        driver.navigate().to("http://automationpractice.com/index.php");
    }

    @When("A User enters a not exists item")
    public void aUserEntersANotExistsItem() {
        driver.findElement(By.name("search_query")).sendKeys("falda");
    }

    @And("A User clicks on search button")
    public void aUserClickOnSearchButton() {
        driver.findElement(By.name("submit_search")).click();        
    }

    @Then("Application shows no result message")
    public void applicationNoResultMessage() {
        String actualMessage = driver.findElement(By.className("alert-warning")).getText();
        assertThat(actualMessage.trim(), is("No results were found for your search \"falda\""));
    }

    @When("A User enters a exists item")
    public void aUserEntersAExistsItem() {
        driver.findElement(By.name("search_query")).sendKeys("faded short");
    }

    @Then("Application shows result message")
    public void applicationShowsResultMessage() {
        String actualMessage = driver.findElement(By.className("heading-counter")).getText();
        assertThat(actualMessage.trim(), is("1 result has been found."));
    }

}

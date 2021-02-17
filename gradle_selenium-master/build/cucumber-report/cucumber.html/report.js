$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/createaccount.feature");
formatter.feature({
  "name": "Create account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@createaccount"
    }
  ]
});
formatter.scenario({
  "name": "Verificar que se permita el acceso a la página web your logo para crear una cuenta",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@createaccount"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate index",
  "keyword": "Given "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.navigateToPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click en el boton Sing in",
  "keyword": "Given "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aClickHrefSigIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User enters a valid email",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserEntersEmailCreateAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User clicks on Create Account button",
  "keyword": "And "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserClickOnCreateAccountButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User enters a customer first name",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserEntersACustomerFirstName()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#customer_firstname\"}\n  (Session info: headless chrome\u003d88.0.4324.150)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027QXCO511\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\JUAN~1.CEB\\AppData...}, goog:chromeOptions: {debuggerAddress: localhost:52154}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8a02d346c4dbc96be4874db85aeed77c\n*** Element info: {Using\u003did, value\u003dcustomer_firstname}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat automationpractice.TestStepsCp001.aUserEntersACustomerFirstName(TestStepsCp001.java:78)\r\n\tat ✽.A User enters a customer first name(file:///D:/Users/juan.ceballos/Downloads/gradle_selenium-master/src/test/resources/features/createaccount.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "A User enters a customer last name",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserEntersACustomerLastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A User enters a password",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserEntersAPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A User enters a first name",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserEntersAFirstName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A User enters a last name",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserEntersALastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A User enters a address",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserEntersAAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A User enters a city",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserEntersACity()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A User select a state",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserSelectAstate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A User enters a zip postal code",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserEntersAZip()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A User select a country",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserSelectACountry()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A User enters a mobile phone",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserEntersAMobilePhone()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A User clicks on Register button",
  "keyword": "And "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.aUserClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Application shows welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "automationpractice.TestStepsCp001.applicationShowsWelcomeMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Verificar que luego de crear una cuenta, se permita el acceso a la misma desde la opción sign in/Already registered",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate index by login",
  "keyword": "Given "
});
formatter.match({
  "location": "automationpractice.TestStepsCp002.navigateToPageIndex()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click en el boton Sing in by login",
  "keyword": "Given "
});
formatter.match({
  "location": "automationpractice.TestStepsCp002.aClickHrefSigIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User enters a valid email login",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp002.aUserEntersEmailLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User enters a valid password",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp002.aUserEntersPasswordLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User clicks on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "automationpractice.TestStepsCp002.aUserClicksOnSingInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Application shows welcome message login",
  "keyword": "Then "
});
formatter.match({
  "location": "automationpractice.TestStepsCp002.applicationShowsWelcomeMessageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/searchitems.feature");
formatter.feature({
  "name": "Search items",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@searchitems"
    }
  ]
});
formatter.scenario({
  "name": "Verificar que si un usuario ingresa un artículo que no se tiene a la venta, se muestre un mensaje al usuario informándole esto",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchitems"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate index by search",
  "keyword": "Given "
});
formatter.match({
  "location": "automationpractice.TestStepsCp003.navigateToPageIndex()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User enters a not exists item",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp003.aUserEntersANotExistsItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User clicks on search button",
  "keyword": "And "
});
formatter.match({
  "location": "automationpractice.TestStepsCp003.aUserClickOnSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Application shows no result message",
  "keyword": "Then "
});
formatter.match({
  "location": "automationpractice.TestStepsCp003.applicationNoResultMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verificar que si un usuario ingresa un artículo que  se tiene a la venta, se muestren los resultados de la búsqueda correctamente",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchitems"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate index by search",
  "keyword": "Given "
});
formatter.match({
  "location": "automationpractice.TestStepsCp003.navigateToPageIndex()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User enters a exists item",
  "keyword": "When "
});
formatter.match({
  "location": "automationpractice.TestStepsCp003.aUserEntersAExistsItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A User clicks on search button",
  "keyword": "And "
});
formatter.match({
  "location": "automationpractice.TestStepsCp003.aUserClickOnSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Application shows result message",
  "keyword": "Then "
});
formatter.match({
  "location": "automationpractice.TestStepsCp003.applicationShowsResultMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
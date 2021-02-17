@createaccount
Feature: Create account

  Scenario: Verificar que se permita el acceso a la página web your logo para crear una cuenta
    Given Navigate index
    Given Click en el boton Sing in
    When A User enters a valid email
    And A User clicks on Create Account button
    When A User enters a customer first name
    When A User enters a customer last name
    #When A User enters a email
    When A User enters a password
    When A User enters a first name
    When A User enters a last name
    When A User enters a address
    When A User enters a city
    When A User select a state
    When A User enters a zip postal code
    When A User select a country
    When A User enters a mobile phone
    And A User clicks on Register button
    Then Application shows welcome message
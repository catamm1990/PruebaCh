@login
Feature: login

  Scenario: Verificar que luego de crear una cuenta, se permita el acceso a la misma desde la opción sign in/Already registered
    Given Navigate index by login
    Given Click en el boton Sing in by login
    When A User enters a valid email login
    When A User enters a valid password
    And A User clicks on Sign in button
    Then Application shows welcome message login
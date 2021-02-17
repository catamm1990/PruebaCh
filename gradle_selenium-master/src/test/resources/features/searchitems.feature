@searchitems
Feature: Search items

  Scenario: Verificar que si un usuario ingresa un artículo que no se tiene a la venta, se muestre un mensaje al usuario informándole esto
    Given Navigate index by search
    When A User enters a not exists item
    And A User clicks on search button
    Then Application shows no result message

  Scenario: Verificar que si un usuario ingresa un artículo que  se tiene a la venta, se muestren los resultados de la búsqueda correctamente
    Given Navigate index by search
    When A User enters a exists item
    And A User clicks on search button
    Then Application shows result message
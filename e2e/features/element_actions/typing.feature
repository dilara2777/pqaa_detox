Feature: Typing into input elements
  As a user I can type suitable elements

  @actions @typing
    Scenario: I can type in an input field
    Given I tap on the 'Members' section
    When I tap on the Add Member icon
    Then I type 'Jose' as Name and 'Test' as Surname
    And I replace 'Test' in Name and 'Jose' in Surname
    Then I enter 'Jose' in Name and 'Test' in Surname


Feature: Element Expectations
  Expectations on el can be conducted for different properties

@expectations @visibility

  Scenario: I can expect element to be visible or not
  Given I tap on the 'Cities' section
  When I verify that the first image in the row is visible
  Then I verify that the last image in the row is not visible

  @expectations @existence

  Scenario: I can expect element to exist or not to exist
    Given I tap on the 'Cities' section
      #ios,
   # When I verify that the last image in the row exist
    #android and ios
    When I verify that the first image of the Asia row exists
    Then I verify that the Water Counter doesn't exist


  @expectations @content
  Scenario: I can expect element to have specific text, label or ID
    Given I tap on the 'Members' section
    When I expect the Member List header test to be 'Members'
    And I expect the Add Member button to have 'addMemberLabel' as label
    And I expect the Add Member button to have 'addMemberIcon' as ID

Feature: Element matchers

  Elements can be located using matchers

  Background: I navigate to Counters section
    Given I tab on the Counters section by text

  @matchers @text
  Scenario: I can locate el by text

    When I tab on the Water counter by text
    And I tab on the Electricity counter by text
    And I tab on the Gas counter by text
    Then I tab on the Broadband counter by text

  @matchers @label
  Scenario: I can locate el by label
    When I tab on the Home navigation section by label
    And I tab on the Counters section by text
    #Label shouldn't use unless agreed by the team and company policy, shouldn't be use for E@E functional tests
    Then I tab on the Water Counter by label

  @matchers @id
  Scenario: I can locate el by ID
    When I tab on the Water counter by ID
    And I tab on the Electricity counter by ID
    And I tab on the Gas counter by ID
    Then I tab on the Broadband counter by ID


  @matchers @multiply
  Scenario: I can locate el by multiply matchers
    When I tab on the Water counter Title by type and text
    And I tab on the Electricity Counter by traits and text
    And I tab on the Gas Counter by ancestor ID and descendant text
    Then I tab on the Broadband Counter by descendant text ancestor type
    And I tap the back button



Feature: Dates can be set in calendar
  As a user I can set date using a calendar

  @actions @calendar @test
  Scenario: I can select date from the calendar
    Given I tap on the 'Members' section
    And I tap on the Add Member icon
    Then I select 'Friday' '5' of 'August' '2022' date in the Calendar

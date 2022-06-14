Feature: Scrolling can be carried out
  As a user I can scroll vertically and horizontally

  @actions @scrolling @verticalscrolling
  Scenario: I can scrolling vertically
    Given I tap on the 'Members' section
    And I tap on the Add Member icon
    When I scroll 'formBackground' 350 pixels 'down'
    And I scroll 'formBackground' 350 pixels 'up'
    And I scroll 'formBackground' 350 pixels 'down' with X: 0.5 and Y: 0.85
    Then I scroll 'formBackground' 350 pixels 'up' with X: 0.5 and Y: 0.15

  @actions @scrolling @verticalscrolling
  Scenario: I can scroll vertically to edges
    Given I tap on the 'Members' section
    And I tap on the Add Member icon
    When I scroll 'formBackground' to the 'bottom'
    Then I scroll 'formBackground' to the 'top'


  @actions @scrolling @verticalscrolling
  Scenario: I can scroll vertically to element
    Given I tap on the 'Members' section
    And I tap on the Add Member icon
    When I scroll 'formBackground' to 'formLabel-startDate' at 75 pixels 'down'
    When I scroll 'formBackground' to 'formLabel-surname' at 75 pixels 'up'


  @actions @scrolling @horizontalscrolling
  Scenario: I can scrol horizontally on a FlatList
    Given I tap on the 'Cities' section
    When I scroll 'imageBackground-europe' to 'image-europe-3' at 50 pixels 'right'
    Then I scroll 'imageBackground-europe' to 'image-europe-0' at 50 pixels 'left'




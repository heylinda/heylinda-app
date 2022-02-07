describe('SettingsScreen', () => {
  it('loads settings', () => {
    cy.visit('/')

    cy.contains('Settings').click()

    cy.contains('Settings')

    cy.contains('Clear Data')
    cy.contains('About')
  })

  it('can navigate to about page and back', () => {
    cy.visit('/')

    cy.contains('Settings').click()

    cy.contains('About').click()

    cy.contains('About')

    cy.contains('Application Version')
    cy.contains('Build Version')

    cy.get('[data-testid=headerBack]').click()

    cy.contains('Settings')
  })
})

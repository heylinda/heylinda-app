describe('SettingsScreen', () => {
  it('loads settings', () => {
    cy.visit('/')

    cy.contains('Settings').click()

    cy.contains('Settings')

    cy.contains('Clear Data')
  })
})

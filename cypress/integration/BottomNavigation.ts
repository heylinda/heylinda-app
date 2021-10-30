describe('BottomNavigation', () => {
  it('can navigate to different pages', () => {
    cy.visit('/')

    cy.contains('Stats').click()

    cy.contains('Stats')
    cy.contains('QUICK STATS')

    cy.contains('Settings').click()

    cy.contains('Settings')
    cy.contains('Clear Data')

    cy.get('a').contains('Home').click()

    cy.contains('Home')
    cy.contains('POPULAR')
  })
})

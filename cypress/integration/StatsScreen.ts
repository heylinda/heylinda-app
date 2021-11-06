describe('StatsScreen', () => {
  it('loads stats', () => {
    cy.visit('/')

    cy.contains('Stats').click()

    cy.contains('Stats')

    cy.contains('QUICK STATS')

    cy.contains('Current Streak')
    cy.contains('0 days')

    cy.contains('Total Sessions')
    cy.contains('0 sessions')

    cy.contains('Listened')
    cy.contains('0 minutes')
  })
})

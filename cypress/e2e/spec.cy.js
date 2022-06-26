/// <reference types="Cypress"/>

import pageElements from './POM/pageElements'
const pe = new pageElements()

describe('abstract test', () => {
  it('passes', () => {


    pe.OpenHomePage_and_verifyTitle()
    pe.OpenMenuExplore()
    pe.selectSubMenuTrending()
    pe.clickOnLanguageFilter()
    pe.EnterYourLanguage('javaScript{downArrow}{downArrow}{enter}')
    pe.SelectLinkThisWeek()
    pe.SelectDateRange()

    let articles = [];
    let numElements = []      

      let repos = []

/////////////////////////da li je java scrypt////

      cy.get('#select-menu-language > .select-menu-button').each($em => {

        let num1 = $em.text()
        cy.log(num1)
      })
/////////////////////////////////



      cy.get('[aria-label="star"]').parent().each($el => {

        let num = $el.text().replace(/,/g, '')

        if(num > 200) {
          repos.push($el)
        }

      }).then(($el) => {
        cy.wrap($el).click().go('back')
        
       })
       cy.log(repos)


    /* cy.get('article').find('[aria-label="star"]').parent().each(($el, index, list) => {

      let num = parseInt($el.text().replace(/,/g, ''))

        if(num > 30000) {
          articles.push(num)
          cy.log(num)
          const urlOfRep = $el.parent().parent().text()
          
          

            cy.wrap($el).click({force: true}).then($el => Cypress.dom.isAttached($el)),
            { timeout: 1000, interval: 10 }
            cy.wait(3000)
            //cy.get('h1').should('have.text', title);
            cy.go('back')
            cy.get('#select-menu-date > .select-menu-button').click({force: true})
            cy.get('[href="https://github.com/trending/javascript?since=weekly"]').click({force: true})
            cy.wait(5000)
            

     
      
      
        

          
          cy.log(urlOfRep)

          
        }

        let parents = $el.parentsUntil('article')
        numElements.push(parents)
        
    })

    cy.log(articles) */
    //cy.log(numElements)

/*
    //ovo je jocino

    cy.get('[aria-label="star"]').parent().invoke('text').then(parseFloat).should('be.gt', 800)

    cy.get('article').find('[aria-label="star"]').parent().each(($el) => {

      let num = parseInt($el.text().replace(/,/g, ''))

        if(num > 30000) {
          articles.push(num)
          cy.log(num)
          const urlOfRep = $el.parent().parent().text()
          
          cy.get('article').each(($el, index, list) => {

            cy.wrap($el).children().click()
      
          })

          
          cy.log(urlOfRep)

          
        }

        let parents = $el.parentsUntil('article')
        numElements.push(parents)
        
    })

    cy.log(articles)
    //cy.log(numElements)
    
*/

    
    
/*      */
       
})

})

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

      cy.get('[aria-label="star"]').parent().each($el => {

        let num = $el.text().replace(/,/g, '')

        if(num > 30000) {
          repos.push($el)
          cy.log(repos) //vraca arrey
          cy.log($el) //vraca element
        }

      }).then(($el) => {
        //cy.wrap($el).click()

        const arraySparse = [repos]
        let numCallbackRuns = 0;
        
        arraySparse.forEach(($el) => {
          console.log({$el});
          numCallbackRuns++;
          const logArrayElements = ($el, index, array) => {
            console.log('a[' + index + '] = ' + $el);
          };
          
          // Notice that index 2 is skipped, since there is no item at
          // that position in the array...
          [repos].forEach(logArrayElements);
        })

  
        
       })
       cy.log(repos)



/////////////////////////da li je java scrypt////

      cy.get('#select-menu-language > .select-menu-button').each($em => {

        let num1 = $em.text()
        cy.log(num1)
      })
/////////////////////////////////





    




      
       
})

})

/// <reference types="Cypress"/>

class pageElements
{


OpenHomePage_and_verifyTitle()
{
    cy.visit('https://github.com/')
    cy.title().should('eq', 'GitHub: Where the world builds software · GitHub')


}

OpenMenuExplore()
{
    const exp = cy.get('div.d-flex.flex-justify-between > .d-flex > .js-details-target > .octicon')
    exp.click({force: true})
}

selectSubMenuTrending()
{
    const tnd =cy.get('a[href$="trending"]')
    tnd.click({force: true})

}

clickOnLanguageFilter()
{
    const lang = cy.get('#select-menu-language > .select-menu-button')
    lang.click()
   

}

LanguageFilter()
{
    const langf = cy.get('#select-menu-language > .select-menu-button')
   
    langf.contains()
    return this

}

EnterYourLanguage(value)
{
    const ty = cy.get('#select-menu-language > .select-menu-modal > .select-menu-filters > .select-menu-text-filter > .form-control')
    ty.clear
    ty.type(value)
   
    return this
}

SelectDateRange()
{
    const sel = cy.get('#select-menu-date > .select-menu-button')
    sel.click({force: true})

}

SelectLinkThisWeek()
{
const lin = cy.get('[href="https://github.com/trending/javascript?since=weekly"]')
lin.click({force: true})


}

}

export default pageElements
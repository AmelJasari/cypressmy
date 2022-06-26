/// <reference types="cypress" />



describe(' API ', () => {
  

    it('a) Get a random user by ID', () => {
    
        cy.request({
          
          method: 'get',
          url : 'https://jsonplaceholder.typicode.com/users/3',

        }).then((res)=>{          

          const userEmail = res.body.email
          cy.log("user email is: " + userEmail)

          const userName = res.body.name
          cy.log("user Name is: " + userName)

          cy.log(JSON.stringify(res))
          expect(res.status).to.eq( 200)

        })
  
    })

    it('b) Get user’s associated todos', () => {
    
      cy.request({
        
        method: 'get',
        url : 'https://jsonplaceholder.typicode.com/todos?userId=3',

      }).then((res)=>{

        cy.log(JSON.stringify(res))
        expect(res.status).to.eq( 200)
        const todoID = res.body.length
        expect(res.body.id).to.not.be.null
        
      
       // let num = res.body.id.text().replace(/,/g, '')
       //expect(res.body.id).to.be.greaterThan(20)
       



        
        cy.get(res.body).each(() => {

          const idtodo = res.body.id
          cy.log(idtodo)
          //expect(res.body).property('id').to.not.be.oneOf([null, ""])



        })
        

        
        cy.log(todoID)
      })

  })

  it('create todo',function (){

    cy.request('POST', 'https://jsonplaceholder.typicode.com/todos/?userId=3', 
    { title: 'testetstststs' }).then(
  (res) => {
    expect(res.body).to.have.property('title', 'testetstststs')
    expect(res.status).to.eq( 201)

  })
    })
  })

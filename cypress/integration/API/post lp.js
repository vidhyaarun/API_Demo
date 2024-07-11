
import payload from "../../fixtures/data.js"
import credential from "../../fixtures/credential.json"

let LpID
 //const lppayload = new payload()
describe('Creating LP into the server - Post method', () => {


    it('valid crediantials', () => {
        cy.request({
            method: 'POST',
            //we camn call the url from baseurl using below comman
            url: Cypress.env('baseurl') + '/limited-partners',
            body: payload,
            auth: {
                username: credential.username,
                password: credential.password
            }

        }).then((response) => {
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response.body))
            expect(response.body.message).to.eq("Limited Partner has been added successfully.")
               // cy.log(JSON.stringify(response))
        })
    })

it('Get All LPAPI',()=>
{
cy.request({

    method: "GET",
    url: "/limited-partners",
    auth:{
        username:credential.username,
        password:credential.password
    },
          //  qs:{designation : payload.designation}
    }).then((response) => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        LpID=response.body.data[0].id
        cy.log(LpID)
    })

})

it('Getsingle API using qs',()=>{
cy.request({

    method: "GET",
    url: "/limited-partners",
    auth:{
        username:credential.username,
        password:credential.password
    },
    //By passing querry parameter I am getting Single LP
    qs:{designation: payload.designation}
}).then((response) => {
    cy.log(JSON.stringify(response.body))
})

})

it('Getsingle API using ID',()=>{
    cy.request({
        method: "GET",
        url: "/limited-partners/"+ LpID,
        auth:{
            username:credential.username,
            password:credential.password
        },
        //By passing querry parameter I am getting Single LP
       // qs:{designation: payload.designation}
    }).then((response) => {
        cy.log(JSON.stringify(response.body))
    })
    
    })
it('Deleting the LP',()=>{
    cy.request({
        method: "DELETE",
        url:"/limited-partners/"+ LpID,
        auth:{
            username:credential.username,
            password:credential.password
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
cy.log(JSON.stringify(response.body))
    }
)
})


})



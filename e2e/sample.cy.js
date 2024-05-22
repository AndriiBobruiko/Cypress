describe("Suite Name", () => { 

    before(() => { 
    
    // root-level hook 
    
    // runs once before all tests 
    
    }); 
    
    // root-level hook 
    
    // runs before every test block 
    
    beforeEach(() => { 
    
    cy.visit("http://internaltrainings-vm.ipa.dataart.net"); 
    
    // users : 
    
    // staff@qa-trainings.com 
    
    // admin@qa-trainings.com 
    
    // both pass: 123123123 
    
    cy.get("#sign-in-email").type("staff@qa-trainings.com"); 
    
    cy.get("#sign-in-password").type("123123123"); 
    
    cy.get("[data-cy='sign-in-button']").click(); 
    
    }); 
    
    afterEach(() => { 
    
    // runs after each test block 
    
    }); 
    
    after(() => { 
    
    // runs once all tests are done 
    
    }); 
    
    it("Switch Lang", () => { 
    
    cy.get('[data-test-id="language-switcher"]').click(); 
    
    cy.get('[data-cy="ua"]').click(); 
    
    cy.get('.flex-1 > [data-cy="navbar-toggle-button"]').click(); 
    
    cy.get('[href="/apps/tasks"]').click(); 
    
    }); 
    
    }); 
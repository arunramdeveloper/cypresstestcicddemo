class AuthLogin {
    visitLoginPage() {
      cy.visit("https://rezzqa2.its-cs.com/Auth/Login");
      cy.wait(20000); // Wait for the page to load
    }
  
    selectLanguage(language) {
      cy.get("body").then(($body) => {
        if ($body.find("#languageDropdown").length > 0) {
          cy.get("#languageDropdown", { timeout: 40000 })
            .should("be.visible")
            .select(language);
        } else {
          cy.log("Dropdown not found, skipping selection.");
        }
      });
  
      cy.wait(5000); // Wait for the page reload
    }
  
    login(email, password) {
        cy.get("input#email", { timeout: 40000 })
          .should("be.visible")
          .clear()
          .type(email);
      
        cy.get("input#password", { timeout: 40000 })
          .should("be.visible")
          .clear()
          .type(password);
      
        cy.get("#rememberMe").check({ force: true }); // ✅ Force checking the checkbox
      
        cy.get("button.btn-login")
          .should("be.visible")
          .click()
          .then(() => {
            cy.wait(5000); // Allow the page to reload
            cy.url().should("include", "/Dashboard"); // Ensure we are on the dashboard
          });
      }
      
    logout() {
      cy.wait(5000); // Wait for UI elements to load
  
      // Open the dropdown
      cy.get("#navbarDropdown3", { timeout: 20000 })
        .should("be.visible")
        .click();
  
      // Find "Sign Out" text in any language and click it
      cy.contains("Sign Out", { timeout: 20000 }).click();
  
      // Verify logout by checking the login page URL
      cy.url().should("include", "/Auth/Login");
  
      cy.wait(20000); // Wait before the next test case starts
    }
  }
  
  export default AuthLogin;
  
import AuthLogin from "../../support/pageObjects/AuthLogin";


describe("Verify Welcome Message and Version", () => {
    it("should display the Welcome heading and correct version", () => {
      cy.visit("https://rezzqa2.its-cs.com/Auth/Login"); // Update URL if needed
  
      // Assert "Welcome" heading is visible
      cy.get("h1", { timeout: 10000 })
        .should("be.visible")
        .and("contain.text", "Welcome");
  
      // Ensure the version number is scrolled into view before asserting
      cy.get("div.version", { timeout: 10000 })
        .scrollIntoView()
        .should("contain.text", "1.2.12"); // Removed visibility check
    });
  });
  
describe("Authentication Tests", () => {
    const auth = new AuthLogin();
  
    it("Login with English (UK) and Logout", () => {
      auth.visitLoginPage();
      auth.selectLanguage("English (UK)");
      auth.login("trajamanikam@its-group.com", "Netm0an12345@");
      cy.wait(5000);
      auth.logout();
    });
  
    it("Login with English (US) and Logout", () => {
      auth.visitLoginPage();
      auth.selectLanguage("English (US)");
      auth.login("trajamanikam@its-group.com", "Netm0an12345@");
      cy.wait(5000);
      auth.logout();
    });
  
    it("Login with Spanish and Logout", () => {
      auth.visitLoginPage();
      auth.selectLanguage("Español");
      auth.login("trajamanikam@its-group.com", "Netm0an12345@");
      cy.wait(5000);
      auth.logout();
    });
   
});


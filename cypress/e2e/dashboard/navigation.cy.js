describe("Dashboard Navigation Test", () => {
    before(() => {
        cy.visit("https://rezzqa2.its-cs.com/Auth/Login"); // Update if needed
  
        // Login
        cy.get("#email").type("trajamanikam@its-group.com");
        cy.get("#password").type("Netm0an12345@");
        cy.get(".btn-login").click();
    
        // Wait for the dashboard to load
        cy.url().should("include", "/Dashboard");
        cy.wait(5000); 
      
    });
  
    it("Clicks each menu item after login", () => {
      const menuItems = [
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/span[2]", // Bookings
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/a[1]/span[1]", // My Bookings
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/a[2]/span[1]", // All Bookings
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[3]/span[2]", // Reserve
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[4]/div[1]/a[1]/span[1]", // Room
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[4]/div[1]/a[2]/span[1]", // Desk
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[4]/div[1]/a[3]/span[1]", // Computers
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[5]/span[2]", // Admin
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[6]/div[1]/a[1]/span[1]", //organisation
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[6]/div[1]/a[2]/span[1]", //users
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[6]/div[1]/a[3]/span[1]", //locations
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[6]/div[1]/a[4]/span[1]", //rooms
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[6]/div[1]/a[5]/span[1]", //desks
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[6]/div[1]/a[6]/span[1]", //computers
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[6]/div[1]/a[7]/span[1]", //tools
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[7]/span[2]", //reports
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[8]/div[1]/a[1]/span[1]", //user report
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[8]/div[1]/a[2]/span[1]", //room reports
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[8]/div[1]/a[3]/span[1]", //desk report
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/div[1]/div[1]/ul[1]/li[8]/div[1]/a[4]/span[1]", //computer 
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/app-top-bar[1]/nav[1]/div[1]/div[2]/app-login-info[1]/div[1]/div[1]/a[1]/div[2]", // User Icon
        "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/app-top-bar[1]/nav[1]/div[1]/div[2]/app-login-info[1]/div[1]/div[1]/div[1]/a[3]", // Sign Out
      ];
  
      // Click each menu item with XPath
      menuItems.forEach((xpath) => {
        cy.xpath(xpath)
          .should("be.visible")
          .click({ force: true });
  
        cy.wait(3000); // Wait 1 second after each click
      });
    });
  });
  
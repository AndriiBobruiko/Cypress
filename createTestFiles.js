const fs = require('fs');
const path = require('path');

const filesStructure = [
  { dir: 'cypress/e2e/signup', files: ['signupErrorHandling.cy.js', 'signupExistingAccount.cy.js'] },
  { dir: 'cypress/e2e/login', files: ['loginErrorHandling.cy.js', 'loginInvalidCredentials.cy.js', 'loginSuccessful.cy.js'] },
  { dir: 'cypress/e2e/mouse', files: ['mouseClickActions.cy.js', 'mouseMoveActions.cy.js', 'mouseHover.cy.js', 'dragAndDrop.cy.js'] },
  { dir: 'cypress/e2e/keyboard', files: ['keyboardActions.cy.js'] },
  { dir: 'cypress/e2e/notes', files: ['createAndManageNotes.cy.js', 'manageReminders.cy.js'] },
  { dir: 'cypress/e2e/e-commerce', files: ['resolveDataFetching.cy.js'] },
  { dir: 'cypress/e2e/wait', files: ['waitForAlert.cy.js', 'waitForPrompt.cy.js', 'waitForConfirmation.cy.js', 'waitForElementVisible.cy.js', 'waitForElementDisappear.cy.js'] },
  { dir: 'cypress/e2e/tasks', files: ['addTasksWithTags.cy.js', 'apiTaskManagement.cy.js'] },
  { dir: 'cypress/e2e/popup', files: ['handlePopupWindows.cy.js'] },
  { dir: 'cypress/e2e/security', files: ['verifyRolesPermissions.cy.js'] },
  { dir: 'cypress/e2e/language', files: ['switchLanguage.cy.js'] },
  { dir: 'cypress/e2e/bugs', files: ['identifyBugs.cy.js'] },
  { dir: 'cypress/e2e/ui-components', files: ['logProteinValues.cy.js'] },
];

const testContents = {
  'signupErrorHandling.cy.js': `describe('Error Handling of Signup Fields', () => {
  beforeEach(() => {
    cy.visit('http://internaltrainings-vm.ipa.dataart.net/sign-up'); // Update with the actual signup URL
  });

  it('Should display error for invalid email format', () => {
    cy.get('#email').type('invalid-email');
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('password123');
    cy.get('#signupButton').click();
    cy.get('.error-message').should('contain', 'Invalid email format');
  });

  it('Should display error for empty password', () => {
    cy.get('#email').type('user@example.com');
    cy.get('#password').clear();
    cy.get('#confirmPassword').type('password123');
    cy.get('#signupButton').click();
    cy.get('.error-message').should('contain', 'Password is required');
  });

  it('Should display error for mismatched passwords', () => {
    cy.get('#email').type('user@example.com');
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('differentPassword');
    cy.get('#signupButton').click();
    cy.get('.error-message').should('contain', 'Passwords do not match');
  });
});`,
  'signupExistingAccount.cy.js': `describe('Signup with an Already Existing Account', () => {
  beforeEach(() => {
    cy.visit('http://internaltrainings-vm.ipa.dataart.net/sign-up'); // Update with the actual signup URL
  });

  it('Should display error for existing account', () => {
    cy.get('#email').type('existing@user.com');
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('password123');
    cy.get('#signupButton').click();
    cy.get('.error-message').should('contain', 'Email is already registered');
  });
});`,
  'loginErrorHandling.cy.js': `describe('Error Handling of Login Fields', () => {
  beforeEach(() => {
    cy.visit('http://internaltrainings-vm.ipa.dataart.net/sign-in'); // Update with the actual login URL
  });

  it('Should display error for invalid email format', () => {
    cy.get('#email').type('invalid-email');
    cy.get('#password').type('password123');
    cy.get('#loginButton').click();
    cy.get('.error-message').should('contain', 'Invalid email format');
  });

  it('Should display error for empty password', () => {
    cy.get('#email').type('user@example.com');
    cy.get('#password').clear();
    cy.get('#loginButton').click();
    cy.get('.error-message').should('contain', 'Password is required');
  });
});`,
  'loginInvalidCredentials.cy.js': `describe('Login with Invalid Credentials and Assert Snackbar Error', () => {
  beforeEach(() => {
    cy.visit('http://internaltrainings-vm.ipa.dataart.net/sign-in'); // Update with the actual login URL
  });

  it('Should display snackbar error for invalid credentials', () => {
    cy.get('#email').type('wrong@user.com');
    cy.get('#password').type('wrongpassword');
    cy.get('#loginButton').click();
    cy.get('.snackbar-message').should('contain', 'Invalid credentials');
  });
});`,
  'loginSuccessful.cy.js': `describe('Login Successfully via the UI', () => {
  beforeEach(() => {
    cy.visit('http://internaltrainings-vm.ipa.dataart.net/sign-in'); // Update with the actual login URL
  });

  it('Should login successfully and redirect to the dashboard', () => {
    cy.get('#email').type('staff@qa-trainings.com');
    cy.get('#password').type('123123123');
    cy.get('#loginButton').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });
});`,
  // Add similar content for other test cases here.
};

// Create directories and files
filesStructure.forEach(group => {
  const dirPath = path.join(__dirname, group.dir);
  console.log(`Creating directory: ${dirPath}`);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Directory created: ${dirPath}`);
  } else {
    console.log(`Directory already exists: ${dirPath}`);
  }

  group.files.forEach(file => {
    const filePath = path.join(dirPath, file);
    console.log(`Creating file: ${filePath}`);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, testContents[file] || '', 'utf8');
      console.log(`File created: ${filePath}`);
    } else {
      console.log(`File already exists: ${filePath}`);
    }
  });
});

console.log('Test files and structure created successfully.');
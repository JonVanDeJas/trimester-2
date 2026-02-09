// Parent class User
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Method to log in the user
    login() {
        console.log(`User ${this.name} is logged in`);
    }
}

// Subclass Admin that extends User
class Admin extends User {
    constructor(name, email, privileges) {
        super(name, email); // Call the parent class constructor
        this.privileges = privileges;
    }

    // Method to show admin privileges
    changePrivileges() {
        console.log(`Admin ${this.name} has the following privileges: ${this.privileges}`);
    }
}

// Example usage:
const user1 = new User('John Doe', 'john@example.com');
const admin1 = new Admin('Jane Smith', 'jane@example.com', ['manage-users', 'delete-posts']);

// Log in the users
user1.login();  // Output: User John Doe is logged in
admin1.login(); // Output: User Jane Smith is logged in

// Check if the users are Admins or regular Users
if (admin1 instanceof Admin) {
    console.log(`${admin1.name} is an Admin and has access to extra admin tools.`);
    admin1.changePrivileges(); // Output: Admin Jane Smith has the following privileges: manage-users, delete-posts
}

if (user1 instanceof Admin) {
    console.log(`${user1.name} is an Admin and has access to extra admin tools.`);
} else {
    console.log(`${user1.name} is a regular User and does not have access to admin tools.`);
}

// Output:
// John Doe is a regular User and does not have access to admin tools.
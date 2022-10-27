class SUser {
    githubToken: string;
    jwtToken: string;
}

interface AuthStrategy {
    auth(user: SUser): boolean;
}

// auth class
class Auth {
    constructor(private strategy: AuthStrategy) { }

    // setting strategy
    setStrategy(strategy: AuthStrategy) {
        this.strategy = strategy;
    }

    // authorizing user
    public authUser(user: SUser): boolean {
        return this.strategy.auth(user);
    }
}

// JWT authorization method
class JWTStrategy implements AuthStrategy {
    auth(user: SUser): boolean {
        if (user.jwtToken) {
            return true;
        }
        return false;
    }
}

// GitHub's authorization method
class GithubStrategy implements AuthStrategy {
    auth(user: SUser): boolean {
        if (user.githubToken) {
            // go to API...
            return true;
        }
        return false;
    }
}

// new user creating
const sUser = new SUser();

// adding jwt token for user
sUser.jwtToken = 'token';

// authorizing by JWT token
const sAuth = new Auth(new JWTStrategy());
console.log(sAuth.authUser(sUser)); // true, because jwt token exist

// changing method of authorization on GitHub
sAuth.setStrategy(new GithubStrategy());
console.log(sAuth.authUser(sUser)); // false, because github token does not exist


/*
     [LOG]: true
     [LOG]: false
*/

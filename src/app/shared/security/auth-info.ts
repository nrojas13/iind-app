export class AuthInfo {
    constructor(public state:String) {
    }

    isLoggedIn() {
        return this.state;
    }
}
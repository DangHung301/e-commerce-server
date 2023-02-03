class AuthController {
    async login(req, res) {
        console.log("Successfully logged in ")
        if(req.body.username == 'hungdz' && req.body.password == "1") {
            res.send("Successfully logged in")
        } else {
            res.send("false")
        }
    }

    async signin(req, res) {     }

    async logout(req, res) {}

    async changePassword(req, res) {

    }
}


export default new AuthController()
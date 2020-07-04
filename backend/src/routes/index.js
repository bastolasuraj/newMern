const controllers = require("../controllers")
const {auth, roleChecker} = require("../middlewares")
module.exports = (app) => {
    //
    // router.get('/',auth,controllers.userDetail)
    app
        .get("/api/users",[auth,roleChecker], controllers.userList)
        .post("/api/users", controllers.createUser)

    app
        .get("/api/users/:id",auth, controllers.userDetail)
        .put("/api/users/:id",auth, controllers.updateUser)
        .delete("/api/users/:id",auth, controllers.deleteUser)
//sign up / sign in
    app
        .post("/api/login", controllers.login)
        .post("/api/registration", controllers.createUser)
}
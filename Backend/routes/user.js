const express = require("express")
const router = express.Router()

const {login}  = require("../controllers/login")
const {signUp}  = require("../controllers/signUp")
const {order,orders,updateOrder} = require("../controllers/orders")
const {auth,isStudent,isAdmin} = require("../middleWares/auth")

router.post("/login",login)
router.post("/signUp",signUp)
router.get("/orders",orders)
router.post("/updateOrder",updateOrder);
router.get("/order/:id",order);
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success :true,
        message: "Welcome to protected admin path"
    })
})

module.exports = router;
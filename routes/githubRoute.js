const passport = require("../middleware/passport");
const router = require("./authRoute");

router.get('/github', passport.authenticate('github'))

router.get('/github/callback',
passport.authenticate('github', {failureRedirect: '/login'}),
function(req,res){
    res.redirect('/dashboard')
})

module.exports = router
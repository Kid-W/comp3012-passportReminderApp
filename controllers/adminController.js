const session = require("express-session");
const userModel = require("../models/userModel").userModel;
// const MemoryStore = require('session-memory-store')(session);

const passport = require('passport');
const { getUserById } = require("./userController");


let adminControllers = {
  
    home : (req, res) => {
        //trying to match the sessions user id with that in the DB, if it exists, display the session ID for that user (should mean that they are loggin in?)
        let sessions = req.session.passport.user
        let theCurrentSession = []
        let store = req.sessionStore



        // const keys = Object.keys(store)
        // const values = Object.values(store.all())
        // // console.log('KEYS', keys)
        // // console.log('VALUES', values)
        

        for(let sid in store.sessions){
            theCurrentSession.push(sid)
            // console.log('SESSION STORE DETAILS',store.session[JSON.parse(store.sessions[sid])])
        }
      
        
        res.render('admin/adminAccess', {currentSessions : theCurrentSession})
            return sessions
            
    },

    revoke : (req, res) => {
        // // ['sessionID', 'sessionID']
        // req.session = null
        
        const sessionToDestroy = sessionStore.getUserById(req.session.id)
        console.log('seson to desry',sessionToDestroy)
        sessionToDestroy.logout()
        res.redirect('/dashboard')
    }
}

module.exports = adminControllers

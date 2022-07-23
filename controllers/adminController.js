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
       
        for(let sid in store.sessions){
           const userID =  JSON.parse(store.sessions[sid]).passport.user
           const sessionID = sid
           const sessionObj = {userid: userID, sessionid: sessionID}
           theCurrentSession.push(sessionObj)
        }

        res.render('admin/adminAccess', {currentSessions : theCurrentSession})
            return sessions
    },

    revoke: (req, res) => {
        let sessionId = req.sessionStore.sessions
        if(sessionId === req.user.session.sessionID){
            req.sessionStore.destroy(sessionID)
        }
      
        res.redirect('/dashboard')
    }
}

module.exports = adminControllers

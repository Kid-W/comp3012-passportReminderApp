const { getUserById } = require("./userController");

const database = require("../models/userModel").userModel


let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: req.user.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
     
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: req.user.reminders });
    }
  },

  create: (req, res) => {
   
    let reminder = {
      id: req.user.reminders.length ,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    
    req.user.reminders.push(reminder);
    res.redirect("/dashboard");
  },

  edit: (req, res) => {
   
    let reminderToFind = req.params.id;
    console.log(reminderToFind,' reminder to find')
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    // implement this code

     req.user.reminders.forEach(ele => {

      if(ele.id === Number(req.params.id)){
        ele.completed =  req.body.completed == 'true' ? Boolean(req.body.completed) : !Boolean(req.body.completed)
        ele. title = req.body.title
        ele.description = req.body.description
       
        return  req.user.reminders.splice(req.params.id , 1 , ele)
      }
    })

    res.redirect('/dashboard')
    
  },

  delete: (req, res) => {
    // Implement this code
    let reminderToDelete = req.params.id
    req.user.reminders.splice(reminderToDelete  ,1)
    res.redirect('/dashboard')
    
  },
};

module.exports = remindersController
const database = [
  {
    id: 1,
    name: "Cindy",
    email: "cindy123@gmail.com",
    password: "cindy",
    role: "admin",
    reminders: [
      {
        id: 0,
        title: 'Example',
        description: 'Reminder',
        completed: false
      },
      
    ],
  },
  {
    id: 2,
    name: "BILL",
    email: "Bill@gmail.com",
    password: "b",
    role : "user",
    reminders: [
      {
        id: 0,
        title: 'Example',
        description: 'Reminder',
        completed: false
      },
    ],
  },
];

const userModel = {

  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },

  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    // throw new Error(`Couldn't find user with id: ${id}`);
  },

  createUserWithGithubId : (profile) => {
    const user = {
      id: profile.id,
      name: profile.username,
      role: 'user',
      reminders : [
        {
          id: 0,
          title: 'Example',
          description: 'Reminder',
          completed: false
        }
      ]
    }
    database.push(user)
    return user
  }
};

module.exports = { database, userModel };

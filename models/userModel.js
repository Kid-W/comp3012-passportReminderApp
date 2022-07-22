const database = [
  {
    id: 1,
    name: "Cindy",
    email: "cindy123@gmail.com",
    password: "cindy",
    reminders: [
      {
        id: 0,
        title: 'title',
        description: 'description4',
        completed: false
      },
    ],
  },
  {
    id: 2,
    name: "BILL",
    email: "Bill@gmail.com",
    password: "b",
    reminders: [
      {
        id: 0,
        title: '',
        description: '',
        completed: false
      },
    ],
  },
  // {
  // //   id: 70993089,
  // //   name: "BILL",fsdg
  // //   email: "Bill@gmail.com",
  // //   password: "b",
  // //   reminders: [
  // //     {
  // //       id: 0,
  // //       title: 'fsdfsd',
  // //       description: '',
  // //       completed: false
  // //     },
  // //   ],
  // // },

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
      reminders : [
        {
          id: 0,
          title: '',
          description: '',
          completed: false
        }
      ]
    }
    database.push(user)
    return user
  }
};

module.exports = { database, userModel };

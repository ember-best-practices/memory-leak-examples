export default function populateStore(store) {
  let loggedInUser = store.createRecord('user', {
    id: 1337,
    firstName: 'Scott',
    lastName: 'Pilgrim'
  });

  let user1 = store.createRecord('user', {
    id: 1338,
    firstName: 'Knives',
    lastName: 'Chau'
  });

  let user2 = store.createRecord('user', {
    id: 1339,
    firstName: 'Ramona',
    lastName: 'Flowers'
  });

  let user3 = store.createRecord('user', {
    id: 1340,
    firstName: 'Gideon',
    lastName: 'Graves'
  });

  let user4 = store.createRecord('user', {
    id: 1341,
    firstName: 'Kim',
    lastName: 'Pine'
  });

  let user5 = store.createRecord('user', {
    id: 1342,
    firstName: 'Wallace',
    lastName: 'Wells'
  });

  let user6 = store.createRecord('user', {
    id: 1343,
    firstName: 'Matthew',
    lastName: 'Patel'
  });

  store.createRecord('update', {
    user: loggedInUser,
    body: 'It\'s complicated'
  });

  store.createRecord('update', {
    user: user1,
    body: 'Is now single'
  });

  store.createRecord('update', {
    user: user2,
    body: 'Is now in a relationship'
  });

  store.createRecord('update', {
    user: user1,
    body: 'Is in love'
  });

  store.createRecord('update', {
    user: user3,
    body: 'Is forming a league of evil exes'
  });

  store.createRecord('update', {
    user: user4,
    body: 'Is tired of this stupidity'
  });

  store.createRecord('update', {
    user: user5,
    body: 'Is pretty darn gay'
  });

  store.createRecord('update', {
    user: user6,
    body: 'Is wondering if pirates are in this year'
  });

  store.createRecord('update', {
    user: user2,
    body: 'Is not in a relationship'
  });
}

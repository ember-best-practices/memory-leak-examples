export default function populateStore(store) {
  store.createRecord('user', {
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

  store.createRecord('update', {
    user: user1,
    body: 'Is now single'
  });

  store.createRecord('update', {
    user: user2,
    body: 'Is now in a relationship'
  });
}

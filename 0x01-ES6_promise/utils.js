const uploadPhoto = () => {
  return {
    status: 200,
    body: 'photo-profile-1',
  };
};

const createUser = () => {
  return {
    firstName: 'Guillaume',
    lastName: 'Salva',
  };
};

module.exports = { uploadPhoto, createUser };


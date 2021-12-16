const findMany = () => {
  console.log('je find many sessions');
};

const findByUser = (idUser: number) => {
  console.log('je find many sessions by user ' + idUser);
};

module.exports = { findMany, findByUser };

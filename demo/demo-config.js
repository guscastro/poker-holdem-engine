
exports = module.exports = {
  mongoUri: 'mongodb://localhost:27017/store',
  tournamentId: '574e653bbebd5a20064d08fb',
  players: [{
    id: 'arale-id',
    name: 'arale',
    bet: require('../demo-players/arale/player').bet
  }, {
    id: 'bender-id',
    name: 'bender',
    bet: require('../demo-players/bender/player').bet
  }, {
    id: 'marvin-id',
    name: 'marvin',
    bet: require('../demo-players/marvin/player').bet
  }, {
    id: 'r2d2-id',
    name: 'r2d2',
    bet: require('../demo-players/r2d2/player').bet
  }]
};

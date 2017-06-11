# poker-holdem-engine

`poker-holdem-engine` provides an engine to play Texas Hold'em Poker in respect of the [official rules](https://it.wikipedia.org/wiki/Texas_hold_%27em).

It's used as default poker holdem engine for http://botpoker.org.

## demo

It's possible to run a demo on your local machine by executing the `npm run demo` from the project root folder.

In order to make the demo works you need to specify a connection string for a mongodb instance.

## start a tournament

```
const engine = require('poker-holdem-engine');

const tournamentID = 'botparty';
const players = [
  {
    id: 'r2',
    name: 'r2d2',
    bet: (gs) => betAmount
  },
  ...
];

engine.start(tournamentID, players);
```

Players should be object with at least the `name`, `id`, and `bet` properties specified.

The bet function is provided with the current game state and should return the desired bet amount.

Every time something of interesting happen the message `gamestate:updated` is notified, with a parameter containing further information about the state of the game.

## quit a tournament

```
engine.quit(tournamentID);
```

When the tournament finishes the message `tournament:completed` is notified.

## prepare your player

```
{
  id: 'my-player',
  name: 'My player',
  bet: function (gamestate, bet) {

    // gamestate contains info about the state of the game.
    // bet is the function you should use to send your bet.

    // currently we just fold every single hand
    return bet(0);
  }
}
```

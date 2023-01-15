# Word Game
<p align="center">
  <img  src="https://parm-portfolio.vercel.app/static/media/WG.8bb484f1b6bd5b2f349c808ef53d3005.svg" />
</p>

## Description

Word Game is a web-based multiplayer game that utilizes websockets to allow users to connect to the same room and play an interactive word game together. The game features a room creation system, where one player can create a room and share the room name with other players. The game also includes a game master system, where one player can start the game by selecting a random letter and starting the timer. Players must come up with words related to the given topics and starting with the specified letter. At the end of the game, players' scores are calculated based on the uniqueness of their chosen words. Word Game was developed using Node.js and Socket.io to enable real-time communication between players. The motivation behind this project was to create an online version of the popular family game Scattegories, using modern web technologies to improve the gameplay experience and reduce paper usage.

<strong>Live Link:</strong> https://word-game-b00da.web.app/

## Tech Stack

-   React
-   Node.js
-   Express
-   Firebase
-   Socket.io

## Features

-   Room creation: One player can create a room and share the room name with other players.
-   Game Master: One player can start the game by selecting a random letter and starting the timer.
-   Topics: Users can create new topics, get topics from a database of previously made topics, or choose random topics to play with.
-   Real-time communication: Utilizes websockets to allow users to connect to the same room and play together in real-time.
-   Score tracking: Players can keep track of their scores using the score incrementer.
-   Room Users: Users can see who else is currently in the room, and if a person leaves the room their name disappears from that list.

## Accomplishments

As the developer of this application, I am proud to have implemented real-time communication using websockets and socket.io, allowing for a seamless multiplayer experience. Additionally, I was able to effectively utilize React and Firebase to create a responsive and dynamic front-end, while utilizing Node.js and Express to handle back-end logic and database management.

## Future Improvements

-   Implement a matchmaking system, allowing players to join existing games or create their own games with specific players.
-   Implement a chat feature, allowing players to communicate in real-time during the game.
-   Implement a settings feature, allowing players to customize their experience (e.g. time limit).
-   Add more game modes, such as a two-letter-beginning game mode, a game mode where you have to come up with a word with a certain number of letters, etc.
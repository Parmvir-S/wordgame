import React, { useEffect, useState } from 'react'
import socket from "../utils/socketConfig";

function UsersPanel({name, room}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      socket.on("roomUsers", (users) => {
          setUsers(users.roomUsers);
      })
    }, [socket]);   
  
  return (
    <div>
        <h3 style={{textAlign: "center"}}>Room: {room.charAt(0).toUpperCase() + room.slice(1)}</h3>
        <div id="roomMembers">
            {users.map((user) => {
                return (
                    <p key={user.name + Math.random(1)}>{user.name === name ? user.name.toUpperCase() : user.name}</p>

                )
            })}
        </div>
    </div>
  )
}

export default UsersPanel
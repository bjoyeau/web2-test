// CHATGPTTT

import React from "react";

interface UserCardProps {
  name: string;
  age: number;
  isOnline: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isOnline }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Âge: {age}</p>
      <div className={isOnline ? "online" : "offline"}>
        {isOnline ? "En ligne" : "Hors ligne"}
      </div>
    </div>
  );
};

export default UserCard;

import React, { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../contexts/AuthContext";
const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Victor",
      img: "https://pps.whatsapp.net/v/t61.24694-24/322293446_589106653064023_981531560860485337_n.jpg?ccb=11-4&oh=01_AdSWf97m1mQHTyv526xuHpjlaj78ZoglnthyO17WvE7bSw&oe=64635F77",
    },
    {
      id: 2,
      name: "Flo",
      img: "https://pps.whatsapp.net/v/t61.24694-24/342717095_1348227499056937_5179830475216581051_n.jpg?ccb=11-4&oh=01_AdSlkBKAFR6JVK6kC7Rc-HFYhhIScA5OOpB4q_CXyiBRZQ&oe=646361E1",
    },
    {
      id: 3,
      name: "Dani",
      img: "https://pps.whatsapp.net/v/t61.24694-24/343473771_254597846943773_1864081277698023766_n.jpg?ccb=11-4&oh=01_AdQQlw_yZVeYwNzRqNVYYJ085L05-e9ddTTFfJhMUJEiPQ&oe=64635745",
    },
    {
      id: 4,
      name: "Edi",
      img: "https://pps.whatsapp.net/v/t61.24694-24/184487929_380965396754587_9161937744221561735_n.jpg?ccb=11-4&oh=01_AdT0jKFhj-FRA-DlO5FhWk8H08CPrn-p_2-2HguOwsgLYA&oe=64633A80",
    },
  ];

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;

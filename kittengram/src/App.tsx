import React, { useState } from "react";
import "./App.css";
import Todd from "./kittens/kitten1.jpg";
import Post from "./components/Post";
import Header from "./components/Header";
import SelectedItem from "./components/SelectedItem";
import Taylor from "./kittens/kitten2.jpg";
import Blue from "./kittens/kitten3.jpg";
import Rachel from "./kittens/kitten4.jpg";
import Jack from "./kittens/kitten5.jpg";

const kittensArray = [
  { image: Todd, name: "Todd", id: 1 },
  { image: Taylor, name: "Taylor", id: 2 },
  { image: Blue, name: "Blue", id: 3 },
  { image: Rachel, name: "Rachel", id: 4 },
  { image: Jack, name: "Jack", id: 5 },
];

function App() {
  const [selectedPostName, setSelectedPostName] = useState("Todd");
  const selectedPost = kittensArray.find(
    (kitten) => kitten.name === selectedPostName
  );

  return (
    <div>
      <Header />
       <div className="app-content">
        <ul className="post-list">
          {kittensArray.map((post) => (
              <Post
              key={post.id}
              image={post.image}
              name={post.name}
              setSelectedPostName={setSelectedPostName}
            />
          ))}
        </ul>
        <SelectedItem name={selectedPost?.name} image={selectedPost?.image} />
      </div>
    </div>
  );
}

export default App;

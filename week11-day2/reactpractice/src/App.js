import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import FriendsCard from "./components/FriendsCard"
import friends from "./friends.json"

const App = () => {

// *** Method 1 ***
  // return (
  //   <Wrapper>
  //     <Title>Friends List</Title>
  //     {/* <SpongeBobCard />
  //     <MrKrabsCard />
  //     <SquidwardCard /> */}
  //     <FriendsCard name={friends[0].name} image={friends[0].image} occupation={friends[0].occupation} location={friends[0].location}/>
  //     <FriendsCard name={friends[1].name} image={friends[1].image} occupation={friends[1].occupation} location={friends[1].location}/>
  //     <FriendsCard name={friends[2].name} image={friends[2].image} occupation={friends[2].occupation} location={friends[2].location}/>
  //   </Wrapper>
  // );

// *** Method 2 ***
  // let friendList = [];

  // for(let i=0; i<friends.length; i++) {
  //   friendList.push(<FriendsCard name={friends[i].name} image={friends[i].image} occupation={friends[i].occupation} location={friends[i].location}/>);
  // }

  // return (
  //   <Wrapper>
  //     <Title>Friends List</Title>
  //     {friendList}
  //   </Wrapper>
  // );

// *** Method 3 ***
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {
        friends.map((elem) => {
          return ( <FriendsCard name={elem.name} image={elem.image} occupation={elem.occupation} location={elem.location} /> );
        })
      }
    </Wrapper>
  );
};

export default App;

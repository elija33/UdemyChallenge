import React from "react";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="istockphoto.jpg" alt="Image" />;
}

function Intro() {
  return (
    <div>
      <About
        name="Elija Amponsa"
        information="Full-Stack web developer at JPMC. When not coding or preparing a course
        I like to play drums to cook and eat or to just enjoy my life"
      />
    </div>
  );
}

function About(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.information}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪🏾" color="#123456" />
      <Skill skill="HTML + CSS" emoji="🤣" color="orangered" />
      <Skill skill="Git and Github" emoji="😍" color="yellow" />
      <Skill skill="JavaScript" emoji="😇" color="orange" />
      <Skill skill="Web Design" emoji="🤪" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;

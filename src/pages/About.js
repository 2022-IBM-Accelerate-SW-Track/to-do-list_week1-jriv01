import React, { Component } from 'react';
import "./About.css";
import p_pic from "../assets/p_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={p_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Justin Rivera</div>
            <div className="brief_description">
              <p>Hi, I'm Justin! I am a junior at NYU's Tandon School of Engineering, majoring in Computer Science.</p>
              <p>I am also on NYU's Robotic Design Team as a Software Technical Lead. We design robots and compete against other universities, it's very enjoyable!</p>
              <p>Aside from academics, I enjoy playing various games/sports with my family and friends.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
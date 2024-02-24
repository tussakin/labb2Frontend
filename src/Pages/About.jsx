import React from 'react';

function About() {
  return (
    <div>
      <main>
        <div className="image-container">
          <img src= "photos/tess.jpeg" alt="Self portrait of me, black and white" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="presentation">
          <h1>Organized chaos!</h1>
          <h3>
            It might sound like a bad thing, to be called chaotic, but I have turned it to my advantage.
          </h3>
          <h5> 
            I've always been a creative person, someone who's not afraid to get my hands dirty if it means a project gets done or I get to try something new. I've tried everything from painting to clay, foam-models, and 3d-modeling. Any new skill is a good skill and I am up for the challenge.
          </h5>
          <h5>
            As a person, being chaotic made me creative and has given me a different way of thinking. I see patterns and solutions others often can't. I see the world differently.
          </h5>
          <h5>
            As a designer, it made me think outside the box and it gave me an edge. My chaotic side gives my creations a signature. A signature that not only makes my work unique but also gives them life.
          </h5>
          <h5>
            And most important, as a programmer I am a problem solver all the way to my core. The combination of problem-solving and organized chaos makes me creative in my coding style, it makes my code a good combination of structured and inventive. I love finding new ways to solve problems and that is what makes programming my passion and future. I am constantly developing, pushing my own limits further and the possibilities are endless.
          </h5>
        </div>
      </main>
    </div>
  );
}

export default About;

import React, { Component } from 'react';
import { togglePopup } from '../popup.js';



class Portfolio extends Component {
  render() {
    return (
      <div>       
        <h1>Portfolio</h1>
        <h5 className="portfolio-intro">Welcome to my work, look around and see if you find anything that 
          you like! 
        </h5>
        <div className="columns">
          <div className="pair">
            <p>My github profile</p> 
            <div className="thumbnail"  onClick={() => togglePopup('popup1')}>
              <a href="https://github.com/tussakin">
                <img src="photos/HackergirlGit.png" alt="Drawing of girl with laptop" /></a>    
            </div>
          </div> 
          <div className="pair">
            <p>The penguin bank<br />
              Bank system<br />
              Group project
            </p> 
            <div className="thumbnail"  onClick={() => togglePopup('popup1')}>
              <a href="https://github.com/roxzlir/ThePenguinBank">
                <img src="photos/penguin.png" alt="A drawing of a penguin" /></a>    
            </div>
          </div>
          <div className="pair">
            <p>Database project<br />
              My first individual databse project
            </p> 
            <div className="thumbnail"  onClick={() => togglePopup('popup1')}>
              <a href="https://github.com/tussakin/IndividuelltDatabasProjektTess">
                <img src="photos/databas.png" alt="A drawing of a database icon" /></a>    
            </div>
          </div>
          <div className="pair">
            <p>The zoo<br />
              inheritage assignment<br />
              C#
            </p> 
            <div className="thumbnail"  onClick={() => togglePopup('popup1')}>
              <a href="https://github.com/tussakin/OOP-Arv">
                <img src="photos/giraffeHead.png" alt="A drawing of a giraffe" /></a>    
            </div>
          </div>
          <div className="pair">
            <p>The chessboard<br />
              Assignment of creating a chessboard<br />
              C#
            </p> 
            <div className="thumbnail" onClick={() => togglePopup('popup1')}>
              <a href="https://github.com/tussakin/chessBoard">
                <img src="photos/chess1.png" alt="A drawing of a chess piece" /></a>    
            </div>
          </div>
          <div className="pair">
            <p> The bean <br />
              An abstract model<br />
              Gypsum, Hand-carved<br />
            </p>    <div className="thumbnail" onClick={() => togglePopup('popup2')}>
              <img src="photos/StackBean.png" alt="A stack of photos, a collage of pictures ofa gypsum model at the top" />
            </div>
          </div>
          <div className="pair">
            <p>Mechanical keyboard<br />
              modelled<br /> 3d printed<br /> painted<br />
            </p>
            <div className="thumbnail" onClick={() => togglePopup('popup3')}>
              <img src="photos/StackOst.png" alt="A stack of photos, a cheese-styled keyboard with a cheese knife, crackers and a glass of wine at the top" />
            </div>
          </div>
          <div className="pair">
            <p>A collection of logotypes I've made<br />
              Ipad pro, apple pencil, windows 10<br />
              Procreate, photoshop, illustrator
            </p>    <div className="thumbnail"  onClick={() => togglePopup('popup4')}>
              <img src="photos/stacklogos.png" alt="A stack of photos of logos" />
            </div>
          </div>
          <div className="pair">
            <p> Collection of illustrations of cats <br />
              Ipad pro, apple pencil<br />
              Procreate
            </p> 
            <div className="thumbnail"  onClick={() => togglePopup('popup5')}>
              <img src="photos/stackkitties.png" alt="A stack of photos, A digital drawing of an orange cat 
              in a red and gold suit, in the style of a painted portrai with a petrol background at the top" />
            </div>
          </div>
          <div className="pair">
            <p>Collection of abstract illustrations<br />
              Ipad pro, apple pencil<br />
              Procreate
            </p>
            <div className="thumbnail"  onClick={() => togglePopup('popup6')}>
              <img src="photos/StackAbstract.png" alt="A stack of photos, an abstract digital painting at the top" />
            </div>
          </div>
          <div className="pair">
            <p>The fox<br />
              Multipurpose hand-sander <br />
              Handcarved foam
            </p>  
            <div className="thumbnail"  onClick={() => togglePopup('popup7')}>
              <img src="photos/stackslip.png" alt="A stack, 2 foam-model multi purpose sanders at the top" />
            </div>
          </div>
          <div className="pair">
            <p>Collection of a variety of different projects  <br />
              Different mediums
            </p>
            <div className="thumbnail"  onClick={() => togglePopup('popup8')}>
              <img src="photos/tonkastack.png" alt="A stack of photos, a render of a single burger grill on top" />
            </div>
          </div>
          <div className="pair">
            <p>Collection of a variety of different projects  <br />
              Different mediums
            </p>
            <div className="thumbnail"  onClick={() => togglePopup('popup9')}>
              <img src="photos/stackgeneral.png" alt="A stack of photos, a digital drawn leg-orthosis at the top" />
            </div>
          </div>
        </div>
        <div className="popup" id="popup2">
          <div className="popup-content">
            <p className="popup-text">An abstract model made for an assignment
              in artschool, made in casted gypsum, then hand carved. Displayed
              on a steel-wire rack that was hand crafted after the curves of the bean.  
            </p>
            <img src="photos/beanscketch.jpg" alt="A sketch of the gypsum model in different angles" />
            <img src="photos/beanbaksidadetalj.jpg" alt="The whole gypsum model from the back" />
            <img src="photos/beandetaljbotten.jpg" alt="A close up of the back of the gypsum model" />
            <img src="photos/beansidadetalj.jpg" alt="The gysum model from the side" />
            <img src="photos/beanhelhetframsida.jpeg" alt="The gypsum model from the front" />
            <img src="photos/beanbaksidamedfot.jpeg" alt="The whole gypsum model with the wired rack and it's base" />
            <img src="photos/beancollection.jpeg" alt="A collage of the gypsum model in different angles" />
            <span className="close-button" C="closeGallery()">X</span>
          </div>
        </div>
        <div className="popup" id="popup3">
          <div className="popup-content">
            <p className="popup-text">A mechanical cheese-styled keyboard i have designed, 3D-printed <br />
              and painted myself. 
            </p>
            <img src="photos/osthalv.jpeg" alt="cheese-keyboard 
              during the painting process, left side of the front half painted" />
            <img src="photos/osthalvsida.jpeg" alt=" cheese-keyboard 
              during the painting process, left short side, half painted" />
            <img src="photos/osthalvlongside.jpeg" alt="cheese-keyboard 
              during the painting process, backside, half painted" />
            <img src="photos/ostost.jpeg" alt="cheese-keyboard during 
              the painting process, diagonal front, almost completely painted" />
            <img src="photos/ost2.jpg" alt="The whole finished cheese-keyboard, 
              with a glass of wine, a cheeseknife, some crackers and a small jar of maralade on a cuttingboard" />
            <img src="photos/ostglas.jpg" alt="The whole finished cheese-keyboard 
              with a glass of wine, a cheeseknife and some crackers on a cuttingboard" />
            <span className="close-button" C="closeGallery()">X</span>
          </div>
        </div>
        <div className="popup" id="popup4">
          <div className="popup-content">
            <p className="popup-text">A collection of more realistic digital 
              drawings of cats I know. All made by me from scratch, with 
              an ipad pro 2020 and apple pencil, in procreate. 
            </p>
            <img src="photos/asklingforit.logo.png" alt="A logotype for an it company" />
            <img src="photos/cheezi.png" alt="A logotype for a personal brand" />
            <img src="photos/svenskar.png" alt="Logotype for Svenskär design" />
            <span className="close-button" C="closeGallery()">X</span>
          </div>
        </div>
        <div className="popup" id="popup5">
          <div className="popup-content">
            <p className="popup-text">A collection of more realistic digital 
              drawings of cats I know. All made by me from scratch, with 
              an ipad pro 2020 and apple pencil, in procreate. 
            </p>
            <img src="photos/rainbowkitty.PNG" alt="A digital drawing of a short-haired brown cat with a 
                  rainbow on its chest, with a purple background" />
            <img src="photos/fancykitty.PNG" alt="A digital drawing of an orange cat in a red and gold suit, 
              in the style of a painted portrai with a petrol background" />
            <img src="photos/chillkitty.PNG" alt="A digital drawing of a white and grey cat on a table 
              with a soft beige-green background" />
            <img src="photos/Elsa.JPG" alt="A digital drawing of a darkgrey cat with yellow eyes with a 
              blue background" />
            <img src="photos/Ewald.jpg" alt="A digital drawing of a white cat with golden eyes, petrol background" />
            <span className="close-button" C="closeGallery()">X</span>
          </div>
        </div>
        <div className="popup" id="popup6">
          <div className="popup-content">
            <p className="popup-text">A collection of more or less abstract digital
              paintings, ranging from colourful and lively and more bleak and 
              subtle. Evry single one is made with an apple pencil on an ipad
              pro 2020, in procreate with an apple pencil.  
            </p>
            <img src="photos/sunsetworld.PNG" alt="A digital abstract painting with a white boarder, 
              it resembles a mountain with a sun setting behind it" />
            <img src="photos/crayonlife.PNG" alt="A digital abstract painting with a white boarder, 
              orange background with texture in blue shades,with red and blue lines" />
            <img src="photos/timeline.PNG" alt="A digital abstract painting with a white boarder, 
              dark blue background with white and black paint in strokes, with thin black and white lines over it." />
            <img src="photos/allTheVersionsOfMe.PNG" alt="A digital abstract painting with a white boarder, 
              rust coloured background with yellow, orange, blue and light red strokes, and black lines in 
                  shape of abstract poeple around the colours" />
            <img src="photos/sweetbloom.PNG" alt="A digital painting with a white boarder, light yellow background, 
              a with a stronger yellow ball in the middle, with a line across it with branches going from the line." />
            <img src="photos/noname.PNG" alt="A digital drawing of a white background, a yellow rectangle in the 
              middle, and black lines making a faceless head." />
            <img src="photos/teeth.PNG" alt="A digital drawing with a white boarder, a blue rectange with 
              white and black strokes going across the page, with a red line across the painting" />
            <img src="photos/whoAmI.PNG" alt="A digital drawing with a white boarder, black retangle in the middle, 
              white strokes going over the rectangle. Red, orange, yellow and blue strokes with black lines 
                  making an imagle of a glitched person in 4 versions" />
            <img src="photos/citybynight.PNG" alt="A digital drawing of a white background and an orange 
          structured rectangle in the middle, in front of it there is a dark red ricle and a row of what 
              resembles a silluette of a town, all with a light yellow outline." />
            <img src="photos/unevencircles.PNG" alt="A digital drawing with a white boarder, a yellow 
              rectange and many think twisted circles shifting in red and blue" />
            <img src="photos/mars.PNG" alt="A digital drawing with a white boarder, light yellow rectange 
              in the middle with purple circles and strokes across it. Black lines going across the strokes." />
            <img src="photos/moonlandscape.PNG" alt="A digital drawing of a textured gradient background with orange, 
              yellow and green, and then semi transparent mountain-like shapes across it, with a red circle and stars in black and white." />
            <img src="photos/bouquetOfNothing.PNG" alt="A digital drawing with a white boarder with a grey-beige 
              rectangle, with a lineart bukette of leafs on strings, tied together with a string." />
            <img src="photos/twistedReality.PNG" alt="A digital drawing with a white background and a beige 
              rectange, a red and black swirl and a black line across the painting." />
            <img src="photos/friendsInADifferentLife.PNG" alt="A digital drawing with a white boarder and a beige background, 
              with black, thick, smeared lines resembling abstract people." />
            <img src="photos/space.PNG" alt="A digital drawing with a white boarder, a dark background with 
              red and orange hues, with white lines running across the painting" />
            <img src="photos/blueblackspace.PNG" alt="A digital drawing with a white boarder, a petrol background, 
              a stringy black ball with blue and purple rings in it, with a yellow line flowing around the rings." />
            <span className="close-button" C="closeGallery()">X</span>
          </div>
        </div>
        <div className="popup" id="popup7">
          <div className="popup-content">
            <p className="popup-text">Foam multi-purpose sander models, my first foam models. The green foam is a rougher less detailed foam, and was used 
              for the first version of the sander, and the grey foam is a harder and more detailed foam that was used for a better designed version of 
              the sander. The Grey model has an improved grip and better battery mount. 
            </p>
            <img src="photos/slipdubbel.jpeg" alt="two foam models in the shape of 2 verisons of a multi-purpose sander" />
            <img src="photos/slip1.JPG" alt="a grey foam-model in the shape of a multi-purpose sander, crooked view from the left front " />
            <img src="photos/slip2.jpeg" alt="a grey foam-model in the shape of a multi-purpose sander, from the back showing the battery" />
            <img src="photos/slipdetalj.jpeg" alt="A close-up of a grey foam-model in the shape of a multi-purpose sander,showing the button and part of the grip" />
            <span className="close-button" C="closeGallery()">X</span>
          </div>
        </div>
        <div className="popup" id="popup8">
          <div className="popup-content">
            <p className="popup-text">A 3d render of a single burger grill, meant to be used on th go from your cars cigarette-outlet. 
              A fun assignment to work towards a brands exsisting profile and design language, to create a grill no matter how far away from 
              a grill the brand in reality is. 
            </p>
            <img src="photos/tonkafull.png" alt="two foam models in the shape of 2 verisons of a multi-purpose sander" />
            <img src="photos/tonkaside.png" alt="a grey foam-model in the shape of a multi-purpose sander, crooked view from the left front " />
            <img src="photos/tonkaopen.png" alt="a grey foam-model in the shape of a multi-purpose sander, from the back showing the battery" />
            <img src="photos/tonkaback.png" alt="A close-up of a grey foam-model in the shape of a multi-purpose sander,showing the button and part of the grip" />
            <span className="close-button" C="closeGallery()">X</span>
          </div>
        </div>
        <div className="popup" id="popup9">
          <div className="popup-content">
            <p className="popup-text">A collection of more or less abstract digital
              paintings, ranging from colourful and lively and more bleak and 
              subtle. Evry single one is made with an apple pencil on an ipad
              pro 2020, in procreate.  
            </p>
            <p className="popup-text">A pair of more ergonomic and including nintendo switch controllers I made as my very first free 
              3d-modelling and rendering assignment in my studies in industrial design. The shape is meant to 
              make them easier to grip. They are designed with people with gripping problems in mind. 
            </p>
            <img src="photos/switch1.png" alt="A render of a pair of  2 nintendo switch controllers,one 
              purple and one petrol both with orange details. The purple laying in front of the petrol." />
            <img src="photos/switch2.png" alt="A render of a pair of  2 nintendo switch controllers,one 
              purple and one petrol both with orange details. The petrol one leaned on top of the purple." />
            <img src="photos/switch3.png" alt="A render of a pair of  2 nintendo switch controllers,one 
              purple and one petrol both with orange details, next to each other." />
            <p className="popup-text">A digital sketch of a leg-orthosis, made for children with leg spasms, that can occour for example 
              in children with cerebral palsy or other muscle affecting injuries and/or sickness.
              The design is made with the caregiver in mind as well as the child. The lock is easily accessable and 
              can with ease be used without risk of accidental unlocking.</p>
            <img src="photos/ortos.jpg" alt="A digital painting of a leg-orthosis, blue base and pink 
              straps, orange lock. white background" />
            <p className="popup-text">A deoderant packaging mockup for a more environmental friendly choice. The packaging is made out of recyclable
              thick paper that can be ripped off in sections as the product wears down with use. The package has 
              room for design and personalization.</p>
            <img src="photos/deofullflare.jpg" alt="A digital drawing of a deoderant with a concept packaging. 
              The packaging is 6 colours and has flaps to uncover more of the deoderant." />
            <img src="photos/deo3.jpg" alt="A digital drawing of a deoderant with a concept packaging. 
              The packaging is 3 colours and has flaps to uncover more of the deoderant." />
            <img src="photos/deosquare.jpg" alt="A digital drawing of a deoderant with a concept packaging. 
              The packaging is light blue with illustrations of leafs on the body and has flaps to uncover more of the deoderant." />
            <img src="photos/deocraft.jpg" alt="A digital drawing of a deoderant with a concept packaging. The packaging is 
              is in a natural craft colour with paper structure, and has flaps to uncover more of the deoderant." />
            <p className="popup-text">A steel wire abstract model with a wooden black base. The wires are soldered together and then
              sanded.
            </p>
            <img src="photos/steelwire.jpeg" alt="A steel wired abstract sculpture standing on a black base." />
            <p className="popup-text">A sketch of an ergonomic vacuumcleaner with several handles for multiple grips. One of the handles
              can be extended for the opportunity to vacuum under for example furniture such as beds, without having to bend your back 
              or get down on your knees. 
            </p>
            <img src="photos/vaccumcleanertext.jpg" alt="A digital drawing of an ergonomic vacuum cleaner 
              with a white body, orange handles and blue buttons. Next to the vacuum cleaner there is text to explain functions." />
            <span className="close-button" onClick="closeGallery()">X</span>
          </div>
        </div>
      </div>
      );
    }
  }

export default Portfolio;
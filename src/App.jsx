// App.jsx
// Purpose: Class-based React component for the State Checkpoint.
// - Manages a person profile in state (name, bio, profession, imgSrc)
// - Toggles visibility of the profile content
// - Renders an image from public (use root-relative path like "/Teeth.png")
import { Component } from "react";
import './App.css'

class App extends Component {
     constructor(props) {
      super(props)
         this.state = {
          // Person data stored in component state
           person: {
             fullName: "Olusegun Oyelola",
             bio: "Classic",
             imgSrc: "/Teeth.png",
             profession:  "Teeth Hero"
            },
            // Controls whether the profile block is visible
            shows: true,
          };
        }
          
      // Toggle the visibility of the profile block
      toggler = () => {
        this.setState({ shows: !this.state.shows});
      };

    render () {
      // Destructure values for cleaner JSX below
      const {person, shows}=  this.state;
      const {imgSrc, fullName, profession, bio} = person;

      return (
        <div>
          <h1>React State Checkpoint</h1>

          {/* Conditionally render the profile section when shows is true */}
          {shows && (
            <div>
            {/* Only render the image if a source is provided */}
            {imgSrc && (<img src={imgSrc} alt="Teeth" width="150" />)}
            <h2> fullName: <strong> {fullName}</strong></h2>

            <p>
              Profession: <strong>{profession}</strong> 
            </p>
            <p>
              bio: <strong>{bio}</strong> 
            </p>
          </div>
          )}

          {/* Button to toggle the visibility */}
          <button onClick={this.toggler}>Toggle shows</button>
          </div>
      );
          
        
          
    }
    }

export default App;

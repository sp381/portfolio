import React from 'react';

export default function Blog() {
  return (
    <div>
      <h1>Works</h1>
      <p>
      <div>
            <ul>
                <li>
                    {/* <a href="https://michaelr432.github.io/now-spinning-team-4/" target="_blank"> */}
                        <img src="spinning-project.png" width={260} height={260} alt="new music release"></img>
                            <h4>Now Spinning
                            <br />
                            <h5>Javascript/Web API's/Tailwind</h5>
                            <br/>
                            </h4>
                    {/* </a> */}
                </li>

                <li>
                    {/* <a href="https://secret-ridge-77127.herokuapp.com/" target="_blank"> */}
                        <img src="movie-project.png" width={275} height={230} alt="movies"></img>
                            <h4>A Movie Forum
                            <br />
                            <h5>MySQL/Express/Sequelize/Handlebars</h5>
                            </h4>
                    {/* </a> */}
                </li>

                <li>
                    {/* <a href="https://lernantino.github.io/run-buddy/" target="_blank"> */}
                        <img src="password-generator.png" width={260} height={260} alt="create passord"></img>
                            <h4>Password Generator 
                            <br />
                            <h5>HTML/CSS/JavaScript</h5>
                            </h4>                        
                    {/* </a> */}
                </li>
            </ul> 
        </div> 
      </p>
    </div>
  );
}

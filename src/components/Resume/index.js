import React from "react";

function Resume() {
  return (
    <section className="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Mariana Davie</h2>
          <ul>
            <li>

            </li>
          </ul>

          <p className="mt-5">

          Please visit my LinkedIn : 
            <a href="https://www.linkedin.com/in/mariana-davie-33a873172/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedIn"
              />
            </a>
            
          </p>


          <p> Please download my resume below </p>
          <a
            href="https://github.com/fondofhats/react-portfolio/raw/main/docs/marianaresume.docx"
            class="link"
          >
            Download 
          </a>


        </div>
      </div>
      <hr></hr>

      <div className="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating, MERN.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
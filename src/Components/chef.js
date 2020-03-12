import React from "react";
import Nav from "../Components/nav";
import "../css/sections.css";
import email from "../images/email.svg"
import phone from "../images/phone.svg"
import edit from "../images/edit.svg"
import cancel from "../images/delete.svg"

class Garden extends React.Component {
  render() {
    return (
      <div className="Garden">
        <Nav />
        <div className="garden-wrapper">
          <div className="header-wrapper">
            <div className="gardner">
              <div className="gardner-img"></div>

              <div className="gardner-bio">Mr Chef</div>
              <div className="gardner-email"><div className="email-icon"><img src={email} alt="email" /> mrgardner.nz@gmail.com</div>  </div>
              <div className="gardner-number"><div className="email-icon"><img src={phone} alt="email" />0224590447</div></div>
            </div>
          </div>


          {/* SECTION-1  */}{/* SECTION-1  */}{/* SECTION-1  */}{/* SECTION-1  */}{/* SECTION-1  */}
          <div className="garden-bg">
            <div className="gardners-content">
              <div className="colorcode"></div>
              <div className="garden-content-wrapper">
                <div className="gardner-task-head">
                  <h2>Western Garden Part</h2>
                  <h5 className="date">20/03/2020</h5>
                  <div className="edit-icon">
                    <img src={edit} alt="email" className="edit" height="20" />
                    <img src={cancel} alt="email" className="cancel" height="20" />
                  </div>

                </div>

                <div className="gardner-task-body">
                  <p>
                    Lorem Ipsum is simply dummy
                     text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry
                      's standard dummy text ever since the 1500s,
                       when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                </p>
                </div>

              </div>

            </div>

            {/* SECTION-1  */}{/* SECTION-1  */}{/* SECTION-1  */}{/* SECTION-1  */}


            {/* SECTION-2 */}{/* SECTION-2 */}{/* SECTION-2 */}{/* SECTION-2 */}

            <div className="gardners-content-2">
              <div className="colorcode-2"></div>
              <div className="garden-content-wrapper">
                <div className="gardner-task-head">
                  <h2>Western Garden Part</h2>
                  <h5 className="date">20/03/2020</h5>
                  <div className="edit-icon">
                    <img src={edit} alt="email" className="edit" height="20" />
                    <img src={cancel} alt="email" className="cancel" height="20" />
                  </div>

                </div>

                <div className="gardner-task-body">
                  <p>
                    Lorem Ipsum is simply dummy
                     text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry
                      's standard dummy text ever since the 1500s,
                       when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                </p>
                </div>

              </div>

            </div>


            {/* SECTION-2 */}{/* SECTION-2 */}{/* SECTION-2 */}{/* SECTION-2 */}

            {/* SECTION-3 */}{/* SECTION-3 */}{/* SECTION-3 */}{/* SECTION-3 */}

            <div className="gardners-content-3">
              <div className="colorcode-3"></div>
              <div className="garden-content-wrapper">
                <div className="gardner-task-head">
                  <h2>Western Garden Part</h2>
                  <h5 className="date">20/03/2020</h5>
                  <div className="edit-icon">
                    <img src={edit} alt="email" className="edit" height="20" />
                    <img src={cancel} alt="email" className="cancel" height="20" />
                  </div>

                </div>

                <div className="gardner-task-body">
                  <p>
                    Lorem Ipsum is simply dummy
                     text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry
                      's standard dummy text ever since the 1500s,
                       when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                </p>
                </div>

              </div>

            </div>


            {/* SECTION-3 */}{/* SECTION-3 */}{/* SECTION-3 */}{/* SECTION-3 */}{/* SECTION-3 */}


          </div>
        </div>
      </div>
    );
  }
}

export default Garden;

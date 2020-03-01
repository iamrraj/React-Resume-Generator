import React, { Component } from "react";
import "./One.css";

import { PDFExport } from "@progress/kendo-react-pdf";

class One extends Component {
  resume;

  constructor() {
    super();

    this.canvLoaded = false;
  }

  exportPDF = () => {
    this.resume.save();
  };
  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          paddingTop: 20,
          backgroundColor: "gray"
        }}
      >
        {!this.canvLoaded && (
          <canvas ref="canvas" style={{ display: "none" }}></canvas>
        )}
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <button onClick={this.exportPDF} style={{ margin: "auto" }}>
            download
          </button>
        </div>
        <PDFExport
          paperSize={"Letter"}
          fileName="don.pdf"
          title="Hello"
          subject="Hello"
          keywords="h"
          ref={r => (this.resume = r)}
        >
          <div
            style={{
              background: "white",
              width: "21cm",
              height: "29.7cm",
              display: "block",
              margin: "0 auto",
              padding: "10px 25px",
              marginBottom: "0.5cm",
              boxShadow: "0 0 0.5cm rgba(0, 0, 0, 0.5)",
              overflowY: "scroll",

              boxSizing: "border-box"
            }}
          >
            <section id="main">
              <header id="title">
                <h1>John Doe</h1>
                <span class="subtitle">Plaintiff, defendant &amp; witness</span>
              </header>
              <section class="main-block">
                <h2>
                  <i class="fa fa-suitcase"></i> Experiences
                </h2>
                <section class="blocks">
                  <div class="date">
                    <span>2015</span>
                    <span>present</span>
                  </div>
                  <div class="decorator"></div>
                  <div class="details">
                    <header>
                      <h3>Some Position</h3>
                      <span class="place">Some Workplace</span>
                      <span class="location">(remote)</span>
                    </header>
                    <div>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin nec mi ante. Etiam odio eros, placerat eu
                          metus id, gravida eleifend odio. Vestibulum dapibus
                          pharetra odio, egestas ullamcorper ipsum congue ac.
                          Maecenas viverra tortor eget convallis vestibulum.
                          Donec pulvinar venenatis est, non sollicitudin metus
                          laoreet sed. Fusce tincidunt felis nec neque aliquet
                          porttitor
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section class="blocks">
                  <div class="date">
                    <span>2014</span>
                    <span>2015</span>
                  </div>
                  <div class="decorator"></div>
                  <div class="details">
                    <header>
                      <h3>Another Position</h3>
                      <span class="place">Some Workplace</span>
                      <span class="location">Some City, Some Country</span>
                    </header>
                    <div>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section class="blocks">
                  <div class="date">
                    <span>2013</span>
                    <span>2014</span>
                  </div>
                  <div class="decorator"></div>
                  <div class="details">
                    <header>
                      <h3>Yet Another Job Position</h3>
                      <span class="place">Some Workplace</span>
                      <span class="location">Some City, Some Country</span>
                    </header>
                    <div>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin nec mi ante. Etiam odio eros, placerat eu
                          metus id, gravida eleifend odio
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </section>
              <section class="main-block">
                <h2>
                  <i class="fa fa-folder-open"></i> Selected Projects
                </h2>
                <section class="blocks">
                  <div class="date">
                    <span>2015</span>
                    <span>2016</span>
                  </div>
                  <div class="decorator"></div>
                  <div class="details">
                    <header>
                      <h3>Some Project 1</h3>
                      <span class="place">Some workplace</span>
                    </header>
                    <div>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin nec mi ante. Etiam odio eros, placerat eu
                          metus id, gravida eleifend odio. Vestibulum dapibus
                          pharetra odio, egestas ullamcorper ipsum congue ac
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin nec mi ante. Etiam odio eros, placerat eu
                          metus id, gravida eleifend odio
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section class="blocks">
                  <div class="date">
                    <span>2014</span>
                    <span>2015</span>
                  </div>
                  <div class="decorator"></div>
                  <div class="details">
                    <header>
                      <h3>Some Project 2</h3>
                      <span class="place">Some workplace</span>
                    </header>
                    <div>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin nec mi ante. Etiam odio eros, placerat eu
                          metus id, gravida eleifend odio. Vestibulum dapibus
                          pharetra odio, egestas ullamcorper ipsum congue ac.
                          Maecenas viverra tortor eget convallis vestibulum.
                          Donec pulvinar venenatis est, non sollicitudin metus
                          laoreet sed. Fusce tincidunt felis nec neque aliquet
                          porttitor
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section class="blocks">
                  <div class="date">
                    <span>2014</span>
                  </div>
                  <div class="decorator"></div>
                  <div class="details">
                    <header>
                      <h3>Some Project 3</h3>
                      <span class="place">Some workplace</span>
                    </header>
                    <div>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin nec mi ante. Etiam odio eros, placerat eu
                          metus id, gravida eleifend odio
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </section>
              <section class="main-block concise">
                <h2>
                  <i class="fa fa-graduation-cap"></i> Education
                </h2>
                <section class="blocks">
                  <div class="date">
                    <span>2009</span>
                    <span>2014</span>
                  </div>
                  <div class="decorator"></div>
                  <div class="details">
                    <header>
                      <h3>Ph.D. in Forty-Two Discovery</h3>
                      <span class="place">Inexistent University</span>
                      <span class="location">Some City, Some Country</span>
                    </header>
                    <div>
                      Relationship of the number with the answer to life, the
                      universe and everything
                    </div>
                  </div>
                </section>
                <section class="blocks">
                  <div class="date">
                    <span>2005</span>
                    <span>2009</span>
                  </div>
                  <div class="decorator"></div>
                  <div class="details">
                    <header>
                      <h3>LL.B. in H&aelig;matophagic Economics</h3>
                      <span class="place">Inexistent University</span>
                      <span class="location">Some City, Some Country</span>
                    </header>
                    <div>President's Scholarship</div>
                  </div>
                </section>
                <section class="blocks">
                  <div class="date">
                    <span>2005</span>
                    <span>2009</span>
                  </div>
                  <div class="decorator"></div>
                  <div class="details">
                    <header>
                      <h3>B.S. in Existential Science (Double Major)</h3>
                      <span class="place">Inexistent University</span>
                      <span class="location">Some City, Some Country</span>
                    </header>
                    <div>President's Scholarship</div>
                  </div>
                </section>
                <section class="blocks">
                  <div class="date"></div>
                  <div class="decorator"></div>
                  <div class="details">
                    <header>
                      <h3>
                        Massive Online Fee&ndash;Required Course (selective
                        list)
                      </h3>
                    </header>
                    <div class="concise">
                      <ul>
                        <li>Introduction to something else</li>
                        <li>Introduction to some more useless things</li>
                        <li>Philosophy in practice</li>
                        <li>
                          Recursive research and its impact on recursive
                          research
                        </li>
                        <li>Artificial politics</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </section>
            </section>
            <aside id="sidebar">
              <div class="side-block" id="contact">
                <h1 className="skillss">Contact Info</h1>
                <ul>
                  <li>
                    <i class="fa fa-globe"></i> johndoe.gtld
                  </li>
                  <li>
                    <i class="fa fa-linkedin"></i> linkedin.com/in/john
                  </li>
                  <li>
                    <i class="fa fa-envelope"></i> me@johndoe.gtld
                  </li>
                  <li>
                    <i class="fa fa-phone"></i> 800.000.0000
                  </li>
                </ul>
              </div>
              <div class="side-block" id="skills">
                <h1 className="skillss">Skills</h1>
                <ul>
                  <li>Omnipresence</li>
                  <li>Anonymity</li>
                  <li>Ordinarity</li>
                  <li>No name rights</li>
                </ul>
              </div>
              <div class="side-block" id="disclaimer">
                This r&eacute;sum&eacute; was wholly typeset with HTML/CSS
                &mdash; see <code>git.io/vVSYL</code>
              </div>
            </aside>
          </div>
        </PDFExport>
      </div>
    );
  }
}

export default One;

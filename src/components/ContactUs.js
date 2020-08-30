import React, { Component } from 'react';


class WhatsappAPI extends React.Component {
  render() {
    return (
      <a href={this.props.src} target="_blank">{this.props.children}</a>
    )
  }
}

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
                <h4>Whatsapp : 
                  <WhatsappAPI src={resumeData.whatsapp}>
                     +62859-5393-6396
                  </WhatsappAPI>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}

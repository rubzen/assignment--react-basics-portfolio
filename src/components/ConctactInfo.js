import React, { Component } from "react";

class ConctactInfo extends Component {
  render() {
    return (
      <section>
        <div class="contactinfo">
          <a class="contactinfo__single" target="_blank">
            <i class="ion-ios-location-outline contactinfo__icon"></i>
            <span class="contactinfo__title">Austin, TX USA</span>
          </a>
          <a href="#" class="contactinfo__single" target="_blank">
            <i class="ion-ios-email-outline contactinfo__icon"></i>
            <span class="contactinfo__title">
              marianasantiago1989@gmail.com
            </span>
          </a>
          <a href="#" class="contactinfo__single" target="_blank">
            <i class="ion-social-github-outline contactinfo__icon"></i>
            <span class="contactinfo__title">devmaria</span>
          </a>
          <a href="#" class="contactinfo__single" target="_blank">
            <i class="ion-social-linkedin-outline contactinfo__icon"></i>
            <span class="contactinfo__title">maría-x-santi</span>
          </a>
        </div>
      </section>
    )
  }
}

export default ConctactInfo

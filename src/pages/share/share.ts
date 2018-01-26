import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'share',
  templateUrl: 'share.html'
})
export class Share {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing) {
  }

  public share(): void {

    const options = {
      message: ' Entra en wearelights.net para informarte sobre el evento ',
      subject: ' We Are Lights '
    }

    // Share.
    this.socialSharing.share(options.message, options.subject)

  }
}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = 'Grocery List';

  items = [
    {
      name: 'Milk',
      quantity: 2
    },
    {
      name: 'Bread',
      quantity: 5
    },
    {
      name: 'Banana',
      quantity: 6
    },
    {
      name: 'Sugar',
      quantity: 10
    },
  ];
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,) {

  }

  async removeItem(item, index) {
    console.log('Removing Item -', item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item -' + index + '...',
      duration: 3000

    });
    await toast.present();
    await this.items.splice(index, 1);


  }

  async addItem() {
    console.log('Adding Item');
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Add Item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          min: 1,
          max: 100
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          handler: data => {
            console.log('Cancel Clicked');

          }
        },

        {
          text: 'Save',
          handler: item => {
            console.log('Saved Clicked', item);
            this.items.push(item);
          }
        }
      ],

    });

    await alert.present();
  }
}



import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  username: string = '';
  password: string = '';
  passwordType: string = 'password';
  tempUsername: string = 'Usuario1';
  tempPassword: string = 'MiClav3';

  constructor(private alertController: AlertController, private router: Router) {}

  
  onSubmit() {
    if (this.username === this.tempUsername && this.password === this.tempPassword) {
      this.showAlert('Login Exitoso', 'Has iniciado sesión correctamente.');
      this.router.navigate(['/menu']);
    } else {
      this.showAlert('Error', 'Usuario o contraseña incorrectos.');
    }
  }

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async resetPassword() {
    const alert = await this.alertController.create({
      header: 'Restablecer Contraseña',
      inputs: [
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'Nueva Contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            if (data.newPassword.trim() === '') {
              this.showAlert('Error', 'No se permite una contraseña vacía');
            } else {

                this.tempPassword = data.newPassword;
                this.showAlert('Éxito', 'Contraseña restablecida correctamente.');     
            }
          }
        }
      ]
    });
    await alert.present();
  }
}
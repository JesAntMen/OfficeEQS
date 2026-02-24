import { Component, signal,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
import { Company } from '../../interface/email.interface';
import { EmailService } from '../../service/email';

@Component({
  selector: 'app-contact-us',
  imports: [FormField,FormsModule],
  standalone: true,
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
private email = inject(EmailService);

  categorias: string[] = ['Transporte', 'Inspección', 'Laboratorio', 'Auditoría'];
  categorias2: string[] = ['Probando', 'Protección Civil', 'Labo', 'Auditoría Generales'];

 company = signal<Company>({
    namecompany: '',
    phonenumber: '',
    message: '',
    destination: [
      {
        name: '',
        lastname: '',
        emailcustomer: '',
        services: [{ nameservice: '', namespecific: '' }],
      },
    ],
  });

  sendCompany = form(this.company);

  // ⚠️ Mejor como getter para que siempre sea el destino actual
  get sendCustomer() {
    return this.sendCompany.destination[0];
  }

  submit(): void {
    const companyPayload = this.company();                 // ✅ payload para /EmailCompany
    const customerPayload = companyPayload.destination[0]; // ✅ payload para /EmailCustomer

    // Si quieres mandar a ambos endpoints con un solo submit:
    this.email.sendCompany(companyPayload).subscribe({
      next: (res) => console.log('EmailCompany OK:', res),
      error: (err) => console.error('EmailCompany ERROR:', err),
    });

    this.email.sendCustomer(customerPayload).subscribe({
      next: (res) => console.log('EmailCustomer OK:', res),
      error: (err) => console.error('EmailCustomer ERROR:', err),
    });
  }
}

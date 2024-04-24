import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from '../../services/service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss'],
})


export class LogonComponent implements OnInit {
  form: FormGroup;
  visible = false;
  successNew = undefined;
  minhaHonda = undefined;
  bSuccessGet: SuccessGet = new SuccessGet();
  exibirConteudoCrono: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: Service,
    private router: Router
  ) 
    {
    if (this.service.signed) this.router.navigate(['/home']);
  }

  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name    : [null],
      email   : [null, [Validators.email]],
      password: [null],
    });
  }

  onSubmit() {
    this.exibirConteudoCrono  = true;
    if (this.form.controls['email'].value == '' && this.form.controls['email'].value !== undefined && this.form.controls['email'].value !== null)
    {
      this.bSuccessGet['email'] = this.form.controls['email'].value;     
    }
    this.service.setUserLogin(true);
    this.form.reset();
  }

  
  onChangeVisible() {
    this.visible = !this.visible;
  }

  forgotPassword() {
    this.exibirConteudoCrono = false;
    Swal.fire({
      title: 'Digite seu email para receber a senha.',
      input: 'email',
      inputPlaceholder: 'Digite seu email',
    })
      .then((email) => {
        this.service.forgotPassword(email.value).subscribe(
          () => {
            Swal.fire({
              icon: 'success',
              title: 'Email com sua senha foi enviado.',
              showConfirmButton: false,
              timer: 2000,
            });
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Nenhum usuário com esse email.',
              showConfirmButton: false,
              timer: 2000,
            });
          }
        );
      })
      .catch(() => {});
  }

}
export class SuccessGet {
  user : string = 'B3Admin';
  email: string = 'email@naoinformado.com.br';
  token: string = 'pair_e68baa683fe64af8aa8cd859296cd557';
  name : string = 'B3Admin';
}
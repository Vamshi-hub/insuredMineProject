import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide = false;
  title = 'Indian-HeadLines';
  welcomeNote=' ';
  user = '';
  pass = '';
  usersDB: any;
  isdisabled:any;
  ishidden:any;
  @ViewChild('deviceStatusDialog') deviceDialog: TemplateRef<any>;
  private openDialogRef: MatDialogRef<TemplateRef<any>>;
  constructor(public router: Router,public snackBar: MatSnackBar, public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.isdisabled=true;
    this.usersDB = [
      { "userid": "tarun@indian.com", "password": "abc123", "username": "Tarun" },
      { "userid": "vamshi@indian.com", "password": "abc123", "username": "Vamshi" },
      { "userid": "tom@indian.com", "password": "abc123", "username": "Tom" }
    ]
    localStorage.setItem("datas", JSON.stringify(this.usersDB));

    let data = JSON.parse(localStorage.getItem('datas') || '{}');
    console.log(data);
  }

  onLoggedout() {
    this.router.navigate(['/home']);
    this.openDialogRef.close();
    this.welcomeNote=' ';
    this.isdisabled=true;
  }
  verifyCredentials() {
    this.welcomeNote=' ';
    let data = JSON.parse(localStorage.getItem('datas') || '{}');
    console.log(this.user);
    console.log(this.pass);
    this.user=this.user.toLocaleLowerCase();
    this.pass=this.pass.toLocaleLowerCase();
    console.log(this.user);
    console.log(this.pass);
    console.log(data);
    for (let u = 0; u < data.length; u++) {
      console.log(data[u].userid, data[u].password);
      if (this.user == data[u].userid && this.pass == data[u].password) {
        console.log(data[u].username)
        this.welcomeNote='Hi ' + data[u].username;
        this.isdisabled=false;
      }
    }
    if(this.welcomeNote == ' '&&this.user!=''&&this.pass!=''||this.welcomeNote == ' '&&this.user!=''||this.welcomeNote == ' '&&this.pass!=''){
      this.snackBar.open('Access denied. Valid username and password is required.', 'OK', {
        duration: 2000,
    });
      this.isdisabled=true;
    }
    this.close();
  }
  close() {
    this.openDialogRef.close();
    this.user='';
    this.pass='';
  }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.restoreFocus = false;
    dialogConfig.autoFocus = false;
    dialogConfig.role = 'dialog';
    this.openDialogRef = this.dialog.open(this.deviceDialog, dialogConfig);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username: string;
  message: string;

  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.username =  this.activatedRoute.snapshot.params['name']
  }

}
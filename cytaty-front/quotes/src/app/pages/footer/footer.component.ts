import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  twitter = '../assets/twitter.svg';
  instagram = '../assets/instagram.svg';
  facebook = '../assets/facebook.svg';

  constructor() { }

  ngOnInit(): void { }

}

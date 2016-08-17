import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'navigation',
  template: `
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header" routerLinkActive="active">
        <a routerLink="/feed/top" class="navbar-brand">GitHunt</a>
      </div>

      <ul class="nav navbar-nav">
        <li routerLinkActive="active">
          <a
            title="Top"
            routerLink="/feed/top">
            Top
          </a>
        </li>
        <li routerLinkActive="active">
          <a
            title="New"
            routerLink="/feed/new">
            New
          </a>
        </li>
      </ul>

      <profile></profile>
    </div>
  </nav>
  `
})
export class Navigation {
  constructor(public router: Router) {}
}

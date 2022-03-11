import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showcase';
  projects = [1,2,3,4,5,6,7];
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(() => {
        this.getChild(this.activatedRoute).data.subscribe((title: any)=>{
          console.log(title);
          this.title=title['name'];
        })
      });
}
getChild(activatedRoute: ActivatedRoute):any {
  if (activatedRoute.firstChild) {
    return this.getChild(activatedRoute.firstChild);
  } else {
    return activatedRoute;
  }

}
  
}

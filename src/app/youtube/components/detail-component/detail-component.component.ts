import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { format, parseISO } from 'date-fns';


@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.scss']
})
export class DetailComponentComponent implements OnInit {
  item: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.item = history.state.item;
    if (!this.item) {
      this.router.navigate(['/youtube']);
    }
    console.log(this.item);
    
  }

  navigateToParent() {
    this.router.navigate(['/youtube']);
  }
}

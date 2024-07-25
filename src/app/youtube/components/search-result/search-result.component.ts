import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../../services/main-service.service';
import { differenceInDays, parseISO } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  data: any[] = [];
  selectedItem: any;

  constructor(private dataService: MainServiceService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
        this.data = data.items.map(item => ({
          ...item,
          borderColor: this.getBorderColor(item.snippet.publishedAt)
        }));
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }

  getBorderColor(publishedAt: string): string {
    const publishedDate = parseISO(publishedAt);
    const currentDate = new Date();
    const daysDifference = differenceInDays(currentDate, publishedDate);

    if (daysDifference > 180) {
      return 'red';
    } else if (daysDifference > 30) {
      return 'yellow';
    } else if (daysDifference > 7) {
      return 'green';
    } else {
      return 'blue';
    }
  }

  navigateToChild(item: any) {
    this.selectedItem = item;
    this.router.navigate(['youtube/child'], { state: { item: this.selectedItem } });
  }
}

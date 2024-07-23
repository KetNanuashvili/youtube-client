import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../../services/main-service.service';
import { differenceInDays, parseISO } from 'date-fns';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: MainServiceService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
        this.data = data.items.map(item => {
          return {
            ...item,
            borderColor: this.getBorderColor(item.snippet.publishedAt)
          };
        });
        console.log(this.data);
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
      return 'red'; // 🟥 if older than 6 months
    } else if (daysDifference > 30) {
      return 'yellow'; // 🟨 if between 1 and 6 months
    } else if (daysDifference > 7) {
      return 'green'; // 🟩 if between 7 days and 1 month
    } else {
      return 'blue'; // 🟦 if newer than 7 days
    }
  }
}

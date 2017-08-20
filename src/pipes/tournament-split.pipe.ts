import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tournamentSplit',
    pure: false
})
export class TournamentSplit implements PipeTransform {
    transform(items: any[], filter): any {
        if (!items || !items.length) {
            return items;
        }
        if (!filter) {
          return items.filter((item) =>
            item.snippet.title.toLowerCase().indexOf('summer') === -1 &&
            item.snippet.title.toLowerCase().indexOf('spring') === -1);
        }
        return items.filter((item) =>
          item.snippet.title.toLowerCase().indexOf(filter) !== -1);
    }
}

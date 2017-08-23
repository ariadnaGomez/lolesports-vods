import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'gameNumber',
    pure: false
})
export class GameNumber implements PipeTransform {
    transform(items: any[], filter): any {
        if (!items || !items.length || !filter) {
            return items;
        }
        if (filter === '3') {
          return items.filter((item) =>
            item.snippet.title.toLowerCase().indexOf('game 3') === -1 &&
            item.snippet.title.toLowerCase().indexOf('game 4') === -1 &&
            item.snippet.title.toLowerCase().indexOf('game 5') === -1 );
        }
        if (filter === '4') {
          return items.filter((item) =>
            item.snippet.title.toLowerCase().indexOf('game 4') === -1 &&
            item.snippet.title.toLowerCase().indexOf('game 5') === -1 );
        }
        if (filter === '5') {
          return items.filter((item) =>
            item.snippet.title.toLowerCase().indexOf('game 5') === -1 );
        }
    }
}

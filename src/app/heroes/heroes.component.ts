import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Hero} from '../hero';

@Component({
    selector: 'app-heroes', // components css element selector
    templateUrl: './heroes.component.html', // location of components template file
    styleUrls: ['./heroes.component.css'], // location of components private CSS styles
    encapsulation: ViewEncapsulation.None
})

export class HeroesComponent implements OnInit { // always export this class

    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    constructor() {
    }

    ngOnInit() { // good place to put initialization logic
    }

}

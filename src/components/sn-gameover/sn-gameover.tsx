import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Highscore } from '../../services/highscore';

@Component({
    tag: 'sn-gameover',
})
export class SnGameover {

    @Prop()
    match: MatchResults;
    
    componentDidLoad() {
        localStorage.setItem("ergebnis", this.match.params.count);
        Highscore.store(this.match.params.count);
    }

    render() {        
        return (
            <div>
                <header>
                    <h1>{this.match} </h1>
                </header>
    
                <main>
    
                    <h2>Great you did {this.match.params.count} correct steps.</h2>
    
                    <div class="menu-item">
                        <stencil-route-link url={'/game'}>
                            <button>Try again</button>
                        </stencil-route-link>
                    </div>

                    <div class="menu-item">
                        <stencil-route-link url={'/highscore'}>
                            <button>Show highscore</button>
                        </stencil-route-link>
                    </div>
                    
                    <div class="menu-item">
                        <stencil-route-link url="/">
                            <button>Back to menu</button>
                        </stencil-route-link>
                    </div>
    
                </main>
            </div>
        );
    }  

}
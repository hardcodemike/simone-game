/*! Built with http://stenciljs.com */
const { h } = window.App;

class Highscore {
    static getHighscore() {
        return JSON.parse(localStorage.getItem('highscore'));
    }
    static store(count) {
        let highscore = JSON.parse(localStorage.getItem('highscore'));
        if (!highscore) {
            highscore = [];
        }
        let now = new Date();
        highscore.push({ score: count, date: now.getTime() });
        highscore.sort((a, b) => {
            if (a.score > b.score) {
                return -1;
            }
            else if (a.score < b.score) {
                return 1;
            }
            else {
                return 0;
            }
        });
        if (highscore.length > 10) {
            highscore.length = 10;
        }
        localStorage.setItem('highscore', JSON.stringify(highscore));
    }
}

export { Highscore };

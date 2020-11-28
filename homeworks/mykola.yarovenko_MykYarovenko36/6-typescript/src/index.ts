const currentScoreEl = document.querySelector('[data-current-points]') as HTMLParagraphElement;
const plusScoreEl = document.querySelector('[data-plus-points]') as HTMLParagraphElement;
const minusScoreEl = document.querySelector('[data-minus-points]') as HTMLParagraphElement;
const gameKeyEl = document.querySelector('[data-game__key]') as HTMLParagraphElement;
const playBtnEl= document.querySelector('[data-btn-play]') as HTMLButtonElement;
const stopBtnEl = document.querySelector('[data-btn-stop]') as HTMLButtonElement;
const clearBtnEl = document.querySelector('[data-btn-clear-score]') as HTMLButtonElement;
const desktopKeyboardElements = document.querySelectorAll('[date-desktop-keyboard-key]') as NodeList;

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private timeInterval: NodeJS.Timeout;
    private itemKeys: string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    constructor(
        private playBtn: HTMLButtonElement,
        private stopBtn: HTMLButtonElement,
        private clearBtn: HTMLButtonElement,
        private desktopKeyboard : NodeList,
        private gameKey: HTMLParagraphElement,
        private currentScore: HTMLParagraphElement,
        private plusScore : HTMLParagraphElement,
        private minusScore: HTMLParagraphElement,
    ) {}

    start() {
        this.currentScore.innerText = '' + this.score;
        [this.playBtn, this.stopBtn, this.clearBtn, ].forEach((el) => {
            el.addEventListener('click', (e): void => {
                const targetEl = e.target as HTMLButtonElement;
                if (targetEl.value === 'game-stop') {
                    this.gameStop();
                }
                if (targetEl.value === 'clear-score') {
                    this.scoreClear();
                }
                if (targetEl.value === 'game-start') {
                    this.gameStart();
                }
            });
        });
    }

    private gameStop() {
        [this.playBtn, this.clearBtn].forEach((el) => {
            el.disabled = false;
        });
        clearInterval(this.timeInterval);
    }

    private scoreClear() {
        this.gameKey.innerText = '';
        this.currentScore.innerText = '' + this.score;
    }

    private gameStart() {
        this.subscribeDesktopInput();
        this.subscribeKeyboardInput();
        [this.playBtn, this.clearBtn].forEach((el) => {
            el.disabled = true;
        });
        this.startKeysInterval();
    }

    private startKeysInterval() {
        this.timeInterval = setInterval((): void => {
            this.setKey(this.itemKeys);
        }, this.interval);
    }

    private setKey(key: string[]) {
        this.gameKey.innerText = key[Math.floor(Math.random() * key.length)];
    }

    private setPoints():number {
        return Math.floor(Math.random() * 10) + 4;
    }

    private plusPoints() {
        let currentPoints: number = Number(this.currentScore.innerText);
        let plusPoints: number = this.setPoints();
        this.plusScore.innerText = '+' + plusPoints;
        if (currentPoints >= 300) {
            alert('You WIN!');
            this.gameStop();
        } else {
            this.currentScore.innerText = `${currentPoints + plusPoints}`;
        }
        setTimeout(() => {
            this.plusScore.innerText = '';
        }, 600);
    }

    private minusPoints() {
        let currentPoints: number = Number(this.currentScore.innerText);
        let minusPoints: number = this.setPoints();
        this.minusScore.innerText = '-' + minusPoints;
        if (currentPoints <= 0) {
            alert('You LOSE!');
            this.gameStop();
        } else {
            this.currentScore.innerText = `${currentPoints - minusPoints}`;
        }
        setTimeout(() => {
            this.minusScore.innerText = '';
        }, 600);
    }

    private subscribeKeyboardInput() {
        document.addEventListener('keyup', (e: KeyboardEvent) => {
            if (e.key.match(/[a-z]/i) && e.key.toUpperCase() === this.gameKey.innerText) {
                this.plusPoints();
            }
            if (e.key.toUpperCase() !== this.gameKey.innerText) {
                this.minusPoints();
            }
        })
    }

    private subscribeDesktopInput() {
        this.desktopKeyboard.forEach((el): void => {
            el.addEventListener('click', (e): void => {
                const targetEl = e.target as HTMLParagraphElement;
                if (targetEl.innerText === this.gameKey.innerText) {
                    this.plusPoints();
                }
                if (targetEl.innerText !== this.gameKey.innerText) {
                    this.minusPoints();
                }
            })
        });
    }
}

const game = new Game(playBtnEl, stopBtnEl, clearBtnEl, desktopKeyboardElements, gameKeyEl, currentScoreEl, plusScoreEl, minusScoreEl);
game.start();

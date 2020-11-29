// block diagram https://drive.google.com/file/d/1Shi5gevLktc9kBh6SMWolseImDWZV1QQ/view?usp=sharing

export { Game };

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;

    private chars :string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    /**
     *
     * @param scoreElement
     * @param cubeScoreElement
     * @param keyElement
     * @param cubeElement
     * @param progressBarElement
     */
    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement?: HTMLDivElement,
        private progressBarElement?: HTMLDivElement,
    ) {}

    start() {
        // code...
        // this.setScore(-22);
        // this.addScore(2);
        // this.keyElement.classList.add('color-true');
        // this.keyElement.textContent = `F`
        // this.cubeElement.classList.add('color-false');
        // this.progressBarElement.textContent = `${50}%`
    }

    private resetGame() {
        this.score = 100;
        this.currentKey = '';
    }

    private main() {
        let play = true;
        this.resetGame();

        do { // game loop
            let tempScore: number = 0;
            tempScore = this.gameIteration(); // играть
            this.addScore(tempScore); // получить счёт и обновить
            if (this.score <= 0 || 200 <= this.score) play = false; // проверка счёта
        } while(play);

        if (this.score <= 0 || 200 <= this.score) {
            console.log('Победа');
        } else console.log('Поражение');
    }

    private gameIteration() {
        let targetChar = this.getNewChar();
        let inputChar: string = '';

        // старт счётчика

        // ожидание буквы

        // ...

        return this.getDeltaScore('win');
    }

    private startKeysInterval() {
        // code...
    }


    /**
     *
     * Обновляет счёт игрока
     */
    private setScore(score: number) {
        // logic
        this.score += score;

        // view
        this.scoreElement.textContent = this.score.toString();
    }


    private setKey(key: string) {
        // logic
        // key = this.key;

        // view
        this.keyElement.textContent = key;
    }

    private checkKey() {
        return false;
    }

    private addScore(score: number) {
        // logic
        this.setScore(score);

        // view
        // todo: цвет зелетый и красный при добавлении и удалении
        // todo: знак + - проверить!
        this.cubeScoreElement.textContent = this.score.toString();
    }

    private subscribeOnKeyPress() {
        // code...
    }

    /**

     * @param result 'win', 'lose' or 'late'
     * @return deltaScore - increment to 'score'
     */
    private getDeltaScore(result: string) {
        let deltaScore: number = 0;
        if (result === 'win') deltaScore = this.getRandom(5, 10);
        if (result === 'lose') deltaScore -= this.getRandom(20, 25);
        if (result === 'late') deltaScore = this.getRandom(10, 15);
        return deltaScore;
    }

    /**
     *
     * @return new character from 'chars'
     */
    private getNewChar() {
        return this.chars[this.getRandom(0, this.chars.length)];
    }

    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    }
}


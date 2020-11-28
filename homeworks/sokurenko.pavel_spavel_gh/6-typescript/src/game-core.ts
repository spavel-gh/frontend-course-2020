export { Game };

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement?: HTMLDivElement,
        private progressBarElement?: HTMLDivElement,
    ) { }

    start() {
        // code...
    }

    private startKeysInterval() {
        // code...
    }

    private setScore(score: number) {
        // code...
    }

    private setKey(key: string) {
        // code...
    }

    private addScore(score: number) {
        // code...
    }

    private subscribeOnKeyPress() {
        // code...
    }
}


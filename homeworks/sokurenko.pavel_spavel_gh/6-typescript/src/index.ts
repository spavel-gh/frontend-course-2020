import './style.css';
import { Game } from './game-core';

const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;

const startBtnNode = document.querySelector('[data-btn-start]') as HTMLButtonElement;
const stopBtnNode = document.querySelector('[data-btn-stop]') as HTMLButtonElement;
const restartBtnNode = document.querySelector('[data-btn-restart]') as HTMLButtonElement;

startBtnNode.addEventListener('click', () => console.log('startBtnNode'));
stopBtnNode.addEventListener('click', () => console.log('stopBtnNode'));
restartBtnNode.addEventListener('click', () => console.log('restartBtnNode'));

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);
// game.start();


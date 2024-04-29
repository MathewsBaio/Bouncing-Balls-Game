// canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


// variaveis

let balls = [];
let count = 26;
let para = document.querySelector('h1');


export {canvas, ctx, width, height, balls, count, para}
import css from "./style.css";

console.log("Hello webpack!");
document.body.innerHTML = "<h1>Hello, World!</h1>";

const fancyFunc = () => {
    return [1,2];
}

const [a, b] = fancyFunc();
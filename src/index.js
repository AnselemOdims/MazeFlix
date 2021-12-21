import './style.css';
import { Nav } from './components.js';
import Helper from './helper.js';

const helper = new Helper();

document.querySelector('header').innerHTML = Nav();

helper.display('a');
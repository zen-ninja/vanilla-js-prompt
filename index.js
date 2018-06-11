/* Global vars */
const BUTTON_EL = document.querySelector('.btn.bg-blue');
const MESSAGE_EL = document.querySelector('.msg');
const MESSAGE_TITLE = document.querySelector('.msg h2');
const ICON_EL = document.querySelector('.svg');
const INFO_EL = document.querySelector('.info');
const INFO_PARAGRAPH = document.querySelector('.info p');
const PROMPT_EL = document.querySelector('.prompt-wrapper');

/* Vars */
var img, msg, info, color = '#000', activePrompt = false;

function promptUser(msg) {
  activatePrompt();
  if (msg === 'Target updated!' || msg === 'Task updated!' || msg === 'Changes saved.') {
    simpleContent();
  }

  if (msg === 'Target updated!' || msg === 'Task updated!') {
    stuffUpdated();
  }

  if (msg === 'Changes saved.') {
    changesSaved();
  }
  
  if (msg === 'Please note') {
    note();
  }
  
  if (msg === 'Future Targets') {
    targets();
  }
  
  if (msg === 'Stream Editors') {
    editors();
  }
}

function simpleContent() {
  if (!BUTTON_EL.classList.contains('is-hidden') && MESSAGE_EL.classList.contains('is-hidden')) {
    BUTTON_EL.classList.add('is-hidden');
    MESSAGE_EL.classList.add('is-hidden');
  }
}

function stuffUpdated() {
  icon = 'icon-tick-circle';
  color = '#93CC32';
  insertContent(icon, msg, color, info);
}

function editors() {
  icon = 'graphic-stream-editor';
  msg = "Editors can add and remove goals and members, and can change the title and report frequency.";
  insertContent(icon, msg, color, info);
}

function targets() {
  icon = 'graphic-future-targets';
  msg = "Values must be numeric, no more than 13 characters and cannot go beyond the target’s end date.";
  insertContent(icon, msg, color, info);
}

function note() {
  icon = 'icon-exclamation-circle';
  msg = "The values you have entered as future targets will be deleted if you change the frequency of this promise.";
  color = '#ED4444';
  insertContent(icon, msg, color, info);
}

function changesSaved() {
  icon = 'icon-tick-circle';
  color = '#13AFD7';
  insertContent(icon, msg, color, info);
}

function activatePrompt() {
  if (PROMPT_EL.classList.contains('is-hidden')) {
    PROMPT_EL.classList.remove('is-hidden');
    activePrompt = true;
  }
  else {
    activePrompt = false;
  }
}

function closePrompt() {
  if (!PROMPT_EL.classList.contains('is-hidden')) {
    PROMPT_EL.classList.add('is-hidden');
  }
}

function insertContent(icon, msg, color, info) {
  ICON_EL.classList.add(icon);
  ICON_EL.classList.add('color-red');
  MESSAGE_TITLE.innerHTML = msg;
  INFO_PARAGRAPH.innerHTML = info;
}
!function(n){var e={};function r(c){if(e[c])return e[c].exports;var l=e[c]={i:c,l:!1,exports:{}};return n[c].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=n,r.c=e,r.d=function(n,e,c){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)r.d(c,l,function(e){return n[e]}.bind(null,l));return c},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst number = document.querySelector('.hydro__box__number--js');\r\nconst addGlass = document.querySelector('.button__cont--add');\r\nconst removeGlass = document.querySelector('.button__cont--remove--js');\r\nconst removeAll = document.querySelector('.button__cont--remove--all--js')\r\nconst summary = document.querySelector('.result__info--js');\r\nconst key = new Date().toISOString().slice(0, 10);\r\n\r\nif (!localStorage.getItem(key)) {\r\n  localStorage.setItem(key, 0);\r\n}\r\n\r\nconsole.log(number, addGlass, removeGlass, removeAll);\r\n\r\naddGlass.addEventListener('click', () => {\r\n\r\n  if (number.innerHTML <= 0) {\r\n    number.innerHTML++\r\n    localStorage.setItem(key, number.innerHTML);\r\n    summary.innerHTML = (`${key} You drank ${localStorage.getItem(key, number.innerHTML)} glasses of water today`);\r\n  } else if (number.innerHTML >= 1) {\r\n    number.innerHTML++\r\n    localStorage.setItem(key, number.innerHTML);\r\n    summary.innerHTML = (`${key} You drank ${localStorage.getItem(key, number.innerHTML)} glasses of water today`);\r\n  }\r\n});\r\n\r\n\r\nremoveGlass.addEventListener('click', () => {\r\n  if (number.innerHTML > 2) {\r\n    number.innerHTML--\r\n    localStorage.setItem(key, number.innerHTML);\r\n    summary.innerHTML = (`${key} You drank ${localStorage.getItem(key, number.innerHTML)} glasses of water today`);\r\n  } else if (number.innerHTML <= 2 && number.innerHTML > 0) {\r\n    number.innerHTML--\r\n    localStorage.setItem(key, number.innerHTML);\r\n    summary.innerHTML = (`${key} You drank ${localStorage.getItem(key, number.innerHTML)} glasses of water today`);\r\n    console.log(\"else if\")\r\n  }\r\n});\r\n\r\nremoveAll.addEventListener('click', () => {\r\n  number.innerHTML = '0';\r\n  localStorage.setItem(key, 0);\r\n  summary.innerHTML = 'You drank 0 glasses of water today! Go now and drink some!';\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSSxhQUFhLDRDQUE0QztBQUN6RixHQUFHO0FBQ0g7QUFDQTtBQUNBLDRCQUE0QixJQUFJLGFBQWEsNENBQTRDO0FBQ3pGO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSSxhQUFhLDRDQUE0QztBQUN6RixHQUFHO0FBQ0g7QUFDQTtBQUNBLDRCQUE0QixJQUFJLGFBQWEsNENBQTRDO0FBQ3pGO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xyXG5cclxuY29uc3QgbnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh5ZHJvX19ib3hfX251bWJlci0tanMnKTtcclxuY29uc3QgYWRkR2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19jb250LS1hZGQnKTtcclxuY29uc3QgcmVtb3ZlR2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19jb250LS1yZW1vdmUtLWpzJyk7XHJcbmNvbnN0IHJlbW92ZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX2NvbnQtLXJlbW92ZS0tYWxsLS1qcycpXHJcbmNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0X19pbmZvLS1qcycpO1xyXG5jb25zdCBrZXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xyXG5cclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCAwKTtcclxufVxyXG5cclxuY29uc29sZS5sb2cobnVtYmVyLCBhZGRHbGFzcywgcmVtb3ZlR2xhc3MsIHJlbW92ZUFsbCk7XHJcblxyXG5hZGRHbGFzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgaWYgKG51bWJlci5pbm5lckhUTUwgPD0gMCkge1xyXG4gICAgbnVtYmVyLmlubmVySFRNTCsrXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIG51bWJlci5pbm5lckhUTUwpO1xyXG4gICAgc3VtbWFyeS5pbm5lckhUTUwgPSAoYCR7a2V5fSBZb3UgZHJhbmsgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXksIG51bWJlci5pbm5lckhUTUwpfSBnbGFzc2VzIG9mIHdhdGVyIHRvZGF5YCk7XHJcbiAgfSBlbHNlIGlmIChudW1iZXIuaW5uZXJIVE1MID49IDEpIHtcclxuICAgIG51bWJlci5pbm5lckhUTUwrK1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBudW1iZXIuaW5uZXJIVE1MKTtcclxuICAgIHN1bW1hcnkuaW5uZXJIVE1MID0gKGAke2tleX0gWW91IGRyYW5rICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5LCBudW1iZXIuaW5uZXJIVE1MKX0gZ2xhc3NlcyBvZiB3YXRlciB0b2RheWApO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxucmVtb3ZlR2xhc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKG51bWJlci5pbm5lckhUTUwgPiAyKSB7XHJcbiAgICBudW1iZXIuaW5uZXJIVE1MLS1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgbnVtYmVyLmlubmVySFRNTCk7XHJcbiAgICBzdW1tYXJ5LmlubmVySFRNTCA9IChgJHtrZXl9IFlvdSBkcmFuayAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSwgbnVtYmVyLmlubmVySFRNTCl9IGdsYXNzZXMgb2Ygd2F0ZXIgdG9kYXlgKTtcclxuICB9IGVsc2UgaWYgKG51bWJlci5pbm5lckhUTUwgPD0gMiAmJiBudW1iZXIuaW5uZXJIVE1MID4gMCkge1xyXG4gICAgbnVtYmVyLmlubmVySFRNTC0tXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIG51bWJlci5pbm5lckhUTUwpO1xyXG4gICAgc3VtbWFyeS5pbm5lckhUTUwgPSAoYCR7a2V5fSBZb3UgZHJhbmsgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXksIG51bWJlci5pbm5lckhUTUwpfSBnbGFzc2VzIG9mIHdhdGVyIHRvZGF5YCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImVsc2UgaWZcIilcclxuICB9XHJcbn0pO1xyXG5cclxucmVtb3ZlQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG51bWJlci5pbm5lckhUTUwgPSAnMCc7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCAwKTtcclxuICBzdW1tYXJ5LmlubmVySFRNTCA9ICdZb3UgZHJhbmsgMCBnbGFzc2VzIG9mIHdhdGVyIHRvZGF5ISBHbyBub3cgYW5kIGRyaW5rIHNvbWUhJztcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);
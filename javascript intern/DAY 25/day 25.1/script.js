"use strict";
const section2 = document.getElementById("item2");

//--------------------  1- Creating the function--------------------

const observerCallback = function (entries, observer) {
  //it takes two arguments the first one is entries from the observerOption object and the second one is the observer itself
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
      document.querySelector("body").style.backgroundColor = "gray";
    } else {
      document.querySelector("body").style.backgroundColor = "white";
    }
  });
};

const ObserverOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(observerCallback, ObserverOptions);

//now call the observer on a section to see it practice
observer.observe(section2);

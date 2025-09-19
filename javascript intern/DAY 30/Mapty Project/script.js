"use strict";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const form = document.querySelector(".form");
const container_Workouts = document.querySelector(".workouts");
const input_type = document.querySelector(".form__input--type");
const input_distance = document.querySelector(".form__input--distance");
const input_duration = document.querySelector(".form__input--duration");
const input_cadence = document.querySelector(".form__input--cadence");
const input_elevation = document.querySelector(".form__input--elevation");

class Workout {
  date = new Date();
  id = (Date.now() + " ").slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    this.pace = this.cadence / this.duration;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevtion_Gain = elevation;
    this.calcSpeed();
  }
  calcSpeed() {
    this.speed = this.elevtion_Gain / (this.duration / 60);
  }
}

class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();
    input_type.addEventListener("change", this._toggleElevation);
    form.addEventListener("submit", this._newWorkout.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('we couldn"t get your current location');
        }
      );
    }
  }

  _toggleElevation() {
    input_elevation.closest(".form__row").classList.toggle("form__row--hidden");
    input_cadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    e.preventDefault();

    const { lat, lng } = this.#mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: true,
          closeOnClick: false,
          className: "running-popup",
        })
      )
      .setPopupContent("workout")
      .openPopup();

    this._clearForm();
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;

    const coordinates = [latitude, longitude];

    this.#map = L.map("map").setView(coordinates, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showform.bind(this));
  }

  _showform(e) {
    this.#mapEvent = e;
    form.classList.remove("hidden");
    input_distance.focus();
  }

  _clearForm() {
    input_cadence.value = "";
    input_distance.value = "";
    input_duration.value = "";
    input_elevation.value = "";
    input_type.value = "running";
    form.classList.add("hidden");
  }
}

const app = new App();

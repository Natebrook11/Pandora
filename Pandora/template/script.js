"use strict";

// JavaScript code goes here

// Example: Accessing elements
const pinWrapper = document.getElementById("app-pin-wrapper");
const pinInput = document.getElementById("app-pin-hidden-input");
const timeElement = document.getElementById("time");
const weatherTypeElement = document.getElementById("weather-type");
const weatherTemperatureValueElement = document.getElementById("weather-temperature-value");
const toolCards = document.getElementsByClassName("tool-card");

// Example: Adding event listeners
pinWrapper.addEventListener("click", handlePinWrapperClick);
pinInput.addEventListener("input", handlePinInput);
timeElement.addEventListener("click", handleTimeClick);

// Example: Updating elements
function updateWeather(temperature, weatherType) {
  weatherTemperatureValueElement.textContent = temperature;
  weatherTypeElement.classList.add(`fa-${weatherType}`);
}

// Example: Handling events
function handlePinWrapperClick(event) {
  // Handle click event on pinWrapper
}

function handlePinInput(event) {
  // Handle input event on pinInput
}

function handleTimeClick(event) {
  // Handle click event on timeElement
}

// Example: Manipulating DOM
function createToolCard(id, image, label, name) {
  const card = document.createElement("div");
  card.className = "tool-card";
  
  const background = document.createElement("div");
  background.className = "tool-card-background background-image";
  background.style.backgroundImage = `url(${image})`;
  card.appendChild(background);
  
  const content = document.createElement("div");
  content.className = "tool-card-content";
  content.innerHTML = <><h3>${label}</h3><p>${name}</p></>;

  const button = document.createElement("button");
  button.textContent = "Learn More";
  button.addEventListener("click", () => {
  // Handle click event on button
  });
  content.appendChild(button);
  
  card.appendChild(content);
  
  // Append the card to a container element
  const container = document.getElementById("tool-cards-container");
  container.appendChild(card);
  }
  
  // Example: Making AJAX requests
  function fetchData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
  const response = JSON.parse(xhr.responseText);
  callback(response);
  }
  };
  xhr.send();
  }
  
  function handleWeatherData(data) {
  const { temperature, weatherType } = data;
  updateWeather(temperature, weatherType);
  }
  
  // Usage example
  const weatherAPI = "https://api.example.com/weather";
  fetchData(weatherAPI, handleWeatherData);
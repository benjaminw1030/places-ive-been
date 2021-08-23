// Business Logic

function PlacesIveBeen() {
  this.places = {};
  this.currentId = 0;
};

PlacesIveBeen.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
}

PlacesIveBeen.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Place(name, location, climate, timeVisited) {
  this.name = name;
  this.location = location;
  this.climate = climate;
  this.timeVisited = timeVisited;
}
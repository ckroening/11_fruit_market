var totalCash = 10000;

var applesCost = 300;
var orangesCost = 300;
var grapesCost = 300;
var bananasCost = 300;

var applesInventory = {
  amount: 0,
  average: 0,
};

var orangesInventory = {
  amount: 0,
  average: 0,
};

var grapesInventory = {
  amount: 0,
  average: 0,
};

var bananasInventory = {
  amount: 0,
  average: 0,
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
	};

	function randomCost() {
  var randomValue = 0;
  randomValue = randomNumber(0, 50);
  if (randomNumber(1, 10) % 2 === 0) {
    return randomValue;
  } else {
    return -1 * randomValue;
  }
};

function costUpdate() {
  setInterval(function() {
    applesCost += randomCost();
    orangesCost += randomCost();
    grapesCost += randomCost();
    bananasCost += randomCost();

    if (applesCost < 50) {applesCost = 50;}

    if (applesCost > 999) {applesCost = 999;}

    if (orangesCost < 50) {orangesCost = 50;}

    if (orangesCost > 999) {orangesCost = 999;}

    if (grapesCost < 50) {grapesCost = 50;}

    if (grapesCost > 999) {grapesCost = 999;}

    if (bananasCost < 50) {bananasCost = 50;}

    if (bananasCost > 999) {bananasCost = 999;}

    console.log(applesCost);
    console.log(orangesCost);
    console.log(grapesCost);
    console.log(bananasCost);

    $('#apples span').first().text((applesCost / 100).toFixed(2));
    $('#oranges span').first().text((orangesCost / 100).toFixed(2));
    $('#grapes span').first().text((grapesCost / 100).toFixed(2));
    $('#bananas span').first().text((bananasCost / 100).toFixed(2));

  }, 3000);
};

function getFruit() {
  $('#apples').on('click', 'button', function() {
    if (totalCash >= applesCost) {
      applesInventory.average = (applesInventory.amount * applesInventory.average + applesCost) / (applesInventory.amount + 1);
      applesInventory.amount++;
      totalCash -= applesCost;
      $('#apples div span').first().text(applesInventory.amount);
      $('#apples div span').last().text((applesInventory.average / 100).toFixed(2));
      $('header span').text((totalCash / 100).toFixed(2));
    } else {
      alert('You do not have enough money for apples! :-(');
    }
  });

  $('#oranges').on('click', 'button', function() {
    if (totalCash >= orangesCost) {
      orangesInventory.average = (orangesInventory.amount * orangesInventory.average + orangesCost) / (orangesInventory.amount + 1);
      orangesInventory.amount++;
      totalCash -= orangesCost;
      $('#oranges div span').first().text(orangesInventory.amount);
      $('#oranges div span').last().text((orangesInventory.average / 100).toFixed(2));
      $('header span').text((totalCash / 100).toFixed(2));
    } else {
      alert('You do not have enough money for oranges! :-(');
    }
  });

  $('#grapes').on('click', 'button', function() {
    if (totalCash >= grapesCost) {
      grapesInventory.average = (grapesInventory.amount * grapesInventory.average + grapesCost) / (grapesInventory.amount + 1);
      grapesInventory.amount++;
      totalCash -= grapesCost;
      $('#grapes div span').first().text(grapesInventory.amount);
      $('#grapes div span').last().text((grapesInventory.average / 100).toFixed(2));
      $('header span').text((totalCash / 100).toFixed(2));
    } else {
      alert('You do not have enough money for grapes! :-(');
    }
  });

  $('#bananas').on('click', 'button', function() {
    if (totalCash >= bananasCost) {
      bananasInventory.average = (bananasInventory.amount * bananasInventory.average + bananasCost) / (bananasInventory.amount + 1);
      bananasInventory.amount++;
      totalCash -= applesCost;
      $('#bananas div span').first().text(bananasInventory.amount);
      $('#bananas div span').last().text((bananasInventory.average / 100).toFixed(2));
      $('header span').text((totalCash / 100).toFixed(2));
    } else {
      alert('You do not have enough money for bananas! :-(');
    }
  });
};

$(document).ready(function() {
  costUpdate();
  getFruit();
});

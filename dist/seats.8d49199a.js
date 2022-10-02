// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/seats.json":[function(require,module,exports) {
module.exports = [{
  "label": "F",
  "type": "seats",
  "seats": [{
    "index": "F8",
    "type": "regular",
    "isUnavailable": true,
    "isTaken": false
  }, {
    "index": "F9",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F10",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F11",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "F12",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F13",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F14",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F15",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "F16",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "F17",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "F18",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "F19",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F20",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F21",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F22",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F23",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F24",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F25",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F26",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F27",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "F28",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F29",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F30",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F31",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F32",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "F33",
    "type": "exit",
    "isUnavailable": true,
    "isTaken": false
  }]
}, {
  "label": "E",
  "type": "seats",
  "seats": [{
    "index": "E8",
    "type": "regular",
    "isUnavailable": true,
    "isTaken": false
  }, {
    "index": "E9",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E10",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E11",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "E12",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E13",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E14",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E15",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "E16",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "E17",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "E18",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "E19",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E20",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E21",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E22",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "E23",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E24",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E25",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E26",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "E27",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "E28",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "E29",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E30",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E31",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "E32",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "E33",
    "type": "exit",
    "isUnavailable": true,
    "isTaken": false
  }]
}, {
  "label": "D",
  "type": "seats",
  "seats": [{
    "index": "D8",
    "type": "regular",
    "isUnavailable": true,
    "isTaken": false
  }, {
    "index": "D9",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D10",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D11",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "D12",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D13",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D14",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D15",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "D16",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "D17",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "D18",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "D19",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D20",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D21",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D22",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "D23",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D24",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D25",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D26",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "D27",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "D28",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "D29",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D30",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D31",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "D32",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "D33",
    "type": "exit",
    "isUnavailable": true,
    "isTaken": false
  }]
}, {
  "label": "",
  "type": "labels",
  "seats": [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
}, {
  "label": "C",
  "type": "seats",
  "seats": [{
    "index": "C8",
    "type": "regular",
    "isUnavailable": true,
    "isTaken": false
  }, {
    "index": "C9",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C10",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C11",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "C12",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C13",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C14",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C15",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "C16",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "C17",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "C18",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "C19",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C20",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C21",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C22",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C23",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C24",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C25",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C26",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C27",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "C28",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C29",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C30",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C31",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C32",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "C33",
    "type": "exit",
    "isUnavailable": true,
    "isTaken": false
  }]
}, {
  "label": "B",
  "type": "seats",
  "seats": [{
    "index": "B8",
    "type": "regular",
    "isUnavailable": true,
    "isTaken": false
  }, {
    "index": "B9",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B10",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B11",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "B12",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B13",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B14",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B15",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "B16",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "B17",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "B18",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "B19",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B20",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B21",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B22",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "B23",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B24",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B25",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B26",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "B27",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "B28",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "B29",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B30",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B31",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "B32",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "B33",
    "type": "exit",
    "isUnavailable": true,
    "isTaken": false
  }]
}, {
  "label": "A",
  "type": "seats",
  "seats": [{
    "index": "A8",
    "type": "regular",
    "isUnavailable": true,
    "isTaken": false
  }, {
    "index": "A9",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A10",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A11",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "A12",
    "type": "premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A13",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A14",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A15",
    "type": "exit-premium",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "A16",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "A17",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "A18",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "A19",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A20",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A21",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A22",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "A23",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A24",
    "type": "regular",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A25",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A26",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "A27",
    "type": "exit-extra",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "A28",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "A29",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A30",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A31",
    "type": "extra",
    "isUnavailable": false,
    "isTaken": false
  }, {
    "index": "A32",
    "type": "exit",
    "isUnavailable": false,
    "isTaken": true
  }, {
    "index": "A33",
    "type": "exit",
    "isUnavailable": true,
    "isTaken": false
  }]
}];
},{}],"scripts/seats.js":[function(require,module,exports) {
var cellClasses = {
  selector: 'js-seats-cell',
  result: 'js-seats-result',
  row: 'ts-seats__row',
  placeholder: 'ts-seats__cell--placeholder',
  base: 'ts-seats__cell',
  unavailable: 'ts-seats__cell--unavailable',
  selected: 'ts-seats__cell--selected',
  taken: 'ts-seats__cell--taken',
  exit: 'ts-seats__cell--exit',
  exitPremium: 'ts-seats__cell--exit-premium',
  exitExtra: 'ts-seats__cell--exit-extra',
  premium: 'ts-seats__cell--premium',
  extra: 'ts-seats__cell--extra'
};
$(function () {
  initSeats();
});

function initSeats() {
  var $table = $('.js-seats-table');
  var $result = $('.js-seats-result');

  var rows = require('./seats.json');

  rows.forEach(function (row) {
    $table.append(createRow(row));
  });
}

function createRow(row) {
  var $row = $('<div>');
  $row.addClass(cellClasses.row);
  var $title = $('<span>');
  $title.html(row.label);
  $title.addClass(cellClasses.base);
  $title.addClass(cellClasses.placeholder);
  $row.append($title);

  if (row.type == 'seats') {
    row.seats.forEach(function (seat) {
      $row.append(createCell(seat));
    });
  } else {
    row.seats.forEach(function (seat) {
      $row.append(createPlaceholder(seat));
    });
  }

  return $row;
}

function createPlaceholder(seat) {
  var $cell = $('<span>');
  $cell.addClass(cellClasses.base);
  $cell.addClass(cellClasses.placeholder);
  $cell.html(seat);
  return $cell;
}

function createCell(seat) {
  var $cell = $('<span>');
  $cell.addClass(cellClasses.selector);
  $cell.addClass(cellClasses.base);

  if (!seat.isTaken && !seat.isUnavailable) {
    $cell.tooltip({
      title: seat.index,
      delay: 500
    });
  }

  if (seat.isUnavailable) {
    $cell.addClass(cellClasses.unavailable);
  }

  if (seat.isTaken) {
    $cell.addClass(cellClasses.taken);
  }

  switch (seat.type) {
    case 'exit':
      $cell.addClass(cellClasses.exit);
      break;

    case 'exit-premium':
      $cell.addClass(cellClasses.exitPremium);
      break;

    case 'exit-extra':
      $cell.addClass(cellClasses.exitExtra);
      break;

    case 'extra':
      $cell.addClass(cellClasses.extra);
      break;

    case 'premium':
      $cell.addClass(cellClasses.premium);
      break;

    default:
      break;
  }

  $cell.click(function () {
    if (!seat.isTaken && !seat.isUnavailable) {
      $(".".concat(cellClasses.result)).html(seat.index);
      $(".".concat(cellClasses.selector)).removeClass(cellClasses.selected);
      $cell.addClass(cellClasses.selected);
    }
  });
  return $cell;
}
},{"./seats.json":"scripts/seats.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51464" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/seats.js"], null)
//# sourceMappingURL=/seats.8d49199a.js.map
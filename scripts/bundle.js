(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//http://tiyfe.herokuapp.com/collections/dillie

'use strict';

$(document).ready(function () {
    console.log('everthing works');

    var $textBox = $('#text-box');
    var $userName = $('#user-name');
    var $form = $('#form');
    var $chatField = $('#chat-field');

    $form.submit(function (e) {
        e.preventDefault();

        var newChatMessage = $textBox.val();
        var newUserName = $userName.val();

        $.post('http://tiyfe.herokuapp.com/collections/chattycats', {
            post: newChatMessage,
            user: newUserName
        }, function (result) {
            $chatField.append('<div>' + newUserName + ': ' + result.post + '</div>');
        }, 'json');
    });
    setInterval(function () {
        $.get('http://tiyfe.herokuapp.com/collections/chattycats', function (response) {
            $chatField.html('');
            response.reverse();
            for (var i = 0; i < response.length; i++) {
                $chatField.append('<div>' + response[i].user + ': ' + response[i].post + '</div>');
            }
        }, 'json');
    }, 2000);
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
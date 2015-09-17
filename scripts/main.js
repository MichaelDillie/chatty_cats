//http://tiyfe.herokuapp.com/collections/dillie

'use strict';

$(document).ready(function() {
    console.log('everthing works');

    var $textBox = $('#text-box');
    var $userName = $('#user-name');
    var $form = $('#form');
    var $chatField = $('#chat-field');
    var $purrify = $('#purr');

    $form.submit(function(e) {
        e.preventDefault();
        var audio = new Audio('../Audio/Meow-sound-effect.mp3');
        audio.play();
        var newChatMessage = $textBox.val();
        var newUserName = $userName.val();
        $textBox.val('');


        $.post(
            'http://tiyfe.herokuapp.com/collections/chattycats', {
                post: newChatMessage,
                user : newUserName
            },
            function(result) {
                $chatField.append('<div>' + newUserName + ': ' + result.post + '</div>');
            },
            'json'
        );
    });
    setInterval(function() {
            $.get(
                'http://tiyfe.herokuapp.com/collections/chattycats',
                function(response) {
                    $chatField.html('');
                    // response.reverse()
                    for (var i = 0; i < response.length; i++) {
                        $chatField.append('<div>' + response[i].user + ': ' + response[i].post+ '</div>');
                    }
                },
                'json'
            );
        },
        2000);






});

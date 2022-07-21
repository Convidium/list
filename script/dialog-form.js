$.validator.addMethod(
    'ukrTel',
    function (value, element, params) {
        return value.substr(0, 3) == '+38';
    },
    'Please, enter valid UA tel'
);

let dialog = $('#dialog').dialog({
    autoOpen: false,
    height: 600,
    width: 700,
    modal: true,
    resizable: false,
    draggable: false,
    show: { effect: "faded", duration: 400 },
    hide: { effect: "fade", duration: 400 },
    buttons: [
        {
            text: "Submit",
            click: function (e) {
                e.preventDefault();

                $('#add-record-form').validate({
                    rules: {
                        name: {
                            required: true,
                            minlength: 5,
                        },
                        email: {
                            required: true,
                            email: true,
                        },
                        phoneNumber: {
                            required: true,
                            ukrTel: true,
                        },
                        country: {
                            required: true,
                            lettersonly: true
                        },
                        state: {
                            required: true,
                            lettersonly: true
                        },
                        gender: {
                            required: true
                        }
                    },
                    messages: {
                        gender: {
                            required: "Please select a gender from the list"
                        }
                    }
                });
            },
            type: 'submit',
            id: 'submit',
            class: 'btn btn-submit',
        },
        {
            text: "Close",
            click: function () {
                dialog.dialog("close");
                $('#add-record-form')[0].reset();
                $('body> :not(.ui-dialog):not(.ui-widget-overlay)').css({
                    filter: "none"
                });
            },
            class: "btn btn-light"
        },
    ],

});

$('#add-new-record').click(function () {
    dialog.dialog("open");
    if ($('.ui-dialog').css('display') == 'none') {
        $('body> :not(.ui-dialog):not(.ui-widget-overlay)').css({
            filter: "none",
            transition: "0.2s -webkit-filter linear",
        })
    } else if ($('.ui-dialog').css('display') == 'block') {
        $('body> :not(.ui-dialog):not(.ui-widget-overlay)').css({
            filter: "blur(3px)",
            transition: "0.2s -webkit-filter linear",
        })
    }
});

$('.ui-dialog-titlebar-close').click(function () {
    $('body> :not(.ui-dialog):not(.ui-widget-overlay)').css({
        filter: "none",
        transition: "0.2s -webkit-filter linear",
    })
});
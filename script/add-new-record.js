
$('#submit').click(function () {
    if ($('#add-record-form').valid() == true) {
        viewModel.records.push({
            id: ko.observable([...viewModel.records()].length + 1),
            name: ko.observable($('#name').val()),
            email: ko.observable($('#email').val()),
            phone: ko.observable($('#phone-number').val()),
            country: ko.observable($('#country').val()),
            state: ko.observable($('#state').val()),
            gender: ko.observable($('#gender').val()),
        });
        dialog.dialog('close');
        $('#add-record-form')[0].reset();
        $('body> :not(.ui-dialog):not(.ui-widget-overlay)').css({
            filter: "none",
            transition: "0.2s -webkit-filter linear",
        })
    }
})
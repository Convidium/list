$(".select-action").change(function () {
    switch ($(".select-action").val()) {
        case '1':
            $('.action-div').html('<button class="btn-focus edit-btn word-edit">Edit</button><button class="btn-focus icon-edit"><i class="fa-solid fa-check blink_me"></i></button>');
            $('.edit-btn, .icon-edit').click(function () {
                let parent = $(this).parents()[1];
                let uneditableDisplayState = $(parent).find('.uneditable').css('display');
                if (uneditableDisplayState == 'block') {
                    $(parent).find('.uneditable').css('display', 'none');
                    $(parent).find('.editable').css('display', 'block');
                    $(parent).find('.word-edit').css('display', 'none');
                    $(parent).find('.icon-edit').css('display', 'block');

                } else if (uneditableDisplayState == 'none') {
                    $(parent).find
                    $(parent).find('.gender-text').text($(parent).find('#gender').val())
                    $(parent).find('.uneditable').css('display', 'block');
                    $(parent).find('.editable').css('display', 'none');
                    $(parent).find('.word-edit').css('display', 'block');
                    $(parent).find('.icon-edit').css('display', 'none');
                    $('.filter-input').val('')
                }

            });
            break;

        case '2':
            $('.action-div').html('<button class="btn-focus delete-btn">Delete</button>')
            $('.delete-btn').click(function () {
                let parent = $(this).parents()[1];
                let id = $(parent).children()[1];
                let element = viewModel.visibleRecords()[parseInt($(id).text() - 1)]
                viewModel.records(_.without(viewModel.records(), element))
                viewModel.visibleRecords(_.without(viewModel.visibleRecords(), element))

            });
            break;

        case '3':
            $('#records').sortable();
            $('.records-client').css({
                borderBottom: '0.2px solid grey',
                backgroundColor: 'rgb(235, 235, 235)'
            });
            break;

        case '4':
            location.reload();
            break;

        case 'ok':
            let pageLength = parseInt(viewModel.pageLength())
            let currentPage = 1

            let allRecords = viewModel.records()
            viewModel.visibleRecords(
                allRecords.slice((currentPage - 1) * pageLength, currentPage * pageLength)
            )
            break;

        default:
            break;
    }
});

$('#checkAll').change(function () {
    let elem = $('#checkAll');
    if (elem.is(':checked')) {
        $('.check').prop("checked", true)
    } else {
        $('.check').prop("checked", false)
    }
});

$('.filter-select').change(function () {
    if ($('.filter-select').val() == 'none') {
        $('.filter-input').css('display', 'none')
    }
    if ($('.filter-select').val() == 'id') {
        $('.filter-input').css('display', 'none')
        $('.filter-id').css('display', 'block')
    }
    if ($('.filter-select').val() == 'name') {
        $('.filter-input').css('display', 'none')
        $('.filter-name').css('display', 'block')
    }
    if ($('.filter-select').val() == 'country') {
        $('.filter-input').css('display', 'none')
        $('.filter-country').css('display', 'block')
    }
    if ($('.filter-select').val() == 'city') {
        $('.filter-input').css('display', 'none')
        $('.filter-city').css('display', 'block')
    }
    if ($('.filter-select').val() == 'gender') {
        $('.filter-input').css('display', 'none')
        $('.filter-gender').css('display', 'block')
    }
})

$('body').keyup(function () {
    if ($('#records').children().length == 0) {
        $('.no-results').css("display", "flex")
    } else{
        $('.no-results').css("display", "none")
    }
})

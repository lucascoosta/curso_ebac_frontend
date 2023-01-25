$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');

        $(`<a href="#">${novaTarefa}</a>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');

        $(novoItem).click(function () {
            $(this).css("text-decoration", "line-through");
        })

    })
})
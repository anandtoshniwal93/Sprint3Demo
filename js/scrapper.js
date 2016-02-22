function load_links() {
    $('#links').empty();
    baseUrl = "http://"+$('#url').val();
    $.ajax({
        url: baseUrl,
        type: "get",
        dataType: "",
        success: function(res) {

            $retrieved_html = $('<form>' + res+ '</form>');
            $.each($retrieved_html.find('a[href]'), function(idx,item) {
                lnk = $(item).attr("href");
                $('<option>' + lnk + '</option>').appendTo($('#links'));
            });
      },
        error: function(status) {
             "Enter valid url"+appendTo($('#links'));
        }
    });
}

function load_url(){
  var url = $('#links option:selected').val();
  var win = window.open(url, '_blank');
  win.focus();
}

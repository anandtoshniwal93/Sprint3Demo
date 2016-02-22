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
                $('<li>' + lnk + '</li>').appendTo($('#links'));
            });
      },
        error: function(status) {
           alert("Enter valid url");
        }
    });
}

function load_url(){
  var url = $('#links option:selected').val();
  var win = window.open(url, '_blank');
  win.focus();
}

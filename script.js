$("#form").submit(function (event) {

    event.preventDefault();
    fetch("https://api.github.com/search/users?type=Users&q=" + $("#input").val())
        .then(function (result) {
            return result.json()
        }).then(function (data) {
            $("#data").empty();
            data.items.forEach(item => {
                console.log(item);
                var element = '<p><a href= "' + item.html_url + '" >  ' + item.login +'</p>';
                $(element).appendTo("#data")
            })
        })


}) 
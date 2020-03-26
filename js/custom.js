function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
ajax_get('../api/gradiAuthors.json', function(data) {
    document.getElementById("id").innerHTML = data["id"];
 
    var html = "<h2>" + data["id"] + "</h2>";
    html += "<h3>" + data["author"] + "</h3>";
    html += "<ul>";
       for (var i=0; i < data.length; i++) {
           html += '<li><a href="' + data[i]["id"] + '">' + data[i]["author"] + "</a></li>";
       }
    html += "</ul>";
    document.getElementById("text").innerHTML = html;
});
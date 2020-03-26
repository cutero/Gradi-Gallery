var request = new XMLHttpRequest();
request.open('GET', 'api/gradiAuthors.json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    
    var data = JSON.parse(this.response);

    var html = "<div class='container'>";

        html += "<div class='main-logo'><img src='assets/img/logo-full.png' alt='Logo' width='400'></div>";
   
        for (var i=0; i < 24; i++) {

            if ((i % 4) == 0) html += "<div class='columns'>";
            
            html += "<div class='column'>";
            html += "<div class='item-box' style='background: url("+ data[i]["download_url"] + ");'>";

            html += "<div class='item-id'>" + data[i]["id"] + "</div>";
            html += "<div class='logo-white'><img src='assets/img/logo-white.png'  alt='Logo Blanco' width='100'></div>";
            html += "<div class='item-author'>" + data[i]["author"] + "</div>";

            html += "</div>";
            html += "</div>";

            if ((i % 4) == 3) html += '</div>';
              
        }
        
        html += "</div>";
	  
      document.getElementById('wm-grid').innerHTML = html;
	  
      console.log(data.length);
      console.log(data);
    
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

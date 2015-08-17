var hc_widget = hc_widget || {};

hc_widget.createLink = function(text, url) {
	var text = document.createTextNode(text);
	var link = document.createElement("a");
	link.href = url;
	link.target = "_blank";
	link.appendChild(text);

	return link;
}

hc_widget.createButton = function(text, url) {
	var text = document.createTextNode(text);
	var button = document.createElement("button");
	button.appendChild(text);
	button.onclick = function() {
		window.open(url, "_blank");
	}
	return button;
}

hc_widget.createImage = function(text, url) {
	var image = document.createElement("img");
	image.alt = text;
	image.src = "http://cuteanimalpicturesandvideos.com/wp-content/uploads/boss-cat-tie.jpg";
	image.onclick = function() {
		window.open(url, "_blank");
	}
	return image;
}

hc_widget.createWidget = function() {
	var text = "http://healthcare.com";
	var url = "http://healthcare.com?pub=" + hc_campaignId;
	var widget_area = document.getElementById("hc_widget");
	if (hc_widget_type == "link") {
		var widget = hc_widget.createLink(text, url);	
	} else if (hc_widget_type == "button") {
		var widget = hc_widget.createButton(text, url);
	} else if (hc_widget_type == "image") {
		var widget = hc_widget.createImage(text, url);
	} else {
		var widget = document.createElement("a");
	}
	
	widget_area.appendChild(widget);
}

hc_widget.appendOnLoad = function(doit) {
	var oldOnLoad = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = doit;
	} else {
		window.onload = function() {
			if (oldOnLoad) {
				oldOnLoad();
			}
			doit();
		}
	}
}

hc_widget.appendOnLoad(hc_widget.createWidget);
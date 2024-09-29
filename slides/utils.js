function includeHTML(file, elementId, parameters) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", file, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Load the HTML file into the target element
      let content = xhr.responseText;

      // Replace placeholders with parameter values
      content = content.replace(/\$\{title\}/g, parameters.title);
      document.getElementById(elementId).innerHTML = content;
    }
  };
  xhr.send();
}

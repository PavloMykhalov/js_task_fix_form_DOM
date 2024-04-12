document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label");t.setAttribute("for",e.id),t.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1);var a=e.name.charAt(0).toUpperCase()+e.name.slice(1);e.setAttribute("placeholder",a),t.classList.add("field-label"),e.parentNode.appendChild(t)});
//# sourceMappingURL=index.fa4b0a2c.js.map

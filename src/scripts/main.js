'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const inputItems = document.querySelectorAll('form input');

  for (const item of inputItems) {
    const label = document.createElement('label');

    label.classList.add('field-label');

    label.setAttribute('for', item.id);

    label.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1);

    item.parentElement.insertBefore(label, item);

    item.placeholder = label.textContent;
  }
});

const btn = document.querySelector('.example-btn');
const widget = document.getElementsByTagName('hostme-widget-reservation')[0];

btn.addEventListener('click', () => widget.getInplace());

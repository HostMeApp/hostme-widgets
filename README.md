# Hostme Reservation Widget Demo

## Install

Contact us [Hostme](http://www.hostmeapp.com).

---

### **[Demo](https://hostmeapp.github.io/hostme-widgets/)**

## Use

```html
<script
    src="https://tables.hostmeapp.com/widgets/reservation/hostme-widget-reservation.es.js"
    type="module"
    async
></script>
<hostme-widget-reservation
    data-hostme-id="6904"
    data-widget-type="vertical"
    data-time-select="precise"
    data-allow-fast-booking="true"
></hostme-widget-reservation>
```

## inPlace method for silent mode

```html
<button type="button" class="example-btn">Button on your site</button>

<script type="text/javascript">
    var button = document.querySelector('.example-btn');
    var widget = document.getElementsByTagName('hostme-widget-reservation')[0];

    button.addEventListener('click', () => widget.getInplace());
</script>
```

---

## Supported params
```html
<hostme-widget-reservation
    data-hostme-id="6904"
    data-widget-type="vertical" // ["vertical", "horizontal", "button", "silent"]
    data-allow-fast-booking="true"
    data-adaptive-layout="true"
    data-color-cheme="dark" // ["dark", "light"]
    data-preferred-guests="3"
    data-preferred-language="en" // ["en", "en-gb", "fr", "fr-ca", "da", "de", "it", "es", "bs", "pt", "cs", "pl", "sr", "sr-latin", "ru", "uk", "sv", "el", "zh-tw"]
    data-guest-select-requared="true"
    data-calendar-select-requared="true"
    data-time-select-requared="true"
    data-hide-header="true"
    data-available-rest-ids="4381,6904"
    data-available-rest-names="Jimmi's Italian's,Pizza Hut"
></hostme-widget-reservation>
```

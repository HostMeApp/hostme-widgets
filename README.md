# Hostme Widgets Demo

## Install

Contact us [Hostme](http://www.hostmeapp.com).

---

## Use

```html
<script
    src="https://tables.hostmeapp.com/widgets/reservation/hostme-widget-reservation.es.js"
    type="module"
    async
></script>
<hostme-widget-reservation
    data-hostme-id="3097"
    data-widget-type="vertical"
    data-time-select="precise"
    data-allow-fast-booking="true"
></hostme-widget-reservation>
```

## Supported method for silent mode
- inPlace

```html
<script
    src="https://tables.hostmeapp.com/widgets/reservation/hostme-widget-reservation.es.js"
    type="module"
    async
></script>
<hostme-widget-reservation
    data-hostme-id="3097"
    data-widget-type="silent"
    data-allow-fast-booking="true"
></hostme-widget-reservation>
<button type="button" class="example-btn">Button on your site</button>

<script type="text/javascript">
    var button = document.querySelector('.example-btn');
    var widget = document.getElementsByTagName('hostme-widget-reservation')[0];

    button.addEventListener('click', () => widget.getInplace());
</script>
```

### **[Demo](https://hostmeapp.github.io/hostme-widgets/)**

---

## Supported params
```html
<hostme-widget-reservation
    data-hostme-id="3097"
    data-widget-type="vertical"
    data-allow-fast-booking="true"
    data-adaptive-layout="true"
    data-color-cheme="dark"
    data-preferred-guests="3"
    data-preferred-language="en"
    data-guest-select-requared="true"
    data-calendar-select-requared="true"
    data-time-select-requared="true"
    data-hide-header="true"
    data-available-rest-ids="4381,3097"
    data-available-rest-names="Jimmi's Italian's,Pizza Hut"
></hostme-widget-reservation>

// Cafe Venezia – small enhancements only. The site works without JavaScript.
(function () {
  // Current year in the footer
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Highlight today's opening hours (uses UK time)
  var ukDay;
  try {
    var name = new Intl.DateTimeFormat('en-GB', { weekday: 'long', timeZone: 'Europe/London' }).format(new Date());
    ukDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(name);
  } catch (e) {
    ukDay = new Date().getDay();
  }
  var row = document.querySelector('.hours-table tr[data-day="' + ukDay + '"]');
  if (row) {
    row.classList.add('today');
    row.querySelector('th').insertAdjacentHTML('beforeend', ' <span class="today-badge">Today</span>');
  }

  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
  }
})();

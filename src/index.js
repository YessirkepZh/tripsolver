import flatpickr from "flatpickr";
import ShortcutButtonsPlugin from 'shortcut-buttons-flatpickr';
import { Russian } from "flatpickr/dist/l10n/ru.js"

// sidebar mobile menu
$( document ).ready(function() {
  $(document).on('click', '.is--select-passengers .dropdown-menu', function (e) {
    e.stopPropagation();
  });

  // не закрывать подменю для выбора пассажиров
  $(document).on('click', '.js--toggle-menu', function (e) {
    e.preventDefault();
    $('body').toggleClass('is--overflow');
    $('.ts-mobile-menu').toggleClass('is--show');
  });

  // FOR demo
  $('.ts-chooser input:first').val('Нур-Султан, Казахстан')
  // end demo

  $('.ts-input[data-toggle]').each(function(){
    if (this.value.length > 0) {
      $(this).parent('.ts-chooser__input').addClass('is--active')
    }
  })

  $('.ts-chooser__input').on('hidden.bs.dropdown', function(e) {
    let input_value = $(this).find('.ts-input')[0].value;

    if (!!input_value.length) {
      $(e.target).addClass('is--active');
    } else {
      $(e.target).removeClass('is--active');
    }
  })

let start_day = [];
  let second_date = flatpickr(".js--dates-to", {
    plugins: [ShortcutButtonsPlugin({
      button: {
        label: 'Обратный билет не нужен',
      },
      onClick: (index, fp) => {
        fp.clear();
        fp.close();
      }
    })],
    dateFormat: "d.m.Y",
    minDate: "today",
    locale: Russian,
    onDayCreate: function(dObj, dStr, fp, dayElem) {
      if (start_day[0] && String(start_day) == String(dayElem.dateObj)) {
        dayElem.className += " is--selected-date";
      }
    },
  });

  flatpickr(".js--dates-from", {
    dateFormat: "d.m.Y",
    minDate: "today",
    locale: Russian,
    onChange: (index, fp) => {
      start_day.push(index[0]);
      second_date.set('');
    }
  });
});
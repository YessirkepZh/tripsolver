$(function () {
    initExtraDropdowns();
});
function initExtraDropdowns() {
    const $extraDropdowns = $('.js-dropdown');

    $extraDropdowns.each((index, dropdown) => {
        const $dropdownToggle = $(dropdown).find('.dropdown-toggle')[0];
        const $dropdownItems = $(dropdown).find('.dropdown-item');
    
        $dropdownItems.click(function (event) {
            event.preventDefault();
            $($dropdownToggle).html(this.innerHTML);
        });
    })
}
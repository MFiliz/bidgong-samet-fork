import React from 'react';

const hamburgerJs = () => {    
    alert('asd')
    var trigger = window.$('.hamburger'),
    overlay = window.$('.overlay'),
    isClosed = false;

    trigger.click(function () {
        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    });

    window.$('[data-toggle="offcanvas"]').click(function () {
        window.$('#wrapper').toggleClass('toggled');
    })
    
}
const hamburger = () => {
    return (
        <script>
            window.$(document).ready(function () {            
                hamburgerJs()
            });
        </script>
    );
};

export default hamburger;
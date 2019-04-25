export function slideLeagues(fetched,selectLeague,selectedLague){
    if(fetched)
    {
        selectedLague = 1
        try{
            window.slider = window.$('#slider').cardSlider({
                slideTag: 'div'
                , slideClass: 'slide'
                , current: selectedLague
                , followingClass: 'slider-content-6'
                , delay: 300
                , transition: 'ease'
                , onBeforeMove: function(slider, onMove) {
                    onMove()
                }
                , onMove: function(slider, onAfterMove) {
                    onAfterMove()
                }
                , onAfterMove: function() {
                }
                , onAfterTransition: function() {
                }
                , onCurrent: function(slider) {
                    // var currentType = window.$(slider.getCurrentSlide()[0]).attr("type");
                    var currentTypeId = window.$(slider.getCurrentSlide()[0]).attr("typeid");
                    selectLeague(currentTypeId);
                }
            })
        }
        catch
        {

        }
    }
}
        $(function(){
            function onScrollInit( items, trigger ) {
                console.log("this is each: " + JSON.stringify(items));
                items.each( function() {
                var osElement = $(this),
                    osAnimationClass = osElement.attr('data-os-animation'),
                    osAnimationDelay = osElement.attr('data-os-animation-delay');
                  
                    osElement.css({
                        '-webkit-animation-delay':  osAnimationDelay,
                        '-moz-animation-delay':     osAnimationDelay,
                        'animation-delay':          osAnimationDelay
                    });

                    var osTrigger = ( trigger ) ? trigger : osElement;
                    console.log("the os trigger: " + JSON.stringify(osTrigger));
                    osTrigger.waypoint(function() {
                        osElement.addClass('animated').addClass(osAnimationClass);
                        },{
                            triggerOnce: true,
                            offset: '80%'
                    });
                });
            }

            onScrollInit( $('.os-animation') );
            onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});//]]>  
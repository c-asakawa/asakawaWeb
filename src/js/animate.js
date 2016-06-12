/** animations for home page
 *
 * Created by Christopher on 6/10/2016.
 */
$(document).ready(function(){


    /**
     * page elements to animate.
     *
     * @type {*|jQuery|HTMLElement}
     */
    var body = $("body");
    var overlay = $("#overlay");
    var close = $(".closeButton");
    var bar = $("#introNav");
    var window = $("#introBox");
    var icon = $("#terminalIcon");
    var terminal = $("#terminalContent");
    var up = $("#upButton");
    var content = $("#mainContent");
    var input = $("#terminalInput");
    var output = $(".terminalOutput");
    var one = $("#output1");
    var two = $("#output2");

    init();

    function init(){
        setTimeout(function(){
            terminalExpand();
        }, 1000);
    }

    /**
     * Click events
     */
    close.click(function(){
        terminalCollapse();
    });
    icon.click(function(){
        terminalExpand();
    });
    up.click(function() {
        if (content.height() == 70) {
            scrollUp();
        }
        else
            scrollDown();
    });


    function closeAll() {
        terminalCollapse();
        scrollDown();
    }


    function scrollUp(){
        content.animate({
            height: '100%'
        }, "slow")
    }
    function scrollDown(){
        content.animate({
            height: '70px'
        })
    }

    function typeAnimate(){
        $(function(){
            setTimeout(function(){
                input.typed({
                    strings: ["whoami", "", "", "another command", "", ""]

                });
            }, 1000);

            setTimeout(function(){
                one.fadeIn(0);
            }, 2150);
            setTimeout(function(){
                two.fadeIn(0);
            }, 5500);
        });

    }


    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            closeAll();
        }
    });


    /**
     * animation that collapses the terminal into icon
     */
    function terminalCollapse() {
        overlay.fadeOut("slow");
        close.fadeOut("slow");
        terminal.fadeOut("slow");
        bar.fadeOut("slow", function(){
            window.animate({
                height: '50px',
                width: '50px',
                left: '10px',
                top: '10px',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
            });
            icon.fadeIn("slow");
        });
    }

    /**
     * animation that expands the terminal from icon
     */
    function terminalExpand(){

        var h, w, l, t;
        if (body.width() > 700){
            h = '50%';
            w = '50%';
            l = '25%';
            t = '10%';
        }
        else{
            h = '70%';
            w = '90%';
            l = '5%';
            t = '5%';
        }



        icon.fadeOut("slow", function(){
            window.animate({
                height: h,
                width: w,
                left: l,
                top: t,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5
            }, function(){
                bar.fadeIn("slow");
                close.fadeIn("slow");
                terminal.fadeIn("slow");
                overlay.fadeIn("slow");
                typeAnimate();
            })
        });
    }

});


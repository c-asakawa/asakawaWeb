/** animations for home page
 *
 * Created by Christopher on 6/10/2016.
 */

$(window).on("load", function(){


    /**
     * page elements to animate.
     *
     * @type {*|jQuery|HTMLElement}
     */
    var body = $("body");
    var overlay = $("#overlay");
    var close = $(".closeButton");
    var closeTerminal = $("#closeTerminal");
    var closeResume = $("#closeResume");
    var closeContact = $("#closeContact");

    var bar = $(".navBarSmall");

    var terminalNav = $("#navTerminal");
    var resumeNav =  $("#navResume");
    var contactNav = $("#navContact");

    var terminalBox = $("#terminalBox");

    var terminalIcon = $("#terminalIcon");
    var resumeIcon = $("#resumeIcon");
    var contactIcon = $("#contactIcon");

    var terminal = $("#terminalContent");
    var up = $("#upButton");
    var content = $("#mainContent");
    var input = $("#terminalInput");
    var output = $(".terminalOutput");
    var inLine = $('#inputLine');
    var tile1 = $('#tile_1');
    var tile2 = $('#tile_2');
    var tile3 = $('#tile_3');

    var resumeBox = $('#resumeBox');
    var contactBox = $('#contactBox');
    var resumeContent = $('#resumeContent');
    var contactContent = $('#contactContent');

    /**
     * lock used to only allow one icon animation to occur at a time.
     *
     * @type {boolean}
     */
    var iconLock = false;


    //main();
    function main(){
        setTimeout(function(){
            terminalExpand();
        }, 1000);
    }

    /**
     * Click events
     */
    closeTerminal.click(function(){ clickButton(terminalCollapse()); });
    closeResume.click(function(){ clickButton(resumeCollapse()); });
    closeContact.click(function(){ clickButton(contactCollapse()); });
    terminalIcon.click(function(){ clickButton(terminalExpand()); });
    resumeIcon.click(function(){ clickButton(resumeExpand()); });
    contactIcon.click(function(){ clickButton(contactExpand()); });

    up.click(function() {
        if (content.height() < 71) {
            scrollUp();
        }
        else
            scrollDown();
    });

    function clickButton(func){
        if(!iconLock){
            func();
            iconLock = true;
        }
    }

    /**
     * key presses events
     */
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { closeAll(); }    //esc key
        if (e.keyCode == 38) { scrollUp(); }    //up arrow key
        if (e.keyCode == 40) { scrollDown(); }  //down arrow key
    });

    /**
     * on-hover events
     */
    terminalIcon.hover(function(){
        onHover(terminalBox);
    }, function() {
        offHover(terminalBox);
    });
    resumeIcon.hover(function(){
        onHover(resumeBox);
    }, function() {
        offHover(resumeBox);
    });
    contactIcon.hover(function(){
        onHover(contactBox);
    }, function() {
        offHover(contactBox);
    });

    /**
     * Icon on hover anumation
     * @param element
     */
    function onHover(element){
        element.animate({ left: "20px"}, "fast");
    }

    /**
     * Icon off hover animation
     * @param element
     */
    function offHover(element){
        if(!iconLock && element.width() == 50)
            element.animate({left: "10px"}, "fast");
    }




    function closeAll() {
        terminalCollapse();
        resumeCollapse();
        contactCollapse();
        scrollDown();
    }


    function scrollUp(){
        var h;
        if (body.width() > 767)
            h = '600px';
        else
            h = '100%';

        content.css('overflow-y', 'auto');
        content.animate({
            height: h
        }, "slow");

    }
    function scrollDown(){
        content.css('overflow-y', 'hidden');

        content.animate({
            height: '70px'
        });

    }

    function typeAnimate(){
        $(function(){
            var one = $("#output1");
            var two = $("#output2");
            setTimeout(function(){
                input.typed({
                    strings: ["whoami", ""],
                    callback: function () {
                        one.fadeIn(0);
                        input.typed('removeCursor');
                        input.removeData('typed');

                        setTimeout(function(){
                            input.typed({
                                strings: ["./welcome"],
                                callback: function () {
                                    two.fadeIn(0);
                                    input.fadeOut(0);
                                    inLine.fadeOut(0);
                                    runProgram();
                                }
                            });
                        }, 2000);

                    }
                });
            }, 1000);
        });

    }
    function runProgram(){
        var output = [$('#output3'), $('#output4'), $('#output5'), $('#output6'), $('#output7')];

        setTimeout(function () {
            output[0].fadeIn(0);
        }, 300);
        setTimeout(function () {
            output[1].fadeIn(0);
        }, 600);
        setTimeout(function () {
            output[2].fadeIn(0);
        }, 900);
        setTimeout(function () {
            output[3].fadeIn(0);
        }, 1200);
        setTimeout(function () {
            output[4].fadeIn(0);
            inLine.fadeIn(0);
        }, 1500);
    }




    /**
     * animation that collapses the terminal into icon
     */
    function terminalCollapse() {
        overlay.fadeOut("slow");
        closeTerminal.fadeOut("slow");
        terminal.fadeOut("slow");
        terminalNav.fadeOut("slow", function(){
            terminalBox.animate({
                height: '50px',
                width: '50px',
                left: '10px',
                top: '150px',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
            }, function(){
                terminalIcon.fadeIn("slow");
                resumeBox.fadeIn("slow");
                contactBox.fadeIn("slow");
                iconLock = false;
            });
        });
    }

    /**
     * animation that expands the terminal from icon
     */
    function terminalExpand(){

        //if on mobile device, expand to fill more of the screen
        var h, w, l, t;
        if (body.width() > 767) {
            h = '50%';
            w = '50%';
            l = '25%';
            t = '10%';
        }
        else {
            h = '70%';
            w = '90%';
            l = '5%';
            t = '5%';
        }
        resumeBox.fadeOut("slow");
        contactBox.fadeOut("slow");
        terminalIcon.fadeOut("slow", function(){
            terminalBox.animate({
                height: h,
                width: w,
                left: l,
                top: t,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5
            }, function(){
                terminalNav.fadeIn("slow");
                closeTerminal.fadeIn("slow");
                terminal.fadeIn("slow");
                overlay.fadeIn("slow");
                typeAnimate();
                iconLock = false;
            });
        });
    }


    function resumeExpand(){
        terminalBox.fadeOut("slow");
        contactBox.fadeOut("slow");
        content.fadeOut("slow");
        resumeIcon.fadeOut("slow", function(){
           resumeBox.animate({
               height: '96%',
               width: '96%',
               left: '2%',
               top: '2%',
               borderTopLeftRadius: 5,
               borderTopRightRadius: 5,
               borderBottomLeftRadius: 5,
               borderBottomRightRadius: 5
           }, function(){
               resumeNav.fadeIn("slow");
               closeResume.fadeIn("slow");
               resumeContent.fadeIn("slow");
               iconLock = false;
           });

        });
    }
    function resumeCollapse(){
        resumeNav.fadeOut("slow");
        closeResume.fadeOut("slow");
        resumeContent.fadeOut("slow", function(){
            resumeBox.animate({
                height: '50px',
                width: '50px',
                left: '10px',
                top: '210px',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
            }, function(){
                resumeIcon.fadeIn("slow");
                terminalBox.fadeIn("slow");
                contactBox.fadeIn("slow");
                content.fadeIn("slow");
                iconLock = false;
            });
        });

    }

    function contactExpand(){
        terminalBox.fadeOut("slow");
        resumeBox.fadeOut("slow");
        contactIcon.fadeOut("slow", function(){
            contactBox.animate({
                left: '70px',
                height: '300px',
                width: '300px',
                top: '100px',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5
            }, function(){
                contactNav.fadeIn("slow");
                closeContact.fadeIn("slow");
                contactContent.fadeIn("slow");
                iconLock = false;
            });
        });
    }
    function contactCollapse(){
        contactNav.fadeOut("slow");
        closeContact.fadeOut("slow", function(){
            contactBox.animate({
                height: '50px',
                width: '50px',
                left: '10px',
                top: '270px',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
            }, function(){
                contactIcon.fadeIn("slow");
                terminalBox.fadeIn("slow");
                resumeBox.fadeIn("slow");
                iconLock = false;
            });
        });
    }

});


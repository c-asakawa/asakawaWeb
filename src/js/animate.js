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
    var overlay = $(".overlay");

    var closeTerminal = $("#closeTerminal");
    var closeResume = $("#closeResume");
    var closeEmail = $("#closeEmail");
    var closeMessage = $("#closeMessage");
    var closePhone = $("#closePhone");

    var terminalNav = $("#navTerminal");
    var resumeNav =  $("#navResume");
    var emailNav = $("#navEmail");
    var messageNav = $("#navMessage");
    var phoneNav = $("#navPhone");

    var terminalBox = $("#terminalBox");
    var resumeBox = $('#resumeBox');
    var emailBox = $('#emailBox');
    var messageBox = $('#messageBox');
    var phoneBox = $('#phoneBox');


    var resumeContent = $('#resumeContent');
    var contactContent = $('#contactContent');

    var terminalIcon = $("#terminalIcon");
    var resumeIcon = $("#resumeIcon");
    var emailIcon = $("#emailIcon");
    var messageIcon = $("#messageIcon");
    var phoneIcon = $("#phoneIcon");

    var terminal = $("#terminalContent");
    var up = $("#upButton");
    var content = $("#mainContent");
    var input = $("#terminalInput");
    var output = $(".terminalOutput");
    var inLine = $('#inputLine');
    var tile1 = $('#tile_1');
    var tile2 = $('#tile_2');
    var tile3 = $('#tile_3');



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
    closeEmail.click(function(){ clickButton(emailCollapse()); });
    terminalIcon.click(function(){ clickButton(terminalExpand()); });
    resumeIcon.click(function(){ clickButton(resumeExpand()); });
    emailIcon.click(function(){ clickButton(emailExpand()); });

    up.click(function() {
        if (content.height() < 71) {
            scrollUp();
        }
        else
            scrollDown();
    });

    tile1.click(function (){

    });
    tile2.click(function (){

    });
    tile3.click(function (){

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
    emailIcon.hover(function(){
        onHover(emailBox);
    }, function() {
        offHover(emailBox);
    });
    messageIcon.hover(function(){
        onHover(messageBox);
    }, function() {
        offHover(messageBox);
    });
    phoneIcon.hover(function(){
        onHover(phoneBox);
    }, function() {
        offHover(phoneBox);
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
        emailCollapse();
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
                backgroundColor: "whtie",
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
                emailBox.fadeIn("slow");
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
        emailBox.fadeOut("slow");
        terminalIcon.fadeOut("slow", function(){
            terminalBox.animate({
                height: h,
                width: w,
                left: l,
                top: t,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                backgroundColor: "black"

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
        emailBox.fadeOut("slow");
        content.fadeOut("slow");
        resumeIcon.fadeOut("slow", function(){
           resumeBox.animate({
               height: '98%',
               width: '98%',
               left: '1%',
               top: '1%',
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
                emailBox.fadeIn("slow");
                content.fadeIn("slow");
                iconLock = false;
            });
        });

    }

    function emailExpand(){
        terminalBox.fadeOut("slow");
        resumeBox.fadeOut("slow");
        emailIcon.fadeOut("slow", function(){
            emailBox.animate({
                left: '70px',
                height: '300px',
                width: '300px',
                top: '100px',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5
            }, function(){
                emailNav.fadeIn("slow");
                closeEmail.fadeIn("slow");
                contactContent.fadeIn("slow");
                iconLock = false;
            });
        });
    }
    function emailCollapse(){
        emailNav.fadeOut("slow");
        closeEmail.fadeOut("slow", function(){
            emailBox.animate({
                height: '50px',
                width: '50px',
                left: '10px',
                top: '270px',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
            }, function(){
                emailIcon.fadeIn("slow");
                terminalBox.fadeIn("slow");
                resumeBox.fadeIn("slow");
                iconLock = false;
            });
        });
    }

    function tileExpand(element){
        element.animate({

        });
    }

});


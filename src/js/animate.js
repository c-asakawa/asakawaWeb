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
    var sideBar = $("#iconSideBar");

    var schoolOverlay = $("#schoolOverlay");
    var freelanceOverlay = $("#freelanceOverlay");
    var projectsOverlay = $("#projectsOverlay");
    var closeOverlay = $('.tileClose');
    var schoolContent = $("#schoolContent");
    var freelanceContent = $("#freelanceContent");
    var projectsContent = $("#projectsContent");
    var closeSchool = $("#closeSchool");
    var closeFreelance = $("#closeFreelance");
    var closeProjects = $("#closeProjects");


    /* close buttons */
    var closeTerminal = $("#closeTerminal");
    var closeResume = $("#closeResume");
    var closeEmail = $("#closeEmail");
    var closeMessage = $("#closeMessage");
    var closePhone = $("#closePhone");

    /* small nav bars */
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


    var mainContent = $('#mainContent');
    var resumeContent = $('#resumeContent');
    var contactContent = $('#contactContent');
    var phoneContent = $('#phoneContent');

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
    var animationLock = false;


    //main();
    function main(){
        setTimeout(function(){
            terminalExpand();
        }, 1000);
    }

    /**
     * Click events
     */
    closeTerminal.click(function(){ terminalCollapse(); });
    closeResume.click(function(){ resumeCollapse(); });
    closeEmail.click(function(){ emailCollapse(); });
    closeMessage.click(function(){ messageCollapse(); });
    closePhone.click(function(){ phoneCollapse(); });
    terminalIcon.click(function(){ clickButton(terminalIcon); });
    resumeIcon.click(function(){ clickButton(resumeIcon); });
    emailIcon.click(function(){ clickButton(emailIcon); });
    messageIcon.click(function(){ clickButton(messageIcon); });
    phoneIcon.click(function(){ clickButton(phoneIcon); });
    up.click(function() {
        if (content.height() < 71)
            scrollUp();
        else
            scrollDown();
    });
    tile1.click(function (){ tileExpand(schoolOverlay, schoolContent);});
    tile2.click(function (){tileExpand(freelanceOverlay, freelanceContent);});
    tile3.click(function (){tileExpand(projectsOverlay, projectsContent);});
    closeSchool.click(function(){ tileCollapse(schoolOverlay, schoolContent) });
    closeFreelance.click(function(){ tileCollapse(freelanceOverlay, freelanceContent) });
    closeProjects.click(function(){ tileCollapse(projectsOverlay, projectsContent) });

    /**
     * only proceed to expand the element if the
     * animationLock is free
     *
     * @param element
     */
    function clickButton(element){

        if(!animationLock){
            animationLock = true; //take the lock
            switch (element){
                case terminalIcon:  terminalExpand();   break;
                case resumeIcon:    resumeExpand();     break;
                case emailIcon:     emailExpand();      break;
                case messageIcon:   messageExpand();    break;
                case phoneIcon:     phoneExpand();      break;
                default: break;
            }
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
        onHoverIcon(terminalBox);
    }, function() {
        offHoverIcon(terminalBox);
    });
    resumeIcon.hover(function(){
        onHoverIcon(resumeBox);
    }, function() {
        offHoverIcon(resumeBox);
    });
    emailIcon.hover(function(){
        onHoverIcon(emailBox);
    }, function() {
        offHoverIcon(emailBox);
    });
    messageIcon.hover(function(){
        onHoverIcon(messageBox);
    }, function() {
        offHoverIcon(messageBox);
    });
    phoneIcon.hover(function(){
        onHoverIcon(phoneBox);
    }, function() {
        offHoverIcon(phoneBox);
    });


    var sideBarTimeout;
    sideBar.hover(function(){
        onHoverSideBar();
    }, function (){
        offHoverSideBar();
    });

    function onHoverSideBar(){
        if (!animationLock){
            clearTimeout(sideBarTimeout);
            sideBarTimeout = null;
            showBar();
        }
    }
    function offHoverSideBar(){
        if (sideBarTimeout === null){
            sideBarTimeout = setTimeout(hideBar, 500    );
        }
    }

    function showBar() { sideBar.animate({ opacity: '0.8' }, "fast"); }
    function hideBar() { sideBar.animate({ opacity: '0.0' }, "fast"); }


    /**
     * Icon on hover anumation
     * @param element
     */
    function onHoverIcon(element){
        onHoverSideBar();
        element.animate({ left: "20px"}, "fast");
    }

    /**
     * Icon off hover animation
     * @param element
     */
    function offHoverIcon(element){
        if(!animationLock && element.width() == 50){
            offHoverSideBar();
            element.animate({left: "10px"}, "fast");
        }
    }




    function closeAll() {
        terminalCollapse();
        resumeCollapse();
        emailCollapse();
        messageCollapse();
        phoneCollapse();
        scrollDown();
        tileCollapse(schoolOverlay, schoolContent);
        tileCollapse(freelanceOverlay, freelanceContent);
        tileCollapse(projectsOverlay, projectsContent);
    }


    function scrollUp(){
        var h;
        if (body.width() > 767)
            h = '600px';
        else{
            h = '100%';
        }

        content.css('overflow-y', 'auto');
        content.animate({
            height: h
        }, "slow");

    }
    function scrollDown(){
        content.css('overflow-y', 'hidden');
        content.animate({
            scrollTop: '0px',
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
                showOtherIcons(terminalBox);
                animationLock = false;
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
        else { //on mobile device
            h = '70%';
            w = '90%';
            l = '5%';
            t = '5%';
        }
        hideOtherIcons(terminalBox);
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
            });
        });
    }


    function resumeExpand(){
        hideOtherIcons(resumeBox);
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
                showOtherIcons(resumeBox);
                content.fadeIn("slow");
                animationLock = false;
            });
        });

    }

    function emailExpand(){
        var left = findMiddle(300);
        hideOtherIcons(emailBox);
        emailIcon.fadeOut("slow", function(){
            emailBox.animate({
                left: left,
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
                showOtherIcons(emailBox);
                animationLock = false;
            });
        });
    }

    function messageExpand(){animationLock = false;}
    function messageCollapse(){animationLock = false;}

    function phoneExpand(){

        var left = findMiddle(240);
        hideOtherIcons(phoneBox);
        phoneIcon.fadeOut("slow", function(){
            phoneBox.animate({
                left: left,
                height: '230px',
                width: '240px',
                top: '100px',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5
            }, function(){
                phoneNav.fadeIn("slow");
                closePhone.fadeIn("slow");
                phoneContent.fadeIn("slow");
            });
        });
    }
    function phoneCollapse(){

        phoneNav.fadeOut("slow");
        phoneContent.fadeOut("slow");
        closePhone.fadeOut("slow", function(){
            phoneBox.animate({
                height: '50px',
                width: '50px',
                left: '10px',
                top: '330px',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
            }, function(){
                phoneIcon.fadeIn("slow");
                showOtherIcons(phoneBox);
                animationLock = false;
            });
        });
    }

    function findMiddle(elemWidth){
        return ( body.width()/2 ) - ( elemWidth/2 );
    }


    function hideOtherIcons(element, callback){
        switch(element){
            case terminalBox:
                resumeBox.fadeOut("slow");
                emailBox.fadeOut("slow");
                messageBox.fadeOut("slow");
                phoneBox.fadeOut("slow");
                break;
            case resumeBox:
                terminalBox.fadeOut("slow");
                emailBox.fadeOut("slow");
                messageBox.fadeOut("slow");
                phoneBox.fadeOut("slow");
                break;
            case emailBox:
                terminalBox.fadeOut("slow");
                resumeBox.fadeOut("slow");
                messageBox.fadeOut("slow");
                phoneBox.fadeOut("slow");
                break;
            case messageBox:
                terminalBox.fadeOut("slow");
                resumeBox.fadeOut("slow");
                emailBox.fadeOut("slow");
                phoneBox.fadeOut("slow");
                break;
            case phoneBox:
                terminalBox.fadeOut("slow");
                resumeBox.fadeOut("slow");
                emailBox.fadeOut("slow");
                messageBox.fadeOut("slow");
                break;
        }
    }


    function showOtherIcons(element){
        switch(element){
            case terminalBox:
                resumeBox.fadeIn("slow");
                emailBox.fadeIn("slow");
                messageBox.fadeIn("slow");
                phoneBox.fadeIn("slow");
                break;
            case resumeBox:
                terminalBox.fadeIn("slow");
                emailBox.fadeIn("slow");
                messageBox.fadeIn("slow");
                phoneBox.fadeIn("slow");
                break;
            case emailBox:
                terminalBox.fadeIn("slow");
                resumeBox.fadeIn("slow");
                messageBox.fadeIn("slow");
                phoneBox.fadeIn("slow");
                break;
            case messageBox:
                terminalBox.fadeIn("slow");
                resumeBox.fadeIn("slow");
                emailBox.fadeIn("slow");
                phoneBox.fadeIn("slow");
                break;
            case phoneBox:
                terminalBox.fadeIn("slow");
                resumeBox.fadeIn("slow");
                emailBox.fadeIn("slow");
                messageBox.fadeIn("slow");
                break;
        }
    }



    function tileExpand(overlay, content){
        //closeAll();
        overlay.fadeIn("slow");
        content.fadeIn("slow");
    }
    function tileCollapse(overlay, content){
        overlay.fadeOut("slow");
        content.fadeOut("slow");
    }

});


$(document).ready(function(){
    $('#advertisement').jsMovie({
        sequence : "GIF###.jpg",    //the #### will be replaced with 0001,0002,0003,...
        folder   : "img/rl_test/",       //this is the path where the script can find the image sequence
        from     : 1,               //the #### will start to replace with 0001
        to       : 160,              //the #### will start to replace with 0040
        width    : 334,             //the advertisement container will be resized to a width of 320px
        height   : 334,             //the advertisement container will be resized to a height of 150px
        showPreLoader : false,       //we do want to see a preloader animation
        playOnLoad : true,         //we don't want to have the movie play after the images have been loaded automatically
        // the preloader animation is located in the folder "img/loader.png"
        // it is a 4x4 image matrix with each image of 40px by 40px
        //loader   : {path:"img/loader.png",height:40,width:40,rows:4,columns:4}  
        fps: 10,
        loadparallel: 10
    });
    $('#advertisement').jsMovie("play");
    // make frame 1 to frame 20 to a clip an call it Hello. Pause the animation for 2 seconds before the next clip is being played
    //$('#advertisement').jsMovie("addClip","Hello",1,20,2000);
    // make frame 21 to frame 40 to a clip an call it World. Pause the animation for 1 second before the next clip is being played
    //$('#advertisement').jsMovie("addClip","World",21,40,1000);
    // play both the clips
    //$('#advertisement').jsMovie("playClips");
    
});
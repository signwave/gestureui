var screenHeight = "600px";
var screenWidth = "800px";

var originalHeight;
var originalWidth;
var originalTop;
var originalLeft;

var openedTile;

var animating = false;

function openTile(positionDesc) {

    if (animating)
        return;
        
    // we're ignoring the bottom tiles for now
    if (positionDesc == "tileBottomLeft" || positionDesc == "tileBottomRight") {
        return;
    }

    var $this = $("#" + positionDesc);
  
    if ($this.hasClass('doNotOpen')) {
        
        if ($this != null && openedTile != null && $this.data('side') != openedTile.data('side')) {
            closeOpenTile();
        }
        
        return
    }
  
    if (originalWidth == null && originalHeight == null) {
        originalHeight = $this.height();
        originalWidth = $this.width();
    }
  
    originalTop = $this.position().top;
    originalLeft = $this.position().left;

    $(".tileVertical").each(function(){
        $(this).addClass('doNotOpen');
        $(this).css('z-index',0);
                            
        if ($(this).attr('id') != $this.attr('id')) {
            $(this).hide();
        }

    })
  
    $this.css('z-index',1);
    if (!animating) {
        animating = true;
        if (positionDesc == "tileTopLeft") {
            $this.animate({height:screenHeight, width:screenWidth, right: 0, bottom: 0}
            //complete
            , function(){
                openedTile = $this;
                $this.css("background-image", "url('images/handWaveLeft.png')");
                
                animating = false;
            })
        }else if (positionDesc == "tileTopRight") {
            $this.animate({height:screenHeight, width:screenWidth, bottom: 0, left: 0}
            //complete
            , function(){
                openedTile = $this;
                $this.css("background-image", "url('images/handWaveRight.png')");
                
                animating = false;
            })
        }else if (positionDesc == "tileBottomLeft") {
            $this.animate({height:screenHeight, width:screenWidth, top: 0, right: 0}
            //complete
            , function(){
                openedTile = $this;
                $this.css("background-image", "url('images/handWaveLeft.png')");
                
                animating = false;
            })
        }else if (positionDesc == "tileBottomRight") {
            $this.animate({height:screenHeight, width:screenWidth, top: 0, left: 0}
            //complete
            , function(){
                openedTile = $this;
                $this.css("background-image", "url('images/handWaveRight.png')");
                
                animating = false;
            })
        }
        
        // if ($this.data('side') == 'left') {
            // animating = true;
            // $this.animate({height:screenHeight, width:screenWidth, top: '0', left: '0'}
                          
            // //complete
            // , function(){
                // openedTile = $this;
                // if ($this.data('side') == 'left') {
                    // $this.css("background-image", "url('images/handWaveLeft.png')");
                // }
                // else if ($this.data('side') == 'right') {
                    // $this.css("background-image", "url('images/handWaveRight.png')");
                // }
                // animating = false;
              // })
        // }
        // else if ($this.data('side') == 'right') {
            // animating = true;
            // $this.animate({height:screenHeight, width:screenWidth, top: '0', left: '0'}
                          
            // //complete
            // , function(){
                // openedTile = $this;
                // if ($this.data('side') == 'left') {
                    // $this.css("background-image", "url('images/handWaveLeft.png')");
                // }
                // else if ($this.data('side') == 'right') {
                    // $this.css("background-image", "url('images/handWaveRight.png')");
                // }
                // animating = false;
              // })
        // }
    }
      
}
  
function closeOpenTile() {
  
    if (animating)
        return;
  
    var isTileClosed = (openedTile == null || openedTile == 'undefined');
    if (isTileClosed == true) {
        return;
    }
    
    if (openedTile == null) {
        return;
    }
    
    var openedTileId = openedTile.attr('id');
  
    animating = true;
    
    if (openedTileId == "tileTopLeft") {
        openedTile.animate(
            {
                height:originalHeight,
                width:originalWidth,
                top: originalTop,
                left: originalLeft
            },
            //complete
            function() {
                $this = $(this)
                if (openedTile == null) {
                    return;
                }
                openedTile.css("background-image", "url('images/handWaveRight.png')");
                
                $(".tileVertical").each(function(){
                    $(this).removeClass('doNotOpen');                    
                    if ($(this).attr('id') != $this.attr('id')) {
                        $(this).show(200);
                    }
                })
                openedTile = null;
                animating = false;    
                
                console.log(openedTileId);
         })
    }else if (openedTileId == "tileTopRight") {
        openedTile.animate(
            {
                height:originalHeight,
                width:originalWidth,
                top: 0,
                right: 0,
                left: originalLeft
            },
            //complete
            function() {
                $this = $(this)
                if (openedTile == null) {
                    return;
                }
                openedTile.css("background-image", "url('images/handWaveLeft.png')");
                
                $(".tileVertical").each(function(){
                    $(this).removeClass('doNotOpen');                    
                    if ($(this).attr('id') != $this.attr('id')) {
                        $(this).show(200);
                    }
                })
                openedTile = null;
                animating = false;

                console.log(openedTileId);
         })
    }else if (openedTileId == "tileBottomLeft") {
        openedTile.animate(
            {
                height:originalHeight,
                width:originalWidth,
                bottom: 0,
                left: 0
            },
            //complete
            function() {
                $this = $(this)
                if (openedTile == null) {
                    return;
                }
                openedTile.css("background-image", "url('images/handWaveRight.png')");
                
                $(".tileVertical").each(function(){
                    $(this).removeClass('doNotOpen');                    
                    if ($(this).attr('id') != $this.attr('id')) {
                        $(this).show(200);
                    }
                })
                openedTile = null;
                animating = false;            
         })
    }else if (openedTileId == "tileBottomRight") {
        openedTile.animate(
            {
                height:originalHeight,
                width:originalWidth,
                bottom: 0,
                right: 0
            },
            //complete
            function() {
                $this = $(this)
                if (openedTile == null) {
                    return;
                }
                openedTile.css("background-image", "url('images/handWaveLeft.png')");
                
                $(".tileVertical").each(function(){
                    $(this).removeClass('doNotOpen');                    
                    if ($(this).attr('id') != $this.attr('id')) {
                        $(this).show(200);
                    }
                })
                openedTile = null;
                animating = false;            
         })
    }
    
    
    // openedTile.animate({height:originalHeight, width:originalWidth, top: originalTop, left: originalLeft}

         // //complete
         // , function(){
         
            // $this = $(this)
            
            // if (openedTile == null) {
                // return;
            // }
                       
            // if ($this.data('side') == 'left') {
                // openedTile.css("background-image", "url('images/handWaveRight.png')");
                    // $(".tileVertical").each(function(){
                    // $(this).removeClass('doNotOpen');
                                        
                    // if ($(this).attr('id') != $this.attr('id')) {
                        // $(this).show(200);
                    // }

                // })
            // }
            // else if ($this.data('side') == 'right') {
                // openedTile.css("background-image", "url('images/handWaveLeft.png')");
                // $(".tileVertical").each(function(){
                    // $(this).removeClass('doNotOpen');
                                        
                    // if ($(this).attr('id') != $this.attr('id')) {
                        // $(this).show(200);
                    // }

                // })
            // }
            
            // openedTile = null;
            // animating = false;
         // })
  
}

$(document).ready(function() {
    /*
    *  mouse events - NOT needed for gesture UI
    */
    $(".tileVertical").mouseenter(function(){
        //console.log($(this).attr('id'));
        openTile($(this).attr('id'));
    })
    $(".tileVertical").mouseleave(function(){
        closeOpenTile();
    })

});


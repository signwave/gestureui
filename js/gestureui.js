var screenWidth = '800px';
var screenHeight = '600px';

var originalHeight;
var originalWidth;
var originalTop;
var originalLeft;

var openedTile;
  
function openTile(positionDesc) {
                      
    var $this = $("#" + positionDesc);
  
    if ($this.hasClass('doNotOpen')) {
        return
    }
  
    if (originalWidth == null && originalHeight == null) {
        originalHeight = $this.height();
        originalWidth = $this.width();
        originalTop = $this.position().top;
        originalLeft = $this.position().left;
    }
  
    $(".tileVertical").each(function(){
        $(this).addClass('doNotOpen');
        $(this).css('z-index',0);
                            
        if ($(this).attr('id') != $this.attr('id')) {
            $(this).hide(2000);
        }

    })
  
    $this.css('z-index',1);
    if ($this.data('side') == 'left') {
        $this.animate({height:screenHeight, width:screenWidth}
            //complete
        , function(){
            openedTile = $this;
            if ($this.data('side') == 'left') {
                $this.css("background-image", "url('../images/handWaveLeft.png')");
            }
            else if ($this.data('side') == 'right') {
                $this.css("background-image", "url('../images/handWaveRight.png')");
            }
          })
    }
    else if ($this.data('side') == 'right') {
        $this.animate({height:screenHeight, width:screenWidth, top: '0', left: '0'}
            //complete
        , function(){
            openedTile = $this;
            if ($this.data('side') == 'left') {
                $this.css("background-image", "url('../images/handWaveLeft.png')");
            }
            else if ($this.data('side') == 'right') {
                $this.css("background-image", "url('../images/handWaveRight.png')");
            }
          })
    }
}
  
function closeOpenTile() {
  
    var isTileClosed = (openedTile == null || openedTile == 'undefined');
    if (isTileClosed == true) {
        return;
    }
  
    openedTile.animate({height:originalHeight, width:originalWidth, top: originalTop, left: originalLeft}

         //complete
         , function(){
         
            $this = $(this)
            
            if ($this.data('side') == 'left') {
                openedTile.css("background-image", "url('../images/handWaveRight.png')");
                    $(".tileVertical").each(function(){
                    $(this).removeClass('doNotOpen');
                                        
                    if ($(this).attr('id') != $this.attr('id')) {
                        $(this).show(200);
                    }

                })
            }
            else if ($this.data('side') == 'right') {
                openedTile.css("background-image", "url('../images/handWaveLeft.png')");
                $(".tileVertical").each(function(){
                    $(this).removeClass('doNotOpen');
                                        
                    if ($(this).attr('id') != $this.attr('id')) {
                        $(this).show(200);
                    }

                })
            }
            
            openedTile = null;
         })
  
}

$(document).ready(function() {
    /*
    *  mouse events - NOT needed for gesture UI
    */
    $(".tileVertical").mouseenter(function(){
        console.log($(this).attr('id'));
        openTile($(this).attr('id'));
    })
    $(".tileVertical").mouseleave(function(){
        closeOpenTile();
    })

});


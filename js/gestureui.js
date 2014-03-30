$(document).ready(function() {
    var originalHeight;
    var originalWidth;

    var openTile;
      
    function open(positionDesc) {
      
        var $this = $("#" + positionDesc);
      
        if ($this.hasClass('doNotOpen')) {
            return
        }
      
        if (originalWidth == null && originalHeight == null) {
            originalHeight = $this.height();
            originalWidth = $this.width();
        }
      
        $(".tileVertical").each(function(){
            $(this).addClass('doNotOpen');
            $(this).css('z-index',0);
                                
            if ($(this).attr('id') != $this.attr('id')) {
                $(this).hide(2000);
            }

        })
      
        $this.css('z-index',1);
        $this.animate({height:'768px', width:'1024px', top: '0', left: '0'}
              //complete
            , function(){
                openTile = $this;
        })
      
    }
      
    function closeOpenTile() {
      
        var isTileClosed = (openTile == null || openTile == 'undefined');
        if (isTileClosed == true) {
            return;
        }
      
        openTile.animate({height:originalHeight, width:originalWidth}
            //complete
            , function(){

            openTile = null;
            $this = $(this)
            $(".tileVertical").each(function(){
                $(this).removeClass('doNotOpen');
                                    
                if ($(this).attr('id') != $this.attr('id')) {
                    $(this).show('slow');
                }

            })
        })
      
    }
      
    /*
    *  mouse events - NOT needed for gesture UI
    */
    $(".tileVertical").mouseenter(function(){
        open($(this).attr('id'))
    })
    $(".tileVertical").mouseleave(function(){
        closeOpenTile();
    })

});


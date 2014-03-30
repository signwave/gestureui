$(document).ready(function() {
    var originalHeight;
    var originalWidth;
    var originalTop;
    var originalLeft;
    
    var openTile;
      
    function open(positionDesc) {
                          
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
            $this.animate({height:'768px', width:'1024px'}
                //complete
            , function(){
                openTile = $this;
                if ($this.data('side') == 'left') {
                    $this.css("background-image", "url('images/handWaveLeft.png')");
                }
                else if ($this.data('side') == 'right') {
                    $this.css("background-image", "url('images/handWaveRight.png')");
                }
              })
        }
        else if ($this.data('side') == 'right') {
            $this.animate({height:'768px', width:'1024px', top: '0', left: '0'}
                //complete
            , function(){
                openTile = $this;
                if ($this.data('side') == 'left') {
                    $this.css("background-image", "url('images/handWaveLeft.png')");
                }
                else if ($this.data('side') == 'right') {
                    $this.css("background-image", "url('images/handWaveRight.png')");
                }
              })
        }
          
    }
      
    function closeOpenTile() {
      
        var isTileClosed = (openTile == null || openTile == 'undefined');
        if (isTileClosed == true) {
            return;
        }
      
        openTile.animate({height:originalHeight, width:originalWidth, top: originalTop, left: originalLeft}

             //complete
             , function(){
             
                $this = $(this)
                
                if ($this.data('side') == 'left') {
                    openTile.css("background-image", "url('../images/handWaveRight.png')");
                        $(".tileVertical").each(function(){
                        $(this).removeClass('doNotOpen');
                                            
                        if ($(this).attr('id') != $this.attr('id')) {
                            $(this).show(200);
                        }

                    })
                }
                else if ($this.data('side') == 'right') {
                    openTile.css("background-image", "url('../images/handWaveLeft.png')");
                    $(".tileVertical").each(function(){
                        $(this).removeClass('doNotOpen');
                                            
                        if ($(this).attr('id') != $this.attr('id')) {
                            $(this).show(200);
                        }

                    })
                }
                
                openTile = null;
             })
      
    }
      
    /*
    *  mouse events - NOT needed for gesture UI
    */
    $(".tileVertical").mouseenter(function(){
        console.log($(this).attr('id'));
        open($(this).attr('id'));
    })
    $(".tileVertical").mouseleave(function(){
        closeOpenTile();
    })

});


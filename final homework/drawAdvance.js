
      var canvas = document.getElementById("draw");
      var ctx = canvas.getContext("2d");
      var p_color=document.getElementById('color');
    var p_width = document.getElementById('lineWidth');
      function init() {
          //���ocanvas context
          ctx.lineCap = "round";
          ctx.fillStyle = "white"; //���canvas��W�զ�I���קKPNG���z������ĪG
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          var drawMode = false;
          //canvas�I��B���ʡB��}����ƥ�ɶi��ø�ϰʧ@
          canvas.onmousedown = function (e) {
              ctx.beginPath();
              ctx.strokeStyle = p_color;
              ctx.lineWidth = p_width;
              ctx.moveTo(e.offsetX, e.offsetY);
              drawMode = true;
          }
          canvas.onmousemove = function (e) {
              if (drawMode) {
                  ctx.lineTo(e.offsetX, e.offsetY);
                  ctx.stroke();
              }
          }
          canvas.onmouseup = function (e) {
              drawMode = false;
          }
      }

    function changePenColor() {
        p_color = document.getElementById("color").value
    }
    function changePenWidth() {
        p_width = document.getElementById("lineWidth").value;
    }
        

init();
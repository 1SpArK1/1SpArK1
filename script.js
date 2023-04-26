
function ReportVk()
  {window.location.href = 'https://vk.com/biblioteca';}
  function ReportTg()
  {window.location.href = 'https://web.telegram.org/z/';}
    function animateText(textArea) {
      let text = textArea.value;
      let to = text.length,
        from = 0;

      animate({
        duration: 5000,
        timing: bounce,
        draw: function(progress) {
          let result = (to - from) * progress + from;
          textArea.value = text.slice(0, Math.ceil(result))
        }
      });
    }


    function bounce(timeFraction) {
      for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }
container_script1.onmouseover = container_script1.onmouseout = handler;
container_script2.onmouseover = container_script2.onmouseout = handler;
container_script3.onmouseover = container_script3.onmouseout = handler;
container_script4.onmouseover = container_script4.onmouseout = handler;
function handler(event) {

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }

  if (event.type == 'mouseover') {
    event.target.style.background = '#d9ffff'
  }
  if (event.type == 'mouseout') {
    event.target.style.background = ''
  }
}
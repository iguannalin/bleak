window.addEventListener("load", () => {
  const wOffset = (window.innerWidth/10);
  const w = window.innerWidth;
  const hOffset = (window.innerHeight/15);
  const h = window.innerHeight;
  const wHalf = (w/2) + 20;
  const hHalf = (h/2) - 20;

  const container = document.getElementById("container");
  const hole = document.getElementById("hole");
  const sparkle = document.getElementById("sparkle");
  sparkle.style.display = "none";
  // code from https://codepen.io/deepakkadarivel/pen/LrGEdL
  let count = 0;
  let ff = 12;
  function addDrag(box) {
    function onMove(e, isMobile = false) {
      e.preventDefault();
      sparkle.style.display = "block";
      if (isMobile) {
        sparkle.style.left = e.targetTouches[0].pageX+"px";
        sparkle.style.top = e.targetTouches[0].pageY+"px";
      } else {
        sparkle.style.left = e.pageX+"px";
        sparkle.style.top = e.pageY+"px";
      }
      count+=1;
      if (count % 300 > 1) {
        ff += 1;
        hole.style.fontSize = ff+"px";
      }
    }
    box.addEventListener('mousedown', function() {
      document.addEventListener('mousemove', onMove);
    })
    document.addEventListener('mouseup', function(e) {
      sparkle.style.display = "none";
      document.removeEventListener('mousemove', onMove);
      count = 0;
    });
    box.addEventListener('touchmove', (e) => onMove(e, true));
    document.addEventListener('touchend', () => {count=0; sparkle.style.display = "none";});
    onMove({pageX:0,pageY:0,preventDefault:()=>{}}); // mock initial position
  }
  addDrag(container);
});
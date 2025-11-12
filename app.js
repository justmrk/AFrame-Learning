 document.querySelector('#myBox').addEventListener('click', e => {
    e.target.setAttribute('color', '#EF2D5E');
  });

 
  AFRAME.registerComponent('click-change', {
    init: function () {
      let el = this.el;
      el.addEventListener('click', function () {
        el.setAttribute('color', '#39FF14'); // سبز فسفری!
        el.setAttribute('position', {x: -1.5 , y: 2, z: -3});
        el.setAttribute('rotation', {x: 0, y: 90, z: 0});
      });
    }
  });


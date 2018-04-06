'use strict';

const animateSkills = (function () {
  const skillTitle = $('.skills-row__title');
  const circleSecond = $('.circle__second');

  return {
    wayp: function () {
      skillTitle.waypoint({
        handler: function () {
          var counter = 45;
          for (var i = 0; i < circleSecond.length; i++) {
            circleSecond.eq(i).addClass(`circle-${counter}`);
            counter += 5;
          }
        },
        offset: '50%',
      });
    },
  };

})();

animateSkills.wayp();
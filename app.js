/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 236,
      "density": {
        "enable": true,
        "value_area": 2485.28869434156
      }
    },
    "color": {
      "value": "#7f0202"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 4,
        "color": "#c81313"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6894671861721748,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.7308694910712106,
        "opacity_min": 0.15429467033725558,
        "sync": true
      }
    },
    "size": {
      "value": 8.017060304327615,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 240.5118091298284,
      "color": "#d20000",
      "opacity": 0.2324947488255008,
      "width": 1.9240944730386271
    },
    "move": {
      "enable": true,
      "speed": 3.206824121731046,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 1122.388442605866,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);
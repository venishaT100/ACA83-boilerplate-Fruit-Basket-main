const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Common = Matter.Common,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

var engine = Engine.create(),
  world = engine.world;


var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1550,
    height: 800,
    wireframes: false,
    background: "#B5EAEA",
  },
});

Render.run(render);


var runner = Runner.create();
Runner.run(runner, engine);

options = {
  isStatic: true
};
// create stacks


var strawStack = Composites.stack(750,0,3,4,0,0, function(x,y) {
  return Bodies.polygon(x,y,3,20, {
    friction: 0.00001,
    restitution: 0.5,
    density: 0.001,
    render:{
      sprite:{
        texture:'images/strawberry.png',
        xScale: 0.12,
        yScale: 0.12
      }
    }
  });
});

var pineStack = Composites.stack(240,0,3,4,0,0, function(x,y) {
  return Bodies.polygon(x,y,3,20, {
    friction: 0.00001,
    restitution: 0.5,
    density: 0.001,
    render:{
      sprite:{
        texture:'images/pineapple.png',
        xScale: 0.17,
        yScale: 0.17
      }
    }
  });
});

var orangeStack = Composites.stack(1270,0,3,4,0,0, function(x,y) {
  return Bodies.polygon(x,y,3,20, {
    friction: 0.00001,
    restitution: 0.5,
    density: 0.001,
    render:{
      sprite:{
        texture:'images/orange.png',
        xScale: 0.12,
        yScale: 0.12
      }
    }
  });
});



//   Create first container 
var firstBase = Bodies.rectangle(270,600,360,20, {
  isStatic: true,
  render:{
    sprite:{
      texture:'images/D.jpg',
      xScale: 0.66,
      yScale: 0.08
    }
  }
})
firstLeft = Bodies.rectangle(100,440,300,20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: 'black'},
}),
 firstRight = Bodies.rectangle(440,440,300,20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: 'black'},
});



// Create second container
var secondBase = Bodies.rectangle(800,600,360,20, {
  isStatic: true,
  render:{
    sprite:{
      texture:'images/D2.jpg',
      xScale: 0.26,
      yScale: 0.03
    }
  }
})
secondLeft = Bodies.rectangle(630,440,300,20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: 'black'},
}),
 secondRight = Bodies.rectangle(970,440,300,20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: 'black'},
});


//   Create third container
var thirdBase = Bodies.rectangle(1300,600,360,20, {
  isStatic: true,
  render:{
    sprite:{
      texture:'images/D3.jpg',
      xScale: 0.55,
      yScale: 0.11
    }
  }
})
thirdLeft = Bodies.rectangle(1130,440,300,20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: 'black'},
}),
thirdRight = Bodies.rectangle(1470,440,300,20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: 'black'},
});


// add bodies to world
Composite.add(world,[orangeStack,strawStack,pineStack,
  firstBase,firstLeft,firstRight,
  secondBase,secondLeft,secondRight,
  thirdBase,thirdLeft,thirdRight]);

// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

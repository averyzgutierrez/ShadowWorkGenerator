let shadow = ['Do I believe/trust in myself? why or why not?', 
'How can you better your relationship with yourself?',
'What makes you feel resilient?',
'Do you respect your own boundaries that you set? why or why not?',       'What is your relationship with control? What can/cant you control?',
'How can you incorporate more time for yourself within the day?',
'Do you feel bad taking breaks/resting? why? Where does this stem from?',
'What is my definition of failure? How do I feel when failure occurs?',
'How can I move forward from my setbacks?',
'What can I learn from my shadow self?',
'What is my relationship with my parents? How does this affect me now?',
'What helps me cope and why? Is this mechanism healthy?',
'What is a healthy coping mechanism I would like to try? How would this benefit me?',
'What brought me joy as a child? what can I do to bring that same joy back?',
'When I judge others, what am I projecting? Where does this stem from?', 'What does validation mean to me? Is it important?',
'What do I love the most about life?',
'Who am I? Am I aware of myself and who I am?', 
'What adjective would trigger you the most and why? (ex. lazy, stubborn).',
'What is my definition of failure?', 
'How does asking for help make me feel? Can I ask for help easily?',
'Can I express myself freely, why or why not?',
'What are 20 things I love the most about myself?', 
'What do I need to forgive myself for?',
'When I think about my future I am most afraid of...? And why?',
'Can you spend quality alone time with yourself? Why or why not?', 
'Name some goals you have accomplished, big & small, how did this make you feel?',
'How can I bring more balance into my life?',
'Am I able to voice my needs? Why or why not?', 
'How can I turn my dreams into a reality? Plan out the steps.',
'Which emotion do you have a hard time expressing? Why?', 
'What is one complement you struggle to accept about yourself? Why?',
'What makes you feel the most confident? Why?', 'What are some patterns that keep repeating in my life that dont serve me?', 'How are my projections a reflection of my insecurites?', 'What was something that wasnt accepted as a child? How can I accept this now?', 'What didnt I recieve growing up and how can I give that to myself now?','What are some steps I can take to accept and love myself?', 'Write a letter to someone who hurt you', 'Do you confuse love with attachment? How do you know?', 'Reflect on how far youve come and how much youve grown', 'list 20 things youre greatful for'];



let sha;


let wrds;
let button;

let w = 600
let h = 600
let img;
 

function setup() {
  createCanvas(600, 600);
  button = createButton('Click for a Prompt');
  button.mousePressed(buttonPressed);
  button.size(200,50);
  button.style ('background-color', '#c7a673');
  button.position(259, 480);
  button.style("font-family", "Bodoni");
  background(255, 222, 130);
 // image(img, 100, 2, 400, 400);
  frameRate(60);
  title();
  backg1 = random();
  backg2 = random();
  backg3 = random();
 

  
}

function draw() {
 source();
}

function buttonPressed() {
  sha = int(random(shadow.length));
  wrds = shadow[sha] + ' ' ;
  prompt();
  console.log(wrds);
}



function title() {
  textFont ('Georgia');
  textSize(30);
  stroke(255);
  fill (105, 79, 40);
  textAlign(CENTER);
  text('Shadow Work Prompt of the Day', w/2, h/3);
  
}

function prompt() {
  background(255, 222, 130);
  //image(img, 100, 2, 50, 100);
  title();
  textAlign(CENTER);
  textSize(25);
  text('Journal Prompt:', w/2, h/2);
  textSize(15);
  textFont ('Helvetica');
  text(wrds, width*0.5, height*0.55)
}

//function preload() {
 // img = loadImage('vines.png');
//}

function source(){
   textFont ('Georgia');
  textSize(15);
  text('Created by: Avery Gutierrez', width*0.5, height*0.80)
  text('Instagram: @avery.zg',width*0.5, height*0.85)
  text('Tarot Account: @celestial.tarott',width*0.5, height*0.90)
}

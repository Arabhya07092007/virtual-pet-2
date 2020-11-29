  var dog,happyDog,dog2,database,foodS,foodStocke;
  var milk;
  var b1, b2;
  var foodObj;

  function preload(){

    happyDog = loadImage("dogImg1.png");
    dog2 = loadImage("dogImg.png");
    milk = loadImage("Milk.png");
    
  }

  function setup() {
    createCanvas(1000,500);

    database = firebase.database();

    foodObj = new Food();
    
    dog = createSprite(800,340,10,10);
    dog.addImage(dog2);
    dog.scale = 0.2;

    b1 = createButton("Feed the dog");
    b1.position(500,270);   

    b2 = createButton("Add stocke");
    b2.position(630,270);


  }


  function draw() { 
    background(46, 139, 87);


    drawSprites();

    
  // b1.mousePressed(changePosition(foods),feedDog());

      if(foodS != undefined){
      b1.mousePressed(feedDog());
      b2.mousePressed(addFood());
      }
      

    textSize(20);
    fill("white");
    text(" Food remaining : "+foodS,700,170);
    text("My Doggy game ",450,50);

  

    if(foodS!=undefined&&foodS<=0){
      foodS = 0;
    }


    foodObj.getFoodStocke();
    foodObj.display();
    foodObj.updateFoodStocke();

  } 

  function feedDog(){

      dog.addImage(happyDog);

      if(dog.x > 500){
      dog.x = dog.x-7;
    }
      foodObj.deduct();
      console.log('this is food '+foodS);


  }


  function addFood(){

      foodS++;
      if(frameCount%80==0){
        console.log('error nahi ayya !...........')}
  }



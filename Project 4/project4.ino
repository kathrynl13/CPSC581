/*
https://github.com/PhillyNJ/ArduinoParallaxJoystick/blob/master/two_axis_joystick.ino
http://www.arduino.cc/en/Tutorial/LiquidCrystalHelloWorld
https://www.electronicwings.com/sensors-modules/pir-sensor
*/
#include <LiquidCrystal.h>

//setting up liquid crystal display
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

//setting up joystick display 
int UD = 0; 
int LR = 0;
/* joystick input  */
int IUP=A0;
int ILR=A1;

int MID = 10; // 10 mid point delta arduino, use 4 for attiny
int LRMID = 0;
int UPMID = 0;

//setting up lights
int LEDred = 13;
int LEDyel = 10;
int LEDgre = 9;
int lightColour = LEDred;

//setting up PIR
int pirPin = 8;
int pirStat = 0;

void setup(){
  Serial.begin(9600);
  Serial.println("Starting Project");
  //calabrate joystick to start 
  LRMID = analogRead(ILR);
  UPMID = analogRead(IUP);
  //setup liquid display
  lcd.begin(16, 2);
  //setup lights
  pinMode(LEDred, OUTPUT);
  pinMode(LEDyel, OUTPUT);
  pinMode(LEDgre, OUTPUT);
  //setup PIR sensor 
  pinMode(pirPin, INPUT);
}

void loop(){
  lcd.setCursor(0, 0);
  lcd.clear();
  lcd.setCursor(0, 1);
  lcd.clear();
  lcd.print("Set Timer Minutes");
  getTime();
}

void getTime(){
  int timer = 0;
  lcd.setCursor(0, 1);
  while(1){
    UD = analogRead(IUP);
    LR = analogRead(ILR);
    if(UD < UPMID - MID){
      //push left 
      Serial.println("Left");
    }
    if(UD > UPMID + MID){
      //push right
      Serial.println("Right");
      delay(400);
      lightBusyLevel();
      activateTimer(timer);
      break;
    }
    if(LR < LRMID - MID){
      //push up 
      Serial.println("Up");
      timer = timer + 1;
      Serial.println(timer);
      lcd.setCursor(0, 1);
      lcd.print(timer);
    }
    if(LR > LRMID + MID){
        //push down
      Serial.println("Down");
      timer = timer - 1;
      Serial.println(timer);
      lcd.setCursor(0, 1);
      lcd.print(timer);
    }
    delay(400);
  }
}

void lightBusyLevel(){
    Serial.println("Pick Status");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Pick Urgency");
    char urgentTypes[3][11] = {"Stressed", "Okay", "Happy"};
    int count = 0;
  while(1){
    UD = analogRead(IUP);
    LR = analogRead(ILR);
    if(UD > UPMID + MID + 100){
      //push right
      Serial.println("Right");
      digitalWrite(LEDred, LOW);
      digitalWrite(LEDyel, LOW);
      digitalWrite(LEDgre, LOW);
      break;
    }
    if(LR < LRMID - MID){
      //push up 
      Serial.println("Up");
      digitalWrite(LEDred, LOW);
      digitalWrite(LEDyel, LOW);
      digitalWrite(LEDgre, LOW);
      lcd.setCursor(0, 1);

      int currentChoice = count % 3;
      lcd.print("          ");
      lcd.setCursor(0, 1);
      lcd.print(urgentTypes[currentChoice]);
      if(currentChoice == 0){
          digitalWrite(LEDred, HIGH);
          lightColour = LEDred;
      }else if(currentChoice == 1){
          digitalWrite(LEDyel, HIGH);
          lightColour = LEDyel;
      }else{
          digitalWrite(LEDgre, HIGH);
          lightColour = LEDgre;
      }
    }
    if(LR > LRMID + MID){
        //push down
    }
    count = count + 1;
    delay(400);
  }
}

void activateTimer(int timer){
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Do Not Disturb!");
  int timeRemain = timer*60;
  Serial.println(timeRemain);
  while(timeRemain > 0){
    lcd.setCursor(0, 1);
    lcd.print("          ");
    lcd.setCursor(0, 1);
    lcd.print(timeRemain);
    timeRemain = timeRemain - 1;
    Serial.println(timeRemain);
    motionDetector();
    delay(1000); //wait 1 second
  }
}
void motionDetector(){
  pirStat = digitalRead(pirPin); 
  if (pirStat == HIGH) {            // if motion detected
    digitalWrite(lightColour, HIGH);  // turn LED ON
    Serial.println("Motion Detected");
  } 
  else {
    digitalWrite(lightColour, LOW); // turn LED OFF if we have no motion
    Serial.println("No mMotion Detected");
  }
}
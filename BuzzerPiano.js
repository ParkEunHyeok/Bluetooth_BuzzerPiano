#include <SoftwareSerial.h> //시리얼 통신 라이브러리 호출

int blueTx=2;   //Tx (블투 보내는핀 설정)
int blueRx=3;   //Rx (블투 받는핀 설정)
SoftwareSerial mySerial(blueTx, blueRx);
String myString=""; //받는 문자열

void setup() {
  mySerial.begin(9600); //블루투스 시리얼 개방
}

void loop() {
  while(mySerial.available())  //mySerial 값이 있으면
  {
    char myChar = (char)mySerial.read();  //mySerial int형식의 값을 char형식으로 변환
    myString+=myChar;   //수신되는 문자열을 myString에 모두 붙임 (1바이트씩 전송되는 것을 모두 붙임)
    delay(5);           //수신 문자열 끊김 방지
    pinMode(13, OUTPUT);
  }
 
  if(!myString.equals(""))  //myString 값이 있다면
  {
    Serial.println("input value: "+myString); //시리얼모니터에 myString값 출력

      if(myString=="1")  //myString 값이 '1' 이라면
      {
        tone(12, 262); // 도
        digitalWrite(13, HIGH);
        delay(200);
        noTone(12);
        digitalWrite(13, LOW);
      }
      if(myString=="2")  //myString 값이 '2' 이라면
      {
        tone(12, 294); // 레
        digitalWrite(13, HIGH);
        delay(200);
        noTone(12);
        digitalWrite(13, LOW);
      }
      if(myString=="3")  //myString 값이 '3' 이라면
      {
        tone(12, 330); // 미
        digitalWrite(13, HIGH);
        delay(200);
        noTone(12);
        digitalWrite(13, LOW);
      }
      if(myString=="4")  //myString 값이 '4' 이라면
      {
        tone(12, 349); // 파
        digitalWrite(13, HIGH);
        delay(200);
        noTone(12);
        digitalWrite(13, LOW);
      }
      if(myString=="5")  //myString 값이 '5' 이라면
      {
        tone(12, 392); // 솔
        digitalWrite(13, HIGH);
        delay(200);
        noTone(12);
        digitalWrite(13, LOW);
      }
      if(myString=="6")  //myString 값이 '6' 이라면
      {
        tone(12, 440); // 라
        digitalWrite(13, HIGH);
        delay(200);
        noTone(12);
        digitalWrite(13, LOW);
      }
      if(myString=="7")  //myString 값이 '7' 이라면
      {
        tone(12, 494); // 시
        digitalWrite(13, HIGH);
        delay(200  );
        noTone(12);
        digitalWrite(13, LOW);
      }
      else {
      }
    myString="";  //myString 변수값 초기화
  }
}

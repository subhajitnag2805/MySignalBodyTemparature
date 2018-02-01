 
#include <MySignals.h>

#include "Wire.h"
#include "SPI.h"

int Signal;
void setup()
{
  Serial.begin(115200);

  MySignals.begin();
}


void loop()
{
  while (!Serial.available());
  Signal = Serial.read();
  if (Signal == 5) {
    float temperature = MySignals.getTemperature();
    
    Serial.println(temperature,2);
    delay(1000);
  } else if (Signal == 6) {
    Serial.println(0);
  }

}


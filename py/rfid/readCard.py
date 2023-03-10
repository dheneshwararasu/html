#!/usr/bin/env python

import time
import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522

reader = SimpleMFRC522()

try:
    id, text= reader.read()
    print(id)
    time.sleep(2)
finally:
    GPIO.cleanup()

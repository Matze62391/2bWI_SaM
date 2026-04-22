#matteo
from random import randint

input1 = randint(0, 1000000)
input2 = randint(0, 1000000)

gewichtung_1 = input1*3 + input2*1
gewichtung_2 = input1*4 + input2*4
gewichtung_3 = input1*-1 + input2*4

gewichtung_4 = gewichtung_1*4 + gewichtung_2*1
gewichtung_5 = gewichtung_1*2 + gewichtung_3*5
gewichtung_6 = gewichtung_2*-2 + gewichtung_3*6

gewichtung_7 = gewichtung_6*3 + gewichtung_5*1
gewichtung_8 = gewichtung_4*4 + gewichtung_6*4
gewichtung_9 = gewichtung_5*-1 + gewichtung_6*4

neuron_1 = gewichtung_1 if gewichtung_1 > 30 else 0
neuron_2 = gewichtung_2 if gewichtung_2 > 10 else 0
neuron_3 = gewichtung_3 if gewichtung_3 > 15 else 0

neuron_4 = gewichtung_4 if gewichtung_4 > 12 else 0
neuron_5 = gewichtung_5 if gewichtung_5 > 45 else 0
neuron_6 = gewichtung_6 if gewichtung_6 > 10 else 0

neuron_7 = gewichtung_7 if gewichtung_7 > 25 else 0
neuron_8 = gewichtung_8 if gewichtung_8 > 15 else 0
neuron_9 = gewichtung_9 if gewichtung_9 > 10 else 0

output = neuron_7*4 + neuron_8*1 + neuron_9*4

if output > randint(0, 100000000):
    print(output)
else:
    print("Neuron feuert nicht")
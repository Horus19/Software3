import paho.mqtt.client as mqtt
from os import system

#broker_address = "localhost"
#broker_port = 1883
TOPIC = "chat"


def on_connect(client, userdata, flags, rc):
 client.subscribe(TOPIC)

def on_message(client, userdata, message):
    decoded_message = str(message.payload.decode("utf-8"))
    print(decoded_message)


client = mqtt.Client(client_id='horus2', clean_session=False)
client.on_connect = on_connect 
client.on_message = on_message 
client.connect(host='127.0.0.1', port=1883)
client.loop_forever()

import paho.mqtt.client as mqtt


def on_publish(client, userdata, mid):
    print("mensaje enviado")

client = mqtt.Client(client_id='horus', clean_session=False)
client.on_publish = on_publish
client.connect(host='127.0.0.1', port=1883)
topic = "chat"

while True:
    message = input("Ingrese el mensaje: ")
    client.publish(topic, str(message))

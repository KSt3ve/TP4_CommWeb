import asyncio
import websockets


async def functionCallWebsocket(websocket):
    clients.append(websocket)
    while True:
        receivedMessage = await websocket.recv()
        print("Message reçu : " + receivedMessage)
        for client in clients:
            await client.send(receivedMessage)



clients = []

start_server = websockets.serve(functionCallWebsocket, "localhost", 12345)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()



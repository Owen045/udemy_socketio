# Socket.IO (with websockets)

## Pre-socketio
Socket.io is abstraction built on top on the websocket api.

## TCP - Transmission Control Protocol
- Packets - data streams between clients and servers
- Most packet transfers handled in C
- 5 Layers in the structure of every packet:
    - Application Layer - HTTP/FTP/SSH/SMTP(email) - protocols
    - Transport Layer - UDP/TCP - TCP/IP covers UDP/TCP and IP
    - Network Layer - IP
    - Link layer - e.g. wifi, ethernet connection
    - Physical Layer - e.g. cables
- 2^16 ports on a computer ~ 65000 ports created by transport layer
- Request origin port - 4533 (client) -> 80 (server)
- Request wrap in "segment"

- Connection-Based (Three way handshake)
- Reliable
    - Delivery acknowledgements
    - Retransmission of data if not recieved
    - In order packets
    - Congestion control

## UDP
- Lightweight
    - 8 bytes per header
    - Connectionless (don't have to create connection, can just stream)
    - Consistency (Send data no matter what, packet loss/wrong order makes no difference)
    - Fast
    - Used for video games or realtime communication


## Network Socket
- Websockets (JS api - native browser protocol) and socket.io use TCP
- Socket.io uses ws but fails over to long-polling
- Processes - every think running on computer
    - Processes can bind to a port to transfer data (this is a socket)
- HTTP 
    - Headers (metadata about body)
        - content-type
        - cache-control
- TCP
    - Headers
        - source port
        - destination port
        - sequence number
        - acknowledgement number
    - Body - contains entire http frame
- IP
    - Headers
        - destination i.p. etc
    - Body - contains entire TCP frame
- Link etc - continue in nested fashion
    - Headers
        - source and dest mac address etc

App                             App
Trans                           Trans
Network                         Network
Link                            Link
Phys Eth1 -> 00100111001010101 -> Eth 2

## Websockets
- TCP keeps the connection open.
- Client - html/JS/CSS - this is where websocket api sits in Browser
- Server - python/node/ruby etc - use ws/socket.io modules
- Server knows nothing about websockets
- Uses ws protocol - server needs to translate ws requests

## Socket.io
- Multiple libraries maintained for different languages
- Browser clients must must use the native Websocket object, this is not for browser
- Why should I use Socket.IO over websockets?
    - websockets blocked by firewalls/antivirus/proxy/L.B.
    - socket.io has built in reconnection
    - websockets don't implement binary transmission natively
    - socket.io has paths/groups/rooms to group sockets
    - some browsers cannot use websockets
- Socket.io is built in engine.io which sits on w.s. 

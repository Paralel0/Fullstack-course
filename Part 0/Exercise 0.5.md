 # EXERCISE 0.5: SINGLE PAGE
```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of  browser: The user types and clicks "save"
    browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server -->> browser: HTTP 201 Created
    deactivate server
    Note left of server: Doesn´t redirect and updates DOM-API
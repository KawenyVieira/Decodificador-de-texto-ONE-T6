# Decodificador-de-texto-ONE-T6
Challenge Decodificador de texto _ ALURA ONE T6

## Estrutura do projeto
Diagrama
```mermaid
stateDiagram-v2
    1 --> Cabeçalho 

    state Cabeçalho {
        2 --> CampoTexto 

        state CampoTexto {
	        3--> Texto
            Texto --> BotaoCripto
	        Texto --> BotaoDescripto
		     4 --> CampoCriptografia

            state CampoCriptografia {
                Criptografia--> BotaoCopiar
            }
        }
    }
```
## Responsividade
#### -Desktop []
  <div align="left">
    <img src= "https://github.com/KawenyVieira/Decodificador-de-texto-ONE-T6/assets/105323660/4e74f5f6-8dca-4bdb-9c5c-5af2eb1affbe" width= "500px"/>
  </div>

#### -Tablet []
   <div align="left">
    <img src= "https://github.com/KawenyVieira/Decodificador-de-texto-ONE-T6/assets/105323660/d3dd22ab-2ccf-4547-a7e9-ed378c9cef7e" width= "500px"/>
  </div>

#### -Celular []
   <div align="left">
      <img src= "https://github.com/KawenyVieira/Decodificador-de-texto-ONE-T6/assets/105323660/1e73ec76-cde3-4036-bc75-047cc59dc19c" width= "500px"/>
    </div>
  

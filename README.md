# Decodificador-de-texto-ONE-T6
Challenge Decodificador de texto _ ALURA ONE T6 <br>
Sprint 01: Construa um decodificador de texto com Javascript<br>

<h2>⚙️Tecnologias Utilizadas</h2>

[![My Skills](https://skillicons.dev/icons?i=html,js,css,vscode,figma&theme=light)](https://skillicons.dev)<br>
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

## Estrutura do projeto
 :open_file_folder: Diagrama
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
EXTRAS: Rodape e botao copiar

## Responsividade :computer: :iphone:
#### -Desktop :computer: 
  <div align="left">
    <img src= "https://github.com/KawenyVieira/Decodificador-de-texto-ONE-T6/assets/105323660/4e74f5f6-8dca-4bdb-9c5c-5af2eb1affbe" width= "500px"/>
  </div>

#### -Tablet 
   <div align="left">
    <img src= "https://github.com/KawenyVieira/Decodificador-de-texto-ONE-T6/assets/105323660/d3dd22ab-2ccf-4547-a7e9-ed378c9cef7e" width= "500px"/>
  </div>

#### -Celular :iphone:
   <div align="left">
      <img src= "https://github.com/KawenyVieira/Decodificador-de-texto-ONE-T6/assets/105323660/1e73ec76-cde3-4036-bc75-047cc59dc19c" width= "500px"/>
    </div>

## Acesse o decodificador e descubra novas formas de se comunicar !! :+1:
Como utilizar: <br>
1. Clique na imagem da maquina Enigma de Alan Turing
2. Digite a palavra ou frase
3. Clique em Criptografar ou Desincriptografar
4. A resposta ira aparecer na tela do lado direito, aproveite e copie o texto pelo botao copiar e compartilhe!!

[![decodificador vercel](https://github.com/KawenyVieira/Decodificador-de-texto-ONE-T6/assets/105323660/bf9058d3-29bc-4e4f-a5a7-22ecebb94498)](https://kawenyvieira.github.io/Decodificador-de-texto-ONE-T6/)
*Enigma-Alan Turing*

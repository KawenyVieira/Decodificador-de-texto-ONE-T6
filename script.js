//------------------------------Declaracao de variaveis-----------------------//

    // Seleciona o elemento que exibe as instrucoes na caixa de texto 
    const alert = document.querySelector(".left_instructions p");

    // Seleciona o campo de entrada de texto na interface
    const input = document.querySelector(".text");
    // const input = document.getElementById("textarea");

    // Seleciona os elementos que contêm a resposta criptografada e os itens do lado direito para alterar a msg de acordo com o input
    const right_text_answer = document.querySelector(".right_answer");
    const right_items_img = document.querySelector(".right_items");

    // Seleciona os botões de criptografar e descriptografar na interface
    const btn_cripto = document.querySelector(".criptografar");
    const btn_descripto = document.querySelector(".descriptografar");

    // Seleciona os elementos que exibem as instrucoes na interface, lado direito
    const right_alert = document.querySelector(".right_items_intructions h2");
    const right_alert_text = document.querySelector(".right_items_intructions p");

    // Seleciona o botão de copiar na interface
    const btn_copy = document.querySelector(".right_copy");
    
    // Variável que controla se a cópia do texto é permitida
    let copy = true;

//Adiciona um evento especifico para detectar mudanças no campo de entrada de texto
input.addEventListener("input", function () {
    const text = input.value;
     // Mostra imagem padrão quando não há texto
    if (text == "") {
        right_text_answer.style.display = "none";
        right_items_img.style.display = "flex";
        btn_copy.style.display = "none";
    }

    if (/[^a-z, ]/.test(text)) { // Verifica se o texto contém caracteres inválidos
        alert.style.color = "#ec2828";
        alert.style.decoration = "underline"; /**/
        copy = false;
        right_alert.style.color = "#ec2828"
        right_alert.innerHTML = "Mensagem incorreta!"
        right_alert_text.innerHTML = "Apenas letras minúsculas e sem acento."
    } else if (text == "") {
        alert.style.color = "#495057";
        copy=false;
        right_alert.style.color = "#000000"
        right_alert.innerHTML = "Nenhuma mensagem encontrada"
        right_alert_text.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar."
    } else {
        alert.style.color = "#495057";
        copy = true;
        right_alert.style.color = "#0A3871"
        right_alert.innerHTML = "Mensagem encontrada com sucesso!"
        right_alert_text.innerHTML = "Pronto para criptografar ou descriptografar."
    }
});

// Adiciona um evento especifico para o botão de criptografar
btn_cripto.addEventListener("click", function () {
    const text = input.value;
    // Substitui letras por strings específicas para criptografar o texto
    let answer_cripto = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    if (text != "") {
        if (copy) {
             // Copia o texto criptografado para a área de transferência
            navigator.clipboard.writeText(input.value);
            // Atualiza o botão de criptografar com uma mensagem de confirmação
            btn_cripto.textContent = "Criptografado!";
            setTimeout(function () {
                btn_cripto.textContent = "Criptografar";
            }, 2500);

            right_text_answer.style.display = "block";
            right_items_img.style.display = "none";
            btn_copy.style.display = "block";

            right_text_answer.innerHTML = answer_cripto;

        } else {
            btn_cripto.textContent = "Texto incorreto!";
            setTimeout(function () {
                btn_cripto.textContent = "Criptografar";
            }, 2500);

            right_text_answer.style.display = "none";
            right_items_img.style.display = "flex";
            btn_copy.style.display = "none";
        }
    }
});

// Adiciona um evento especifico para o botão de descriptografar
btn_descripto.addEventListener("click", function () {
    const text = input.value;
    // Substitui as strings criptografadas pelas letras originais para descriptografar o texto
    let answer_descripto = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    if (text != "") {
        if (copy) {
            navigator.clipboard.writeText(input.value);
            btn_descripto.textContent = "Descriptografado!";
            setTimeout(function () {
                btn_descripto.textContent = "Descriptografar";
            }, 2500);

            right_text_answer.style.display = "block";
            right_items_img.style.display = "none";
            btn_copy.style.display = "block";

            right_text_answer.innerHTML = answer_descripto;

        } else {
            btn_descripto.textContent = "Texto incorreto!";
            setTimeout(function () {
                btn_descripto.textContent = "Descriptografar";
            }, 2500);

            right_text_answer.style.display = "none";
            right_items_img.style.display = "flex";
            btn_copy.style.display = "none";
        }
    }
});

btn_copy.addEventListener("click", function () {
    const final_text = right_text_answer.textContent;
    navigator.clipboard.writeText(final_text)

    btn_copy.textContent = "Copiado!";
    setTimeout(function () {
        btn_copy.textContent = "Copiar";
    }, 2500);
});
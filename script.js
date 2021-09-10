function funcResposta() {
    let calculoResp = 0;

    const respostaAnterior = document.querySelector('#mostraResposta h2');
    const imagemAnterior = document.querySelector('#mostraResposta img');

    // console.log(parentList);
    if (respostaAnterior !== null) {
        respostaAnterior.remove();
        imagemAnterior.remove()

    }

    calculoResp = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    console.log(calculoResp);

    let fraseResposta = '';
    let GifResposta = '';

switch (calculoResp) {
    // previsões positivas
    case 1:
        fraseResposta = 'Certamente.';
        GifResposta = "gifs/coelho_sim.gif";
        break;
    case 2:

        fraseResposta = 'Os coelhos decidiram que sim.';
        GifResposta = "gifs/conselho_coelho.gif";
        break;

    case 3:
        fraseResposta = 'Vai dar certo sim, fica feliz :).';
        GifResposta = "gifs/coelho_happy.gif";
        break;

    case 4:
        fraseResposta = 'Siiiiiim.';
        GifResposta = "gifs/coelho_torcendo.gif";
        break;

    case 5:
        fraseResposta = 'Ah nisso da pra dar um jeitinho, então sim.';
        GifResposta = "gifs/coelho_jeito.gif";
        break;

    case 6:
        fraseResposta = 'Sim mas caso dê problema é só pular por cima (do problema).';
        GifResposta = "gifs/coelho_pulo.gif";
        break;

    case 7:
        fraseResposta = 'éééééé, acho que sim.';
        GifResposta = "gifs/coelho_right.gif";
        break;

    case 8:
        fraseResposta = 'Positivo.';
        GifResposta = "gifs/coelho_thumbs_up.gif";
        break;

    case 9:
        fraseResposta = 'siiiiiiim!! SIIIIIIIIIIIM!!!!';
        GifResposta = "gifs/coelho_grito.gif";
        break;

    case 10:
        fraseResposta = 'A natureza diz que sim.';
        GifResposta = "gifs/coelho_magic.gif";
        break;

    // Previsões sem resposta
    case 11:
        fraseResposta = 'Desanimado demais pra responder isso.';
        GifResposta = "gifs/coelho_seila.gif";
        break;

    case 12:
        fraseResposta = 'Ocupado, faça essa pegunda daqui 10 minutos.';
        GifResposta = "gifs/coelho_makeup.gif";
        break;

    case 13:
        fraseResposta = 'Não acho que você vá aceitar bem a resposta agora.';
        GifResposta = "gifs/coelho_comendo.gif";
        break;

    case 14:
        fraseResposta = 'Perdão, esqueci como que faz previsão.';
        GifResposta = "gifs/coelho_cant.gif";
        break;

    case 15:
        fraseResposta = 'Pera, concentra e faz outra pergunta.';
        GifResposta = "gifs/coelho_subject.gif";
        break;

    // Previsões negativas 
    case 16:
        fraseResposta = 'Sua pergunta deixou o coelho bravo... muito bravo...';
        GifResposta = "gifs/coelho_bravo.gif";
        break;

    case 17:
        fraseResposta = 'Por algum motivo tua pergunta deixou o coelho triste, melhor mudar de assunto.';
        GifResposta = "gifs/coelho_triste.gif";
        break;

    case 18:
        fraseResposta = 'Todos concordamos que é melhor não.';
        GifResposta = "gifs/conselho_coelho.gif";
        break;

    case 19:
        fraseResposta = 'QUE? Não! Definitivamente não!';
        GifResposta = "gifs/coelho_que.gif";
        break;

    case 20:
        fraseResposta = 'Não';
        GifResposta = "gifs/coelho_no.gif";
        break;
    default:
    console.log(`Sorry, os coelhos estão de greve.`);
}

console.log(fraseResposta);
console.log(GifResposta);

const selecaoDiv = document.querySelector('#mostraResposta');
const itemResposta = document.createElement("h2");
const itemImagem = document.createElement("IMG");

    itemResposta.innerText = fraseResposta;
    itemImagem.src = GifResposta;

    selecaoDiv.appendChild(itemResposta);
    selecaoDiv.appendChild(itemImagem);


}

const botaoResposta = document.querySelector('#btnResposta');

botaoResposta.addEventListener('click', funcResposta);
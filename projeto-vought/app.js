
const textarea = document.querySelector("textarea");
const postar = document.querySelector("button");
const feed = document.querySelector(".conteudoPrincipal__listaPosts");

function imprimirNoConsole(event) {
    event.preventDefault();

    const meuPost_TextArea = textarea.value;
    criarPost(meuPost_TextArea);
};

postar.addEventListener("click", imprimirNoConsole);

let data = new Date();
let hora = data.getHours;
let minutos = data.getMinutes;


function criarPost (textoPost) {

    const post = {
        nome: "Petherson ",
        foto: "img/miguel-profilePic.png",
        usuario: " @pethersonzada",
        texto: textoPost,
        tempo: `${hora}:${minutos}`
    };

    listarTemplatePost(post);
};

function listarTemplatePost(post) {
    
    const {nome, foto, usuario, texto, tempo} = post;

    let li = document.createElement("li");
    li.classList.add("conteudoPrincipal__posts");

    let img = document.createElement("img");
    img.classList.add("fotoDePerfil");
    img.src = foto;

    let div = document.createElement("div");
    div.classList.add("post_conteudo");

    let h2 = document.createElement("h2");
    h2.innerText = nome;

    let span = document.createElement("span");
    span.innerText = usuario;

    let p = document.createElement("p");
    p.innerText = texto;

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div);

    feed.appendChild(li);
    textarea.value = "";
};
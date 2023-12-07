function plateau () {
  let colonne = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let nbLigne = 8;
  let container = document.getElementById("container");
  for(let l = 1; l < 9; l++ ) {
    for(let c = 0; c < colonne.length; c++ ) {
        div = document.createElement("div");
        div.id = colonne[c]+""+l;
        div.setAttribute("onclick", "cli(this.id, 0)");
        container.appendChild(div);
    }
  }
}

function mep (piecesCouleur) {
  for(let i = 0; i<piecesCouleur.length; i++) {  
    for(const key in piecesCouleur[i]) {
      let div = document.getElementById(piecesCouleur[i].pos);
      newImg = document.createElement("img");
      newImg.src = piecesCouleur[i].src;
      newImg.id = piecesCouleur[i].id;
      div.append(newImg);
    }
  }
}

function pieces () {
  let piecesNoir = [{
    nom: "Tour", src: "img/r.gif", id: "tourNoir", pos: "A8",
  }, {
    nom: "Tour", src: "img/r.gif", id: "tourNoir", pos: "H8",
  }, {
    nom: "Reine", src: "img/q.gif", id: "reineNoir", pos: "E8",
  }, {
    nom: "Roi", src: "img/k.gif", id: "roiNoir", pos: "D8",
  }, {
    nom: "Cavalier", src: "img/n.gif", id: "cavNoir", pos: "B8",
  }, {
    nom: "Cavalier", src: "img/n.gif", id: "cavNoir", pos: "G8",
  }, {
    nom: "Fou", src: "img/b.gif", id: "fouNoir", pos: "C8",
  }, {
    nom: "Fou", src: "img/b.gif", id: "fouNoir", pos: "F8",
  }, {
    nom: "Pion", src: "img/p.gif", id: "pionNoir", pos: "A7",
  }, {
    nom: "Pion", src: "img/p.gif", id: "pionBlanc", pos: "B7",
  }, {
    nom: "Pion", src: "img/p.gif", id: "pionBlanc", pos: "C7",
  }, {
    nom: "Pion", src: "img/p.gif", id: "pionBlanc", pos: "D7",
  }, {
    nom: "Pion", src: "img/p.gif", id: "pionBlanc", pos: "E7",
  }, {
    nom: "Pion", src: "img/p.gif", id: "pionBlanc", pos: "F7",
  }, {
    nom: "Pion", src: "img/p.gif", id: "pionBlanc", pos: "G7",
  }, {
    nom: "Pion", src: "img/p.gif", id: "pionBlanc", pos: "H7",
  }];
  mep(piecesNoir);
  let piecesBlanche =  [{
    nom: "Tour", src: "img/wr.gif", id: "tourBlanc", pos: "A1",
  }, {
    nom: "Tour", src: "img/wr.gif", id: "tourBlanc", pos: "H1",
  }, {
    nom: "Reine", src: "img/wq.gif", id: "reineBlanc", pos: "E1",
  }, {
    nom: "Roi", src: "img/wk.gif", id: "roiBlanc", pos: "D1",
  }, {
    nom: "Cavalier", src: "img/wn.gif", id: "cavBlanc", pos: "B1",
  }, {
    nom: "Cavalier", src: "img/wn.gif", id: "cavBlanc", pos: "G1",
  }, {
    nom: "Fou", src: "img/wb.gif", id: "fouBlanc", pos: "C1",
  }, {
    nom: "Fou", src: "img/wb.gif", id: "fouBlanc", pos: "F1",
  }, {
    nom: "Pion", src: "img/wp.gif", id: "pionBlanc", pos: "A2",
  }, {
    nom: "Pion", src: "img/wp.gif", id: "pionBlanc", pos: "B2",
  }, {
    nom: "Pion", src: "img/wp.gif", id: "pionBlanc", pos: "C2",
  }, {
    nom: "Pion", src: "img/wp.gif", id: "pionBlanc", pos: "D2",
  }, {
    nom: "Pion", src: "img/wp.gif", id: "pionBlanc", pos: "E2",
  }, {
    nom: "Pion", src: "img/wp.gif", id: "pionBlanc", pos: "F2",
  }, {
    nom: "Pion", src: "img/wp.gif", id: "pionBlanc", pos: "G2",
  }, {
    nom: "Pion", src: "img/wp.gif", id: "pionBlanc", pos: "H2",
  }];
  mep(piecesBlanche);
}

function cli(id, flag) {
  //on parcourt les cases pour trouver si une à un flag à 1
  let oldPos = "";
  const place = document.getElementById("container");
  for (let i = 0; i < place.children.length; i++) {
    console.log(place.children[i]+" "+place.children[i].id+" "+place.children[i].onclick);
    if(place.children[i].onclick === "cli(this.id, 1)") { //une case avec flag
      oldPos = place.children[i].id;
    }
  }
  console.log(oldPos);
  if(oldPos === "") { //aucune case avec flag
    //on change le flag de la case que l'on vient de cocher -----------OK-------------
    let div = document.getElementById(id);
    div.setAttribute("onclick", "cli(this.id, 1)");
    container.appendChild(div); //je ne sais pas si c'est nécessaire
    console.log("ici");
  } else { //une case avec flag
    console.log("la");
    let divNewCase = document.getElementById(id); //nouvelle case
    let img = document.getElementById(oldPos);
    newImg = document.createElement("img");
    newImg.id = img.id;
    newImg.src = img.src;
    divNewCase.append(newImg);
    img.remove();
    //on remet le flag de base
    let divOldCase = document.getElementById(oldPos);
    divOldCase.setAttribute("onclick", "cli(this.id, 0)");
    container.appendChild(divOldCase); 
  }
  //on va bouger la piece au nouvel emplacement puis on repasse le flag de l'image à 0
  //trouver quelle div à un flag à 1
  //mix pour trouver l'id de la pièce qui est dans la case
  //on passe juste le flag à 1
  //on test, 1er click pour recup id div, puis recup id img, puis on la recrée où on a fait un autre clic et on supr la 1ere
  //quand on clic sur une div, on maj le flag à 1
}

//const init = confirm("Voulez vous lancer une partie ?");
//if(init) {
  plateau();
  pieces();
//}
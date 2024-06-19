let letra = new Array();
letra["A"] = ["GCT", "GCC"];
letra["B"] = ["GCA", "GCG"];
letra["C"] = ["TGT", "TGC"];
letra["D"] = ["GAT", "GAC"];
letra["E"] = ["GAA", "GAG"];
letra["F"] = ["TTT", "TTC"];
letra["G"] = ["GGT", "GGC", "GGA", "GGG"];
letra["H"] = ["CAT", "CAC"];
letra["I"] = ["ATT", "ATC"];
letra["J"] = ["ATA"];
letra["K"] = ["AAA", "AAG"];
letra["L"] = ["CTT", "CTC", "CTA", "CTG"];
letra["M"] = ["ATG"];
letra["N"] = ["AAT"];
letra["O"] = ["AAC"];
letra["P"] = ["CCA", "CCT", "CCG", "CCC"];
letra["Q"] = ["CAG", "CAA"];
letra["R"] = ["AGA", "AGG", "CGT", "CGC", "CGA", "CGG"];
letra["S"] = ["TCT", "TCC", "TCA", "TCG", "AGT"];
letra["T"] = ["ACT", "ACA"];
letra["U"] = ["ACC", "ACG"];
letra["V"] = ["GTA", "GTG"];
letra["W"] = ["TGG"];
letra["X"] = ["GTT", "GTC"];
letra["Y"] = ["TAT", "TAC"];
letra["Z"] = ["TAC"];
letra[" "] = ["AGC"];

function toDNA(){
    const texto = document.querySelector("textarea").value;
    let lineas = texto.split("\n");
    console.log(lineas.length);
    for(let i=0; i<lineas.length; i++){
        let lineaDNA = "";
        for(let j=0; j<lineas[i].length; j++){
            let l = lineas[i].charAt(j).toUpperCase();
            if ((l>="A" && l<="Z") || (l==" ")){
                lineaDNA += letra[l][0];
            }
        }
        pintar(lineaDNA);
    }
}

function pintar(adn){
    const tablero = document.querySelector("#tablero");
    const linea = document.createElement("div")
    linea.className = "linea";
    for(let i=0; i<adn.length; i++){
        let nucleotido = adn[i];
        let letraElement = document.createElement("div");
        letraElement.className = nucleotido;
        linea.appendChild(letraElement);
    }
    tablero.appendChild(linea);
}
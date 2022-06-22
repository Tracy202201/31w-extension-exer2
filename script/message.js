(function(){
    let elmBody = document.querySelector('body');
    let elmBoite__modale;
    let elmBoite__X;
    let elmBoite__Contenu;
    let elmBoite__ContenuCarte;
    let $contenu;
    let $contenuCarte;
    
    function creer_boite_modale(){
        elmBoite__modale = document.createElement('div');
        elmBoite__Contenu  = document.createElement('div');
        elmBoite__ContenuCarte  = document.createElement('div');

        elmBoite__Contenu.classList.add('elmBoite__Contenu');
        elmBoite__ContenuCarte.classList.add('elmBoite__ContenuCarte');
        elmBoite__modale.appendChild(elmBoite__Contenu);
        elmBoite__modale.appendChild(elmBoite__ContenuCarte);

        elmBoite__X = document.createElement('button');

        elmBoite__modale.appendChild(elmBoite__X);
        elmBoite__modale.classList.add('boite__modale');
        elmBoite__X.classList.add('boite__X'); 
        elmBoite__X.innerHTML ="X";

        let elmBody = document.querySelector('body');
        elmBody.appendChild(elmBoite__modale);

        //let mon_petit_contenu = document.querySelector(".code__adresse").innerHTML
        elmBoite__Contenu.insertAdjacentHTML('beforeend' , genere_adresse());
        elmBoite__ContenuCarte.insertAdjacentHTML('beforeend' , genere_carte());
    }

    function genere_adresse(){
        $contenu = '<code class="code__adresse"> 3 800, rue Sherbrooke Est Montréal (Québec) H1X 2A2 | 514 254-7131</code>';
        return $contenu;
    }

    function genere_carte(){
        $contenuCarte = '<code class="code__carte"><iframe width="560" height="315" src="https://www.youtube.com/embed/7h0ndoYeOCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></code>';
        return $contenuCarte;
    }

    function detruire_boite_modale(){
        elmBoite__modale.removeChild(elmBoite__X)
        elmBody.removeChild(elmBoite__modale)
    }

    creer_boite_modale()
    
    let elmOK = document.querySelector('#mon_bouton')

    elmOK.addEventListener('mousedown', function(){
        console.log('Bravo le script fonctionne');
        elmBoite__modale.classList.add('boite__modale__ouvrir'); 
    })

    elmBoite__X.addEventListener('mousedown', function(){
        elmBoite__modale.classList.remove('boite__modale__ouvrir');
    })


})()
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
        $contenuCarte = '<code class="code__carte"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.9619119166687!2d-73.55573304883667!3d45.55109173555957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bf575ab9357%3A0xa64ecd7388cc64f0!2s3800%20Rue%20Sherbrooke%20E%2C%20Montr%C3%A9al%2C%20QC%20H1X%202A2!5e0!3m2!1sfr!2sca!4v1655846782618!5m2!1sfr!2sca" width="700" height="380" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></code>';
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
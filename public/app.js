
build();

function build() {

    const divNavBar = document.createElement('div');
    divNavBar.setAttribute('id', 'navBar');
    divNavBar.className = 'container-fluid';
    divNavBar.className = 'p-3 bg-light border';
    app.appendChild(divNavBar);

    

    const inputSearch = document.createElement('input');
    inputSearch.setAttribute('type', 'search');
    inputSearch.setAttribute('placeholder', 'Search');
    divNavBar.appendChild(inputSearch);

    const btnSearch = document.createElement('button');
    btnSearch.setAttribute('type', 'submit');
    btnSearch.className = 'btn btn-outline-success';
    btnSearch.innerHTML = 'Search';
    divNavBar.appendChild(btnSearch);

    const divOmMig = document.createElement('div');
    divOmMig.setAttribute('id', 'omMig');
    divOmMig.className = 'border border-dark p-3';
    app.appendChild(divOmMig);

    const titleOmMig = document.createElement('h1');
    titleOmMig.innerHTML = 'Om mig';
    divOmMig.appendChild(titleOmMig);

    const contentOmMig = document.createElement('p');
    contentOmMig.innerHTML = 'Jag är 19 år och bor i Stockholm. Är ursprunligen ifrån en liten ort vid namn Charlottenberg i Värmland. Bott i Stockholm nu i 7 år.';
    divOmMig.appendChild(contentOmMig);


    const divIntressen = document.createElement('div');
    divIntressen.setAttribute('id', 'intressen');
    divIntressen.className = 'border border-dark p-3';
    app.appendChild(divIntressen);

    const titleIntressen = document.createElement('h1');
    titleIntressen.innerHTML = 'Intressen';
    divIntressen.appendChild(titleIntressen);

    const contentIntressen = document.createElement('p');
    contentIntressen.innerHTML = 'Jag spenderar mest tid på träning av alla mina intressen.' + 
    ' Älskar styrketräning, har har mål att slå min pappas rekord och eventuellt börja tävla i styrkelyft om några år.' + 
    ' Spelar också mycket fotboll på fritid samt lite dataspel på kvällarna. Dessutom är jag intresserad matlagning och sommarkvällar med fiske är ibland oslagbart.';
    divIntressen.appendChild(contentIntressen);

    const divMål = document.createElement('div');
    divMål.setAttribute('id', 'mål');
    divMål.className = 'border border-dark p-3';
    app.appendChild(divMål);

    const titleMål = document.createElement('h1');
    titleMål.innerHTML = 'Mål';
    divMål.appendChild(titleMål);

    const contentMål = document.createElement('p');
    contentMål.innerHTML = 'Förutom mål inom mina intressen som t.ex styrkelyft har jag också mål att lära mig mer om programmering och webbutveckling.' + 
    'I framtiden vill jag känna mig trygg att jobba med det och kunna berätta för andra om hur programering och webbutveckling fungerar.';
    divMål.appendChild(contentMål);

    /* const dropDown = document.createElement('ul');
    dropDown.setAttribute('aria-labelledby', 'navbarDropdown');
    dropDown.className = 'dropdown-menu';
    divNavBar.appendChild(dropDown);

    const dropdownItem = document.createElement('li');
    const dropdownItemA = document.createElement('a');
    dropdownItemA.className = 'dropdown-item';
    dropdownItemA.innerHTML = 'Action';
    dropDown.appendChild(dropdownItem);
    dropdownItem.appendChild(dropdownItemA); */

}
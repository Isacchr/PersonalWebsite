
buildNavbar();
build();

function build() {

    const img = document.createElement('img');
    img.setAttribute('src', 'Student_bild.JPG');
    img.setAttribute('alt', 'Bild på Isac Kristiansson');
    img.className = 'float-end w-25 mt-5 me-5';
    app.appendChild(img);


    const divOmMig = document.createElement('div');
    divOmMig.setAttribute('id', 'omMig');
    divOmMig.className = 'border border-dark p-3 mt-5 w-50 ms-5';
    app.appendChild(divOmMig);


    const divIntressen = document.createElement('div');
    divIntressen.setAttribute('id', 'intressen');
    divIntressen.className = 'border border-dark p-3 mt-5 w-50 ms-5';
    app.appendChild(divIntressen);

    const divMål = document.createElement('div');
    divMål.setAttribute('id', 'mål');
    divMål.className = 'border border-dark p-3 mt-5 float-start w-50 ms-5 mb-5';
    app.appendChild(divMål);


    buildContent(divOmMig, divIntressen, divMål);
}

function buildNavbar() {

    const divNavBar = document.createElement('div');
    divNavBar.setAttribute('id', 'navBar');
    divNavBar.className = 'border border-dark p-3 bg-primary d-flex sticky-top';
    app.appendChild(divNavBar);

    const divHomeMenu = document.createElement('div');
    divHomeMenu.className = 'col-8';
    divNavBar.appendChild(divHomeMenu);

    const dropdownBtn = document.createElement('button');
    dropdownBtn.className = 'btn border-0 dropdown-toggle w-25';
    dropdownBtn.setAttribute('type', 'button');
    dropdownBtn.setAttribute('data-bs-toggle', 'dropdown')
    dropdownBtn.setAttribute('data-bs-auto-close', 'false');
    dropdownBtn.innerHTML = '<h2> Experience </h2>';
    divHomeMenu.appendChild(dropdownBtn);
    
    const titleHome = document.createElement('h1');
    titleHome.setAttribute('name', 'homebtn');
    titleHome.innerHTML = 'Home';
    titleHome.className = 'ms-4 w-25 float-start';
    divHomeMenu.appendChild(titleHome);

    const divSearch = document.createElement('div');
    divSearch.className = 'col-4';
    divNavBar.appendChild(divSearch);

    const btnSearch = document.createElement('button');
    btnSearch.setAttribute('type', 'submit');
    btnSearch.className = 'btn btn-success float-end me-4';
    btnSearch.innerHTML = 'Search';
    divSearch.appendChild(btnSearch);

    const inputSearch = document.createElement('input');
    inputSearch.setAttribute('type', 'search');
    inputSearch.setAttribute('placeholder', 'Search');
    inputSearch.className = 'float-end';
    divSearch.appendChild(inputSearch);


    const dropdownMenu = document.createElement('ul');
    dropdownMenu.className = 'dropdown-menu';
    divHomeMenu.appendChild(dropdownMenu);

    const dropdownList = document.createElement('li');
    dropdownMenu.appendChild(dropdownList);

    const dropdownEducation = document.createElement('button');
    dropdownEducation.className = 'dropdown-item';
    dropdownEducation.setAttribute('type', 'button');
    dropdownEducation.innerHTML = 'Education';
    dropdownList.appendChild(dropdownEducation);

    const dropdownWorkExperience = document.createElement('button');
    dropdownWorkExperience.className = 'dropdown-item';
    dropdownWorkExperience.setAttribute('type', 'button');
    dropdownWorkExperience.innerHTML = 'Work Experience';
    dropdownList.appendChild(dropdownWorkExperience);

}

function buildContent(divOmMig, divIntressen, divMål) {

    const titleOmMig = document.createElement('h1');
    titleOmMig.innerHTML = 'Om mig';
    divOmMig.appendChild(titleOmMig);

    const contentOmMig = document.createElement('p');
    contentOmMig.innerHTML = 'Jag är 19 år och bor i Stockholm. Är ursprunligen ifrån' +
    'en liten ort vid namn Charlottenberg i Värmland. Bott i Stockholm nu i 7 år.';
    divOmMig.appendChild(contentOmMig);


    const titleIntressen = document.createElement('h1');
    titleIntressen.innerHTML = 'Intressen';
    divIntressen.appendChild(titleIntressen);

    const contentIntressen = document.createElement('p');
    contentIntressen.innerHTML = 'Jag spenderar mest tid på träning av alla mina intressen.' + 
    ' Älskar styrketräning, har har mål att slå min pappas rekord och eventuellt börja tävla' + 
    ' i styrkelyft om några år. Spelar också mycket fotboll på fritid' +
    ' samt lite dataspel på kvällarna. Dessutom är jag intresserad matlagning och' + 
    ' sommarkvällar med fiske är ibland oslagbart.';
    divIntressen.appendChild(contentIntressen);


    const titleMål = document.createElement('h1');
    titleMål.innerHTML = 'Mål';
    divMål.appendChild(titleMål);

    const contentMål = document.createElement('p');
    contentMål.innerHTML = 'Förutom mål inom mina intressen som t.ex styrkelyft' +
    ' har jag också mål att lära mig mer om programmering och webbutveckling.' + 
    ' I framtiden vill jag känna mig trygg att jobba med det och kunna berätta' +
    ' för andra om hur programering och webbutveckling fungerar.';
    divMål.appendChild(contentMål);

}
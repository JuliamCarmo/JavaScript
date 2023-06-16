function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){

        tabContent[0].classList.add('ativo') //o primeiro item sempre inicia ativo

        function activeTab(index){
            tabContent.forEach((section, index) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAccordion(){
    const accodionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo'; 

    if(accodionList.length){
        //manter o primeiro faq (pergunta e resposta) sempre ativo inicialemente
        accodionList[0].classList.add(activeClass);
        accodionList[0].nextElementSibling.classList.add(activeClass);


        function activeAccordion(){
            this.classList.toggle(activeClass);  //add ao dt
            this.nextElementSibling.classList.toggle(activeClass); //add ao dd
        }

        accodionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();


function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // Forma alternativa com window.scrollTo e offsetTop para alinhar ao topo
        // const topo = section.offsetTop;

        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();
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
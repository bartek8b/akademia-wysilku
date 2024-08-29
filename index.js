const sidebar = document.querySelector('#sideBar');
const menuButton = document.querySelector('#menuButton');
const xButton = document.querySelector('#xButton');

function showSidebar(){
    sidebar.style.display ='flex';
    menuButton.style.display = 'none';
    xButton.style.display ='flex';

    sidebar.animate([
        {transform: 'translateX(100%)'},
        {transform: 'translateX(0)'}],
        {duration: 500, fill: 'forwards'});
}

function hideSidebar(){
    menuButton.style.display = 'flex';
    xButton.style.display ='none';

    sidebar.animate([
        {transform: 'translateX(0)'},
        {transform: 'translateX(100%)'}],
        {duration: 500, fill: 'forwards'});
    
    updateWidth();
}

function updateWidth(){
    const windowWidth = window.innerWidth;

    if(windowWidth > 768){
        sidebar.style.display ='none';
        menuButton.style.display = 'none';
        xButton.style.display ='none';
    }
    else{
        menuButton.style.display = 'flex';
        xButton.style.display ='none';
    }
}

window.addEventListener("resize", updateWidth);






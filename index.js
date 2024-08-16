const sidebar = document.querySelector('#sideBar');
const menuButton = document.querySelector('#menuButton');
const xButton = document.querySelector('#xButton');

function showSidebar(){
    sidebar.style.display ='flex';
    menuButton.style.display = 'none';
    xButton.style.display ='flex';
}
function hideSidebar(){
    sidebar.style.display ='none';
    menuButton.style.display = 'flex';
    xButton.style.display ='none';
}

function updateWidth(){
    const windowWidth = window.innerWidth;

    if(windowWidth >= 767){
        sidebar.style.display ='none';
        menuButton.style.display = 'none';
        xButton.style.display ='none';
    }
    else{
        sidebar.style.display ='none';
        menuButton.style.display = 'flex';
        xButton.style.display ='none';
    }
}

window.addEventListener("resize", updateWidth);
function showSidebar(){
    const sidebar = document.querySelector('#sideBar');
    const menuButton = document.querySelector('#menuButton');
    const XButton = document.querySelector('#XButton');

    sidebar.style.display ='flex';
    menuButton.style.display = 'none';
    XButton.style.display ='flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('#sideBar');
    const menuButton = document.querySelector('#menuButton');
    const XButton = document.querySelector('#XButton');

    sidebar.style.display ='none';
    menuButton.style.display = 'flex';
    XButton.style.display ='none';
}

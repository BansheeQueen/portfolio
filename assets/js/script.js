//  navigation indicator movement
const list = document.querySelectorAll('.menu-item');
let liNum = 0;
function active() {
    list.forEach((item) => {
        item.classList.remove('active');
    })
    this.classList.add('active');
}

list.forEach((item) => {
    item.addEventListener('click', active);
});


for(let i = list.length - 1; i >= 0; i--) {
    list[i].id = `item-${liNum}`;
    liNum++;

}
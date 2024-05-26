//import {generatePagination, generateShowItems, isMobile, nextPagination, prevPagination} from "./utils.js";

const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const itemsContainer = document.querySelector('#items-container');
const itemWidth = 425;
const itemsToShow = isMobile() ? 2 : 3
let currentIndex = 0;

function showItems() {
    const items = Array.from(document.querySelectorAll(".slider-item"));
    items.forEach((item, index) => {
        const isVisible =
            index >= currentIndex && index < currentIndex + itemsToShow;
        if (isVisible) {
            item.classList.remove("hidden");
            item.style.transform = `translateX(0px)`;
        } else {
            item.classList.add("hidden");
            item.style.transform = `translateX(-${itemWidth}px)`;
        }
    });
}


nextBtn.addEventListener('click', () => {
    if (currentIndex < itemsContainer.children.length - itemsToShow) {
        isMobile() ? currentIndex += 2 : currentIndex += 3;
        showItems();
        nextPagination()
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        isMobile() ? currentIndex -= 2 : currentIndex -= 3;
        showItems();
        prevPagination()
    }
});

document.addEventListener("DOMContentLoaded", () => {
    generateShowItems(itemsToShow)
    generatePagination()
    if(isMobile()) {
        Array.from(itemsContainer.children).forEach((i)=>{
            const img1 = i.querySelector('img')
            const img2 = img1.nextElementSibling
            const paginationSphere1 = i.querySelector('.rounded-full')
            const paginationSphere2 = paginationSphere1.nextElementSibling
            let startPoint;
            let moved = false;
            function touch(e) {
                e.preventDefault();
                startPoint = e.changedTouches[0].pageX;
            }
            function move(e) {
                if (moved) {
                    return;
                }
                e.preventDefault();
                if (e.changedTouches[0].pageX > startPoint + i.offsetWidth / 4) {
                    img2.classList.add('opacity-0')
                    img1.classList.remove('opacity-0')
                    paginationSphere2.classList.remove('bg-white')
                    paginationSphere1.classList.remove('bg-transparent')
                    moved = true;
                }
                if (e.changedTouches[0].pageX < startPoint - i.offsetWidth / 4) {
                    img1.classList.add('opacity-0')
                    img2.classList.remove('opacity-0')
                    paginationSphere2.classList.add('bg-white')
                    paginationSphere1.classList.add('bg-transparent')
                    moved = true;
                }
            }
            i.addEventListener("touchmove", move);
            i.addEventListener("touchstart", touch);
            i.addEventListener("touchend", () => {
                setTimeout(() => {
                    moved = !moved;
                }, 200);
            });
        })
    }
});

const switchBtn = document.querySelector('#switch');
switchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.localStorage.removeItem("items");
    itemsContainer.innerHTML = '';
    currentIndex = 0;
    generateShowItems(itemsToShow)
});
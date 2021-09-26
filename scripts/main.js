//ローディング
window.onload = function() {
  setTimeout(() => {
    const loading = document.querySelector('.loader');
    loading.classList.add('loaded');
  }, 2000);
}


//ハンバーガーメニュー
const cover = document.querySelector('.mobile-menu__cover');
const side = document.querySelector('.mobile-menu');
const links = document.querySelectorAll('.mobile-menu__link');
const btn = document.querySelector('.mobile-menu__btn');
const items = document.querySelectorAll('.mobile-menu__item');
function menuOpen() {
  const spans = document.querySelectorAll('#span');
  spans.forEach(span => {
    span.classList.toggle('menu-open');
  });
  cover.classList.toggle('menu-open');
  btn.classList.toggle('menu-open');
  side.classList.toggle('menu-open')
  items.forEach(item => {
    item.classList.toggle('menu-open');
  })
}
btn.addEventListener('click', () => {
  menuOpen();
});
links.forEach(link => {
  link.addEventListener('click', () => {
    menuOpen();
  });
});
cover.addEventListener('click', () => {
  menuOpen();
});






//文字アニメーション
class TextAniamtion {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split('');
    this.el.innerHTML = this._tagText();
  }
  _tagText() {
    return this.chars.reduce((acc, crr) => {
      return `${acc}<span class="char">${crr}</span>`;
    }, '');
  }
}

const str1 = new TextAniamtion('.profile__en');
const str2 = new TextAniamtion('.profile__ja');
const str3 = new TextAniamtion('.works__en');
const str4 = new TextAniamtion('.works__ja');
const str5 = new TextAniamtion('.contact__en');
const str6 = new TextAniamtion('.contact__ja');



//スクロールオブザーバー
const targets = document.querySelectorAll('.target');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('inview');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('inview');
    }
  });
}
const options = {
  root: null,
  rootMargin: "0px 0px -300px 0px",
}
const options2 = {
  root: null,
  rootMargin: "0px 0px -300px 0px",
}
const io = new IntersectionObserver(cb, options);
const io2 = new IntersectionObserver(cb, options2);
targets.forEach(target => {
  io.observe(target);
})

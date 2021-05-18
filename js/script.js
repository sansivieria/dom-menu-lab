var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
//task 1

const mainEl = document.querySelector('main');
  mainEl.style.backgroundColor = 'var(--main-bg)';
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  mainEl.classList.add('flex-ctr');

//task 2

const topMenuEl = document.querySelector('#top-menu');
  topMenuEl.style.height = '100%';
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  topMenuEl.classList.add('flex-around');

//task 3

for(let link of menuLinks){
  const a = document.createElement('a')
  console.log(a);
  a.setAttribute('href', link.href)
  a.textContent = link.text
  topMenuEl.appendChild(a);
}

//task 4

const subMenuEl = document.querySelector('#sub-menu');
  subMenuEl.style.height = '100%';
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  subMenuEl.classList.add('flex-around');
  subMenuEl.style.position = 'absolute';
  subMenuEl.style.top = '0';

//task 5

const topMenuLinks = document.querySelectorAll('#top-menu a');
topMenuEl.addEventListener('click', handleClick);
let showingSubMenu = false;
//console.log(topMenuLinks);

function handleClick(evt) {
  evt.preventDefault()
  if (evt.target.tagName !== 'A')return;
  // console.log('hi')
}

// a.classList.remove(active)

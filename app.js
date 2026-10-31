const menuData = [
  { type: '主菜', title: '先选一道主菜', items: ['鸡公煲', '土豆烧牛腩', '水煮肉片', '蒜蓉粉丝虾', '麻辣水煮鱼', '卤肉饭'] },
  { type: '素菜', title: '再选一道素菜', items: ['酸辣白菜', '清炒时蔬'] },
  { type: '主食', title: '最后选一道主食', items: ['米饭', '炒饭', '炒面', '油泼面', '炒通心粉', '炒意面'] }
];
let currentStep = 0;
const choices = [null, null, null];
const grid = document.querySelector('#dish-grid');
const nextButton = document.querySelector('#next-button');
const backButton = document.querySelector('#back-button');
const loginForm = document.querySelector('#login-form');
const installHelp = document.querySelector('#install-help');
const installHelpText = document.querySelector('#install-help-text');
const installButtons = document.querySelectorAll('.install-app');
let deferredInstallPrompt = null;
const runningAsApp = navigator.standalone === true
  || window.matchMedia('(display-mode: standalone)').matches
  || navigator.userAgent.toLowerCase().includes('electron');

if (runningAsApp) installButtons.forEach(button => button.classList.add('hidden'));

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  installButtons.forEach(button => button.classList.add('hidden'));
});

installButtons.forEach(button => button.addEventListener('click', async () => {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    return;
  }

  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  installHelpText.textContent = isIos
    ? '请先用 Safari 打开这个菜单页面，再点分享按钮，选择“添加到主屏幕”。添加后就能像打开普通 App 一样使用。'
    : '请在手机浏览器中打开这个菜单页面，点浏览器菜单并选择“安装应用”或“添加到主屏幕”。添加后就能从手机桌面直接打开。';
  installHelp.showModal();
}));

document.querySelector('#close-install-help').addEventListener('click', () => installHelp.close());
installHelp.addEventListener('click', event => {
  if (event.target === installHelp) installHelp.close();
});

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  });
}

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const id = document.querySelector('#login-id').value.trim();
  const password = document.querySelector('#login-password').value;
  const error = document.querySelector('#login-error');

  if (id === '涵涵' && password === '0415') {
    document.querySelector('#login-panel').classList.add('hidden');
    document.querySelector('#ordering-panel').classList.remove('hidden');
    error.textContent = '';
    return;
  }

  error.textContent = 'ID 或密码不对哦，再试一次吧～';
  document.querySelector('#login-password').value = '';
  document.querySelector('#login-password').focus();
});

function render() {
  const data = menuData[currentStep];
  document.querySelector('#step-label').textContent = `第 ${currentStep + 1} 步 · ${data.type}`;
  document.querySelector('#step-title').textContent = data.title;
  document.querySelector('#counter').textContent = `已选 ${currentStep} / 3`;
  grid.innerHTML = data.items.map(item => `<button class="dish ${choices[currentStep] === item ? 'selected' : ''}" type="button" data-item="${item}"><span class="dish-name">${item}</span></button>`).join('');
  grid.querySelectorAll('.dish').forEach(button => button.addEventListener('click', () => { choices[currentStep] = button.dataset.item; render(); }));
  nextButton.disabled = !choices[currentStep];
  nextButton.textContent = currentStep === 2 ? '生成我的菜单' : '选择后继续';
  backButton.classList.toggle('hidden', currentStep === 0);
  document.querySelectorAll('.step').forEach((step, index) => { step.classList.toggle('active', index === currentStep); step.classList.toggle('done', index < currentStep); });
}
nextButton.addEventListener('click', () => { if (currentStep < 2) { currentStep++; render(); } else showResult(); });
backButton.addEventListener('click', () => { if (currentStep > 0) { currentStep--; render(); } });
document.querySelector('#restart-button').addEventListener('click', () => { choices.fill(null); currentStep = 0; document.querySelector('#result-panel').classList.add('hidden'); document.querySelector('#selection-panel').classList.remove('hidden'); render(); });
function showResult() { document.querySelector('#selection-panel').classList.add('hidden'); document.querySelector('#result-panel').classList.remove('hidden'); document.querySelector('#menu-card').innerHTML = choices.map((choice, index) => `<div class="menu-row"><span class="menu-type">${menuData[index].type}</span><span class="menu-name">${choice}</span></div>`).join(''); }
render();

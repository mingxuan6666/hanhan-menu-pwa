const menuData = [
  { type: '主菜', title: '先选一道主菜', items: ['鸡公煲', '土豆烧牛腩', '水煮肉片', '蒜蓉粉丝虾', '麻辣水煮鱼', '卤肉饭'] },
  { type: '素菜', title: '再选一道素菜', items: ['酸辣白菜', '清炒时蔬'] },
  { type: '主食', title: '最后选一道主食', items: ['米饭', '炒饭', '炒面', '油泼面', '炒通心粉', '炒馍'] }
];

const dishPhotos = {
  '鸡公煲': { file: 'Dry pot chicken.jpg', author: '1402Dragon Pool', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dry_pot_chicken.jpg' },
  '土豆烧牛腩': { file: '土豆烧牛肉.jpg', author: 'xyzx124', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', sourceUrl: 'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E8%B1%86%E7%83%A7%E7%89%9B%E8%82%89.jpg' },
  '水煮肉片': { file: '家庭水煮肉片.jpg', author: 'zhantongz', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', sourceUrl: 'https://commons.wikimedia.org/wiki/File:%E5%AE%B6%E5%BA%AD%E6%B0%B4%E7%85%AE%E8%82%89%E7%89%87.jpg' },
  '蒜蓉粉丝虾': { src: './assets/dishes/garlic-vermicelli-shrimp.png', author: '用户提供' },
  '麻辣水煮鱼': { file: 'Shuizhuyu at Hamarkand Silk Road Cuisine, Beiqinglu (20230121154615).jpg', author: 'N509FZ', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Shuizhuyu_at_Hamarkand_Silk_Road_Cuisine,_Beiqinglu_(20230121154615).jpg' },
  '卤肉饭': { src: './assets/dishes/luroufan.png', author: '用户提供' },
  '酸辣白菜': { src: './assets/dishes/suanla-baicai.png', author: '用户提供' },
  '清炒时蔬': { file: 'Stir-fried Water Convolvulus (炒空心菜).jpg', author: 'NeoBatfreak', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Stir-fried_Water_Convolvulus_(%E7%82%92%E7%A9%BA%E5%BF%83%E8%8F%9C).jpg' },
  '米饭': { file: 'Steamed rice in bowl 01.jpg', author: 'Anna Frodesiak', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Steamed_rice_in_bowl_01.jpg' },
  '炒饭': { file: 'Laoganma stirred rice hby1.jpg', author: 'Ccyber5', license: '公有领域', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Copyright_tags', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Laoganma_stirred_rice_hby1.jpg' },
  '炒面': { src: './assets/dishes/fried-noodles.png', author: '用户提供' },
  '油泼面': { file: 'You Po Mian（ Oil poured noodles）.webp', author: 'syctown', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', sourceUrl: 'https://commons.wikimedia.org/wiki/File:You_Po_Mian%EF%BC%88_Oil_poured_noodles%EF%BC%89.webp' },
  '炒通心粉': { file: 'MC 澳門 Macau 澳門 Macao 賈伯樂提督街 55 Rua do Almirante Costa Cabral 富明樓 Fu Ming Lau 新鴻發美食 XinHongFa Cuisine Restaurant 早餐 breakfast 牛肉炒通粉 Stir-fried macaroni n beef beef November 2024 R12S 01.jpg', author: 'N509FZ', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', sourceUrl: 'https://commons.wikimedia.org/wiki/File:MC%20%E6%BE%B3%E9%96%80%20Macau%20%E6%BE%B3%E9%96%80%20Macao%20%E8%B3%88%E4%BC%AF%E6%A8%82%E6%8F%90%E7%9D%A3%E8%A1%97%2055%20Rua%20do%20Almirante%20Costa%20Cabral%20%E5%AF%8C%E6%98%8E%E6%A8%93%20Fu%20Ming%20Lau%20%E6%96%B0%E9%B4%BB%E7%99%BC%E7%BE%8E%E9%A3%9F%20XinHongFa%20Cuisine%20Restaurant%20%E6%97%A9%E9%A4%90%20breakfast%20%E7%89%9B%E8%82%89%E7%82%92%E9%80%9A%E7%B2%89%20Stir-fried%20macaroni%20n%20beef%20beef%20November%202024%20R12S%2001.jpg' },
  '炒馍': { src: './assets/dishes/chao-mo.png', author: '用户提供' }
};

const tutorials = {
  '油泼面': {
    summary: '按你提供的流程整理成四步：',
    steps: [
      '水开后下面，煮熟捞出。',
      '三瓣大蒜切成蒜末，和辣椒粉一起放在煮好的面上。',
      '加入适量生抽、盐、老抽，以及味精或鸡精调味。',
      '热油泼在蒜末和辣椒面上。'
    ]
  },
  '炒馍': {
    summary: '按你提供的流程整理成六步：',
    steps: [
      '备菜：肉末解冻；洋葱切小丁，辣椒切段，蔬菜切丁或切条，鸡蛋打散；披萨皮切丁并沾满鸡蛋液。',
      '锅中加油，把鸡蛋炒熟后盛出备用。',
      '锅中补油，加入少量豆瓣酱；洋葱炒软后加入肉末，炒至变色，再下辣椒和蔬菜炒出水分。',
      '加入适量生抽、老抽、盐、糖、味精和胡椒粉调味。',
      '加入馍丁，炒至干巴后下入鸡蛋，翻炒均匀。',
      '加入孜然，翻炒均匀。'
    ]
  }
};
let currentStep = 0;
const choices = [null, null, null];
const grid = document.querySelector('#dish-grid');
const tutorialDialog = document.querySelector('#tutorial-dialog');
const nextButton = document.querySelector('#next-button');
const backButton = document.querySelector('#back-button');
const loginForm = document.querySelector('#login-form');
const installHelp = document.querySelector('#install-help');
const installHelpText = document.querySelector('#install-help-text');
const installButtons = document.querySelectorAll('.install-app');
const backendConfig = window.HANHAN_BACKEND || {};
let deferredInstallPrompt = null;
let activeOrderNumber = '';
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

function getPhotoUrl(photo, width) {
  if (photo.src) return photo.src;
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(photo.file)}?width=${width}`;
}

function render() {
  const data = menuData[currentStep];
  document.querySelector('#step-label').textContent = `第 ${currentStep + 1} 步 · ${data.type}`;
  document.querySelector('#step-title').textContent = data.title;
  document.querySelector('#counter').textContent = `已选 ${currentStep} / 3`;
  grid.innerHTML = data.items.map(item => {
    const photo = dishPhotos[item];
    const selected = choices[currentStep] === item;
    const tutorialButton = tutorials[item]
      ? `<button class="tutorial-link" type="button" data-tutorial="${item}">查看制作教程</button>`
      : '';
    const photoCredit = photo.sourceUrl
      ? `<a href="${photo.sourceUrl}" target="_blank" rel="noopener noreferrer">图片：${photo.author}</a> · <a href="${photo.licenseUrl}" target="_blank" rel="noopener noreferrer">${photo.license}</a>`
      : `图片：${photo.author}`;
    return `<article class="dish-card ${selected ? 'selected' : ''}">
      <button class="dish-select" type="button" data-item="${item}" aria-pressed="${selected}">
        <img class="dish-photo" src="${getPhotoUrl(photo, 640)}" alt="${photo.caption || `${item}实物图`}" loading="lazy" />
        <span class="dish-name">${item}<span class="selection-mark" aria-hidden="true">✓</span></span>
      </button>
      <div class="dish-card-footer">
        ${tutorialButton}
        <span class="image-credit">${photoCredit}${photo.caption ? `<small>${photo.caption}</small>` : ''}</span>
      </div>
    </article>`;
  }).join('');
  grid.querySelectorAll('.dish-select').forEach(button => button.addEventListener('click', () => { choices[currentStep] = button.dataset.item; render(); }));
  grid.querySelectorAll('.tutorial-link').forEach(button => button.addEventListener('click', () => openTutorial(button.dataset.tutorial)));
  nextButton.disabled = !choices[currentStep];
  nextButton.textContent = currentStep === 2 ? '生成我的菜单' : '选择后继续';
  backButton.classList.toggle('hidden', currentStep === 0);
  document.querySelectorAll('.step').forEach((step, index) => { step.classList.toggle('active', index === currentStep); step.classList.toggle('done', index < currentStep); });
}

function openTutorial(item) {
  const photo = dishPhotos[item];
  const tutorial = tutorials[item];
  document.querySelector('#tutorial-title').textContent = `${item}制作教程`;
  document.querySelector('#tutorial-photo').src = getPhotoUrl(photo, 960);
  document.querySelector('#tutorial-photo').alt = photo.caption || `${item}实物图`;
  document.querySelector('#tutorial-copy').textContent = tutorial.summary;
  const stepsList = document.querySelector('#tutorial-steps');
  stepsList.replaceChildren(...tutorial.steps.map(step => {
    const listItem = document.createElement('li');
    listItem.textContent = step;
    return listItem;
  }));
  tutorialDialog.showModal();
}

document.querySelector('#close-tutorial').addEventListener('click', () => tutorialDialog.close());
tutorialDialog.addEventListener('click', event => {
  if (event.target === tutorialDialog) tutorialDialog.close();
});
nextButton.addEventListener('click', () => { if (currentStep < 2) { currentStep++; render(); } else showResult(); });
backButton.addEventListener('click', () => { if (currentStep > 0) { currentStep--; render(); } });
document.querySelector('#restart-button').addEventListener('click', restartOrder);
document.querySelector('#retry-order').addEventListener('click', () => sendOrder(activeOrderNumber));

function restartOrder() {
  choices.fill(null);
  currentStep = 0;
  activeOrderNumber = '';
  document.querySelector('#result-panel').classList.add('hidden');
  document.querySelector('#selection-panel').classList.remove('hidden');
  render();
}

function createOrderNumber() {
  const now = new Date();
  const datePart = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0'), String(now.getHours()).padStart(2, '0'), String(now.getMinutes()).padStart(2, '0')].join('');
  const randomPart = Math.random().toString(16).slice(2, 8).toUpperCase().padEnd(6, '0');
  return `HH-${datePart}-${randomPart}`;
}

function getOrderClient() {
  if (!backendConfig.supabaseUrl || !backendConfig.supabaseAnonKey || !window.supabase?.createClient) {
    throw new Error('后厨订单服务还没有完成连接。');
  }
  if (!window.hanhanOrderClient) {
    window.hanhanOrderClient = window.supabase.createClient(backendConfig.supabaseUrl, backendConfig.supabaseAnonKey, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
    });
  }
  return window.hanhanOrderClient;
}

function showResult() {
  document.querySelector('#selection-panel').classList.add('hidden');
  document.querySelector('#result-panel').classList.remove('hidden');
  document.querySelector('#menu-card').innerHTML = choices.map((choice, index) => `<div class="menu-row"><span class="menu-type">${menuData[index].type}</span><span class="menu-name">${choice}</span></div>`).join('');
  activeOrderNumber = createOrderNumber();
  document.querySelector('#order-number').textContent = `订单号：${activeOrderNumber}`;
  sendOrder(activeOrderNumber);
}

async function sendOrder(orderNumber) {
  const statusCopy = document.querySelector('#order-status-copy');
  const errorText = document.querySelector('#order-submit-error');
  const retryButton = document.querySelector('#retry-order');
  const orderNumberElement = document.querySelector('#order-number');
  retryButton.disabled = true;
  retryButton.classList.add('hidden');
  errorText.classList.add('hidden');
  orderNumberElement.classList.add('hidden');
  statusCopy.innerHTML = '正在把菜单送到后厨…<small>等小狗大厨确认一下～</small>';

  try {
    const client = getOrderClient();
    const { error } = await client.from('orders').insert({
      order_number: orderNumber,
      customer_name: '顾客',
      items: { main: choices[0], vegetable: choices[1], staple: choices[2] },
      status: 'new'
    });
    if (error && !(error.code === '23505' && error.message?.includes('orders_order_number_key'))) throw error;
    statusCopy.innerHTML = '您的小狗大厨已接单！<small>后厨已收到，正在摇着尾巴准备美味～</small>';
    orderNumberElement.classList.remove('hidden');
  } catch (error) {
    statusCopy.innerHTML = '菜单还没有送到后厨<small>请检查网络或稍后重新发送。</small>';
    errorText.textContent = error.message === '后厨订单服务还没有完成连接。'
      ? '后厨服务尚未设置完成，这次没有生成真实订单。'
      : '订单发送失败，请稍后重试。';
    errorText.classList.remove('hidden');
    orderNumberElement.classList.remove('hidden');
    retryButton.classList.remove('hidden');
  } finally {
    retryButton.disabled = false;
  }
}

render();

function openNav() {
    document.getElementById("menuContent").innerHTML = `
    <h1>Інструкція</h1>
    <p>Інструкція з використання програми для вивчення висловів</p>
  
    <p>На екрані відображається англійський вислів та його переклад.</p>
    <p>Щоб перейти до наступного вислову, натисніть стрілку вправо на клавіатурі або клікніть мишею.</p>
    <p>Читайте англійський вислів уголос, а потім його переклад.</p>
    <p>Намагайтеся згадати значення без підглядання.</p>
    <p>Повертайтеся до вивчених висловів через певний час, щоб закріпити знання.</p>

      <svg viewBox="0 0 1000 350">
    <symbol id="s-text">
      <text text-anchor="middle" x="47%" y="40%">tromp86</text>
    </symbol>

    <g class = "g-ants">
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
    </g>
  </svg>
  <span>version 1.1</span>
    `;
    document.getElementById("myNav").style.width = "100%";
  }

  // Функція для закриття меню
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

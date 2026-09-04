(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{name:`Rook`,role:`Warden`,color:`#e47b42`,initial:`R`,status:`online`},{name:`Moss`,role:`Architect`,color:`#8aaa76`,initial:`M`,status:`online`},{name:`Nyx`,role:`Redstone`,color:`#c56b67`,initial:`N`,status:`away`},{name:`Hearth`,role:`Scout`,color:`#d7ad6c`,initial:`H`,status:`online`}].map(e=>`
  <li class="member-row">
    <span class="avatar" style="--avatar-color: ${e.color}">${e.initial}</span>
    <span class="member-copy"><strong>${e.name}</strong><small>${e.role}</small></span>
    <span class="presence ${e.status}" aria-label="${e.status}"></span>
  </li>
`).join(``);document.querySelector(`#app`).innerHTML=`
  <header class="site-header">
    <a class="brand" href="#top" aria-label="SHADOW EMPIRE home"><span class="brand-mark">✦</span><span>SHADOW EMPIRE</span></a>
    <nav class="main-nav" aria-label="Main navigation">
      <a class="active" href="#top">Home</a><a href="#about">Our code</a><a href="#roster">Roster</a><a href="#join">Join us</a>
    </nav>
    <a class="discord-link" href="https://discord.gg/TM3eh5ZbqE" target="_blank" rel="noopener noreferrer">Discord <span aria-hidden="true">↗</span></a>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy reveal">
        <p class="eyebrow"><span class="eyebrow-line"></span> Survival / Java edition / est. 2021</p>
        <h1 id="hero-title">We build<br /><em>what lasts.</em></h1>
        <p class="hero-intro">SHADOW EMPIRE is a small, steady Minecraft clan for people who care about the world they leave behind.</p>
        <div class="hero-actions"><a class="button button-primary" href="#join">Find your place <span>→</span></a><a class="text-link" href="#about">See our code <span>↓</span></a></div>
      </div>
      <div class="hero-art" aria-label="A Minecraft-inspired illustrated valley with a watchtower" role="img">
        <div class="sun"></div><div class="mountain mountain-back"></div><div class="mountain mountain-front"></div><div class="pine pine-one"></div><div class="pine pine-two"></div><div class="pine pine-three"></div><div class="watchtower"><div class="tower-roof"></div><div class="tower-body"></div><div class="tower-light"></div></div><div class="terrain"></div>
        <p class="art-label">The northern frontier <span>01 / 03</span></p>
      </div>
    </section>

    <section class="signal-bar" aria-label="Clan statistics"><div><span class="stat-number">95</span><span>active members</span></div><div><span class="stat-number">18</span><span>builds shipped</span></div><div><span class="stat-number">04</span><span>years together</span></div><div class="signal-note"><span class="pulse"></span> Website online <a href="https://shadowempire-ai.github.io/index.html" target="_blank" rel="noopener noreferrer">shadowempire-ai.github.io</a></div></section>

    <section class="content-section" id="about">
      <div class="section-heading"><p class="eyebrow">01 — The foundation</p><h2>A better kind<br /><em>of multiplayer.</em></h2></div>
      <div class="about-copy"><p class="large-copy">We are here for the quiet magic: a lantern-lit path home, a farm that feeds everyone, and the moment a rough idea becomes a place worth returning to.</p><div class="principles"><div><span>01</span><strong>Leave it better</strong><p>Every build, biome, and base gets our full attention.</p></div><div><span>02</span><strong>Play with intent</strong><p>Bring curiosity, patience, and a little bit of nerve.</p></div></div></div>
    </section>

    <section class="roster-section" id="roster"><div class="roster-intro"><p class="eyebrow">02 — The watch</p><h2>People make<br /><em>the world.</em></h2><p>Our doors are open to makers, explorers, and good neighbors.</p><a class="text-link" href="#join">Meet the full roster <span>→</span></a></div><div class="roster-panel"><div class="panel-header"><span>Active now</span><span class="online-count">3 / 4 online</span></div><ul class="member-list">${e}</ul><div class="panel-footer">and 20 more around the fire <span>✦</span></div></div></section>

    <section class="join-section" id="join"><div><p class="eyebrow">03 — The invitation</p><h2>Bring your<br /><em>best block.</em></h2><p>Applications are open for our next season. Tell us what you make, and we’ll save you a seat.</p><a class="button button-primary" href="https://opnform.com/forms/shadow-form-xdhrwa" target="_blank" rel="noopener noreferrer">Apply to SHADOW EMPIRE <span>→</span></a></div><div class="join-stamp">SE<br /><span>✦</span><br />2026</div></section>
  </main>
  <footer class="site-footer"><a class="brand" href="#top"><span class="brand-mark">✦</span><span>SHADOW EMPIRE</span></a><span>Survival with standards.</span><span>© 2026 SHADOW EMPIRE</span></footer>
`;var t=document.querySelectorAll(`.main-nav a`);t.forEach(e=>e.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`)}));
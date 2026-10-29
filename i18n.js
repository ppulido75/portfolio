(function () {
  var D = {
    es: {
      title: 'Pau Pulido Cano · Desarrollador Full Stack',
      desc: 'Portfolio de Pau Pulido Cano, desarrollador Full Stack (PHP, JavaScript, SQL, Java, Kotlin). Experiencia en Neorg y Mitica Brands.',
      skip: 'Saltar al contenido', home: 'Inicio',
      nav_exp: 'Experiencia', nav_proj: 'Proyectos', nav_stack: 'Stack', nav_edu: 'Formación', nav_contact: 'Contacto',
      photo_alt: 'Retrato de Pau Pulido Cano',
      tag: 'Disponible para nuevas oportunidades',
      role: 'Desarrollador <b>Full Stack</b>',
      lead: 'Construyo aplicaciones web con PHP, JavaScript y SQL. Trabajo en Neorg y soy técnico superior en DAW y DAM (Full Stack). Actualmente curso la especialización en IA y Big Data.',
      cv: 'Descargar CV <span aria-hidden="true">↓</span>',
      see_projects: 'Ver proyectos <span aria-hidden="true">→</span>',
      more: 'Para más',
      f_companies: 'empresas', f_langs: 'lenguajes y formatos de datos', f_english: 'inglés Cambridge', f_degrees: 'ciclos formativos',
      go_exp: 'Ir a experiencia',
      exp_num: '01 / Experiencia', exp_h2: 'Dónde he trabajado',
      neorg_aria: 'Neorg, abrir su web (se abre en otra pestaña)',
      neorg_date: 'Nov 2025 — Actualidad', neorg_sub: 'Desarrollador Full Stack',
      neorg_1: 'Front-end con HTML, CSS y JavaScript', neorg_2: 'Back-end con PHP y consultas SQL', neorg_3: 'Claude, Gemini Gems y GitHub en el día a día',
      mitica_aria: 'Mitica Brands, abrir su web (se abre en otra pestaña)',
      mitica_date: 'Sep 2023 — Jul 2024', mitica_sub: 'Desarrollador de aplicaciones web',
      mitica_1: 'PHP, HTML, TypeScript y SQL sobre Symfony', mitica_2: 'Consultas y gestión de bases de datos', mitica_3: 'Gestión y mantenimiento web',
      proj_num: '02 / Proyectos', proj_h2: 'Trabajo seleccionado', soon: 'Próximamente',
      p1: 'Barbería', p2: 'HTML básico', p3: 'Proyecto con React',
      stack_num: '03 / Stack', stack_h2: 'Con qué trabajo',
      g_web: 'Web', g_data: 'Datos', g_other: 'Otros lenguajes', g_tools: 'Herramientas',
      edu_num: '04 / Formación', edu_h2: 'Cómo he llegado hasta aquí',
      e0_t: 'En curso', e0_h: 'Especialización en IA y Big Data',
      e1_h: 'DAW · Desarrollo de Aplicaciones Web', done: 'Finalizado',
      e2_h: 'DAM · Desarrollo de Aplicaciones Multiplataforma',
      e3_h: 'SMX · Sistemas Microinformáticos y Redes',
      langs: '<b>Idiomas</b> Castellano y catalán, nativo · Inglés, Cambridge B2 First (2022)',
      con_num: '05 / Contacto', con_h2: 'Hablemos.',
      meta: 'Santa Coloma de Farners, Girona · Vehículo propio'
    },
    ca: {
      title: 'Pau Pulido Cano · Desenvolupador Full Stack',
      desc: 'Portfolio de Pau Pulido Cano, desenvolupador Full Stack (PHP, JavaScript, SQL, Java, Kotlin). Experiència a Neorg i Mitica Brands.',
      skip: 'Salta al contingut', home: 'Inici',
      nav_exp: 'Experiència', nav_proj: 'Projectes', nav_stack: 'Stack', nav_edu: 'Formació', nav_contact: 'Contacte',
      photo_alt: 'Retrat de Pau Pulido Cano',
      tag: 'Disponible per a noves oportunitats',
      role: 'Desenvolupador <b>Full Stack</b>',
      lead: 'Construeixo aplicacions web amb PHP, JavaScript i SQL. Treballo a Neorg i sóc tècnic superior en DAW i DAM (Full Stack). Actualment curso l\'especialització en IA i Big Data.',
      cv: 'Descarrega el CV <span aria-hidden="true">↓</span>',
      see_projects: 'Veure projectes <span aria-hidden="true">→</span>',
      more: 'Per a més',
      f_companies: 'empreses', f_langs: 'llenguatges i formats de dades', f_english: 'anglès Cambridge', f_degrees: 'cicles formatius',
      go_exp: 'Anar a experiència',
      exp_num: '01 / Experiència', exp_h2: 'On he treballat',
      neorg_aria: 'Neorg, obrir la seva web (s\'obre en una altra pestanya)',
      neorg_date: 'Nov 2025 — Actualitat', neorg_sub: 'Desenvolupador Full Stack',
      neorg_1: 'Front-end amb HTML, CSS i JavaScript', neorg_2: 'Back-end amb PHP i consultes SQL', neorg_3: 'Claude, Gemini Gems i GitHub en el dia a dia',
      mitica_aria: 'Mitica Brands, obrir la seva web (s\'obre en una altra pestanya)',
      mitica_date: 'Set 2023 — Jul 2024', mitica_sub: 'Desenvolupador d\'aplicacions web',
      mitica_1: 'PHP, HTML, TypeScript i SQL sobre Symfony', mitica_2: 'Consultes i gestió de bases de dades', mitica_3: 'Gestió i manteniment web',
      proj_num: '02 / Projectes', proj_h2: 'Treball seleccionat', soon: 'Pròximament',
      p1: 'Barberia', p2: 'HTML bàsic', p3: 'Projecte amb React',
      stack_num: '03 / Stack', stack_h2: 'Amb què treballo',
      g_web: 'Web', g_data: 'Dades', g_other: 'Altres llenguatges', g_tools: 'Eines',
      edu_num: '04 / Formació', edu_h2: 'Com hi he arribat',
      e0_t: 'En curs', e0_h: 'Especialització en IA i Big Data',
      e1_h: 'DAW · Desenvolupament d\'Aplicacions Web', done: 'Finalitzat',
      e2_h: 'DAM · Desenvolupament d\'Aplicacions Multiplataforma',
      e3_h: 'SMX · Sistemes Microinformàtics i Xarxes',
      langs: '<b>Idiomes</b> Castellà i català, natiu · Anglès, Cambridge B2 First (2022)',
      con_num: '05 / Contacte', con_h2: 'Parlem.',
      meta: 'Santa Coloma de Farners, Girona · Vehicle propi'
    },
    en: {
      title: 'Pau Pulido Cano · Full Stack Developer',
      desc: 'Portfolio of Pau Pulido Cano, Full Stack developer (PHP, JavaScript, SQL, Java, Kotlin). Experience at Neorg and Mitica Brands.',
      skip: 'Skip to content', home: 'Home',
      nav_exp: 'Experience', nav_proj: 'Projects', nav_stack: 'Stack', nav_edu: 'Education', nav_contact: 'Contact',
      photo_alt: 'Portrait of Pau Pulido Cano',
      tag: 'Open to new opportunities',
      role: '<b>Full Stack</b> Developer',
      lead: 'I build web applications with PHP, JavaScript and SQL. I work at Neorg and hold higher vocational degrees in DAW and DAM (Full Stack). I am currently taking the specialization course in AI and Big Data.',
      cv: 'Download CV <span aria-hidden="true">↓</span>',
      see_projects: 'View projects <span aria-hidden="true">→</span>',
      more: 'Learn more',
      f_companies: 'companies', f_langs: 'languages and data formats', f_english: 'Cambridge English', f_degrees: 'vocational degrees',
      go_exp: 'Go to experience',
      exp_num: '01 / Experience', exp_h2: 'Where I\'ve worked',
      neorg_aria: 'Neorg, open their website (opens in a new tab)',
      neorg_date: 'Nov 2025 — Present', neorg_sub: 'Full Stack Developer',
      neorg_1: 'Front-end with HTML, CSS and JavaScript', neorg_2: 'Back-end with PHP and SQL queries', neorg_3: 'Claude, Gemini Gems and GitHub day to day',
      mitica_aria: 'Mitica Brands, open their website (opens in a new tab)',
      mitica_date: 'Sep 2023 — Jul 2024', mitica_sub: 'Web application developer',
      mitica_1: 'PHP, HTML, TypeScript and SQL on Symfony', mitica_2: 'Database queries and management', mitica_3: 'Web management and maintenance',
      proj_num: '02 / Projects', proj_h2: 'Selected work', soon: 'Coming soon',
      p1: 'Barbershop', p2: 'Basic HTML', p3: 'React project',
      stack_num: '03 / Stack', stack_h2: 'What I work with',
      g_web: 'Web', g_data: 'Data', g_other: 'Other languages', g_tools: 'Tools',
      edu_num: '04 / Education', edu_h2: 'How I got here',
      e0_t: 'In progress', e0_h: 'Specialization in AI and Big Data',
      e1_h: 'DAW · Web Application Development', done: 'Completed',
      e2_h: 'DAM · Cross-platform Application Development',
      e3_h: 'SMX · Microcomputer Systems and Networks',
      langs: '<b>Languages</b> Spanish and Catalan, native · English, Cambridge B2 First (2022)',
      con_num: '05 / Contact', con_h2: 'Let\'s talk.',
      meta: 'Santa Coloma de Farners, Girona · Own vehicle'
    }
  };

  var KEY = 'lang';
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }

  function apply(lang) {
    var t = D[lang] || D.es;
    document.documentElement.lang = lang;
    document.title = t.title;
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', t.desc);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-aria')];
      if (v !== undefined) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-alt')];
      if (v !== undefined) el.setAttribute('alt', v);
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      var l = b.getAttribute('data-lang');
      save(l);
      apply(l);
    });
  });

  var q = new URLSearchParams(location.search).get('lang');
  var start = D[q] ? q : (D[stored()] ? stored() : 'es');
  if (start !== 'es') apply(start);
})();

// ===== i18n ENGINE — inline translations (no fetch needed) =====

const TRANSLATIONS = {
  fr: {
    nav: { about:"À propos", platforms:"Plateformes", impact:"Réalisations", team:"Équipe", contact:"Nous contacter" },
    hero: { title:"L'éducation de qualité,", highlight:"accessible à tous.", subtitle:"Des milliers de ressources pédagogiques, des quiz intelligents et un assistant IA, pour chaque élève camerounais.", play_store:"Play Store", app_store:"App Store", contact_us:"Nous contacter", see_demo:"Voir la démo", stat_students:"étudiants", stat_resources:"ressources", stat_free:"Gratuit à 100%" },
    about: { tag:"Notre histoire", title:"Né d'une expérience personnelle,\nconstruit pour une génération.", text:"VALIDE est une startup EdTech camerounaise fondée en 2022 par Frank Tchatseu. Ancien élève du Lycée Bilingue de Koutaba, il a vécu de près le manque de ressources pédagogiques. Aujourd'hui, il a décidé que plus aucun jeune ne ratera ses rêves par manque de matériel.", mission_title:"Mission", mission_text:"Rendre l'éducation de qualité accessible à chaque élève camerounais, en ville comme en zone reculée.", vision_title:"Vision", vision_text:"Construire une génération compétente, capable de transformer le Cameroun et l'Afrique.", quote:"\"Aucun élève ne doit échapper à ses rêves par manque de ressources.\"", quote_author:"— Frank Tchatseu, Fondateur & CEO", founder_role:"Fondateur & CEO · Master 2 IA · UYI" },
    problem: { tag:"Le contexte", title:"L'éducation au Cameroun\nfait face à des défis réels.", stat1:"Taux de réussite au Baccalauréat en 2024 (session normale)", stat2:"Taux de réussite en session de rattrapage", stat3:"Établissements sans professeurs de maths dans l'Extrême-Nord", stat4:"Enseignants ayant abandonné leur poste (MINSEC / INS)", tag1:"📚 Ressources inaccessibles", tag2:"💸 Répétitions trop coûteuses", tag3:"📡 Zones sans encadrement" },
    platforms: { tag:"L'écosystème VALIDE", title:"Deux plateformes,\nun seul objectif.", app_badge:"Application Mobile", app_target:"Pour les étudiants universitaires — Yaoundé 1 & 2", app_feat1:"Anciens sujets d'examens classés par matière", app_feat2:"Assistant IA pédagogique 24h/24", app_feat3:"Quiz intelligents personnalisés", app_feat4:"Mode hors connexion", short_label1:"📱 VALIDE — Application mobile", web_badge:"Application Mobile", web_target:"Pour les élèves du secondaire — Lycées & Collèges", web_feat1:"Sujets officiels : Bac, Probatoire, GCE, BPC", web_feat2:"Cours et sujets de séquences par matière", web_feat3:"Quiz d'auto-évaluation + corrections", web_feat4:"Assistant IA disponible à tout moment", web_cta:"Accéder à VALIDE School →", short_label2:"🌐 VALIDE School — Plateforme web" },
    features: { tag:"Fonctionnalités", title:"Tout ce dont tu as besoin\npour réussir.", feat1_title:"Ressources pédagogiques", feat1_text:"Sujets officiels, corrections et cours — organisés par matière et niveau.", feat2_title:"Assistant IA", feat2_text:"Un enseignant disponible 24h/24. Il ne donne pas la réponse — il enseigne.", feat3_title:"Quiz intelligents", feat3_text:"Générés selon tes difficultés. Corrections détaillées après chaque session.", feat4_title:"Mode hors connexion", feat4_text:"Toutes les ressources accessibles sans internet. Conçu pour les zones reculées." },
    stats: { label1:"étudiants touchés", label2:"écoles partenaires", label3:"étudiants ayant réussi" },
    how: { tag:"Comment ça marche", title:"En 4 étapes simples.", subtitle:"De l'inscription à la réussite — tout est pensé pour toi.", step1_title:"Télécharge ou accède", step1_text:"Play Store / App Store pour l'université · valide-school.com pour le secondaire", step2_title:"Inscris-toi", step2_text:"Précise ta classe, ton niveau et tes matières difficiles", step3_title:"Accède à tes ressources", step3_text:"Sujets, corrections, cours — organisés et accessibles en un clic", step4_title:"Évalue-toi et progresse", step4_text:"Quiz intelligents + corrections + assistant IA à tout moment" },
    impact: { tag:"Réalisations", title:"VALIDE sur le terrain.", subtitle:"Des preuves concrètes, pas des promesses.", crtv_badge:"📺 Vu sur la CRTV — Chaîne Nationale", crtv_title:"VALIDE à la télévision nationale", crtv_text:"VALIDE a été présenté dans un reportage de la CRTV, avec des témoignages d'étudiants utilisant la plateforme au quotidien.", crtv_cta:"Voir le reportage ↗", terrain_title:"Nous allons à la rencontre de nos utilisateurs", filter_all:"Tout", filter_uni:"Université", filter_sec:"Secondaire", filter_part:"Partenaires", filter_form:"Formation", partners_title:"Partenariats stratégiques" },
    partners: { tag:"Partenaires", title:"Partenariats stratégiques" },
    testimonials: { tag:"Témoignages", title:"Ils ont réussi avec VALIDE.", t1:"\"Grâce à VALIDE, j'ai eu mon Bac du premier coup sans dépenser un franc.\"", t1_author:"Aïcha", t1_role:"Terminale D · Yaoundé", t2:"\"L'IA m'explique mieux que certains profs. Je comprends vraiment maintenant.\"", t2_author:"Kevin", t2_role:"Licence 2 · UY1", t3:"\"Je suis en zone rurale, je n'avais accès à rien. VALIDE a tout changé.\"", t3_author:"Mariama", t3_role:"Terminale C · Extrême-Nord", t4:"\"Les quiz personnalisés m'ont aidé à cibler mes points faibles avant le Probatoire.\"", t4_author:"Patrick", t4_role:"Terminale A · Douala", t5:"\"Le mode hors connexion est une révolution pour nous en zone reculée.\"", t5_author:"Fatima", t5_role:"3ème · Maroua", t6:"\"J'ai trouvé tous les anciens sujets de l'UY2 classés par matière. Incroyable.\"", t6_author:"Jean-Marc", t6_role:"Licence 1 · UY2" },
    team: { tag:"Notre équipe", title:"Les visages derrière VALIDE.", subtitle:"Une équipe de jeunes passionnés, engagés pour transformer l'éducation au Cameroun.", role_frank:"Fondateur & CEO", role_ingrid:"CTO · Ingénieure Full Stack", role_kevin:"Lead Développeur Mobile", role_aicha:"Responsable Contenu Pédagogique", role_boris:"Ingénieur IA & Data", role_sandra:"UI/UX Designer", role_paul:"Marketing & Croissance", role_cedric:"Backend & DevOps" },
    faq: { tag:"FAQ", title:"Questions fréquentes", q1:"L'application VALIDE est-elle gratuite ?", a1:"Oui, VALIDE est 100% gratuite. Toutes les ressources, quiz et l'assistant IA sont accessibles sans frais pour chaque étudiant.", q2:"L'app fonctionne-t-elle sans connexion Internet ?", a2:"Oui. VALIDE dispose d'un mode hors connexion qui permet d'accéder aux ressources téléchargées sans internet — idéal pour les zones reculées.", q3:"Quelles universités sont couvertes par VALIDE ?", a3:"VALIDE couvre actuellement l'Université de Yaoundé I et II, avec une expansion progressive vers d'autres universités camerounaises.", q4:"Comment l'IA personnalise-t-elle les quiz ?", a4:"L'IA analyse tes résultats et tes erreurs pour générer des quiz ciblés sur tes points faibles, avec des corrections détaillées après chaque session.", q5:"VALIDE School est-il différent de l'app VALIDE ?", a5:"Oui. L'app VALIDE cible les étudiants universitaires (UY1 & UY2), tandis que VALIDE School est une plateforme web dédiée aux élèves du secondaire (lycées et collèges)." },
    cta: { title:"Rejoins les 25 000+ étudiants\nqui réussissent avec VALIDE.", subtitle:"Gratuit. Simple. Accessible partout au Cameroun.", btn_app:"Nous contacter", btn_web:"Essayer la version web →" },
    footer: { tagline:"L'éducation de qualité,\naccessible à tous au Cameroun.", nav_title:"Navigation", nav_home:"Accueil", nav_about:"À propos", nav_platforms:"Plateformes", nav_impact:"Réalisations", nav_team:"Équipe", platforms_title:"Plateformes", contact_title:"Contact", copyright:"© 2025 VALIDE — Tous droits réservés", legal:"Mentions légales", privacy:"Confidentialité" }
  },
  en: {
    nav: { about:"About", platforms:"Platforms", impact:"Achievements", team:"Team", contact:"Contact us" },
    hero: { title:"Quality education,", highlight:"accessible to all.", subtitle:"Thousands of learning resources, smart quizzes and an AI assistant — free of charge, for every Cameroonian student.", play_store:"Play Store", app_store:"App Store", contact_us:"Contact us", see_demo:"See demo", stat_students:"students", stat_resources:"resources", stat_free:"100% Free" },
    about: { tag:"Our story", title:"Born from personal experience,\nbuilt for a generation.", text:"VALIDE is a Cameroonian EdTech startup founded in 2022 by Frank Tchatseu. A former student of the Bilingual High School of Koutaba, he experienced firsthand the lack of educational resources. Today, he has decided that no young person will miss their dreams due to a lack of materials.", mission_title:"Mission", mission_text:"Make quality education accessible to every Cameroonian student, in cities and remote areas alike.", vision_title:"Vision", vision_text:"Build a competent generation capable of transforming Cameroon and Africa.", quote:"\"No student should miss their dreams due to a lack of resources.\"", quote_author:"— Frank Tchatseu, Founder & CEO", founder_role:"Founder & CEO · Master 2 AI · UYI" },
    problem: { tag:"Context", title:"Education in Cameroon\nfaces real challenges.", stat1:"Baccalaureate pass rate in 2024 (regular session)", stat2:"Pass rate in the resit session", stat3:"Schools without math teachers in the Far North", stat4:"Teachers who abandoned their post (MINSEC / INS)", tag1:"📚 Inaccessible resources", tag2:"💸 Too costly tutoring", tag3:"📡 Areas without supervision" },
    platforms: { tag:"The VALIDE ecosystem", title:"Two platforms,\none single goal.", app_badge:"Mobile App", app_target:"For university students — Yaoundé 1 & 2", app_feat1:"Past exam papers sorted by subject", app_feat2:"24/7 AI teaching assistant", app_feat3:"Personalised smart quizzes", app_feat4:"Offline mode", short_label1:"📱 VALIDE — Mobile app", web_badge:"Mobile App", web_target:"For secondary school students — High schools & Colleges", web_feat1:"Official papers: Bac, Probatoire, GCE, BPC", web_feat2:"Courses and sequence papers by subject", web_feat3:"Self-assessment quizzes + corrections", web_feat4:"AI assistant available at any time", web_cta:"Access VALIDE School →", short_label2:"🌐 VALIDE School — Web platform" },
    features: { tag:"Features", title:"Everything you need\nto succeed.", feat1_title:"Learning resources", feat1_text:"Official papers, corrections and courses — organised by subject and level.", feat2_title:"AI Assistant", feat2_text:"A teacher available 24/7. It doesn't give the answer — it teaches.", feat3_title:"Smart quizzes", feat3_text:"Generated based on your weaknesses. Detailed corrections after each session.", feat4_title:"Offline mode", feat4_text:"All resources accessible without internet. Designed for remote areas." },
    stats: { label1:"students reached", label2:"partner schools", label3:"students who succeeded" },
    how: { tag:"How it works", title:"In 4 simple steps.", subtitle:"From sign-up to success — everything is designed for you.", step1_title:"Download or access", step1_text:"Play Store / App Store for university · valide-school.com for secondary school", step2_title:"Sign up", step2_text:"Specify your class, level and difficult subjects", step3_title:"Access your resources", step3_text:"Papers, corrections, courses — organised and accessible in one click", step4_title:"Assess yourself and progress", step4_text:"Smart quizzes + corrections + AI assistant at any time" },
    impact: { tag:"Achievements", title:"VALIDE in the field.", subtitle:"Concrete proof, not promises.", crtv_badge:"📺 Seen on CRTV — National Channel", crtv_title:"VALIDE on national television", crtv_text:"VALIDE was featured in a CRTV report, with testimonials from students using the platform daily.", crtv_cta:"Watch the report ↗", terrain_title:"We go out to meet our users", filter_all:"All", filter_uni:"University", filter_sec:"Secondary", filter_part:"Partners", filter_form:"Training", partners_title:"Strategic partnerships" },
    partners: { tag:"Partners", title:"Strategic partnerships" },
    testimonials: { tag:"Testimonials", title:"They succeeded with VALIDE.", t1:"\"Thanks to VALIDE, I passed my Bac on the first try without spending a penny.\"", t1_author:"Aïcha", t1_role:"Year 13 D · Yaoundé", t2:"\"The AI explains things better than some teachers. I really understand now.\"", t2_author:"Kevin", t2_role:"Year 2 · UY1", t3:"\"I'm in a rural area, I had access to nothing. VALIDE changed everything.\"", t3_author:"Mariama", t3_role:"Year 13 C · Far North", t4:"\"The personalised quizzes helped me target my weak points before the Probatoire.\"", t4_author:"Patrick", t4_role:"Year 13 A · Douala", t5:"\"Offline mode is a revolution for us in remote areas.\"", t5_author:"Fatima", t5_role:"Year 9 · Maroua", t6:"\"I found all the old UY2 papers sorted by subject. Incredible.\"", t6_author:"Jean-Marc", t6_role:"Year 1 · UY2" },
    team: { tag:"Our team", title:"The faces behind VALIDE.", subtitle:"A team of passionate young people committed to transforming education in Cameroon.", role_frank:"Founder & CEO", role_ingrid:"CTO · Full Stack Engineer", role_kevin:"Lead Mobile Developer", role_aicha:"Head of Educational Content", role_boris:"AI & Data Engineer", role_sandra:"UI/UX Designer", role_paul:"Marketing & Growth", role_cedric:"Backend & DevOps" },
    faq: { tag:"FAQ", title:"Frequently asked questions", q1:"Is the VALIDE app free?", a1:"Yes, VALIDE is 100% free. All resources, quizzes and the AI assistant are accessible at no cost to every student.", q2:"Does the app work without an internet connection?", a2:"Yes. VALIDE has an offline mode that allows access to downloaded resources without internet — ideal for remote areas.", q3:"Which universities are covered by VALIDE?", a3:"VALIDE currently covers the University of Yaoundé I and II, with a progressive expansion to other Cameroonian universities.", q4:"How does the AI personalise quizzes?", a4:"The AI analyses your results and mistakes to generate quizzes targeted at your weak points, with detailed corrections after each session.", q5:"Is VALIDE School different from the VALIDE app?", a5:"Yes. The VALIDE app targets university students (UY1 & UY2), while VALIDE School is a web platform dedicated to secondary school students." },
    cta: { title:"Join 25,000+ students\nwho succeed with VALIDE.", subtitle:"Free. Simple. Accessible everywhere in Cameroon.", btn_app:"Contact us", btn_web:"Try the web version →" },
    footer: { tagline:"Quality education,\naccessible to all in Cameroon.", nav_title:"Navigation", nav_home:"Home", nav_about:"About", nav_platforms:"Platforms", nav_impact:"Achievements", nav_team:"Team", platforms_title:"Platforms", contact_title:"Contact", copyright:"© 2025 VALIDE — All rights reserved", legal:"Legal notice", privacy:"Privacy" }
  }
};

let currentLang = localStorage.getItem('lang') || 'fr';

function t(key) {
  const keys = key.split('.');
  let val = TRANSLATIONS[currentLang];
  for (const k of keys) {
    val = val?.[k];
    if (val === undefined) return key;
  }
  return val;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text !== undefined) el.innerHTML = text.replace(/\n/g, '<br>');
  });
  const flag  = document.getElementById('langFlag');
  const label = document.getElementById('langLabel');
  if (flag)  flag.textContent  = currentLang === 'fr' ? '🇫🇷' : '🇬🇧';
  if (label) label.textContent = currentLang === 'fr' ? 'FR' : 'EN';

  document.documentElement.lang = currentLang;
  document.title = currentLang === 'fr'
    ? "VALIDE — L'éducation de qualité pour tous au Cameroun"
    : "VALIDE — Quality education for all in Cameroon";
}

function switchLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('lang', currentLang);
  applyTranslations();
}

document.addEventListener('DOMContentLoaded', () => {
  // Vider le contenu statique des éléments traduisibles pour éviter le doublon
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = ''; });

  applyTranslations();
  const btn = document.getElementById('langToggle');
  if (btn) btn.addEventListener('click', switchLang);
});

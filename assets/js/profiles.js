/* ───────────────────────────────────────────────────────────────
   Annuaire Cadence — SOURCE DE VÉRITÉ unique des profils.
   Partagé par index.html (générateur de carte) et annuaire.html (index).
   ⚠️ À TERME : ce fichier sera remplacé par une lecture de la base
   (Supabase) une fois l'authentification AXION branchée. Garder la même
   forme d'objets pour une migration sans douleur.
   ─────────────────────────────────────────────────────────────── */

// Infos communes à toute l'agence (héritées par chaque carte).
var AGENCY = {
  company: 'Cadence Architectes Associés',
  address: '16-18 rue Dubrunfaut, 75012 Paris',
  website: 'cadence-architectes.fr',
  phoneFixe: '01 42 72 23 36'
};

// group : 'associes' | 'salaries'. Photo locale = assets/photos/<id>.jpg
var PROFILES = [
  // ── ASSOCIÉS ──
  {id:'d-clarisse', group:'associes', name:'Didier CLARISSE',
   title:'Architecte fondateur · Co-gérant', bio:"Architecte DESA · Inscrit à l'Ordre des Architectes",
   mobile:'', email:'d.clarisse@cadence-architectes.fr'},
  {id:'f-clarisse', group:'associes', name:'Florian CLARISSE',
   title:"Maître d'œuvre · Co-gérant", bio:'Pilotage des opérations résidentielles',
   mobile:'06 69 14 34 18', email:'f.clarisse@cadence-architectes.fr'},
  {id:'p-depreux', group:'associes', name:'Pierre DEPREUX',
   title:"Maître d'œuvre · Associé", bio:'Architecte DESLT',
   mobile:'', email:'p.depreux@cadence-architectes.fr'},
  {id:'j-jaegle', group:'associes', name:'Justin JAÉGLÉ',
   title:'Économiste · Associé', bio:'Économiste de la construction · Licence MOE architecturale & technique',
   mobile:'', email:'j.jaegle@cadence-architectes.fr'},
  {id:'f-meret', group:'associes', name:'Fanny MERET',
   title:'Architecte · Associée', bio:"Architecte DE HMONP · Inscrite à l'Ordre · Diplômée Business Management Paris-Dauphine",
   mobile:'', email:'f.meret@cadence-architectes.fr'},

  // ── ÉQUIPE ──
  {id:'s-rigault', group:'salaries', name:'Sylvie RIGAULT',
   title:"Collaboratrice d'architecte", mobile:'', email:'s.rigault@cadence-architectes.fr'},
  {id:'s-choi', group:'salaries', name:'SeungSig CHOI',
   title:"Collaborateur d'architecte", mobile:'', email:'s.choi@cadence-architectes.fr'},
  {id:'c-rolland', group:'salaries', name:'Cécile ROLLAND',
   title:'Cheffe de projet · Architecte DPLG', mobile:'', email:'c.rolland@cadence-architectes.fr'},
  {id:'d-deolim', group:'salaries', name:'Donny DE OLIM',
   title:"Collaborateur d'architecte · Designer 3D", mobile:'', email:'agence@cadence-architectes.fr'},
  {id:'r-belabbassi', group:'salaries', name:'Rachida BELABBASSI',
   title:'Responsable administrative & financière', mobile:'', email:'r.belabbassi@cadence-architectes.fr'},
  {id:'o-penarettebello', group:'salaries', name:'Oscar PENARETTE BELLO',
   title:'Alternant MOE exécution · Architecte DE', mobile:'', email:'o.penarette@cadence-architectes.fr'},
  {id:'l-carpentier', group:'salaries', name:'Laura CARPENTIER',
   title:'Alternante en architecture', mobile:'', email:'agence@cadence-architectes.fr'},
  {id:'m-fitouri', group:'salaries', name:'Marouane FITOURI',
   title:"Collaborateur d'architecte", mobile:'', email:'m.fitouri@cadence-architectes.fr'},
  {id:'c-havet', group:'salaries', name:'Camille HAVET',
   title:'Alternante en économie de la construction', mobile:'', email:'c.havet@cadence-architectes.fr'},
  {id:'n-benabdallah', group:'salaries', name:'Norchene BEN ABDALLAH',
   title:"Collaboratrice d'architecte", mobile:'', email:'agence@cadence-architectes.fr'}
];

var GROUP_LABELS = {associes:'Associés', salaries:'Salariés'};

// Construit l'état d'une carte à partir d'un profil (hérite des infos agence).
function profileToState(p){
  return {
    name:p.name||'', title:p.title||'', company:p.company||AGENCY.company, bio:p.bio||'',
    phone:p.mobile||'', phone2:(p.phoneFixe!==undefined?p.phoneFixe:AGENCY.phoneFixe)||'',
    email:p.email||'', website:p.website||AGENCY.website||'',
    address:p.address||AGENCY.address||'',
    photo:(p.photo!==undefined?p.photo:'assets/photos/'+p.id+'.jpg'), theme:8,
    links:Array.isArray(p.links)?p.links.map(function(l){return Object.assign({},l);}):[]
  };
}

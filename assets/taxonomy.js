"use strict";
const taxonomyData = {
  "root": {
    "title": "Four Questions about Intelligence",
    "description": "Four questions organize the survey: what intelligence is, how to measure it, whether machines can possess it, and how to build it.",
    "show": "ontology",
    "links": [
      [
        "I. Ontology",
        "#ontology"
      ],
      [
        "II. Measure",
        "#measure"
      ],
      [
        "III. Human-Machine Gap",
        "#human-machine-gap"
      ],
      [
        "IV. Implementation",
        "#implementation"
      ]
    ],
    "papers": []
  },
  "ontology": {
    "title": "Question I: Ontology",
    "description": "Six accounts of what intelligence consists of, from predictive processing and causal reasoning to structured representations and latent abilities.",
    "show": "ontology",
    "links": [
      [
        "Ontology",
        "#ontology"
      ],
      [
        "Predictive processing",
        "#predictive-processing"
      ],
      [
        "Causality",
        "#causal"
      ]
    ],
    "papers": []
  },
  "measure": {
    "title": "Question II: Measure",
    "description": "Imitation tests, formal measures, psychometrics, and benchmarks each make different choices about evidence and the abilities it supports.",
    "show": "measure",
    "links": [
      [
        "Measure",
        "#measure"
      ],
      [
        "Validity considerations",
        "#validity-considerations"
      ]
    ],
    "papers": []
  },
  "human-machine-gap": {
    "title": "Question III: Human-Machine Gap",
    "description": "Searle asks whether symbol manipulation can produce understanding. Dreyfus asks what depends on embodied experience. The objections make different demands on empirical evidence.",
    "show": "human-machine-gap",
    "links": [
      [
        "Human-Machine Gap",
        "#human-machine-gap"
      ],
      [
        "What could change the claim?",
        "#possibility-evidence"
      ]
    ],
    "papers": []
  },
  "implementation": {
    "title": "Question IV: Implementation",
    "description": "Five groups of methods cover optimization, compositional and symbolic learning, world models, causal learning, and hybrid mechanisms. Brooks’s anti-representational robotics is discussed alongside them.",
    "show": "implementation",
    "links": [
      [
        "Implementation",
        "#implementation"
      ],
      [
        "Cross-program mechanisms",
        "#cross-program"
      ]
    ],
    "papers": []
  },
  "ontology-predictive": {
    "title": "Predictive Processing",
    "show": "ontology",
    "color": "pred",
    "target": "predictive-processing",
    "description": "Friston develops the free-energy principle and active inference; Clark develops predictive-processing accounts of cognition. Hawkins’s Thousand Brains theory is a related alternative based on parallel sensorimotor models and reference frames.",
    "papers": [
      "Friston and Clark: free energy and predictive processing",
      "Hawkins: Thousand Brains",
      "Challenges: mathematical assumptions and empirical falsifiability"
    ],
    "holders": [
      [
        "friston",
        "Free-energy principle"
      ],
      [
        "clark",
        "Predictive processing"
      ],
      [
        "hawkins",
        "Thousand Brains (parallel models)"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#predictive-processing"
      ]
    ]
  },
  "ontology-causal": {
    "title": "Causality",
    "show": "ontology",
    "color": "causal",
    "target": "causal",
    "description": "Pearl distinguishes observation, intervention, and counterfactuals. Higher causal levels require assumptions beyond correlations; transfer tests examine whether models apply those assumptions consistently.",
    "papers": [
      "Pearl: structural causal models and the causal hierarchy",
      "CLadder: questions across three causal levels",
      "Challenges: renamed variables, unfamiliar graphs, and causal fallacies"
    ],
    "holders": [
      [
        "pearl",
        "Interventions and counterfactuals"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#causal"
      ]
    ]
  },
  "ontology-symbolic": {
    "title": "Symbolic and Nativist",
    "show": "ontology",
    "color": "sym",
    "target": "symbolic-nativist",
    "description": "Symbolic accounts require structured representations. Nativist accounts also posit constraints before learning. Child-scale language models test some of these claims about prior structure.",
    "papers": [
      "Newell and Simon: physical symbol systems",
      "Fodor and Pylyshyn: systematic representations",
      "Chomsky and Marcus: prior structure and constraints"
    ],
    "holders": [
      [
        "newell",
        "Physical symbol systems"
      ],
      [
        "simon",
        "Physical symbol systems"
      ],
      [
        "fodor",
        "Language of thought"
      ],
      [
        "chomsky",
        "Innate constraints on language learning"
      ],
      [
        "marcus",
        "Structured representations"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#symbolic-nativist"
      ]
    ]
  },
  "ontology-compositional": {
    "title": "Compositionality and Analogy",
    "show": "ontology",
    "color": "comp",
    "target": "compositional-analogical",
    "description": "Fodor and Pylyshyn argue for combinatorial representations; Gentner and Hofstadter emphasize analogical relations. Lake studies compositional learning, including neural meta-learning with Baroni. These approaches address shared abilities through different mechanisms.",
    "papers": [
      "Fodor and Pylyshyn: systematicity and productivity",
      "Hofstadter and Gentner: relational mapping",
      "Lake: learned compositional generalization"
    ],
    "holders": [
      [
        "fodor",
        "Systematicity"
      ],
      [
        "pylyshyn",
        "Systematicity"
      ],
      [
        "hofstadter",
        "Analogy"
      ],
      [
        "gentner",
        "Structure mapping"
      ],
      [
        "lake",
        "Compositional generalization"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#compositional-analogical"
      ],
      [
        "Findings across programs",
        "#dialectic"
      ]
    ]
  },
  "ontology-psychometric": {
    "title": "Psychometric and Pluralist Accounts",
    "show": "ontology",
    "color": "psy",
    "target": "psychometric-concept",
    "description": "Spearman explains correlations across tests through a general factor, g. Gardner’s multiple-intelligences theory challenges the scope of standard psychometric accounts. His placement here marks that disagreement, rather than agreement with a single-factor view.",
    "papers": [
      "Spearman: positive manifold and general factor g",
      "Gardner and Gould: pluralist and anti-realist challenges",
      "Language-model studies: differing factor structures"
    ],
    "holders": [
      [
        "spearman",
        "General factor, g"
      ],
      [
        "gardner",
        "Multiple intelligences (pluralist critique)"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#psychometric-concept"
      ]
    ]
  },
  "ontology-behavioral": {
    "title": "Behavioral and Functional",
    "show": "ontology",
    "color": "beh",
    "target": "behavioural-functional",
    "description": "Dennett’s intentional stance predicts behavior through attributed beliefs and goals. Putnam’s early functionalism allows the same mental role to be realized in different substrates. These are distinct from reducing mental states to observable behavior.",
    "papers": [
      "Dennett: intentional stance",
      "Putnam: multiple realizability",
      "Block: behavioral equivalence underdetermines mechanism"
    ],
    "holders": [
      [
        "dennett",
        "Intentional stance"
      ],
      [
        "putnam",
        "Functionalism / multiple realizability"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#behavioural-functional"
      ]
    ]
  },
  "measure-behavioral": {
    "title": "Behavioral Criterion",
    "show": "measure",
    "color": "beh",
    "target": "turing-variants",
    "description": "Turing tests conversational imitation. Later variants add causal explanation, memory, speech, or specified reference populations to ask more about the competence behind it.",
    "papers": [
      "Turing: imitation game",
      "Jones and colleagues: controlled Turing tests",
      "Variants add specific abilities and conditions"
    ],
    "holders": [
      [
        "turing",
        "Imitation game"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#turing-variants"
      ]
    ]
  },
  "measure-formal": {
    "title": "Formal Measure",
    "show": "measure",
    "color": "opt",
    "target": "formal-measures",
    "description": "Legg and Hutter’s measure weights expected reward across computable environments by description length. Hutter’s AIXI is an idealized agent model, distinct from the measure. Neither provides a directly computable practical intelligence test.",
    "papers": [
      "Solomonoff and Kolmogorov: algorithmic information theory",
      "Legg and Hutter: universal intelligence",
      "Leike and Hutter: reference-machine dependence"
    ],
    "holders": [
      [
        "legg",
        "Universal intelligence"
      ],
      [
        "hutter",
        "Universal intelligence; AIXI agent"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#formal-measures"
      ]
    ]
  },
  "measure-psychometric": {
    "title": "Psychometrics",
    "show": "measure",
    "color": "psy",
    "target": "psychometric-measurement",
    "description": "Universal psychometrics seeks a cross-agent difficulty scale. ARC examines skill acquisition from limited examples, extending to interaction in ARC-AGI-3. Both face questions about what their tasks measure.",
    "papers": [
      "Hernández-Orallo: universal psychometrics",
      "Chollet: priors, experience, and skill-acquisition efficiency",
      "Challenges: calibration dependence and visual confounds"
    ],
    "holders": [
      [
        "hernandez-orallo",
        "Universal psychometrics"
      ],
      [
        "chollet",
        "Skill-acquisition efficiency"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#psychometric-measurement"
      ]
    ]
  },
  "measure-benchmarks": {
    "title": "Benchmark-driven Evaluation",
    "show": "measure",
    "color": "psy",
    "target": "benchmarks",
    "description": "Fresh items limit contamination. Better calibration can clarify difficulty. Controls for shortcuts and metric effects are still needed to connect a score to a capability.",
    "papers": [
      "Specify the target capability",
      "Test contamination and superficial cues",
      "Report evidence beyond aggregate scores"
    ],
    "holders": [],
    "links": [
      [
        "Survey section",
        "#benchmarks"
      ],
      [
        "Findings across programs",
        "#dialectic"
      ]
    ]
  },
  "gap-meaning": {
    "title": "Meaning and Model Understanding",
    "show": "human-machine-gap",
    "color": "anti",
    "target": "meaning-grounding",
    "description": "Searle challenges the sufficiency of programs for understanding; Harnad asks how symbols acquire intrinsic meaning. Bender and Koller distinguish linguistic form from communicative meaning. These are different arguments, not one shared claim that all machine intelligence is impossible.",
    "papers": [
      "Searle: Chinese Room",
      "Harnad: symbol grounding",
      "Bender and Koller: form and meaning"
    ],
    "holders": [
      [
        "searle",
        "Chinese Room"
      ],
      [
        "harnad",
        "Symbol grounding"
      ],
      [
        "bender",
        "Form–meaning distinction (with Koller)"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#meaning-grounding"
      ]
    ]
  },
  "gap-embodiment": {
    "title": "Grounding and Embodiment",
    "show": "human-machine-gap",
    "color": "anti",
    "target": "embodiment",
    "description": "Dreyfus emphasizes situated skills. Non-embodied systems overcome some earlier failures, but physical extrapolation remains fragile. Those failures alone do not prove that a body is necessary.",
    "papers": [
      "Dreyfus: embodied coping",
      "Physical extrapolation and multimodal-grounding studies",
      "Distinguish constitutive claims from engineering predictions"
    ],
    "holders": [
      [
        "dreyfus",
        "Embodied coping"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#embodiment"
      ]
    ]
  },
  "implementation-optimization": {
    "title": "Formal Optimization",
    "show": "implementation",
    "color": "opt",
    "target": "formal-optimization",
    "description": "Silver and Sutton coauthor the reward-is-enough hypothesis. Russell and Norvig develop the rational-agent framework; Schmidhuber studies compression progress as intrinsic motivation; Ma and collaborators optimize coding-rate reduction for representations. These objectives have different scopes.",
    "papers": [
      "Reward-based mechanisms",
      "Computational rationality",
      "Compression and rate reduction"
    ],
    "holders": [
      [
        "silver",
        "Reward-is-enough hypothesis"
      ],
      [
        "sutton",
        "Reward-is-enough hypothesis"
      ],
      [
        "russell",
        "Rational agents"
      ],
      [
        "norvig",
        "Rational agents"
      ],
      [
        "schmidhuber",
        "Compression progress and curiosity"
      ],
      [
        "ma",
        "Maximal coding rate reduction (MCR²)"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#formal-optimization"
      ]
    ]
  },
  "implementation-compositional": {
    "title": "Compositional and Symbolic Mechanisms",
    "show": "implementation",
    "color": "comp",
    "target": "neurosymbolic",
    "description": "Lake and Baroni demonstrate systematic generalization through neural meta-learning. Marcus advocates hybrid systems with explicit structure and reasoning. The section compares both routes without treating the neural result as evidence that explicit symbols are required.",
    "papers": [
      "Meta-learning for compositionality",
      "DeepProbLog and DreamCoder",
      "AlphaGeometry and reasoning shortcuts"
    ],
    "holders": [
      [
        "lake",
        "Neural meta-learning for compositionality"
      ],
      [
        "marcus",
        "Neuro-symbolic structure"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#neurosymbolic"
      ]
    ]
  },
  "implementation-predictive": {
    "title": "Predictive and World Models",
    "show": "implementation",
    "color": "pred",
    "target": "world-models",
    "description": "Ha and Schmidhuber learn generative dynamics models for control and imagined rollouts. LeCun and collaborators develop JEPA methods that predict learned representations. A shared interest in prediction does not make these architectures equivalent.",
    "papers": [
      "Ha and Schmidhuber: learned world models",
      "Dreamer, Genie, Sora, and Cosmos",
      "LeCun: JEPA-style representations"
    ],
    "holders": [
      [
        "ha",
        "Learned world models"
      ],
      [
        "schmidhuber",
        "Learned world models"
      ],
      [
        "lecun",
        "Predictive representations / JEPA"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#world-models"
      ]
    ]
  },
  "implementation-causal": {
    "title": "Causal Mechanisms",
    "show": "implementation",
    "color": "causal",
    "target": "causal-representation",
    "description": "Causal learning seeks variables that support interventions. Recovery needs additional information or assumptions; identifiability does not guarantee reliable finite-data estimation.",
    "papers": [
      "Schölkopf and Bengio: causal representation learning",
      "Auxiliary information, temporal structure, and interventions",
      "Evaluate latent recovery, graph structure, and adaptation"
    ],
    "holders": [
      [
        "scholkopf",
        "Causal representation learning"
      ],
      [
        "bengio",
        "Causal representation learning"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#causal-representation"
      ]
    ]
  },
  "implementation-hybrids": {
    "title": "Cross-program Mechanisms",
    "show": "implementation",
    "color": "comp",
    "target": "cross-program",
    "description": "Object-centric world models combine reusable entities with predictive dynamics. Connections to causal and symbolic learning offer further ways to test whether the mechanisms complement one another.",
    "papers": [
      "Slot Attention and object-centric dynamics",
      "Compositional planning and causal variables",
      "Evaluate unfamiliar combinations and realistic transfer"
    ],
    "holders": [],
    "links": [
      [
        "Survey section",
        "#cross-program"
      ]
    ]
  },
  "implementation-embodied": {
    "title": "Anti-representational Stance",
    "show": "implementation",
    "color": "anti",
    "target": "embodied-vla",
    "description": "Brooks advocates layered behavior-based robots without a central symbolic world model. This is an anti-representational engineering stance within computational robotics, distinct from denying that machines can be intelligent. It sits alongside the eight programs.",
    "papers": [
      "Brooks: subsumption and situated robotics",
      "RT-2, OpenVLA, and GR00T N1",
      "Open issue: long-horizon planning and abstract reasoning"
    ],
    "holders": [
      [
        "brooks",
        "Anti-representational robotics"
      ]
    ],
    "links": [
      [
        "Survey section",
        "#embodied-vla"
      ]
    ]
  }
};
const portraitPeople = {
  "friston": {
    "name": "Karl Friston",
    "page": "https://www.fil.ion.ucl.ac.uk/~karl/",
    "initials": "KF",
    "src": "assets/portraits/friston-licensed.jpg"
  },
  "clark": {
    "name": "Andy Clark",
    "page": "https://www.x-spect.org/andy-clark.html",
    "initials": "AC",
    "src": "assets/portraits/clark-licensed.jpg"
  },
  "hawkins": {
    "name": "Jeff Hawkins",
    "page": "https://en.wikipedia.org/wiki/Jeff_Hawkins",
    "src": "assets/portraits/hawkins.jpg",
    "initials": "JH"
  },
  "pearl": {
    "name": "Judea Pearl",
    "page": "https://bayes.cs.ucla.edu/jp_home.html",
    "initials": "JP",
    "src": "assets/portraits/pearl-licensed.jpg"
  },
  "newell": {
    "name": "Allen Newell",
    "page": "https://en.wikipedia.org/wiki/Allen_Newell",
    "initials": "AN",
    "src": "assets/portraits/newell.jpg"
  },
  "simon": {
    "name": "Herbert A. Simon",
    "page": "https://en.wikipedia.org/wiki/Herbert_A._Simon",
    "initials": "HS",
    "src": "assets/portraits/simon-licensed.jpg"
  },
  "fodor": {
    "name": "Jerry Fodor",
    "page": "https://en.wikipedia.org/wiki/Jerry_Fodor",
    "src": "assets/portraits/fodor.jpg",
    "initials": "JF"
  },
  "pylyshyn": {
    "name": "Zenon Pylyshyn",
    "page": "https://psych.rutgers.edu/people/faculty-emeriti/115-zenon-pylyshyn",
    "initials": "ZP",
    "src": "assets/portraits/pylyshyn.jpg"
  },
  "chomsky": {
    "name": "Noam Chomsky",
    "page": "https://en.wikipedia.org/wiki/Noam_Chomsky",
    "src": "assets/portraits/chomsky.jpg",
    "initials": "NC"
  },
  "marcus": {
    "name": "Gary Marcus",
    "page": "https://en.wikipedia.org/wiki/Gary_Marcus",
    "src": "assets/portraits/marcus.jpg",
    "initials": "GM"
  },
  "hofstadter": {
    "name": "Douglas Hofstadter",
    "page": "https://en.wikipedia.org/wiki/Douglas_Hofstadter",
    "src": "assets/portraits/hofstadter.jpg",
    "initials": "DH"
  },
  "gentner": {
    "name": "Dedre Gentner",
    "page": "https://psychology.northwestern.edu/people/faculty/core/profiles/dedre-gentner.html",
    "initials": "DG",
    "src": "assets/portraits/gentner.gif"
  },
  "spearman": {
    "name": "Charles Spearman",
    "page": "https://www.york.ac.uk/depts/maths/histstat/spearman_biog.htm",
    "initials": "CS",
    "src": "assets/portraits/spearman.gif"
  },
  "gardner": {
    "name": "Howard Gardner",
    "page": "https://en.wikipedia.org/wiki/Howard_Gardner",
    "src": "assets/portraits/gardner.png",
    "initials": "HG"
  },
  "dennett": {
    "name": "Daniel Dennett",
    "page": "https://en.wikipedia.org/wiki/Daniel_Dennett",
    "src": "assets/portraits/dennett.jpg",
    "initials": "DD"
  },
  "putnam": {
    "name": "Hilary Putnam",
    "page": "https://en.wikipedia.org/wiki/Hilary_Putnam",
    "src": "assets/portraits/putnam.jpg",
    "initials": "HP"
  },
  "dreyfus": {
    "name": "Hubert Dreyfus",
    "page": "https://en.wikipedia.org/wiki/Hubert_Dreyfus",
    "src": "assets/portraits/dreyfus.jpg",
    "initials": "HD"
  },
  "searle": {
    "name": "John Searle",
    "page": "https://en.wikipedia.org/wiki/John_Searle",
    "src": "assets/portraits/searle.jpg",
    "initials": "JS"
  },
  "harnad": {
    "name": "Stevan Harnad",
    "page": "https://en.wikipedia.org/wiki/Stevan_Harnad",
    "src": "assets/portraits/harnad.jpg",
    "initials": "SH"
  },
  "bender": {
    "name": "Emily M. Bender",
    "page": "https://en.wikipedia.org/wiki/Emily_M._Bender",
    "src": "assets/portraits/bender.jpg",
    "initials": "EB"
  },
  "turing": {
    "name": "Alan Turing",
    "page": "https://en.wikipedia.org/wiki/Alan_Turing",
    "initials": "AT",
    "src": "assets/portraits/turing-npg-nc.jpg",
    "preserveImage": true,
    "alt": "Alan Turing, photographed by Elliott & Fry in 1951"
  },
  "chollet": {
    "name": "François Chollet",
    "page": "https://en.wikipedia.org/wiki/François_Chollet",
    "src": "assets/portraits/chollet.jpg",
    "initials": "FC"
  },
  "hernandez-orallo": {
    "name": "José Hernández-Orallo",
    "page": "https://josephorallo.webs.upv.es/",
    "initials": "JH",
    "src": "assets/portraits/hernandez-orallo.jpg"
  },
  "legg": {
    "name": "Shane Legg",
    "page": "https://en.wikipedia.org/wiki/Shane_Legg",
    "src": "assets/portraits/legg.jpg",
    "initials": "SL"
  },
  "hutter": {
    "name": "Marcus Hutter",
    "page": "https://en.wikipedia.org/wiki/Marcus_Hutter",
    "src": "assets/portraits/hutter.jpg",
    "initials": "MH"
  },
  "russell": {
    "name": "Stuart Russell",
    "page": "https://en.wikipedia.org/wiki/Stuart_J._Russell",
    "src": "assets/portraits/russell.jpg",
    "initials": "SR"
  },
  "norvig": {
    "name": "Peter Norvig",
    "page": "https://en.wikipedia.org/wiki/Peter_Norvig",
    "src": "assets/portraits/norvig-color.jpg",
    "initials": "PN"
  },
  "schmidhuber": {
    "name": "Jürgen Schmidhuber",
    "page": "https://en.wikipedia.org/wiki/Jürgen_Schmidhuber",
    "src": "assets/portraits/schmidhuber.jpg",
    "initials": "JS"
  },
  "ma": {
    "name": "Yi Ma",
    "page": "https://people.eecs.berkeley.edu/~yima/",
    "initials": "YM",
    "src": "assets/portraits/ma.jpg"
  },
  "silver": {
    "name": "David Silver",
    "page": "https://www.davidsilver.uk/",
    "initials": "DS",
    "src": "assets/portraits/silver.jpg"
  },
  "sutton": {
    "name": "Richard S. Sutton",
    "page": "https://en.wikipedia.org/wiki/Richard_S._Sutton",
    "src": "assets/portraits/sutton.jpg",
    "initials": "RS"
  },
  "scholkopf": {
    "name": "Bernhard Schölkopf",
    "page": "https://www.mpg.de/390909/intelligent-systems-tuebingen-schoelkopf",
    "initials": "BS",
    "src": "assets/portraits/scholkopf-licensed.png"
  },
  "bengio": {
    "name": "Yoshua Bengio",
    "page": "https://en.wikipedia.org/wiki/Yoshua_Bengio",
    "src": "assets/portraits/bengio.jpg",
    "initials": "YB"
  },
  "ha": {
    "name": "David Ha",
    "page": "https://sakana.ai/company-info/",
    "initials": "DH",
    "src": "assets/portraits/ha.jpg"
  },
  "lecun": {
    "name": "Yann LeCun",
    "page": "https://en.wikipedia.org/wiki/Yann_LeCun",
    "src": "assets/portraits/lecun.jpg",
    "initials": "YL"
  },
  "lake": {
    "name": "Brenden Lake",
    "page": "https://lake-lab.github.io/people/",
    "initials": "BL",
    "src": "assets/portraits/lake.jpg"
  },
  "brooks": {
    "name": "Rodney Brooks",
    "page": "https://en.wikipedia.org/wiki/Rodney_Brooks",
    "src": "assets/portraits/brooks-color.jpg",
    "initials": "RB"
  }
};

const taxonomyButtons = [...document.querySelectorAll("[data-taxonomy]")];
const programmeSets = [...document.querySelectorAll("[data-programmes]")];

function portraitCard([id, role]) {
  const person = portraitPeople[id];
  const figure = document.createElement("figure");
  figure.className = "position-holder";
  const photoLink = document.createElement("a");
  photoLink.className = person.preserveImage ? "portrait-link portrait-unmodified" : "portrait-link";
  photoLink.href = person.page;
  photoLink.title = `${person.name}: profile`;
  if (person.src) {
    const photo = document.createElement("img");
    Object.assign(photo, {src: person.src, alt: person.alt || `Portrait of ${person.name}`, width: 76, height: 92, loading: "lazy", decoding: "async"});
    photoLink.append(photo);
  } else {
    const initials = document.createElement("span");
    initials.className = "portrait-initials";
    initials.setAttribute("role", "img");
    initials.setAttribute("aria-label", person.name);
    initials.textContent = person.initials;
    photoLink.append(initials);
  }
  const caption = document.createElement("figcaption");
  const name = document.createElement("a");
  Object.assign(name, {className: "holder-name", href: person.page, textContent: person.name});
  const position = document.createElement("span");
  Object.assign(position, {className: "holder-position", textContent: role});
  caption.append(name, position);
  figure.append(photoLink, caption);
  return figure;
}

let activeTaxonomy = null;

function renderTaxonomy(id) {
  const selected = taxonomyData[id] ? id : "root";
  const item = taxonomyData[selected];
  const previousGroup = taxonomyData[activeTaxonomy]?.show;
  const changed = activeTaxonomy !== null && activeTaxonomy !== selected;
  document.getElementById("taxonomy-title").textContent = item.title;
  document.getElementById("taxonomy-description").textContent = item.description;
  document.getElementById("taxonomy-holders").replaceChildren(...(item.holders || []).map(portraitCard));
  document.getElementById("taxonomy-links").replaceChildren(...item.links.map(([label, href]) => {
    const link = document.createElement("a");
    Object.assign(link, {href, textContent: label});
    return link;
  }));
  document.getElementById("taxonomy-papers").replaceChildren(...item.papers.map(text => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }));
  taxonomyButtons.forEach(button => {
    const active = button.dataset.taxonomy === selected;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  programmeSets.forEach(set => set.classList.toggle("is-visible", set.dataset.programmes === item.show));
  document.getElementById("taxonomy-papers").hidden = item.papers.length === 0;
  activeTaxonomy = selected;
  if (changed && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const detail = document.querySelector(".taxonomy-detail");
    detail.getAnimations().forEach(animation => animation.cancel());
    detail.animate([{opacity: .55, transform: "translateY(5px)"}, {opacity: 1, transform: "translateY(0)"}], {duration: 220, easing: "ease-out"});
    if (previousGroup !== item.show) {
      document.querySelectorAll(".programme-set.is-visible > button").forEach((button, index) => {
        button.getAnimations().forEach(animation => animation.cancel());
        button.animate([{opacity: .4, transform: "translateY(6px)"}, {opacity: 1, transform: "translateY(0)"}], {duration: 260, delay: Math.min(index * 30, 120), easing: "ease-out"});
      });
    }
  }
}

taxonomyButtons.forEach(button => button.addEventListener("click", () => renderTaxonomy(button.dataset.taxonomy)));
renderTaxonomy("root");

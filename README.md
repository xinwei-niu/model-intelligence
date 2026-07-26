# Awesome Machine Intelligence [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)



## Survey Map

**[Question I: Ontology](#question-i-ontology--what-intelligence-is)**
- [Predictive processing](#predictive-processing)
- [Causality](#causality)
- [Symbolic and nativist](#symbolic-and-nativist)
- [Compositional and analogical](#compositional-and-analogical)
- [Psychometric](#psychometric)
- [Behavioural and functional](#behavioural-and-functional)
- [Formal optimization](#formal-optimization)
- [Anti-computationalist](#anti-computationalist-and-anti-representational)

**[Question II: Possibility](#question-ii-possibility--can-a-machine-be-genuinely-intelligent)**
- [Meaning and model understanding](#meaning-and-model-understanding)
- [Grounding and embodiment](#grounding-and-embodiment)

**[Question III: Measurement](#question-iii-measure--how-intelligence-is-measured)**
- [Behavioural criterion](#behavioural-criterion-and-turing-test-variants)
- [Formal measure](#formal-measure-and-algorithmic-information-theory)
- [Universal psychometrics and ARC](#universal-psychometrics-and-skill-acquisition-efficiency)
- [Benchmark validity crisis](#benchmark-driven-evaluation-and-its-validity-crisis)

**[Question IV: Implementation](#question-iv-implementation--how-intelligence-is-built)**
- [Scaling](#scaling-as-the-mechanism-neutral-baseline)
- [Compositional and neuro-symbolic](#compositional-and-neuro-symbolic-mechanisms)
- [Generative world models](#generative-and-world-model-mechanisms)
- [JEPA](#joint-embedding-predictive-architectures)
- [Causal representation learning](#causal-representation-learning)
- [Computational rationality](#computational-rationality-and-metareasoning)
- [Reward-based mechanisms](#reward-based-mechanisms)
- [White-box mechanisms](#optimization-derived-white-box-mechanisms)
- [Object-centric world models](#object-centric-and-compositional-world-models)
- [Embodied VLA](#embodied-and-vision-language-action)
- [Relative In-Context Learning and Mechanistic Interpretability](#relative-in-context-learning-and-mechanistic-interpretability)

---

## Foundations and Framing

- [**On the Measure of Intelligence**](https://arxiv.org/abs/1911.01547) — Chollet, 2019.
- [**The Measure of All Minds: Evaluating Natural and Artificial Intelligence**](https://doi.org/10.1017/9781316594179) — Hernandez-Orallo, Cambridge University Press, 2017.
- [**A Survey on Evaluation of Large Language Models**](https://doi.org/10.1145/3641289) — Chang et al., *ACM TIST*, 2024.
- [**The Bitter Lesson**](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) — Sutton, 2019.
- [**Emergent Abilities of Large Language Models**](https://openreview.net/forum?id=yzkSU5zdwD) — Wei et al., *TMLR*, 2022.

---

## Question I: Ontology — What Intelligence Is

For each programme the survey states the constitutive claim, its strongest operationalization in current machine learning, and the main line of resistance.

### Predictive Processing

- [**The Free-Energy Principle: A Unified Brain Theory?**](https://doi.org/10.1038/nrn2787) — Friston, *Nature Reviews Neuroscience*, 2010.
- [**Whatever Next? Predictive Brains, Situated Agents, and the Future of Cognitive Science**](https://doi.org/10.1017/S0140525X12000477) — Clark, *BBS*, 2013.
- [**A Thousand Brains: A New Theory of Intelligence**](https://openlibrary.org/isbn/9781541675810) — Hawkins, 2021.
- [**Auto-Encoding Variational Bayes**](https://arxiv.org/abs/1312.6114) — Kingma and Welling, 2014.
- [**The Math Is Not the Territory: Navigating the Free Energy Principle**](https://link.springer.com/article/10.1007/s10539-021-09807-0) — Andrews, *Biology & Philosophy*, 2021.
- [**The Emperor's New Markov Blankets**](https://doi.org/10.1017/S0140525X21002351) — Bruineberg et al., *BBS*, 2022.

### Causality

- [**Causality: Models, Reasoning, and Inference**](https://doi.org/10.1017/CBO9780511803161) — Pearl, Cambridge University Press, 2009.
- [**The Book of Why: The New Science of Cause and Effect**](https://openlibrary.org/isbn/9780465097609) — Pearl and Mackenzie, 2018.
- [**Complete Identification Methods for the Causal Hierarchy**](http://jmlr.org/papers/v9/shpitser08a.html) — Shpitser and Pearl, *JMLR*, 2008.
- [**Causal Identification under Markov Equivalence**](https://arxiv.org/abs/1812.06209) — Jaber, Ribeiro, Zhang, Bareinboim, *NeurIPS*, 2022.
- [**CLadder: Assessing Causal Reasoning in Language Models**](https://arxiv.org/abs/2312.04350) — Jin et al., *NeurIPS*, 2023.
- [**Can Large Language Models Infer Causation from Correlation?**](https://arxiv.org/abs/2306.05836) — Jin et al., 2024.
- [**LLMs Are Prone to Fallacies in Causal Inference**](https://arxiv.org/abs/2406.12158) — Joshi et al., *EMNLP*, 2024.

### Symbolic and Nativist

- [**Computer Science as Empirical Inquiry: Symbols and Search**](https://doi.org/10.1145/360018.360022) — Newell and Simon, *CACM*, 1976.
- [**Connectionism and Cognitive Architecture: A Critical Analysis**](https://doi.org/10.1016/0010-0277(88)90031-5) — Fodor and Pylyshyn, *Cognition*, 1988.
- [**Aspects of the Theory of Syntax**](https://openlibrary.org/isbn/9780262530071) — Chomsky, MIT Press, 1965.
- [**The Next Decade in AI: Four Steps Towards Robust Artificial Intelligence**](https://arxiv.org/abs/2002.06177) — Marcus, 2020.
- [**BabyBERTa: Learning More Grammar With Small-Scale Child-Directed Language**](https://aclanthology.org/2021.conll-1.49/) — Huebner et al., *CoNLL*, 2021.
- [**The BabyLM Challenge**](https://aclanthology.org/events/babylm-2025/) — Warstadt et al., *CoNLL*, 2023.
- [**Physics of Language Models, Part 1: Learning Hierarchical Language Structures**](https://openreview.net/forum?id=mPQKyzkA1K) — Zeyuan Allen-Zhu and Yuanzhi Li, 2023.

### Compositional and Analogical

- [**Analogy as the Core of Cognition**](https://direct.mit.edu/books/edited-volume/chapter-pdf/2323391/9780262316057_cao.pdf) — Hofstadter, 2001.
- [**Structure-Mapping: A Theoretical Framework for Analogy**](https://doi.org/10.1207/s15516709cog0702_3) — Gentner, *Cognitive Science*, 1983.
- [**Analogical Mapping by Constraint Satisfaction**](https://www.sciencedirect.com/science/article/pii/0364021389900165) — Holyoak and Thagard, 1989.
- [**The Copycat Project: A Model of Mental Fluidity and Analogy-Making**](https://pcl.sitehost.iu.edu/rgoldsto/courses/concepts/copycat.pdf) — Hofstadter and Mitchell, 1995.
- [**Abstraction and Analogy-Making in Artificial Intelligence**](https://doi.org/10.1111/nyas.14619) — Mitchell, *Annals NYAS*, 2021.
- [**Human-Level Concept Learning through Probabilistic Program Induction**](https://doi.org/10.1126/science.aab3050) — Lake et al., *Science*, 2015.
- [**Geometric Signatures of Compositionality Across a Language Model's Lifetime**](https://aclanthology.org/2025.acl-long.265/) — Lee et al., *ACL*, 2025.

### Psychometric

- [**"General Intelligence," Objectively Determined and Measured**](https://doi.org/10.2307/1412107) — Spearman, 1904.
- [**Item Response Theory for Psychologists**](https://www.taylorfrancis.com/books/mono/10.4324/9781410605269/item-response-theory-psychologists-susan-embretson-steven-reise) — Embretson and Reise, 2000.
- [**Frames of Mind: The Theory of Multiple Intelligences**](https://openlibrary.org/isbn/9780465025107) — Gardner, 1983.
- [**The Mismeasure of Man**](https://openlibrary.org/isbn/9780393314250) — Gould, 1996.
- [**Revealing the Structure of Language Model Capabilities**](https://arxiv.org/abs/2306.10062) — Burnell et al., 2023.
- [**Large Language Model Psychometrics: A Systematic Review**](https://arxiv.org/abs/2505.08245) — Ye et al., 2026.

### Behavioural and Functional

- [**The Intentional Stance**](https://openlibrary.org/isbn/9780262540537) — Dennett, MIT Press, 1987.
- [**Why You Can't Make a Computer That Feels Pain**](https://home.csulb.edu/~cwallis/382/readings/482/dennettwhyucantmakecompain.pdf) — Dennett, *Synthese*, 1978.
- [**The Nature of Mental States**](https://doi.org/10.1017/CBO9780511625251.011) — Putnam, 1967.
- [**Psychologism and Behaviorism**](https://www.jstor.org/stable/2184371) — Block, *Philosophical Review*, 1981.
- [**Talking About Large Language Models**](https://doi.org/10.1145/3624724) — Shanahan, *CACM*, 2024.

### Formal Optimization

- [**Reward Is Enough**](https://doi.org/10.1016/j.artint.2021.103535) — Silver, Singh, Precup, Sutton, *Artificial Intelligence*, 2021.
- [**Universal Intelligence: A Definition of Machine Intelligence**](https://doi.org/10.1007/s11023-007-9079-x) — Legg and Hutter, *Minds and Machines*, 2007.
- [**Formal Theory of Creativity, Fun, and Intrinsic Motivation**](https://doi.org/10.1109/TAMD.2010.2056368) — Schmidhuber, *IEEE TAMD*, 2010.
- [**On the Principles of Parsimony and Self-Consistency for the Emergence of Intelligence**](https://link.springer.com/article/10.1631/FITEE.2200297) — Ma, Tsao, Shum, 2022.
- [**Language Modeling Is Compression**](https://openreview.net/forum?id=jznbgiynus) — Deletang et al., *ICLR*, 2024.
- [**Physics of Language Models, Part 3.3: Knowledge Capacity Scaling Laws**](https://openreview.net/forum?id=FxNNiUgtfa) — Zeyuan Allen-Zhu and Yuanzhi Li, 2024.
- [**Compression Represents Intelligence Linearly**](https://openreview.net/forum?id=SHMj84U5SH) — Huang et al., *COLM*, 2024.

### Anti-computationalist and Anti-representational

- [**Minds, Brains, and Programs**](https://doi.org/10.1017/S0140525X00005756) — Searle, *BBS*, 1980.
- [**What Computers Can't Do: A Critique of Artificial Reason**](https://openlibrary.org/isbn/9780060110826) — Dreyfus, 1972.
- [**Intelligence Without Representation**](https://doi.org/10.1016/0004-3702(91)90053-M) — Brooks, *Artificial Intelligence*, 1991.

---

## Question II: Possibility — Can a Machine Be Genuinely Intelligent?

The Chinese Room concedes every behavioural result in advance and so has no empirical face. The embodiment argument does, and it has been tested.

### Meaning and Model Understanding

- [**Minds, Brains, and Programs**](https://doi.org/10.1017/S0140525X00005756) — Searle, *BBS*, 1980.
- [**The Symbol Grounding Problem**](https://doi.org/10.1016/0167-2789(90)90087-6) — Harnad, *Physica D*, 1990.
- [**Climbing Towards NLU: On Meaning, Form, and Understanding in the Age of Data**](https://aclanthology.org/2020.acl-main.463/) — Bender and Koller, *ACL*, 2020.
- [**The Vector Grounding Problem**](https://doi.org/10.33735/phimisci.2026.12307) — Coelho Mollo and Milliere, 2026.
- [**Meaning Without Reference in Large Language Models**](https://openreview.net/forum?id=nRkJEwmZnM) — Piantadosi and Hill, 2022.
- [**Symbols and Grounding in Large Language Models**](https://doi.org/10.1098/rsta.2022.0041) — Pavlick, 2023.
- [**Can Language Models Encode Perceptual Structure Without Grounding? A Case Study in Color**](https://aclanthology.org/2021.conll-1.9/) — Abdou et al., 2021.
- [**Mapping Language Models to Grounded Conceptual Spaces**](https://openreview.net/forum?id=gJcEM8sxHK) — Patel and Pavlick, 2022.

### Grounding and Embodiment

- [**What Computers Can't Do: A Critique of Artificial Reason**](https://openlibrary.org/isbn/9780060110826) — Dreyfus, 1972.
- [**How Far Is Video Generation from World Model: A Physical Law Perspective**](https://arxiv.org/abs/2411.02385) — Kang et al., *ICML*, 2025.
- [**CLEVRER: CoLlision Events for Video REpresentation and Reasoning**](https://arxiv.org/abs/1910.01442) — Yi et al., *ICLR*, 2020.
- [**Physion: Evaluating Physical Prediction from Vision in Humans and Machines**](https://arxiv.org/abs/2106.08261) — Bear et al., 2022.
- [**Physion++: Evaluating Physical Scene Understanding that Requires Online Inference of Different Physical Properties**](https://openreview.net/forum?id=5Exz7eaBXH) — Tung et al., *NeurIPS D&B*, 2023.
- [**PhysBench: Benchmarking and Enhancing Vision-Language Models for Physical World Understanding**](https://arxiv.org/abs/2501.16411) — Chow et al., 2025.
- [**Do Multimodal LLMs and Humans Ground Language Similarly?**](https://aclanthology.org/2024.cl-4.7/) — Jones et al., *Computational Linguistics*, 2024.

---

## Question III: Measurement — How Intelligence Is Measured

Any measure answers two questions at once, whether a result counts as evidence and what exactly it is evidence for. The field has been far more confident about the first than the second.

| Measure | Intrinsic difficulty | Contamination-resistant | Stated construct |
| --- | --- | --- | --- |
| Imitation game (Turing 1950) | No | No | No |
| Legg-Hutter measure (Legg and Hutter 2007) | Yes | No | Yes |
| Universal psychometrics (Hernandez-Orallo 2017) | Partial | No | Partial |
| Skill-acquisition efficiency (ARC-AGI, Chollet 2019) | Partial | Yes | No |
| Challenging benchmarks (LiveBench, HLE) | No | Partial | No |

*Construct validity conditions satisfied by the criteria of this section. Each condition is met by at least one criterion, and none meets all three. The criterion that comes closest is the one that cannot be computed, and the benchmarks marketed as the most challenging supply the fewest conditions.*

### Behavioural Criterion and Turing-Test Variants

- [**Computing Machinery and Intelligence**](https://doi.org/10.1093/mind/LIX.236.433) — Turing, *Mind*, 1950.
- [**The Mechanization of Causal Inference: A Mini Turing Test**](https://dl.acm.org/doi/10.1145/1283920.2351636) — Pearl, ACM, 2012.
- [**Navigation Turing Test (NTT): Learning to Evaluate Human-Like Navigation**](https://proceedings.mlr.press/v139/devlin21a.html) — Devlin et al., *ICML*, 2021.
- [**The Meta-Turing Test**](https://arxiv.org/abs/2205.05268) — Walsh, 2022.
- [**People Cannot Distinguish GPT-4 from a Human in a Turing Test**](https://doi.org/10.1145/3715275.3732108) — Jones et al., *FAccT*, 2025.
- [**LLMs Pass a Standard Three-Party Turing Test**](https://doi.org/10.1073/pnas.2524472123) — Jones and Bergen, *PNAS*, 2026.
- [**X-Turing**](https://aclanthology.org/2025.acl-long.293/) — Wu, Wu, Zhao, *ACL*, 2025.
- [**The Generalized Turing Test**](https://arxiv.org/abs/2605.10851) — Mitropolsky et al., 2026.

### Formal Measure and Algorithmic Information Theory

- [**A Formal Theory of Inductive Inference**](https://doi.org/10.1016/S0019-9958(64)90223-2) — Solomonoff, *Information and Control*, 1964.
- [**Three Approaches to the Quantitative Definition of Information**](https://www.tandfonline.com/doi/abs/10.1080/00207166808803030) — Kolmogorov, 1968.
- [**Universal Artificial Intelligence: Sequential Decisions Based on Algorithmic Probability**](https://doi.org/10.1007/b138233) — Hutter, Springer, 2005.
- [**Bad Universal Priors and Notions of Optimality**](https://proceedings.mlr.press/v40/Leike15.html) — Leike and Hutter, *COLT*, 2015.
- [**A Monte-Carlo AIXI Approximation**](https://arxiv.org/abs/0909.0801) — Veness et al., *JAIR*, 2011.
- [**The KoLMogorov Test: Compression by Code Generation**](https://arxiv.org/abs/2503.13992) — Yoran et al., *ICLR*, 2025.

### Universal Psychometrics and Skill-Acquisition Efficiency

- [**The Measurement of Intelligence**](https://openlibrary.org/isbn/9780807722152) — Thorndike et al., 1926.
- [**Measuring Universal Intelligence: Towards an Anytime Intelligence Test**](https://www.sciencedirect.com/science/article/pii/S0004370210001554) — Hernandez-Orallo and Dowe, *Artificial Intelligence*, 2010.
- [**Universal Psychometrics: Measuring Cognitive Abilities in the Machine Kingdom**](https://doi.org/10.1016/j.cogsys.2013.06.001) — Hernandez-Orallo, Dowe, Hernandez-Lloreda, 2014.
- [**Item Response Theory in AI: Analysing Machine Learning Classifiers at the Instance Level**](https://www.sciencedirect.com/science/article/pii/S0004370219300220) — Martinez-Plumed et al., *Artificial Intelligence*, 2019.
- [**Comparing Humans and AI Agents**](https://link.springer.com/chapter/10.1007/978-3-642-22887-2_13) — Insa-Cabrera et al., *AGI*, 2011.
- [**On the Measure of Intelligence**](https://arxiv.org/abs/1911.01547) — Chollet, 2019.
- [**ARC-AGI-2: A New Challenge for Frontier AI Reasoning Systems**](https://arxiv.org/abs/2505.11831) — Chollet et al., 2026.
- [**ARC-AGI-3**](https://arxiv.org/abs/2603.24621) — ARC Prize Foundation, 2026.
- [**Your Reasoning Benchmark May Not Test Reasoning: Revealing Perception Bottleneck in Abstract Reasoning Benchmarks**](https://arxiv.org/abs/2512.21329) — Wang et al., 2026.
- [**ARC Is a Vision Problem!**](https://arxiv.org/abs/2511.14761) — Hu et al., *CVPR*, 2026.
- [**Lost in Benchmarks? Rethinking Large Language Model Benchmarking with Item Response Theory**](https://ojs.aaai.org/index.php/AAAI/article/view/40814) — Zhou et al., *AAAI*, 2026.
- [**A Definition of AGI**](https://arxiv.org/abs/2510.18212) — Dan Hendrycks, Dawn Song, Christian Szegedy, Honglak Lee, Yarin Gal, Erik Brynjolfsson, Sharon Li, Andy Zou, Lionel Levine, Bo Han, Jie Fu, Ziwei Liu, Jinwoo Shin, Kimin Lee, Mantas Mazeika, Long Phan, George Ingebretsen, Adam Khoja, Cihang Xie, Olawale Salaudeen, Matthias Hein, Kevin Zhao, Alexander Pan, David Duvenaud, Bo Li, Steve Omohundro, Gabriel Alfour, Max Tegmark, Kevin McGrew, Gary Marcus, Jaan Tallinn, Eric Schmidt, and Yoshua Bengio, 2025.
- [**Measuring Progress Toward AGI: A Cognitive Framework**](https://arxiv.org/abs/2605.28405) — Ryan Burnell, Yumeya Yamamori, Orhan Firat, Kate Olszewska, Steph Hughes-Fitt, Oran Kelly, Isaac R. Galatzer-Levy, Meredith Ringel Morris, Allan Dafoe, Alison M. Snyder, Noah D. Goodman, Matthew Botvinick, and Shane Legg, 2026.

### Benchmark-Driven Evaluation and Its Validity Crisis

- [**A Careful Examination of Large Language Model Performance on Grade School Arithmetic**](https://arxiv.org/abs/2405.00332) — Zhang et al., *NeurIPS D&B*, 2024.
- [**LiveBench: A Challenging, Contamination-Free LLM Benchmark**](https://openreview.net/forum?id=sKYHBTAxVa) — White et al., *ICLR*, 2025.
- [**Measuring What Matters: Construct Validity in LLM Benchmarks**](https://openreview.net/forum?id=mdA5lVvNcU) — Bean et al., *NeurIPS D&B*, 2026.
- [**Physics of Language Models, Parts 3.1 and 3.2: Knowledge Storage, Extraction, and Manipulation**](https://arxiv.org/abs/2309.14316) — Zeyuan Allen-Zhu and Yuanzhi Li, *ICML* 2024.
- [**Large Language Models Are Not Robust Multiple Choice Selectors**](https://arxiv.org/abs/2309.03882) — Zheng et al., *ICLR*, 2024.
- [**Quantifying Language Models' Sensitivity to Spurious Features in Prompt Design**](https://arxiv.org/abs/2310.11324) — Sclar et al., *ICLR*, 2024.
- [**Scaling Laws for Reward Model Overoptimization**](https://arxiv.org/abs/2309.14316) — Gao, Schulman, Hilton, *ICML*, 2023.
- [**Are Emergent Abilities of Large Language Models a Mirage?**](https://arxiv.org/abs/2304.15004) — Schaeffer, Miranda, Koyejo, *NeurIPS*, 2023.
- [**Rethink Reporting of Evaluation Results in AI**](https://doi.org/10.1126/science.adf6369) — Burnell et al., *Science*, 2023.
- [**Humanity's Last Exam**](https://doi.org/10.1038/s41586-025-09962-4) — Phan et al., *Nature*, 2026.
- [**Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models**](https://openreview.net/forum?id=uyTL5Bvosj) — Srivastava et al., *TMLR*, 2023.

---

## Question IV: Implementation — How Intelligence Is Built

### Scaling as the Mechanism-Neutral Baseline

- [**Scaling Laws for Neural Language Models**](https://arxiv.org/abs/2001.08361) — Kaplan et al., 2020.
- [**Training Compute-Optimal Large Language Models**](https://arxiv.org/abs/2203.15556) — Hoffmann et al., 2022.
- [**s1: Simple Test-Time Scaling**](https://arxiv.org/abs/2501.19393) — Muennighoff et al., 2025.
- [**OpenAI o1 System Card**](https://arxiv.org/abs/2412.16720) — OpenAI, 2026.

### Compositional and Neuro-Symbolic Mechanisms

- [**Neurosymbolic AI: The 3rd Wave**](https://doi.org/10.1007/s10462-023-10448-w) — d'Avila Garcez and Lamb, *AI Review*, 2023.
- [**From Statistical Relational to Neurosymbolic Artificial Intelligence: A Survey**](https://www.sciencedirect.com/science/article/pii/S0004370223002084) — Marra et al., *Artificial Intelligence*, 2024.
- [**Neural Module Networks**](https://arxiv.org/abs/1511.02799) — Andreas et al., *CVPR*, 2016.
- [**The Neuro-Symbolic Concept Learner: Interpreting Scenes, Words, and Sentences From Natural Supervision**](https://arxiv.org/abs/1904.12584) — Mao et al., *ICLR*, 2019.
- [**DeepProbLog: Neural Probabilistic Logic Programming**](https://www.sciencedirect.com/science/article/pii/S0004370221000552) — Manhaeve et al., 2018.
- [**DreamCoder: Growing Generalizable, Interpretable Knowledge with Wake-Sleep Bayesian Program Learning**](https://doi.org/10.1098/rsta.2022.0050) — Ellis et al., *Phil. Trans. R. Soc. A*, 2023.
- [**Solving Olympiad Geometry Without Human Demonstrations (AlphaGeometry)**](https://doi.org/10.1038/s41586-023-06747-5) — Trinh et al., *Nature*, 2024.
- [**Not All Neuro-Symbolic Concepts Are Created Equal: Analysis and Mitigation of Reasoning Shortcuts**](https://arxiv.org/abs/2305.19951) — Marconato et al., *NeurIPS*, 2023.
- [**Compositionality Decomposed: How Do Neural Networks Generalise?**](https://doi.org/10.1613/jair.1.11674) — Hupkes et al., *IJCAI*, 2020.
- [**The Devil Is in the Detail: Simple Tricks Improve Systematic Generalization of Transformers**](https://aclanthology.org/2021.emnlp-main.49/) — Csordas, Irie, Schmidhuber, *EMNLP*, 2021.
- [**Human-Like Systematic Generalization Through a Meta-Learning Neural Network**](https://doi.org/10.1038/s41586-023-06668-3) — Lake and Baroni, *Nature*, 2023.

### Generative and World-Model Mechanisms

- [**Recurrent World Models Facilitate Policy Evolution**](https://arxiv.org/abs/1809.01999) — Ha and Schmidhuber, *NeurIPS*, 2018.
- [**Dream to Control: Learning Behaviors by Latent Imagination**](https://arxiv.org/abs/1912.01603) — Hafner et al., 2020.
- [**Genie: Generative Interactive Environments**](https://arxiv.org/abs/2402.15391) — Bruce et al., *ICML*, 2024.
- [**Video Generation Models as World Simulators**](https://openai.com/research/video-generation-models-as-world-simulators) — OpenAI, 2024.
- [**Cosmos World Foundation Model Platform for Physical AI**](https://arxiv.org/abs/2501.03575) — NVIDIA, 2025.
- [**Do Generative Video Models Understand Physical Principles?**](https://arxiv.org/abs/2501.09038) — Motamed et al., 2026.
- [**VideoPhy-2**](https://arxiv.org/abs/2503.06800) — Bansal et al., *ICLR*, 2026.
- [**Intuitive Physics Learning in a Deep-Learning Model**](https://www.nature.com/articles/s41562-022-01394-8) — Piloto et al., *Nature Human Behaviour*, 2022.

### Joint-Embedding Predictive Architectures

- [**A Path Towards Autonomous Machine Intelligence**](https://openreview.net/forum?id=BZ5a1r-kVsf) — LeCun, 2022.
- [**Introduction to Latent Variable Energy-Based Models: A Path Towards Autonomous Machine Intelligence**](https://doi.org/10.1088/1742-5468/ad292b) — Dawid and LeCun, 2024.
- [**Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture (I-JEPA)**](https://arxiv.org/abs/2301.08243) — Assran et al., 2023.
- [**V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning**](https://arxiv.org/abs/2506.09985) — Assran et al., 2025.
- [**VICReg: Variance-Invariance-Covariance Regularization for Self-Supervised Learning**](https://arxiv.org/abs/2105.04906) — Bardes, Ponce, LeCun, *ICLR*, 2022.
- [**Understanding Dimensional Collapse in Contrastive Self-Supervised Learning**](https://arxiv.org/abs/2110.09348) — Jing et al., *ICLR*, 2022.
- [**LeJEPA**](https://arxiv.org/abs/2511.08544) — Balestriero and LeCun, 2025.
- [**When Does LeJEPA Learn a World Model?**](https://arxiv.org/abs/2605.26379) — Klindt, LeCun, Balestriero, 2026.
- [**A Generalization Theory for JEPA-Based World Models**](https://arxiv.org/abs/2606.27014) — Cui et al., 2026.

### Causal Representation Learning

- [**Toward Causal Representation Learning**](https://doi.org/10.1109/JPROC.2021.3058954) — Scholkopf et al., *Proc. IEEE*, 2021.
- [**Nonlinear Independent Component Analysis: Existence and Uniqueness Results**](https://doi.org/10.1016/S0893-6080(98)00140-3) — Hyvarinen and Pajunen, 1999.
- [**Challenging Common Assumptions in the Unsupervised Learning of Disentangled Representations**](https://arxiv.org/abs/1811.12359) — Locatello et al., *ICML*, 2019.
- [**Interventional Causal Representation Learning**](https://proceedings.mlr.press/v202/ahuja23a.html) — Ahuja et al., *ICML*, 2023.
- [**Learning Independent Causal Mechanisms**](https://proceedings.mlr.press/v80/parascandolo18a.html) — Parascandolo et al., *ICML*, 2018.
- [**CausalVerse**](https://arxiv.org/abs/2510.14049) — Chen et al., *NeurIPS*, 2025.
- [**Causal Parrots: Large Language Models May Talk Causality But Are Not Causal**](https://openreview.net/forum?id=tv46tCzs83) — Zecevic et al., *TMLR*, 2023.

### Computational Rationality and Metareasoning

- [**A Behavioral Model of Rational Choice**](https://doi.org/10.2307/1884852) — Herbert A. Simon, *Quarterly Journal of Economics*, 1955.
- [**Principles of Metareasoning**](https://doi.org/10.1016/0004-3702(91)90015-C) — Stuart Russell and Eric Wefald, *Artificial Intelligence*, 1991.
- [**Provably Bounded-Optimal Agents**](https://doi.org/10.1613/jair.133) — Stuart J. Russell and Devika Subramanian, *JAIR*, 1995.
- [**Computational Rationality: A Converging Paradigm for Intelligence in Brains, Minds, and Machines**](https://doi.org/10.1126/science.aac6076) — Samuel J. Gershman, Eric J. Horvitz, and Joshua B. Tenenbaum, *Science*, 2015.
- [**Resource-Rational Analysis**](https://doi.org/10.1017/S0140525X1900061X) — Falk Lieder and Thomas L. Griffiths, *Behavioral and Brain Sciences*, 2020.
- [**Rational Metareasoning for Large Language Models**](https://arxiv.org/abs/2410.05563) — C. Nicolò De Sabbata, Theodore R. Sumers, and Thomas L. Griffiths, NeurIPS 2024.
- [**The Cost of Thinking Is Similar Between Large Reasoning Models and Humans**](https://doi.org/10.1073/pnas.2520077122) — Andrea Gregor de Varda, Ferdinando Pio D'Elia, Hope Kean, Andrew Lampinen, and Evelina Fedorenko, *PNAS* 122(47), 2025.
- [**Evaluating Language Models' Evaluations of Games**](https://arxiv.org/abs/2510.10930) — Katherine M. Collins, Cedegao E. Zhang, Graham Todd, Lance Ying, Mauricio Barba da Costa, Ryan Liu, Prafull Sharma, Adrian Weller, Ionatan Kuperwajs, Lionel Wong, Joshua B. Tenenbaum, and Thomas L. Griffiths, 2025.

### Reward-Based Mechanisms

- [**Mastering the Game of Go with Deep Neural Networks and Tree Search (AlphaGo)**](https://doi.org/10.1038/nature16961) — Silver et al., *Nature*, 2016.
- [**Training Language Models to Follow Instructions with Human Feedback (InstructGPT)**](https://arxiv.org/abs/2203.02155) — Ouyang et al., 2022.
- [**On the Expressivity of Markov Reward**](https://arxiv.org/abs/2111.00876) — Abel et al., *NeurIPS*, 2021.
- [**Scalar Reward Is Not Enough: A Response to Silver, Singh, Precup and Sutton**](https://link.springer.com/article/10.1007/s10458-022-09575-5) — Vamplew et al., *AAMAS*, 2023.
- [**Settling the Reward Hypothesis**](https://arxiv.org/abs/2212.10420) — Bowling, Martin, Abel, Dabney, *ICML*, 2023.
- [**VIME: Variational Information Maximizing Exploration**](https://arxiv.org/abs/1605.09674) — Houthooft et al., 2017.
- [**Deep Active Inference Agents Using Monte-Carlo Methods**](https://arxiv.org/abs/2006.04176) — Fountas et al., *NeurIPS*, 2020.

### Optimization-Derived White-Box Mechanisms

- [**ReduNet: A White-Box Deep Network from the Principle of Maximizing Rate Reduction**](http://jmlr.org/papers/v23/21-0631.html) — Chan et al., *JMLR*, 2022.
- [**Emergence of Segmentation with Minimalistic White-Box Transformers**](https://arxiv.org/abs/2308.16271) — Yu et al., *CPAL*, 2023.
- [**Closed-Loop Transcription via Convolutional Sparse Coding**](https://arxiv.org/abs/2302.09347) — Dai et al., *CPAL*, 2023.
- [**Scaling White-Box Transformers for Vision**](https://arxiv.org/abs/2405.20299) — Yang et al., 2024.
- [**Simplifying DINO via Coding Rate Regularization**](https://arxiv.org/abs/2502.10385) — Wu et al., *ICML*, 2025.
- [**Principles and Practice of Deep Representation Learning**](https://arxiv.org/abs/2606.06624) — Buchanan, Pai, Wang, Ma, 2026.

### Object-Centric and Compositional World Models

- [**On the Binding Problem in Artificial Neural Networks**](https://arxiv.org/abs/2012.05208) — Greff, van Steenkiste, Schmidhuber, 2020.
- [**Object-Centric Learning with Slot Attention**](https://arxiv.org/abs/2006.15055) — Locatello et al., *NeurIPS*, 2020.
- [**Contrastive Learning of Structured World Models**](https://arxiv.org/abs/1911.12247) — Kipf et al., *ICLR*, 2020.
- [**Provably Learning Object-Centric Representations**](https://arxiv.org/abs/2305.14229) — Brady et al., *ICML*, 2023.
- [**Bridging the Gap to Real-World Object-Centric Learning**](https://arxiv.org/abs/2209.14860) — Seitzer et al., *ICLR*, 2023.
- [**Generalization and Robustness Implications in Object-Centric Learning**](https://arxiv.org/abs/2107.00637) — Dittadi et al., 2022.
- [**When Does Compositional Structure Yield Compositional Generalization? A Kernel Theory**](https://arxiv.org/abs/2405.16391) — Lippl and Stachenfeld, *ICLR*, 2025.

### Embodied and Vision-Language-Action

- [**Intelligence Without Representation**](https://doi.org/10.1016/0004-3702(91)90053-M) — Brooks, *Artificial Intelligence*, 1991.
- [**RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control**](https://arxiv.org/abs/2307.15818) — Brohan et al., 2023.
- [**OpenVLA: An Open-Source Vision-Language-Action Model**](https://arxiv.org/abs/2406.09246) — Kim et al., 2024.
- [**GR00T N1: An Open Foundation Model for Generalist Humanoid Robots**](https://arxiv.org/abs/2503.14734) — NVIDIA, 2025.

### Relative In-Context Learning and Mechanistic Interpretability Papers

- [**Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks (MAML)**](https://arxiv.org/abs/1703.03400) — Finn, Abbeel, Levine, 2017.
- [**Why Can GPT Learn In-Context? Language Models Secretly Perform Gradient Descent as Meta-Optimizers**](https://arxiv.org/abs/2212.10559) — Dai et al., *ACL Findings*, 2023.
- [**Transformers Learn In-Context by Gradient Descent**](https://proceedings.mlr.press/v202/von-oswald23a.html) — von Oswald et al., *ICML*, 2023.
- [**In-Context Learning and Induction Heads**](https://arxiv.org/abs/2209.11895) — Olsson et al., 2022.
- [**Emergent Symbolic Mechanisms Support Abstract Reasoning in Large Language Models**](https://proceedings.mlr.press/v267/yang25c.html) — Yang et al., *ICML*, 2025.
- [**Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting**](https://arxiv.org/abs/2305.04388) — Turpin et al., *NeurIPS*, 2023.

---

## Additional Useful Resources

### Books

- [**Artificial Intelligence: A Modern Approach**](https://openlibrary.org/isbn/9780134610993) — Russell and Norvig.
- [**The Book of Why: The New Science of Cause and Effect**](https://openlibrary.org/isbn/9780465097609) — Pearl and Mackenzie.
- [**The Measure of All Minds**](https://doi.org/10.1017/9781316594179) — José Hernández-Orallo.
- [**Artificial Intelligence: A Guide for Thinking Humans**](https://openlibrary.org/isbn/9780374257835) — Melanie Mitchell.
- [**A Thousand Brains: A New Theory of Intelligence**](https://openlibrary.org/isbn/9781541675810) — Jeff Hawkins.
- [**Active Inference: The Free Energy Principle in Mind, Brain, and Behavior**](https://doi.org/10.7551/mitpress/12441.001.0001) — Parr, Pezzulo, and Friston.
- [**Reinforcement Learning: An Introduction**](http://incompleteideas.net/book/the-book-2nd.html) — Sutton and Barto.
- [**Principles and Practice of Deep Representation Learning**](https://ma-lab-berkeley.github.io/deep-representation-learning-book/) — Buchanan, Pai, Wang, and Ma.
- [**The Algebraic Mind: Integrating Connectionism and Cognitive Science**](https://mitpress.mit.edu/9780262632683/the-algebraic-mind/) — Gary Marcus.

### Encyclopedia Entries

- [**The Chinese Room Argument**](https://plato.stanford.edu/entries/chinese-room/) — Stanford Encyclopedia of Philosophy.
- [**The Turing Test**](https://plato.stanford.edu/entries/turing-test/) — Stanford Encyclopedia of Philosophy.
- [**The Computational Theory of Mind**](https://plato.stanford.edu/entries/computational-mind/) — Stanford Encyclopedia of Philosophy.

### Courses and Lectures

- [**Brains, Minds and Machines Summer Course**](https://ocw.mit.edu/courses/res-9-003-brains-minds-and-machines-summer-course-summer-2015/video_galleries/introduction/) — MIT OpenCourseWare RES.9-003, Poggio and Kreiman.

### Community

- [**ARC Prize**](https://arcprize.org) — arcprize.org.

---

## Contributing

Contributions are welcome! If you know of a paper, book, or resource that belongs
here, open a pull request or an issue.

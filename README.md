# What *Is* Artificial Intelligence? A Multidisciplinary Review

Definitions, measures, and implementations of artificial intelligence.

<a id="abstract"></a>

## Abstract



Intelligence has been studied in many disciplines, yet there is no widely accepted account of what it is, how it should be measured, or what evidence supports a claim that a system possesses it. This survey traces these questions from philosophy and psychometrics to contemporary machine learning. We organize the literature around two axes: four questions—what intelligence is, how to measure it, whether machines can possess it in the same sense as humans, and how intelligent systems can be built—and eight research programs that approach these questions differently. For each program, we examine its central claims, supporting and challenging evidence, and connections to current methods for building and evaluating artificial intelligence. A recurring pattern runs through the literature: strong benchmark performance motivates claims about model capabilities, subsequent studies identify alternative explanations such as memorization or reliance on superficial cues, and the debate turns to whether the benchmark measures the intended capability. We conclude by discussing what this pattern means for construct validity, future evaluation, and the design of intelligent systems.

<a id="survey-map"></a>

## Survey Map


**Overview**

- [Introduction](#introduction)
- [Previous surveys](#previous-surveys)
- [Taxonomy](#taxonomy)

**Question I: Ontology**

- [Predictive Processing](#predictive-processing)
- [Causality](#causal)
- [Symbolic and Nativist](#symbolic-nativist)
- [Compositionality and Analogy](#compositional-analogical)
- [Psychometric and Pluralist Accounts](#psychometric-concept)
- [Behavioral and Functional](#behavioural-functional)

**Question II: Measure**

- [Behavioral criterion](#turing-variants)
- [Formal measure](#formal-measures)
- [Psychometrics](#psychometric-measurement)
- [Skill-acquisition efficiency and ARC](#skill-acquisition)
- [Benchmark validity](#benchmarks)

**Question III: Human-Machine Gap**

- [Meaning and model understanding](#meaning-grounding)
- [Grounding and embodiment](#embodiment)
- [What could move a possibility claim?](#possibility-evidence)

**Question IV: Implementation**

- [Formal optimization](#formal-optimization)
- [Compositional and symbolic mechanisms](#neurosymbolic)
- [Predictive and world models](#world-models)
- [Causal mechanisms](#causal-representation)
- [Cross-program mechanisms](#cross-program)

**Findings and conclusions**

- [Findings across programs](#dialectic)
- [What the evidence supports](#key-takeaways)
- [Open questions](#future-work)
- [Further reading](#resources)

<a id="introduction"></a>

<a id="foundations"></a>

## Introduction



Models can write, reason, and act in ways that once seemed out of reach. Researchers still disagree about what these abilities tell us about intelligence.



This survey brings together accounts from philosophy, psychology, neuroscience, linguistics, and computer science. It separates four questions that are often conflated: what intelligence is, how to measure it, whether machines can possess it, and how to build it.

- [**On the Measure of Intelligence**](https://arxiv.org/abs/1911.01547) — Chollet, 2019.

- [**The Measure of All Minds: Evaluating Natural and Artificial Intelligence**](https://doi.org/10.1017/9781316594179) — Hernandez-Orallo, Cambridge University Press, 2017.

- [**A Survey on Evaluation of Large Language Models**](https://doi.org/10.1145/3641289) — Chang et al., *ACM TIST*, 2024.

- [**The Bitter Lesson**](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) — Sutton, 2019.

- [**Emergent Abilities of Large Language Models**](https://openreview.net/forum?id=yzkSU5zdwD) — Wei et al., *TMLR*, 2022.

<a id="previous-surveys"></a>

## Previous Surveys



Earlier surveys collect definitions, develop particular theories, or review evaluation methods. The table compares selected works by the questions they address.


Coverage of the four questions in selected prior surveys, as compared in the manuscript.

| Survey (year) | Ontology | Measure | Human-Machine Gap | Implementation | Multidisciplinary |
| --- | --- | --- | --- | --- | --- |
| Legg and Hutter (2007) | Yes | Yes | No | Partial | Partial |
| Wang (2019) | Yes | Partial | No | Partial | Partial |
| Mitchell (2024) | Partial | No | No | No | No |
| Chang et al. (2024) | No | Yes | No | No | No |
| Schmidhuber (2025) | Yes | No | No | No | Partial |
| Bean et al. (2026) | No | Yes | No | No | No |
| This survey (2026) | Yes | Yes | Yes | Yes | Yes |

<a id="taxonomy"></a>

## Taxonomy



Select a question, then a position. Names identify contributors to the cited work and may appear under more than one question. Colors group related research programs.

**The eight research programs**

- **Behavioral-functional**: Observable performance and the functional roles of mental states.

- **Optimization**: Goal achievement under reward, utility, compression, or other defined objectives.

- **Predictive**: Predictions about the world and updates in response to observations.

- **Causal**: Interventions and counterfactuals beyond statistical association.

- **Compositional-analogical**: Reusable structure, combinations of concepts, and mappings between relations.

- **Psychometric**: Latent abilities and difficulty inferred from patterns of measured performance.

- **Anti-computationalist**: Challenges to the sufficiency of computation for intelligence or understanding.

- **Symbolic-nativist**: Structured representations and, in nativist accounts, constraints preceding experience.

Brooks’s anti-representational stance appears under Implementation as a proposal about building capable systems, rather than a ninth research program.

<a id="ontology"></a>

<a id="concept"></a>

## Question I: Ontology — Definitions of Intelligence



These six approaches make claims about what intelligence consists of. Optimization is developed under Implementation; objections to computation alone appear under the Human-Machine Gap.

<a id="predictive-processing"></a>

### Predictive Processing



Predictive processing treats cognition as the continual adjustment of predictions. In active inference, perception updates an internal model while action changes the observations it receives. Expected free energy accounts for both preferred outcomes and information gain.

Hawkins’s Thousand Brains theory proposes parallel sensorimotor models organized by reference frames, with perception emerging through their agreement. It is discussed here as a related alternative to the Friston–Clark account.



Hawkins’s Thousand Brains theory proposes parallel sensorimotor models that reach a consensus about objects. Free-energy methods connect mathematically to variational inference, but that connection alone cannot distinguish a theory of cognition from its alternatives. Markov-blanket assumptions and falsifiability remain points of dispute.


- [**The Free-Energy Principle: A Unified Brain Theory?**](https://doi.org/10.1038/nrn2787) — Friston, *Nature Reviews Neuroscience*, 2010.

- [**Whatever Next? Predictive Brains, Situated Agents, and the Future of Cognitive Science**](https://doi.org/10.1017/S0140525X12000477) — Clark, *BBS*, 2013.

- [**A Thousand Brains: A New Theory of Intelligence**](https://openlibrary.org/isbn/9781541675810) — Hawkins, 2021.

- [**Auto-Encoding Variational Bayes**](https://arxiv.org/abs/1312.6114) — Kingma and Welling, 2014.

- [**The Math Is Not the Territory: Navigating the Free Energy Principle**](https://link.springer.com/article/10.1007/s10539-021-09807-0) — Andrews, *Biology & Philosophy*, 2021.

- [**The Emperor's New Markov Blankets**](https://doi.org/10.1017/S0140525X21002351) — Bruineberg et al., *BBS*, 2022.

- [**VIME: Variational Information Maximizing Exploration**](https://arxiv.org/abs/1605.09674) — Houthooft et al., 2017.

- [**Deep Active Inference Agents Using Monte-Carlo Methods**](https://arxiv.org/abs/2006.04176) — Fountas et al., *NeurIPS*, 2020.

<a id="causal"></a>

### Causality



Pearl’s causal hierarchy distinguishes observation, intervention, and counterfactuals. A structural causal model describes how variables are generated and what changes when a mechanism is intervened on. Observational data generally cannot identify the higher levels without causal assumptions.



CLadder tests questions across all three levels. Follow-up work finds that models can fail when variables are renamed, graph structures change, or familiar causal cues mislead them. These tests probe whether a procedure transfers beyond the examples used to demonstrate it.


- [**Causality: Models, Reasoning, and Inference**](https://doi.org/10.1017/CBO9780511803161) — Pearl, Cambridge University Press, 2009.

- [**The Book of Why: The New Science of Cause and Effect**](https://openlibrary.org/isbn/9780465097609) — Pearl and Mackenzie, 2018.

- [**Complete Identification Methods for the Causal Hierarchy**](http://jmlr.org/papers/v9/shpitser08a.html) — Shpitser and Pearl, *JMLR*, 2008.

- [**Causal Identification under Markov Equivalence**](https://arxiv.org/abs/1812.06209) — Jaber, Ribeiro, Zhang, Bareinboim, *NeurIPS*, 2022.

- [**CLadder: Assessing Causal Reasoning in Language Models**](https://arxiv.org/abs/2312.04350) — Jin et al., *NeurIPS*, 2023.

- [**Can Large Language Models Infer Causation from Correlation?**](https://arxiv.org/abs/2306.05836) — Jin et al., 2024.

- [**LLMs Are Prone to Fallacies in Causal Inference**](https://arxiv.org/abs/2406.12158) — Joshi et al., *EMNLP*, 2024.

<a id="symbolic-nativist"></a>

### Symbolic and Nativist



Symbolic accounts describe thought as operations on structured representations. Nativist accounts add constraints that precede experience. Newell and Simon’s physical symbol systems, Fodor’s language of thought, and Chomsky’s account of language acquisition make different versions of these claims.



Child-scale language models learn some syntax without explicit grammatical rules. Whether they learn from the same kinds of information available to children—including social interaction and physical experience—is a separate question.


- [**Computer Science as Empirical Inquiry: Symbols and Search**](https://doi.org/10.1145/360018.360022) — Newell and Simon, *CACM*, 1976.

- [**Connectionism and Cognitive Architecture: A Critical Analysis**](https://doi.org/10.1016/0010-0277(88)90031-5) — Fodor and Pylyshyn, *Cognition*, 1988.

- [**Aspects of the Theory of Syntax**](https://openlibrary.org/isbn/9780262530071) — Chomsky, MIT Press, 1965.

- [**The Next Decade in AI: Four Steps Towards Robust Artificial Intelligence**](https://arxiv.org/abs/2002.06177) — Marcus, 2020.

- [**BabyBERTa: Learning More Grammar With Small-Scale Child-Directed Language**](https://aclanthology.org/2021.conll-1.49/) — Huebner et al., *CoNLL*, 2021.

- [**The BabyLM Challenge**](https://aclanthology.org/events/babylm-2025/) — Warstadt et al., *CoNLL*, 2023.

<a id="compositional-analogical"></a>

### Compositionality and Analogy



Compositionality explains complex meanings through their parts and the rules for combining them. Systematicity links related abilities; productivity allows new expressions from finite primitives. Analogy maps relations between domains despite differences in their surface features.



Neural models often struggle with unfamiliar combinations, though training and meta-learning can close much of the gap. Analogy studies report a similar pattern: strong initial results, failures on counterfactual variants, and recovery with code-augmented systems. Whether the tasks isolate relational mapping is still disputed.


- [**Analogy as the Core of Cognition**](https://direct.mit.edu/books/edited-volume/chapter-pdf/2323391/9780262316057_cao.pdf) — Hofstadter, 2001.

- [**Structure-Mapping: A Theoretical Framework for Analogy**](https://doi.org/10.1207/s15516709cog0702_3) — Gentner, *Cognitive Science*, 1983.

- [**Analogical Mapping by Constraint Satisfaction**](https://www.sciencedirect.com/science/article/pii/0364021389900165) — Holyoak and Thagard, 1989.

- [**The Copycat Project: A Model of Mental Fluidity and Analogy-Making**](https://pcl.sitehost.iu.edu/rgoldsto/courses/concepts/copycat.pdf) — Hofstadter and Mitchell, 1995.

- [**Abstraction and Analogy-Making in Artificial Intelligence**](https://doi.org/10.1111/nyas.14619) — Mitchell, *Annals NYAS*, 2021.

- [**Human-Level Concept Learning through Probabilistic Program Induction**](https://doi.org/10.1126/science.aab3050) — Lake et al., *Science*, 2015.

- [**Geometric Signatures of Compositionality Across a Language Model's Lifetime**](https://aclanthology.org/2025.acl-long.265/) — Lee et al., *ACL*, 2025.

<a id="psychometric-concept"></a>

### Psychometric and Pluralist Accounts



Psychometrics infers latent abilities from patterns in test performance. Spearman proposed a general factor, g, to explain positive correlations across tasks. Gardner’s multiple-intelligences theory challenges the scope of standard psychometric measures; it is included here as a pluralist critique.



Language-model scores also correlate. Shared training exposure, task formats, and contamination can contribute to those correlations. The factors recovered vary with the models and benchmarks included in the analysis.


- [**"General Intelligence," Objectively Determined and Measured**](https://doi.org/10.2307/1412107) — Spearman, 1904.

- [**Item Response Theory for Psychologists**](https://www.taylorfrancis.com/books/mono/10.4324/9781410605269/item-response-theory-psychologists-susan-embretson-steven-reise) — Embretson and Reise, 2000.

- [**Frames of Mind: The Theory of Multiple Intelligences**](https://openlibrary.org/isbn/9780465025107) — Gardner, 1983.

- [**The Mismeasure of Man**](https://openlibrary.org/isbn/9780393314250) — Gould, 1996.

- [**Revealing the Structure of Language Model Capabilities**](https://arxiv.org/abs/2306.10062) — Burnell et al., 2023.

- [**Large Language Model Psychometrics: A Systematic Review**](https://arxiv.org/abs/2505.08245) — Ye et al., 2026.

<a id="behavioural-functional"></a>

### Behavioral and Functional



Behavioral approaches study observable competence. Functionalism identifies mental states through their causal roles. Putnam’s early functionalist account allows the same mental role to be realized in different physical systems. Dennett’s intentional stance attributes beliefs and goals when doing so helps predict behavior.



Block’s lookup-table objection exposes a limit of behavioral tests: the same responses can come from different mechanisms. Studies of model internals can help distinguish them. Describing a model in human terms is useful only when those descriptions explain or predict something.


- [**The Intentional Stance**](https://openlibrary.org/isbn/9780262540537) — Dennett, MIT Press, 1987.

- [**Why You Can't Make a Computer That Feels Pain**](https://home.csulb.edu/~cwallis/382/readings/482/dennettwhyucantmakecompain.pdf) — Dennett, *Synthese*, 1978.

- [**The Nature of Mental States**](https://doi.org/10.1017/CBO9780511625251.011) — Putnam, 1967.

- [**Psychologism and Behaviorism**](https://www.jstor.org/stable/2184371) — Block, *Philosophical Review*, 1981.

- [**Talking About Large Language Models**](https://doi.org/10.1145/3624724) — Shanahan, *CACM*, 2024.

<a id="intelligence-without-neurons"></a>

### Intelligence without Neurons



Slime moulds and other organisms without nervous systems show anticipatory or habituation-like responses. Whether those responses count as intelligence depends on the definition; they complicate accounts that identify intelligence with neural computation.

<a id="measure"></a>

<a id="criterion"></a>

## Question II: Measure — How Can Artificial Intelligence Be Identified and Measured?



Imitation tests, formal measures, psychometrics, and benchmarks make different choices about what counts as evidence of intelligence.

<a id="turing-variants"></a>

### Behavioral Criterion



Turing’s imitation game asks whether a judge can distinguish a machine’s conversation from a human’s. Recent controlled studies make conversational imitation a less discriminating test, while leaving the question of understanding unresolved.



Other versions test causal explanation, navigation, judging other agents, long-term consistency, or speech. Generalized tests specify the populations being compared. The added conditions change which abilities success can support.


- [**Computing Machinery and Intelligence**](https://doi.org/10.1093/mind/LIX.236.433) — Turing, *Mind*, 1950.

- [**The Mechanization of Causal Inference: A Mini Turing Test**](https://dl.acm.org/doi/10.1145/1283920.2351636) — Pearl, ACM, 2012.

- [**Navigation Turing Test (NTT): Learning to Evaluate Human-Like Navigation**](https://proceedings.mlr.press/v139/devlin21a.html) — Devlin et al., *ICML*, 2021.

- [**The Meta-Turing Test**](https://arxiv.org/abs/2205.05268) — Walsh, 2022.

- [**People Cannot Distinguish GPT-4 from a Human in a Turing Test**](https://doi.org/10.1145/3715275.3732108) — Jones et al., *FAccT*, 2025.

- [**LLMs Pass a Standard Three-Party Turing Test**](https://doi.org/10.1073/pnas.2524472123) — Jones and Bergen, *PNAS*, 2026.

- [**X-Turing**](https://aclanthology.org/2025.acl-long.293/) — Wu, Wu, Zhao, *ACL*, 2025.

- [**The Generalized Turing Test**](https://arxiv.org/abs/2605.10851) — Mitropolsky et al., 2026.

<a id="formal-measures"></a>

### Formal Measure



Legg and Hutter define intelligence through expected reward across computable environments, weighted by description length. Kolmogorov complexity and Solomonoff induction supply the mathematical basis; AIXI is the corresponding ideal agent.



The measure cannot be computed exactly. It also depends on the reference machine and does not explicitly penalize an agent’s time or memory use. Resource-aware formulations and computable agents address parts of these problems without evaluating the original measure.


- [**A Formal Theory of Inductive Inference**](https://doi.org/10.1016/S0019-9958(64)90223-2) — Solomonoff, *Information and Control*, 1964.

- [**Three Approaches to the Quantitative Definition of Information**](https://www.tandfonline.com/doi/abs/10.1080/00207166808803030) — Kolmogorov, 1968.

- [**Universal Artificial Intelligence: Sequential Decisions Based on Algorithmic Probability**](https://doi.org/10.1007/b138233) — Hutter, Springer, 2005.

- [**Bad Universal Priors and Notions of Optimality**](https://proceedings.mlr.press/v40/Leike15.html) — Leike and Hutter, *COLT*, 2015.

- [**A Monte-Carlo AIXI Approximation**](https://arxiv.org/abs/0909.0801) — Veness et al., *JAIR*, 2011.

- [**The KoLMogorov Test: Compression by Code Generation**](https://arxiv.org/abs/2503.13992) — Yoran et al., *ICLR*, 2025.

- [**Universal Intelligence: A Definition of Machine Intelligence**](https://doi.org/10.1007/s11023-007-9079-x) — Legg and Hutter, *Minds and Machines*, 2007.

<a id="psychometric-measurement"></a>

### Psychometrics



Universal psychometrics seeks a difficulty scale that works across kinds of agents. Item response theory estimates item difficulty and ability together, under assumptions such as dimensionality and local independence. Other approaches compare models with humans using established cognitive tests.



Calibration matters. Models may share architectures and training data; test items may share templates. Small calibration sets and poor model fit can change estimated difficulty and ability rankings.



<a id="skill-acquisition"></a>

#### Skill-acquisition Efficiency



Chollet defines intelligence in terms of skill-acquisition efficiency, relative to priors and experience. ARC-AGI tests generalization from a few examples. ARC-AGI-2 broadens the task distribution; ARC-AGI-3 adds interaction and learning across an episode.



Researchers disagree about ARC’s visual demands. Some treat perception as a confound on a reasoning test; others see it as part of the ability being measured. Both readings require an explicit account of the target construct.


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

<a id="benchmarks"></a>

### Benchmark-driven Evaluation and Validity Crisis



Benchmark scores can reflect memorized questions, answer ordering, prompt wording, or adaptation to the test itself. A discontinuous metric can also turn gradual improvement into an apparent jump. These are different failure modes and require different controls.



Fresh test items reduce contamination. Item response theory can improve calibration, and preference comparisons avoid fixed answer keys. None automatically establishes that a score measures the intended ability. Tests also need interpretable difficulty and evidence against plausible alternative explanations.


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

<a id="validity-considerations"></a>

### Construct-validity Considerations

Illustrative comparison from the manuscript. No criterion fully resolves all three issues in practice.

| Criterion | Intrinsic difficulty | Contamination resistance | Explicit objective |
| --- | --- | --- | --- |
| Imitation game | No | No | No |
| Legg–Hutter measure | Yes | No | Yes |
| Psychometrics | Partial | No | Partial |
| ARC-AGI | Partial | Yes | No |
| Challenging benchmarks | No | Partial | No |

The comparison is illustrative. Which properties matter most depends on the purpose of the evaluation and what can be measured reliably.

<a id="human-machine-gap"></a>

<a id="possibility"></a>

<a id="anti-computationalist"></a>

## Question III: Human-Machine Gap — Can a Machine Be Genuinely Intelligent?



Two objections recur: symbol manipulation may fail to produce meaning, and intelligence may require embodied interaction. They make different claims about what experiments can establish.

<a id="meaning-grounding"></a>

### Meaning and Model Understanding



Searle’s Chinese Room challenges whether running a program is sufficient for understanding. Harnad asks how symbols acquire intrinsic meaning and proposes grounding them in nonsymbolic representations. Bender and Koller argue that learning linguistic form alone cannot supply communicative meaning. These arguments concern different conditions for understanding.



Text-only models learn some color and spatial structure without sensory experience. These results bear on grounding. They do not settle Searle’s objection, which accepts successful behavior in advance.


- [**Minds, Brains, and Programs**](https://doi.org/10.1017/S0140525X00005756) — Searle, *BBS*, 1980.

- [**The Symbol Grounding Problem**](https://doi.org/10.1016/0167-2789(90)90087-6) — Harnad, *Physica D*, 1990.

- [**Climbing Towards NLU: On Meaning, Form, and Understanding in the Age of Data**](https://aclanthology.org/2020.acl-main.463/) — Bender and Koller, *ACL*, 2020.

- [**The Vector Grounding Problem**](https://doi.org/10.33735/phimisci.2026.12307) — Coelho Mollo and Milliere, 2026.

- [**Meaning Without Reference in Large Language Models**](https://openreview.net/forum?id=nRkJEwmZnM) — Piantadosi and Hill, 2022.

- [**Symbols and Grounding in Large Language Models**](https://doi.org/10.1098/rsta.2022.0041) — Pavlick, 2023.

- [**Can Language Models Encode Perceptual Structure Without Grounding? A Case Study in Color**](https://aclanthology.org/2021.conll-1.9/) — Abdou et al., 2021.

- [**Mapping Language Models to Grounded Conceptual Spaces**](https://openreview.net/forum?id=gJcEM8sxHK) — Patel and Pavlick, 2022.

<a id="embodiment"></a>

### Grounding and Embodiment



Dreyfus’s embodied coping concerns tacit skills acquired through situated activity. It supports both a philosophical claim about embodiment and an engineering prediction about the limits of hand-coded symbolic systems.



Statistical systems overcome some earlier limits without a physical body. Yet tests of physical extrapolation and multimodal grounding still find dependence on surface cues and weak transfer. These failures alone cannot establish that embodiment is necessary.


- [**What Computers Can't Do: A Critique of Artificial Reason**](https://openlibrary.org/isbn/9780060110826) — Dreyfus, 1972.

- [**How Far Is Video Generation from World Model: A Physical Law Perspective**](https://arxiv.org/abs/2411.02385) — Kang et al., *ICML*, 2025.

- [**CLEVRER: CoLlision Events for Video REpresentation and Reasoning**](https://arxiv.org/abs/1910.01442) — Yi et al., *ICLR*, 2020.

- [**Physion: Evaluating Physical Prediction from Vision in Humans and Machines**](https://arxiv.org/abs/2106.08261) — Bear et al., 2022.

- [**Physion++: Evaluating Physical Scene Understanding that Requires Online Inference of Different Physical Properties**](https://openreview.net/forum?id=5Exz7eaBXH) — Tung et al., *NeurIPS D&B*, 2023.

- [**PhysBench: Benchmarking and Enhancing Vision-Language Models for Physical World Understanding**](https://arxiv.org/abs/2501.16411) — Chow et al., 2025.

- [**Do Multimodal LLMs and Humans Ground Language Similarly?**](https://aclanthology.org/2024.cl-4.7/) — Jones et al., *Computational Linguistics*, 2024.

<a id="possibility-evidence"></a>

### What Could Move a Possibility Claim?



Grounding and physical-law extrapolation turn some objections into testable predictions. The Chinese Room poses a different challenge: it denies that even successful behavior establishes understanding. Behavioral tests cannot settle a claim framed that way.

<a id="implementation"></a>

## Question IV: Implementation — Building Intelligent Models



More computation, data, and inference time have expanded what models can do. The approaches below make more specific bets about objectives, representations, and learning mechanisms.

<a id="scaling"></a>

**Related work on scaling**

- [**Scaling Laws for Neural Language Models**](https://arxiv.org/abs/2001.08361) — Kaplan et al., 2020.

- [**Training Compute-Optimal Large Language Models**](https://arxiv.org/abs/2203.15556) — Hoffmann et al., 2022.

- [**s1: Simple Test-Time Scaling**](https://arxiv.org/abs/2501.19393) — Muennighoff et al., 2025.

- [**OpenAI o1 System Card**](https://arxiv.org/abs/2412.16720) — OpenAI, 2026.

<a id="formal-optimization"></a>

### Formal Optimization



This section compares reward maximization, rational action, compression progress, and coding-rate reduction. The proposals address different problems: a hypothesis about the emergence of intelligent abilities, a framework for choosing actions, an intrinsic motivation signal, and an objective for learning representations.



<a id="reward"></a>

#### Reward-based Mechanisms



Reinforcement learning has clear successes in games, where outcomes define the reward. Preference learning extends it to language-model alignment, using a learned approximation to human judgments.



Some task objectives cannot be represented by a Markov reward function under the definitions studied. Learned rewards introduce another problem: optimizing them too strongly can move behavior away from the preferences they were meant to represent.


- [**Reward Is Enough**](https://doi.org/10.1016/j.artint.2021.103535) — Silver, Singh, Precup, Sutton, *Artificial Intelligence*, 2021.

- [**Mastering the Game of Go with Deep Neural Networks and Tree Search (AlphaGo)**](https://doi.org/10.1038/nature16961) — Silver et al., *Nature*, 2016.

- [**Training Language Models to Follow Instructions with Human Feedback (InstructGPT)**](https://arxiv.org/abs/2203.02155) — Ouyang et al., 2022.

- [**On the Expressivity of Markov Reward**](https://arxiv.org/abs/2111.00876) — Abel et al., *NeurIPS*, 2021.

- [**Scalar Reward Is Not Enough: A Response to Silver, Singh, Precup and Sutton**](https://link.springer.com/article/10.1007/s10458-022-09575-5) — Vamplew et al., *AAMAS*, 2023.

- [**Settling the Reward Hypothesis**](https://arxiv.org/abs/2212.10420) — Bowling, Martin, Abel, Dabney, *ICML*, 2023.

<a id="computational-rationality"></a>

#### Computational Rationality



An agent must decide which computations are worth doing as well as which actions to take. Metareasoning weighs the expected benefit of deliberation against its cost. Bounded optimality judges behavior against what is possible under the agent’s resource limits.



Applications to language models ask when more reasoning is worth its cost. Longer reasoning traces do not consistently yield better decisions or closer agreement with human judgments.


- [**A Behavioral Model of Rational Choice**](https://doi.org/10.2307/1884852) — Herbert A. Simon, *Quarterly Journal of Economics*, 1955.

- [**Principles of Metareasoning**](https://doi.org/10.1016/0004-3702(91)90015-C) — Stuart Russell and Eric Wefald, *Artificial Intelligence*, 1991.

- [**Provably Bounded-Optimal Agents**](https://doi.org/10.1613/jair.133) — Stuart J. Russell and Devika Subramanian, *JAIR*, 1995.

- [**Computational Rationality: A Converging Paradigm for Intelligence in Brains, Minds, and Machines**](https://doi.org/10.1126/science.aac6076) — Samuel J. Gershman, Eric J. Horvitz, and Joshua B. Tenenbaum, *Science*, 2015.

- [**Resource-Rational Analysis**](https://doi.org/10.1017/S0140525X1900061X) — Falk Lieder and Thomas L. Griffiths, *Behavioral and Brain Sciences*, 2020.

- [**Rational Metareasoning for Large Language Models**](https://arxiv.org/abs/2410.05563) — C. Nicolò De Sabbata, Theodore R. Sumers, and Thomas L. Griffiths, NeurIPS 2024.

- [**Evaluating Language Models' Evaluations of Games**](https://arxiv.org/abs/2510.10930) — Katherine M. Collins, Cedegao E. Zhang, Graham Todd, Lance Ying, Mauricio Barba da Costa, Ryan Liu, Prafull Sharma, Adrian Weller, Ionatan Kuperwajs, Lionel Wong, Joshua B. Tenenbaum, and Thomas L. Griffiths, 2025.

<a id="compression"></a>

#### Compression



Solomonoff induction, minimum description length, and curiosity-driven learning connect prediction with compact descriptions. In language modeling, cross-entropy corresponds to expected code length under a predictive code.



Compression captures regularities, but a static compression score misses how efficiently an agent learns new skills. It can also discard information needed for action when the environment changes.


- [**Formal Theory of Creativity, Fun, and Intrinsic Motivation**](https://doi.org/10.1109/TAMD.2010.2056368) — Schmidhuber, *IEEE TAMD*, 2010.

- [**Language Modeling Is Compression**](https://openreview.net/forum?id=jznbgiynus) — Deletang et al., *ICLR*, 2024.

- [**Physics of Language Models, Part 3.3: Knowledge Capacity Scaling Laws**](https://openreview.net/forum?id=FxNNiUgtfa) — Zeyuan Allen-Zhu and Yuanzhi Li, 2024.

- [**Compression Represents Intelligence Linearly**](https://openreview.net/forum?id=SHMj84U5SH) — Huang et al., *COLM*, 2024.

<a id="white-box"></a>

#### Rate Reduction



Maximal coding rate reduction separates groups of representations while keeping each group compact. Unrolling its optimization steps produces networks with mathematically derived operators. Applications include clustering, generation, segmentation, and self-supervised learning.



Larger white-box networks have required design choices beyond the original objective. Language-model work has mainly targeted neuron-level interpretability; its effect on broader modeling performance remains less established.


- [**ReduNet: A White-Box Deep Network from the Principle of Maximizing Rate Reduction**](http://jmlr.org/papers/v23/21-0631.html) — Chan et al., *JMLR*, 2022.

- [**Emergence of Segmentation with Minimalistic White-Box Transformers**](https://arxiv.org/abs/2308.16271) — Yu et al., *CPAL*, 2023.

- [**Closed-Loop Transcription via Convolutional Sparse Coding**](https://arxiv.org/abs/2302.09347) — Dai et al., *CPAL*, 2023.

- [**Scaling White-Box Transformers for Vision**](https://arxiv.org/abs/2405.20299) — Jinrui Yang, Xianhang Li, Druv Pai, and colleagues, 2024.

- [**Simplifying DINO via Coding Rate Regularization**](https://arxiv.org/abs/2502.10385) — Wu et al., *ICML*, 2025.

- [**Principles and Practice of Deep Representation Learning**](https://arxiv.org/abs/2606.06624) — Buchanan, Pai, Wang, Ma, 2026.

<a id="neurosymbolic"></a>

### Compositional and Symbolic Mechanisms



Lake and Baroni’s neural meta-learning demonstrates a route to compositional generalization through training across tasks. Marcus advocates hybrid systems that combine learning with explicit structure and reasoning. These approaches differ on how structure should be represented and acquired.



<a id="meta-learning"></a>

#### Meta-learning



Training across related tasks can teach adaptation to new combinations. Data augmentation, architectural invariances, and improved transformer training address different failures. Meta-Learning for Compositionality demonstrates substantial systematicity in non-symbolic sequence models; in-context-learning studies examine how reusable computations arise.


- [**Compositionality Decomposed: How Do Neural Networks Generalise?**](https://doi.org/10.1613/jair.1.11674) — Hupkes et al., *IJCAI*, 2020.

- [**The Devil Is in the Detail: Simple Tricks Improve Systematic Generalization of Transformers**](https://aclanthology.org/2021.emnlp-main.49/) — Csordas, Irie, Schmidhuber, *EMNLP*, 2021.

- [**Human-Like Systematic Generalization Through a Meta-Learning Neural Network**](https://doi.org/10.1038/s41586-023-06668-3) — Lake and Baroni, *Nature*, 2023.

- [**Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks (MAML)**](https://arxiv.org/abs/1703.03400) — Finn, Abbeel, Levine, 2017.

- [**Why Can GPT Learn In-Context? Language Models Secretly Perform Gradient Descent as Meta-Optimizers**](https://arxiv.org/abs/2212.10559) — Dai et al., *ACL Findings*, 2023.

- [**Transformers Learn In-Context by Gradient Descent**](https://proceedings.mlr.press/v202/von-oswald23a.html) — von Oswald et al., *ICML*, 2023.

- [**In-Context Learning and Induction Heads**](https://arxiv.org/abs/2209.11895) — Olsson et al., 2022.

<a id="neuro-symbolic-methods"></a>

#### Neuro-symbolic Methods



Neural module networks and concept learners join learned perception to explicit operations. DeepProbLog makes logical inference differentiable; DreamCoder learns abstractions through program induction. AlphaGeometry pairs a learned proposer with a symbolic prover.



These systems still depend on designer-supplied predicates, primitives, or formal languages. They can also reach correct answers while grounding symbols in the wrong concepts, undermining the interpretability the symbolic layer was intended to provide.


- [**Neurosymbolic AI: The 3rd Wave**](https://doi.org/10.1007/s10462-023-10448-w) — d'Avila Garcez and Lamb, *AI Review*, 2023.

- [**From Statistical Relational to Neurosymbolic Artificial Intelligence: A Survey**](https://www.sciencedirect.com/science/article/pii/S0004370223002084) — Marra et al., *Artificial Intelligence*, 2024.

- [**Neural Module Networks**](https://arxiv.org/abs/1511.02799) — Andreas et al., *CVPR*, 2016.

- [**The Neuro-Symbolic Concept Learner: Interpreting Scenes, Words, and Sentences From Natural Supervision**](https://arxiv.org/abs/1904.12584) — Mao et al., *ICLR*, 2019.

- [**DeepProbLog: Neural Probabilistic Logic Programming**](https://www.sciencedirect.com/science/article/pii/S0004370221000552) — Manhaeve et al., 2018.

- [**DreamCoder: Growing Generalizable, Interpretable Knowledge with Wake-Sleep Bayesian Program Learning**](https://doi.org/10.1098/rsta.2022.0050) — Ellis et al., *Phil. Trans. R. Soc. A*, 2023.

- [**Solving Olympiad Geometry Without Human Demonstrations (AlphaGeometry)**](https://doi.org/10.1038/s41586-023-06747-5) — Trinh et al., *Nature*, 2024.

- [**Not All Neuro-Symbolic Concepts Are Created Equal: Analysis and Mitigation of Reasoning Shortcuts**](https://arxiv.org/abs/2305.19951) — Marconato et al., *NeurIPS*, 2023.

<a id="world-models"></a>

### Predictive and World Models



World models predict observations, latent dynamics, or learned representations. The choice affects what they must retain and how an agent can use their predictions.



<a id="generative-models"></a>

#### Generative World Models and Imagination-based Agents



Ha and Schmidhuber’s recurrent world model and the Dreamer family learn dynamics for imagined rollouts. Genie learns action-controllable environments; Sora and Cosmos scale video generation toward broader simulation settings.



Visual fidelity and physical understanding can diverge. Reconstruction rewards details that may be irrelevant to control, while extrapolation tests expose shortcuts hidden by familiar scenes. These results call for tests of learned dynamics beyond video quality.


- [**Recurrent World Models Facilitate Policy Evolution**](https://arxiv.org/abs/1809.01999) — Ha and Schmidhuber, *NeurIPS*, 2018.

- [**Dream to Control: Learning Behaviors by Latent Imagination**](https://arxiv.org/abs/1912.01603) — Hafner et al., 2020.

- [**Genie: Generative Interactive Environments**](https://arxiv.org/abs/2402.15391) — Bruce et al., *ICML*, 2024.

- [**Video Generation Models as World Simulators**](https://openai.com/research/video-generation-models-as-world-simulators) — OpenAI, 2024.

- [**Cosmos World Foundation Model Platform for Physical AI**](https://arxiv.org/abs/2501.03575) — NVIDIA, 2025.

- [**Do Generative Video Models Understand Physical Principles?**](https://arxiv.org/abs/2501.09038) — Motamed et al., 2026.

- [**VideoPhy-2**](https://arxiv.org/abs/2503.06800) — Bansal et al., *ICLR*, 2026.

- [**Intuitive Physics Learning in a Deep-Learning Model**](https://www.nature.com/articles/s41562-022-01394-8) — Piloto et al., *Nature Human Behaviour*, 2022.

<a id="jepa"></a>

#### Joint-embedding Predictive Architectures



JEPA predicts target embeddings from context embeddings rather than reconstructing every observation detail. An energy function expresses compatibility between representations.



The objective permits collapsed solutions, including constant encoders. Regularization can prevent collapse under stated assumptions, but a non-collapsed model can still learn predictable distractors. Useful representations must also support downstream planning or reasoning.


- [**A Path Towards Autonomous Machine Intelligence**](https://openreview.net/forum?id=BZ5a1r-kVsf) — LeCun, 2022.

- [**Introduction to Latent Variable Energy-Based Models: A Path Towards Autonomous Machine Intelligence**](https://doi.org/10.1088/1742-5468/ad292b) — Dawid and LeCun, 2024.

- [**Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture (I-JEPA)**](https://arxiv.org/abs/2301.08243) — Assran et al., 2023.

- [**V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning**](https://arxiv.org/abs/2506.09985) — Assran et al., 2025.

- [**VICReg: Variance-Invariance-Covariance Regularization for Self-Supervised Learning**](https://arxiv.org/abs/2105.04906) — Bardes, Ponce, LeCun, *ICLR*, 2022.

- [**Understanding Dimensional Collapse in Contrastive Self-Supervised Learning**](https://arxiv.org/abs/2110.09348) — Jing et al., *ICLR*, 2022.

- [**LeJEPA**](https://arxiv.org/abs/2511.08544) — Balestriero and LeCun, 2025.

- [**When Does LeJEPA Learn a World Model?**](https://arxiv.org/abs/2605.26379) — Klindt, LeCun, Balestriero, 2026.

- [**A Generalization Theory for JEPA-Based World Models**](https://arxiv.org/abs/2606.27014) — Cui et al., 2026.

<a id="causal-representation"></a>

### Causal Mechanisms



Causal representation learning seeks latent variables that support interventions. Observations alone can admit many latent explanations, making identifiability the central obstacle.



Auxiliary variables, multiple views, temporal structure, and interventions allow recovery under particular assumptions. Evaluations examine latent variables, graph structure, and adaptation. Identifiability in principle does not guarantee accurate estimation from finite data.


- [**Toward Causal Representation Learning**](https://doi.org/10.1109/JPROC.2021.3058954) — Scholkopf et al., *Proc. IEEE*, 2021.

- [**Nonlinear Independent Component Analysis: Existence and Uniqueness Results**](https://doi.org/10.1016/S0893-6080(98)00140-3) — Hyvarinen and Pajunen, 1999.

- [**Challenging Common Assumptions in the Unsupervised Learning of Disentangled Representations**](https://arxiv.org/abs/1811.12359) — Locatello et al., *ICML*, 2019.

- [**Interventional Causal Representation Learning**](https://proceedings.mlr.press/v202/ahuja23a.html) — Ahuja et al., *ICML*, 2023.

- [**Learning Independent Causal Mechanisms**](https://proceedings.mlr.press/v80/parascandolo18a.html) — Parascandolo et al., *ICML*, 2018.

- [**CausalVerse**](https://arxiv.org/abs/2510.14049) — Chen et al., *NeurIPS*, 2025.

- [**Causal Parrots: Large Language Models May Talk Causality But Are Not Causal**](https://openreview.net/forum?id=tv46tCzs83) — Zecevic et al., *TMLR*, 2023.

<a id="cross-program"></a>

### Cross-program Mechanisms



Hybrid models combine mechanisms whose strengths may be complementary. Object-centric prediction is one example.



<a id="object-centric"></a>

#### Object-centric World Models



Slot Attention groups a scene into reusable object representations; relational dynamics predicts how those objects interact. Related models connect slots with JEPA training, causal variables, or symbolic predicates.



Theoretical guarantees depend on assumptions about the data and architecture. Gains on synthetic combinations do not consistently transfer to realistic settings, so object structure must be evaluated in the downstream task.


- [**On the Binding Problem in Artificial Neural Networks**](https://arxiv.org/abs/2012.05208) — Greff, van Steenkiste, Schmidhuber, 2020.

- [**Object-Centric Learning with Slot Attention**](https://arxiv.org/abs/2006.15055) — Locatello et al., *NeurIPS*, 2020.

- [**Contrastive Learning of Structured World Models**](https://arxiv.org/abs/1911.12247) — Kipf et al., *ICLR*, 2020.

- [**Provably Learning Object-Centric Representations**](https://arxiv.org/abs/2305.14229) — Brady et al., *ICML*, 2023.

- [**Bridging the Gap to Real-World Object-Centric Learning**](https://arxiv.org/abs/2209.14860) — Seitzer et al., *ICLR*, 2023.

- [**Generalization and Robustness Implications in Object-Centric Learning**](https://arxiv.org/abs/2107.00637) — Dittadi et al., 2022.

- [**When Does Compositional Structure Yield Compositional Generalization? A Kernel Theory**](https://arxiv.org/abs/2405.16391) — Lippl and Stachenfeld, *ICLR*, 2025.

<a id="embodied-vla"></a>

#### Anti-representational and Embodied Mechanisms



Brooks’s subsumption architecture produces behavior through layered perception–action controllers, without an explicit symbolic planner or internal world model.



Modern vision-language-action models retain embodied interaction while using learned representations. Long-horizon planning and abstract reasoning remain difficult. Whether those gaps require richer representations or better embodied learning is open.


- [**Intelligence Without Representation**](https://doi.org/10.1016/0004-3702(91)90053-M) — Brooks, *Artificial Intelligence*, 1991.

- [**RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control**](https://arxiv.org/abs/2307.15818) — Brohan et al., 2023.

- [**OpenVLA: An Open-Source Vision-Language-Action Model**](https://arxiv.org/abs/2406.09246) — Kim et al., 2024.

- [**GR00T N1: An Open Foundation Model for Generalist Humanoid Robots**](https://arxiv.org/abs/2503.14734) — NVIDIA, 2025.

<a id="dialectic"></a>

## Findings Across Programs



Several debates follow the same sequence: a strong score supports a capability claim, then a changed test reveals another explanation for the result. The five cases below involve different problems, from metric effects to failures of transfer.

Five recurring debates summarized in the manuscript.

| Debate | Initial claim | Challenge |
| --- | --- | --- |
| Emergent abilities | Capabilities appear abruptly with scale. | Metric choice can turn gradual improvements into apparent jumps. |
| Causal reasoning | Strong performance on formal causal tasks. | Variable renaming, reversed relations, and causal fallacies challenge transfer. |
| Physical world models | Plausible predictions and simulated environments. | Visual shortcuts and weak physical generalization. |
| Analogical reasoning | Human-level task performance without task-specific training. | Rewording failures and recovery with stronger systems leave interpretation open. |
| Compositional generalization | Early failures suggest a need for explicit structure. | Scale and training recover much of the gap without settling construct validity. |

Turing-test variants add conditions on imitation. Psychometric studies disagree over the factors behind model performance. In each case, the argument turns on what the observations justify.

<a id="icl-interpretability"></a>

### Mechanistic Evidence and Construct Validation



Mechanistic studies examine when analogy appears during training, how symbol-like computations operate, and how representations change with compositional complexity. Their methods also need validation.



Evaluations should name the ability being tested and specify results that would count against the proposed explanation. Model internals and behavioral controls can provide complementary evidence.


- [**Emergent Symbolic Mechanisms Support Abstract Reasoning in Large Language Models**](https://proceedings.mlr.press/v267/yang25c.html) — Yang et al., *ICML*, 2025.

- [**Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting**](https://arxiv.org/abs/2305.04388) — Turpin et al., *NeurIPS*, 2023.

<a id="conclusion"></a>

## Conclusion



Benchmark scores are useful comparisons. Claims about intelligence require more: a stated ability, a defensible link between the task and that ability, and tests of competing explanations.



<a id="key-takeaways"></a>

### What the Evidence Supports


- **No single discipline answers every question.** Computational success does not by itself settle definitions or genuine understanding.

- **Some disagreements concern definitions.** Researchers may disagree about what should count as intelligence before disagreeing about a system’s performance.

- **Theoretical accounts can guide implementation.** Prediction, structure, optimization, and causality suggest different mechanisms whose combinations require empirical testing.

<a id="future-work"></a>

### Open Questions


- Which combinations of predictive, causal, and compositional mechanisms improve generalization beyond scale alone?

- Which controls distinguish the intended ability from contamination, shortcuts, and metric effects?

- When do results from controlled implementations transfer to realistic tasks?

<a id="resources"></a>

## Further Reading



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

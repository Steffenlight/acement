import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import DoiLink from './DoiLink.tsx'
import Footnotes from './Footnotes.tsx'


        type BodyPopoverData = {
            sectionId: string;
            title: string;
            description: string;
            researchEntries: JSX.Element[];
        };
    
// Component

        function BodyPopover({ dataId }: { dataId: string }) {
            const { sectionId, title, description, researchEntries }: BodyPopoverData =
                getBodyPopoverData(dataId);

            return (
                <section
                    id={sectionId}
                    tabIndex={"-1"}
                    role={"dialog"}
                    className={"chakra-popover__content css-r6fbra"}
                    style={{
                        transformOrigin: "var(--popper-transform-origin)",
                        opacity: "0",
                        visibility: "hidden",
                        transform: "scale(0.95)"
                    }}
                >
                    <div className={"css-0"}>
                        <p className={"chakra-text css-1vawacw"}>
                            {title}
                        </p>
                        <p className={"chakra-text css-dhwte0"}>
                            {description}
                        </p>
                        <div className={"css-cjrsup"}>
                            <p className={"chakra-text css-16kun0z"}>
                                Scientific Research
                            </p>
                            <div role={"separator"} className={"css-o5vfml"}></div>
                            {researchEntries}
                        </div>
                    </div>
                </section>
            );
        }
    

// Subcomponents

        function ResearchEntry({
            text,
            doi,
            suffix,
            separator
        }: {
            text: string;
            doi: string;
            suffix?: string;
            separator?: boolean;
        }) {
            return (
                <div className={"css-0"}>
                    {separator ? (
                        <div role={"separator"} className={"css-wpbpu9"}></div>
                    ) : null}
                    <div className={"css-1c4huzh"}>
                        <div id={"footnotes"} className={"css-nv28xs"}>
                            <p className={"chakra-text css-u3zvhu"}>
                                {text}
                                <DoiLink label={doi} />
                                {suffix}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
    


        function getBodyPopoverData(id: string): BodyPopoverData {
            const normalizedId = String(id);

            const data: Record<string, BodyPopoverData> = {
                "0": {
                    sectionId: "popover-content-_r_1c_",
                    title: "Brain",
                    description: "The human brain uses about 25% of the human body’s metabolic energy and is particularly sensitive to the aging process. Scientists are looking into the contributions of mitochondria in brain health with preliminary studies suggesting they could be key players in brain.",
                    researchEntries: [
                        <ResearchEntry
                            key="brain-1"
                            text={`Grimm, A. and Eckert, A. (2017), Brain aging and neurodegeneration: from a mitochondrial point of view. J. Neurochem., 143: 418-431. `}
                            doi="https://doi.org/10.1111/jnc.14037"
                        />,
                        <ResearchEntry
                            key="brain-2"
                            separator
                            text={`Fang et al. (2019). Mitophagy inhibits amyloid-β and tau pathology and reverses cognitive deficits in models of Alzheimer's disease. Nature neuroscience, 22(3), 401–412. `}
                            doi="https://doi.org/10.1038/s41593-018-0332-9"
                        />
                    ]
                },
                "1": {
                    sectionId: "popover-content-_r_1e_",
                    title: "Skin",
                    description: "Skin requires a lot of energy provided by mitochondria. As you age, dysfunctional mitochondria lead to reduced energy production, cellular decline and signs of aging like sagginess, dullness, wrinkles and weakened skin barrier. Enhanced mitochondrial function can improve skin cellular energy, youthfulness, resilience and overall health.",
                    researchEntries: [
                        <div key="skin-1" className={"css-0"}>
                            <div className={"css-1c4huzh"}>
                                <Footnotes />
                            </div>
                        </div>,
                        <ResearchEntry
                            key="skin-2"
                            separator
                            text={`Dodig S, Čepelak I, Pavić I. Hallmarks of senescence and aging. Biochem Med (Zagreb). 2019;29(3):030501. `}
                            doi="doi:10.11613/BM.2019.030501"
                        />,
                        <ResearchEntry
                            key="skin-3"
                            separator
                            text={`Sreedhar A, Aguilera-Aguirre L, Singh KK. Mitochondria in skin health, aging, and disease. Cell Death Dis. 2020;11(6):444. Epub 2020/06/11. `}
                            doi="doi: 10.1038/s41419-020-2649-z"
                            suffix=". PubMed PMID: 32518230; PubMed Central PMCID: PMCPMC7283348 Biosciences. A.S., L.A.-A., and K.K.S. hold equity in Yuva Biosciences."
                        />,
                        <ResearchEntry
                            key="skin-4"
                            separator
                            text={`D’Amico et al. Topical application of Urolithin A slows intrinsic skin aging and protects from UVB-mediated photodamage: Findings from Randomized Clinical Trials. medRxiv 2023.06.16.23291378 (2023). `}
                            doi="doi:10.1101/2023.06.16.23291378"
                        />
                    ]
                },
                "2": {
                    sectionId: "popover-content-_r_1g_",
                    title: "Immune system",
                    description: "The immune system becomes less effective over time. Evidence is rising on the importance of mitochondria in immune aging.",
                    researchEntries: [
                        <div key="immune-1" className={"css-0"}>
                            <div className={"css-1c4huzh"}>
                                <div id={"footnotes"} className={"css-nv28xs"}>
                                    <p className={"chakra-text css-u3zvhu"}>
                                        Denk, D., Petrocelli, V., Rinsch, C., Greten, F.R, et al
                                        <br></br>
                                        {`Expansion of T memory stem cells with superior anti-tumor immunity by Urolithin A-induced mitophagy. Immunity, 55, Issue 11 (2022). `}
                                        <DoiLink label="https://doi.org/10.1016/j.immuni.2022.09.014" />
                                    </p>
                                </div>
                            </div>
                        </div>,
                        <ResearchEntry
                            key="immune-2"
                            separator
                            text={`Fang, E.F., Hou, Y., Palikaras, K. et al. Mitophagy inhibits amyloid-β and tau pathology and reverses cognitive deficits in models of Alzheimer’s disease. Nat Neurosci 22, 401–412 (2019). `}
                            doi="https://doi.org/10.1038/s41593-018-0332-9"
                        />,
                        <ResearchEntry
                            key="immune-3"
                            separator
                            text={`Jang, J. Y., Blum, A., Liu, J., & Finkel, T. (2018). The role of mitochondria in aging. The Journal of clinical investigation, 128(9), 3662–3670. `}
                            doi="https://doi.org/10.1172/JCI120842"
                        />
                    ]
                },
                "3": {
                    sectionId: "popover-content-_r_1k_",
                    title: "Digestive system",
                    description: "The digestive system is essential to metabolic health, immunity and overall well-being. Mitochondrial health has been associated with improved gut barrier health.",
                    researchEntries: [
                        <ResearchEntry
                            key="digestive-1"
                            text={`Singh, R., Chandrashekharappa, S., Bodduluri, S.R. et al. Enhancement of the gut barrier integrity by a microbial metabolite through the Nrf2 pathway. Nat Commun 10, 89 (2019). `}
                            doi="https://doi.org/10.1038/s41467-018-07859-7"
                        />,
                        <ResearchEntry
                            key="digestive-2"
                            separator
                            text={`Toney, A.M., Fan, R., Xian, Y., Chaidez, V., Ramer-Tait, A.E. and Chung, S. (2019), Urolithin A, a Gut Metabolite, Improves Insulin Sensitivity Through Augmentation of Mitochondrial Function and Biogenesis. Obesity, 27: 612-620. `}
                            doi="https://doi.org/10.1002/oby.22404"
                        />,
                        <ResearchEntry
                            key="digestive-3"
                            separator
                            text={`Urolithin A Prevents Cisplatin-Induced Nephrotoxicity Melissa Guada, Raghu Ganugula, Manicka Vadhanam and Majeti N.V. Ravi Kumar Journal of Pharmacology and Experimental Therapeutics October 1, 2017, 363 (1) 58-65; DOI: `}
                            doi="https://doi.org/10.1124/jpet.117.242420"
                        />
                    ]
                },
                "4": {
                    sectionId: "popover-content-_r_1m_",
                    title: "Skeletal muscle",
                    description: "During strenuous exercise, the rate of energy use in skeletal muscles can increase more than 100-fold almost instantly. Muscle cells need healthy mitochondria in order to meet this energy demand. Our clinical studies have shown improved muscle strength as a result of improved mitochondrial function.",
                    researchEntries: [
                        <ResearchEntry
                            key="muscle-1"
                            text={`Andreux, P.A., van Diemen, M.P.J., Heezen, M.R. et al. Mitochondrial function is impaired in the skeletal muscle of pre-frail elderly. Sci Rep 8, 8548 (2018). `}
                            doi="https://doi.org/10.1038/s41598-018-26944-x"
                        />,
                        <ResearchEntry
                            key="muscle-2"
                            separator
                            text={`Ryu, D., Mouchiroud, L., Andreux, P. et al. Urolithin A induces mitophagy and prolongs lifespan in C. elegans and increases muscle function in rodents. Nat Med 22, 879–888 (2016). `}
                            doi="https://doi.org/10.1038/nm.4132"
                        />,
                        <ResearchEntry
                            key="muscle-3"
                            separator
                            text={`Luan P, D'Amico D, Andreux PA, Laurila PP, Wohlwend M, Li H, Imamura de Lima T, Place N, Rinsch C, Zanou N, Auwerx J. Urolithin A improves muscle function by inducing mitophagy in muscular dystrophy. Sci Transl Med 13: eabb0319, 2021. `}
                            doi="doi:10.1126/scitranslmed.abb0319"
                        />
                    ]
                }
            };

            return data[normalizedId] ?? data["0"];
        }
    

export default BodyPopover

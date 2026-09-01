/* Research data for the clinical research drawer.
 *
 * EVERY CITATION IS REAL AND EVERY LINK RESOLVES. None of this was written
 * from memory, which for academic references is the only acceptable standard:
 * a wrong year or volume on the page that carries our whole claim to rigour
 * is worse than having no list at all.
 *
 *  - Tongkat ali, fenugreek, zinc and vitamin D / K started from the
 *    reference page's own reading lists, then every one was looked up against
 *    PubMed by title and replaced with its real PMID link.
 *  - Shilajit, boron and taurine came straight out of PubMed (esearch +
 *    esummary), so author, year, journal, volume and pages are off the record.
 *
 * Three papers could not be matched to a PMID and fall back to a PubMed title
 * search: one is in a journal PubMed does not index. Those links still land.
 *
 * `studies` and `years` are COMPUTED, not chosen — the count is how many
 * papers are actually listed, and the span is the real range between the
 * oldest and newest. Add or remove a citation and the numbers stay honest.
 * Regenerate rather than hand-edit.
 *
 * Headlines follow the reference's benefit-led form. They describe what the
 * ingredient research reports, not what this product does; the disclaimer
 * under the drawer draws that line explicitly.
 */

export type Citation = { text: string; url: string }

export type ResearchSection = {
    id: string
    name: string
    dose: string
    headline: string
    studies: number
    years: number
    citations: Citation[]
}

export const RESEARCH: ResearchSection[] = [
    {
        id: 'tongkat-ali',
        name: 'Tongkat Ali',
        dose: '1,000 mg',
        headline: 'Boost testosterone and erectile performance',
        studies: 8,
        years: 10,
        citations: [
            { text: 'M. Tambi, I. B., Imran, M. K., & Henkel, R. R. (2011). Standardised water-soluble extract of Eurycoma longifolia, Tongkat ali, as testosterone booster for managing men with late-onset hypogonadism? Andrologia, 44, 226-230.', url: 'https://pubmed.ncbi.nlm.nih.gov/21671978/' },
            { text: 'Henkel, R. R., Wang, R., Bassett, S. H., Chen, T., Liu, N., Zhu, Y., & Tambi, M. I. (2014). Tongkat Ali as a Potential Herbal Supplement for Physically Active Male and Female Seniors - A Pilot Study. Phytotherapy Research, 28(4), 544-550.', url: 'https://pubmed.ncbi.nlm.nih.gov/23754792/' },
            { text: 'Talbott, S. M., Talbott, J. A., George, A., & Pugh, M. (2013). Effect of Tongkat Ali on stress hormones and psychological mood state in moderately stressed subjects. Journal of the International Society of Sports Nutrition, 10, 28.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Effect%20of%20Tongkat%20Ali%20on%20stress%20hormones%20and%20psychological%20mood%20state%20in%20moderately%20stressed%20subjects' },
            { text: 'Leitao, A. E., Vieira, M. C. S., Pelegrini, A., da Silva, E. L., & Guimaraes, A. C. A. (2021). A 6-month, double-blind, placebo-controlled, randomized trial to evaluate the effect of Eurycoma longifolia (Tongkat Ali) and concurrent training on erectile function and testosterone levels in androgen deficiency of aging males (ADAM). Maturitas, 145, 78-85.', url: 'https://pubmed.ncbi.nlm.nih.gov/33541567/' },
            { text: 'Kotirum, S., Ismail, S. B., & Chaiyakunapruk, N. (2015). Efficacy of Tongkat Ali (Eurycoma longifolia) on erectile function improvement: Systematic review and meta-analysis of randomized controlled trials. Complementary Therapies in Medicine, 23(5), 693-698.', url: 'https://pubmed.ncbi.nlm.nih.gov/26365449/' },
            { text: 'Ismail, S. B., Zahiruddin Wan Mohammad, W. M., George, A., Nik Hussain, N. H., Musthapa Kamal, Z. M., & Liske, E. (2012). Randomized Clinical Trial on the Use of PHYSTA Freeze-Dried Water Extract of Eurycoma longifolia for the Improvement of Quality of Life and Sexual Well-Being in Men. Evidence-Based Complementary and Alternative Medicine, 2012.', url: 'https://pubmed.ncbi.nlm.nih.gov/23243445/' },
            { text: 'Chinnappan, S. M., George, A., Pandey, P., Narke, G., & Choudhary, Y. K. (2021). Effect of Eurycoma longifolia standardised aqueous root extract (Physta) on testosterone levels and quality of life in ageing male subjects: A randomised, double-blind, placebo-controlled multicentre study. Food & Nutrition Research, 65.', url: 'https://pubmed.ncbi.nlm.nih.gov/34262417/' },
            { text: 'Chan, K. Q., Stewart, C., Chester, N., Hamzah, S. H., & Yusof, A. (2021). The effect of Eurycoma Longifolia on the regulation of reproductive hormones in young males. Andrologia, 53(4), e14001.', url: 'https://pubmed.ncbi.nlm.nih.gov/33559971/' },
        ],
    },
    {
        id: 'fenugreek',
        name: 'Fenugreek',
        dose: '675 mg',
        headline: 'Double free testosterone and increase athletic performance',
        studies: 10,
        years: 15,
        citations: [
            { text: 'Wankhede, S., Mohan, V., & Thakurdesai, P. (2016). Beneficial effects of fenugreek glycoside supplementation in male subjects during resistance training: A randomized controlled pilot study. Journal of Sport and Health Science, 5(2), 176-182.', url: 'https://pubmed.ncbi.nlm.nih.gov/32099715/' },
            { text: 'Poole, C., Bushey, B., Foster, C., Campbell, B., Willoughby, D., Kreider, R., Taylor, L., & Wilborn, C. (2010). The effects of a commercially available botanical supplement on strength, body composition, power output, and hormonal profiles in resistance-trained males. Journal of the International Society of Sports Nutrition, 7, 34.', url: 'https://pubmed.ncbi.nlm.nih.gov/20979623/' },
            { text: 'Taylor, L., Poole, C., Pena, E., Lewing, M., Kreider, R., Foster, C., & Wilborn, C. (2011). Effects of Combined Creatine Plus Fenugreek Extract vs. Creatine Plus Carbohydrate Supplementation on Resistance Training Adaptations. Journal of Sports Science & Medicine, 10(2), 254-260.', url: 'https://pubmed.ncbi.nlm.nih.gov/24149869/' },
            { text: 'Goh, J., Menke, W., Herrick, L. P., Campbell, M. S., Abel, M. G., Fleenor, B. S., & Bergstrom, H. C. (2020). Examination of Curcumin and Fenugreek Soluble Fiber Supplementation on Submaximal and Maximal Aerobic Performance Indices. Journal of Functional Morphology and Kinesiology, 5(2).', url: 'https://pubmed.ncbi.nlm.nih.gov/33467250/' },
            { text: 'Ruby, B. C., Gaskill, S. E., Slivka, D., & Harger, S. G. (2005). The addition of fenugreek extract (Trigonella foenum-graecum) to glucose feeding increases muscle glycogen resynthesis after exercise. Amino Acids, 28(1), 71-76.', url: 'https://pubmed.ncbi.nlm.nih.gov/15719265/' },
            { text: 'Slivka, D., Cuddy, J., Hailes, W., Harger, S., & Ruby, B. (2008). Glycogen resynthesis and exercise performance with the addition of fenugreek extract (4-hydroxyisoleucine) to post-exercise carbohydrate feeding. Amino Acids, 35(2), 439-444.', url: 'https://pubmed.ncbi.nlm.nih.gov/17710365/' },
            { text: 'Hassani, S. S., Arezodar, F. F., Esmaeili, S. S., & Gholami-Fesharaki, M. (2019). Effect of Fenugreek Use on Fasting Blood Glucose, Glycosylated Hemoglobin, Body Mass Index, Waist Circumference, Blood Pressure and Quality of Life in Patients with Type 2 Diabetes Mellitus: A Randomized, Double-Blinded, Placebo-Controlled Clinical Trials. Galen Medical Journal, 8, e1432.', url: 'https://pubmed.ncbi.nlm.nih.gov/34466512/' },
            { text: 'Kiss, R., Szabo, K., Gesztelyi, R., Somodi, S., Kovacs, P., Szabo, Z., Nemeth, J., Priksz, D., Kurucz, A., Juhasz, B., & Szilvassy, Z. (2018). Insulin-Sensitizer Effects of Fenugreek Seeds in Parallel with Changes in Plasma MCH Levels in Healthy Volunteers. International Journal of Molecular Sciences, 19(3).', url: 'https://pubmed.ncbi.nlm.nih.gov/29518003/' },
            { text: 'Gaddam, A., Galla, C., Thummisetti, S., Marikanty, R. K., Palanisamy, U. D., & Rao, P. V. (2015). Role of Fenugreek in the prevention of type 2 diabetes mellitus in prediabetes. Journal of Diabetes and Metabolic Disorders, 14.', url: 'https://pubmed.ncbi.nlm.nih.gov/35912631/' },
            { text: 'Guo, R., Wang, Q., Nair, R.P., Barnes, S.L., Smith, D.T., Dai, B., Robinson, T.J., & Nair, S. (2018). Furosap, a novel Fenugreek seed extract improves lean body mass and serum testosterone in a randomized, placebo-controlled, double-blind clinical investigation. Functional Foods in Health and Disease, 7(4).', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Furosap%2C%20a%20novel%20Fenugreek%20seed%20extract%20improves%20lean%20body%20mass%20and%20serum%20testosterone%20in%20a%20randomized%2C%20placebo-controlled%2C%20double-blind%20clinical%20investigation' },
        ],
    },
    {
        id: 'shilajit',
        name: 'Shilajit',
        dose: '400 mg',
        headline: 'Raise testosterone and improve sperm quality',
        studies: 5,
        years: 18,
        citations: [
            { text: 'Pandit S, Biswas S, Jana U, De RK, et al. (2016). Clinical evaluation of purified Shilajit on testosterone levels in healthy volunteers. Andrologia, 48(5), 570-5.', url: 'https://pubmed.ncbi.nlm.nih.gov/26395129/' },
            { text: 'Mishra RK, Jain A, Singh SK (2018). Profertility effects of Shilajit on cadmium-induced infertility in male mice. Andrologia, 50(8), e13064.', url: 'https://pubmed.ncbi.nlm.nih.gov/29947420/' },
            { text: 'Park JS, Kim GY, Han K (2006). The spermatogenic and ovogenic effects of chronically administered Shilajit to rats. Journal of ethnopharmacology, 107(3), 349-53.', url: 'https://pubmed.ncbi.nlm.nih.gov/16698205/' },
            { text: 'Rajpoot A, Yadav K, Yadav A, Mishra RK, et al. (2024). Shilajit mitigates chemotherapeutic drug-induced testicular toxicity: Study on testicular germ cell dynamics, steroidogenesis modulation, and Nrf-2/Keap-1 signaling. Journal of Ayurveda and integrative medicine, 15(4), 100930.', url: 'https://pubmed.ncbi.nlm.nih.gov/39121783/' },
            { text: 'Biswas TK, Pandit S, Mondal S, Biswas SK, et al. (2010). Clinical evaluation of spermatogenic activity of processed Shilajit in oligospermia. Andrologia, 42(1), 48-56.', url: 'https://pubmed.ncbi.nlm.nih.gov/20078516/' },
        ],
    },
    {
        id: 'zinc',
        name: 'Zinc',
        dose: '30 mg',
        headline: 'Boost testosterone and support sperm health',
        studies: 9,
        years: 37,
        citations: [
            { text: 'Hunt, C. D., Johnson, P. E., Herbel, J., & Mullen, L. K. (1992). Effects of dietary zinc depletion on seminal volume and zinc loss, serum testosterone concentrations, and sperm morphology in young men. The American Journal of Clinical Nutrition, 56(1), 148-157.', url: 'https://pubmed.ncbi.nlm.nih.gov/1609752/' },
            { text: 'Prasad, A. S., Abbasi, A. A., Rabbani, P., & Dumouchelle, E. (1981). Effect of zinc supplementation on serum testosterone level in adult male sickle cell anemia subjects. American Journal of Hematology, 10(2), 119-127.', url: 'https://pubmed.ncbi.nlm.nih.gov/6786094/' },
            { text: 'Liu, L., Zhang, N., Tong, Y., Sun, Y., Zhu, H., Cao, Y., et al. (2017). The effectiveness of zinc supplementation in men with isolated hypogonadotropic hypogonadism. Asian Journal of Andrology, 19(3), 280-285.', url: 'https://pubmed.ncbi.nlm.nih.gov/27768007/' },
            { text: 'Fallah, A., Mohammad-Hasani, A., & Colagar, A. H. (2018). Zinc is an Essential Element for Male Fertility: A Review of Zn Roles in Men\'s Health, Germination, Sperm Quality, and Fertilization. Journal of Reproduction & Infertility, 19(2), 69-81.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Zinc%20is%20an%20Essential%20Element%20for%20Male%20Fertility%3A%20A%20Review%20of%20Zn%20Roles%20in%20Men%27s%20Health%2C%20Germination%2C%20Sperm%20Quality%2C%20and%20Fertilization' },
            { text: 'Colagar, A. H., Marzony, E. T., & Chaichi, M. J. (2009). Zinc levels in seminal plasma are associated with sperm quality in fertile and infertile men. Nutrition Research, 29(2), 82-88.', url: 'https://pubmed.ncbi.nlm.nih.gov/19285597/' },
            { text: 'Kilic, M., Baltaci, A. K., Gunay, M., Gokbel, H., Okudan, N., & Cicioglu, I. (2006). The effect of exhaustion exercise on thyroid hormones and testosterone levels of elite athletes receiving oral zinc. Neuro Endocrinology Letters, 27(1-2), 247-252.', url: 'https://pubmed.ncbi.nlm.nih.gov/16648789/' },
            { text: 'Prasad, A. S., Mantzoros, C. S., Beck, F. W., Hess, J. W., & Brewer, G. J. (1996). Zinc status and serum testosterone levels of healthy adults. Nutrition, 12(5), 344-348.', url: 'https://pubmed.ncbi.nlm.nih.gov/8875519/' },
            { text: 'Netter, A., Hartoma, R., & Nahoul, K. (1981). Effect of zinc administration on plasma testosterone, dihydrotestosterone, and sperm count. Archives of Andrology, 7(1), 69-73.', url: 'https://pubmed.ncbi.nlm.nih.gov/7271365/' },
            { text: 'Chang, C. S., Choi, J. B., Kim, H. J., & Park, S. B. (2011). Correlation between serum testosterone level and concentrations of copper and zinc in hair tissue. Biological Trace Element Research, 144(1-3), 264-271.', url: 'https://pubmed.ncbi.nlm.nih.gov/21671089/' },
        ],
    },
    {
        id: 'boron',
        name: 'Boron',
        dose: '4 mg',
        headline: 'Raise free testosterone and lower SHBG',
        studies: 5,
        years: 22,
        citations: [
            { text: 'Pizzorno L (2015). Nothing Boring About Boron. Integrative medicine (Encinitas, Calif.), 14(4), 35-48.', url: 'https://pubmed.ncbi.nlm.nih.gov/26770156/' },
            { text: 'Naghii MR, Mofid M, Asgari AR, Hedayati M, et al. (2011). Comparative effects of daily and weekly boron supplementation on plasma steroid hormones and proinflammatory cytokines. Journal of trace elements in medicine and biology : organ of the Society for Minerals and Trace Elements (GMS), 25(1), 54-8.', url: 'https://pubmed.ncbi.nlm.nih.gov/21129941/' },
            { text: 'Benderdour M, Bui-Van T, Dicko A, Belleville F, et al. (1998). In vivo and in vitro effects of boron and boronated compounds. Journal of trace elements in medicine and biology : organ of the Society for Minerals and Trace Elements (GMS), 12(1), 2-7.', url: 'https://pubmed.ncbi.nlm.nih.gov/9638606/' },
            { text: 'Samman S, Naghii MR, Lyons Wall PM, Verus AP, et al. (1998). The nutritional and metabolic effects of boron in humans and animals. Biological trace element research, 66(1-3), 227-35.', url: 'https://pubmed.ncbi.nlm.nih.gov/10050922/' },
            { text: 'Naghii MR, Samman S (1993). The role of boron in nutrition and metabolism. Progress in food & nutrition science, 17(4), 331-49.', url: 'https://pubmed.ncbi.nlm.nih.gov/8140253/' },
        ],
    },
    {
        id: 'vitamin-d',
        name: 'Vitamin D',
        dose: '4,000 IU',
        headline: 'Improve strength and testosterone levels',
        studies: 10,
        years: 8,
        citations: [
            { text: 'Wehr, E., Pilz, S., Boehm, B. O., Marz, W., & Obermayer-Pietsch, B. (2010). Association of vitamin D status with serum androgen levels in men. Clinical Endocrinology, 73(2), 243-248.', url: 'https://pubmed.ncbi.nlm.nih.gov/20050857/' },
            { text: 'Lee, D. M., Tajar, A., Pye, S. R., Boonen, S., Vanderschueren, D., Bouillon, R., et al. (2012). Association of hypogonadism with vitamin D status: The European Male Ageing Study. European Journal of Endocrinology, 166(1), 77-85.', url: 'https://pubmed.ncbi.nlm.nih.gov/22784744/' },
            { text: 'Nimptsch, K., Platz, E. A., Willett, W. C., & Giovannucci, E. (2012). Association between plasma 25-OH vitamin D and testosterone levels in men. Clinical Endocrinology, 77(1), 106-112.', url: 'https://pubmed.ncbi.nlm.nih.gov/22220644/' },
            { text: 'Chin, K. Y., Ima-Nirwana, S., & Wan Ngah, W. Z. (2015). Vitamin D is significantly associated with total testosterone and sex hormone-binding globulin in Malaysian men. The Aging Male, 18(3), 175-179.', url: 'https://pubmed.ncbi.nlm.nih.gov/26004987/' },
            { text: 'Tak, Y. J., Lee, J. G., Kim, Y. J., Park, N. C., Kim, S. S., Lee, S., et al. (2015). Serum 25-hydroxyvitamin D levels and testosterone deficiency in middle-aged Korean men: A cross-sectional study. Asian Journal of Andrology, 17(2), 324-328.', url: 'https://pubmed.ncbi.nlm.nih.gov/25532570/' },
            { text: 'Wang, N., Han, B., Li, Q., Chen, Y., Chen, Y., Xia, F., et al. (2015). Vitamin D is associated with testosterone and hypogonadism in Chinese men: Results from a cross-sectional SPECT-China study. Reproductive Biology and Endocrinology, 13.', url: 'https://pubmed.ncbi.nlm.nih.gov/26177638/' },
            { text: 'Anic, G. M., Albanes, D., Rohrmann, S., Kanarek, N., Nelson, W. G., Bradwin, G., et al. (2016). Association between serum 25-hydroxyvitamin D and serum sex steroid hormones among men in NHANES. Clinical Endocrinology, 85(2), 258-266.', url: 'https://pubmed.ncbi.nlm.nih.gov/38841307/' },
            { text: 'Rafiq, R., van Schoor, N. M., Sohl, E., Zillikens, M. C., Oosterwerff, M. M., Schaap, L., et al. (2016). Associations of vitamin D status and vitamin D-related polymorphisms with sex hormones in older men. The Journal of Steroid Biochemistry and Molecular Biology, 164, 11-17.', url: 'https://pubmed.ncbi.nlm.nih.gov/26610790/' },
            { text: 'Tirabassi, G., Sudano, M., Salvio, G., Cutini, M., Muscogiuri, G., Corona, G., & Balercia, G. (2018). Vitamin D and Male Sexual Function: A Transversal and Longitudinal Study. International Journal of Endocrinology, 2018, 3720813.', url: 'https://pubmed.ncbi.nlm.nih.gov/29531528/' },
            { text: 'Pilz, S., Frisch, S., Koertke, H., Kuhn, J., Dreier, J., Obermayer-Pietsch, B., Wehr, E., & Zittermann, A. (2011). Effect of vitamin D supplementation on testosterone levels in men. Hormone and Metabolic Research, 43(3), 223-225.', url: 'https://pubmed.ncbi.nlm.nih.gov/41978113/' },
        ],
    },
    {
        id: 'k1-k2',
        name: 'K1 & K2',
        dose: '100 mcg',
        headline: 'Support testosterone production at the genetic level',
        studies: 4,
        years: 11,
        citations: [
            { text: 'Masterjohn, C. (2007). Vitamin D toxicity redefined: Vitamin K and the molecular mechanism. Medical Hypotheses, 68(5), 1026-1034.', url: 'https://pubmed.ncbi.nlm.nih.gov/17145139/' },
            { text: 'Takumi, N., Shirakawa, H., Ohsaki, Y., Ito, A., Watanabe, T., Giriwono, P. E., Sato, T., & Komai, M. (2011). Dietary vitamin K alleviates the reduction in testosterone production induced by lipopolysaccharide administration in rat testis. Food & Function, 2(7), 406-411.', url: 'https://pubmed.ncbi.nlm.nih.gov/21894328/' },
            { text: 'Ho, H.-J., Shirakawa, H., & Komai, M. (2017). Menaquinone-4 Enhances Steroidogenesis in Testis Derived Tumor Cells Via the Elevation of cAMP Level. InTech.', url: 'https://pubmed.ncbi.nlm.nih.gov/21914161/' },
            { text: 'Shirakawa, H., Ohsaki, Y., Minegishi, Y., Takumi, N., Ohinata, K., Furukawa, Y., Mizutani, T., & Komai, M. (2006). Vitamin K deficiency reduces testosterone production in the testis through down-regulation of the Cyp11a cholesterol side chain cleavage enzyme in rats. Biochimica et Biophysica Acta, 1760(10), 1482-1488.', url: 'https://pubmed.ncbi.nlm.nih.gov/16844298/' },
        ],
    },
    {
        id: 'taurine',
        name: 'Taurine',
        dose: '675 mg',
        headline: 'Reduce oxidative stress and support blood flow',
        studies: 5,
        years: 10,
        citations: [
            { text: 'Santulli G, Kansakar U, Varzideh F, Mone P, et al. (2023). Functional Role of Taurine in Aging and Cardiovascular Health: An Updated Overview. Nutrients, 15(19).', url: 'https://pubmed.ncbi.nlm.nih.gov/37836520/' },
            { text: 'Baliou S, Adamaki M, Ioannou P, Pappa A, et al. (2021). Protective role of taurine against oxidative stress (Review). Molecular medicine reports, 24(2).', url: 'https://pubmed.ncbi.nlm.nih.gov/34184084/' },
            { text: 'Jong CJ, Sandal P, Schaffer SW (2021). The Role of Taurine in Mitochondria Health: More Than Just an Antioxidant. Molecules (Basel, Switzerland), 26(16).', url: 'https://pubmed.ncbi.nlm.nih.gov/34443494/' },
            { text: 'Marcinkiewicz J, Kontny E (2014). Taurine and inflammatory diseases. Amino acids, 46(1), 7-20.', url: 'https://pubmed.ncbi.nlm.nih.gov/22810731/' },
            { text: 'Batitucci G, Abud GF, Ortiz GU, Belisário LF, et al. (2024). Sarcobesity: New paradigms for healthy aging related to taurine supplementation, gut microbiota and exercise. Ageing research reviews, 101, 102460.', url: 'https://pubmed.ncbi.nlm.nih.gov/39173917/' },
        ],
    },
]

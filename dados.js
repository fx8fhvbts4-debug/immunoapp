window.BANCO_DADOS = {
    // ========================================================================
    // ASSUNTO 1: INTRODUÇÃO
    // ========================================================================
    "intro": {
        titulo: "Introdução e conceitos básicos de imunologia",

        // --- RESUMO TEÓRICO ---
        resumo: `
            <h2 style="margin-top: 0;">1. Definição e Contexto Histórico</h2>
            <p>O termo <em>imunidade</em> (do latim <em>imunitas</em>) historicamente significa proteção contra doenças, especialmente as infecciosas. O sistema imune é o conjunto de células e moléculas responsáveis por essa proteção, e sua resposta coordenada é chamada de <strong>resposta imune</strong>. Embora sua função fisiológica primária seja a defesa contra microrganismos, o sistema imune pode reagir a substâncias estranhas não infecciosas e, em certas condições, até mesmo a moléculas próprias, resultando em doenças autoimunes.</p>
            
            <h3>Marcos Históricos Notáveis:</h3>
            <ul>
                <li><strong>Século V a.C.:</strong> O historiador grego Thucydides foi o primeiro a registrar o conceito de imunidade, observando que pessoas que se recuperavam da praga em Atenas não contraíam a doença novamente.</li>
                <li><strong>Práticas Antigas:</strong> O costume chinês de inalar pó de lesões de varíola para induzir resistência demonstra um conhecimento empírico precoce do princípio da imunização.</li>
                <li><strong>1798:</strong> Edward Jenner, um médico inglês, realizou o experimento que marcou o início da imunologia moderna. Ele observou que ordenhadoras que contraíam a varíola bovina (uma doença branda) tornavam-se imunes à varíola humana (uma doença grave). Ao inocular material de uma pústula de varíola bovina em um menino, ele induziu proteção contra a varíola humana. Este procedimento, chamado de <strong>vacinação</strong> (do latim <em>vaccinus</em>, "a partir de vacas"), continua sendo o método mais eficaz para prevenir infecções.</li>
                <li><strong>1980:</strong> A Organização Mundial da Saúde anunciou a erradicação global da varíola, um testemunho do sucesso dos programas de vacinação.</li>
            </ul>

            <h2>2. Os Pilares da Defesa: Imunidade Inata e Adaptativa</h2>
            <p>O sistema de defesa do hospedeiro é composto por dois sistemas interligados que funcionam de forma cooperativa.</p>

            <h3>2.1. Imunidade Inata</h3>
            <p>A imunidade inata (ou natural) representa a primeira linha de defesa. Seus mecanismos estão sempre presentes, mesmo antes da infecção, e são preparados para responder rapidamente.</p>
            <ul>
                <li><strong>Velocidade:</strong> Resposta imediata, ocorrendo nas primeiras horas após a infecção.</li>
                <li><strong>Especificidade:</strong> Reconhece estruturas moleculares comuns a grupos de microrganismos e a moléculas liberadas por células danificadas. Não distingue diferenças sutis entre patógenos.</li>
                <li><strong>Memória:</strong> Não gera memória imunológica; a resposta é a mesma em cada exposição.</li>
            </ul>
            <p><strong>Componentes Principais:</strong></p>
            <ul>
                <li><strong>Barreiras Físicas e Químicas:</strong> Epitélio da pele e mucosas, e substâncias antimicrobianas.</li>
                <li><strong>Células:</strong> Fagócitos (neutrófilos e macrófagos), células dendríticas e células <em>Natural Killer</em> (NK).</li>
                <li><strong>Proteínas Sanguíneas:</strong> Sistema complemento e outros mediadores inflamatórios.</li>
            </ul>

            <h3>2.2. Imunidade Adaptativa</h3>
            <p>A imunidade adaptativa (ou adquirida) é estimulada pela exposição a agentes infecciosos e se desenvolve de forma mais tardia, porém mais potente.</p>
            <ul>
                <li><strong>Velocidade:</strong> Leva dias para se desenvolver.</li>
                <li><strong>Especificidade:</strong> Reconhece e reage a um grande número de substâncias específicas (antígenos). É capaz de distinguir diferenças sutis entre antígenos distintos.</li>
                <li><strong>Memória:</strong> Característica fundamental que permite respostas mais rápidas, maiores e mais eficazes a exposições subsequentes ao mesmo microrganismo.</li>
            </ul>
            <p><strong>Componentes Principais:</strong></p>
            <ul>
                <li><strong>Células:</strong> Linfócitos (células B e T).</li>
                <li><strong>Moléculas:</strong> Anticorpos (produzidos por linfócitos B) e citocinas (produzidas por linfócitos T). (Figura 1)</li>
            
                <div style="text-align: center; margin: 20px 0;">
                    <img src="Inata_adaptativa.png" alt="Componentes da imunidade inata e adaptativa" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Principais componentes da imunidade inata e adaptativa.</p>
                </div>
            </ul>

            <p>A tabela a seguir resume as principais diferenças entre os dois sistemas:</p>
            <table class="info-table">
                <tr>
                    <th>Característica</th>
                    <th>Imunidade Inata</th>
                    <th>Imunidade Adaptativa</th>
                </tr>
                <tr>
                    <td><strong>Especificidade</strong></td>
                    <td>Para moléculas compartilhadas por grupos de microrganismos.</td>
                    <td>Para antígenos microbianos e não microbianos.</td>
                </tr>
                <tr>
                    <td><strong>Diversidade</strong></td>
                    <td>Limitada; codificada em células germinativas.</td>
                    <td>Muito grande; receptores produzidos por recombinação somática.</td>
                </tr>
                <tr>
                    <td><strong>Memória</strong></td>
                    <td>Não</td>
                    <td>Sim</td>
                </tr>
                <tr>
                    <td><strong>Não reatividade ao próprio</strong></td>
                    <td>Sim</td>
                    <td>Sim</td>
                </tr>
                <tr>
                    <td><strong>Componentes Celulares</strong></td>
                    <td>Fagócitos (macrófagos, neutrófilos), células NK.</td>
                    <td>Linfócitos.</td>
                </tr>
                <tr>
                    <td><strong>Proteínas Sanguíneas</strong></td>
                    <td>Complemento, outros.</td>
                    <td>Anticorpos.</td>
                </tr>
            </table>

            <h2>3. Tipos de Resposta Imune Adaptativa</h2>
            <p>A imunidade adaptativa se divide em duas categorias principais, mediadas por diferentes tipos de linfócitos, que atuam para eliminar diferentes classes de microrganismos.</p>

            <h3>3.1. Imunidade Humoral</h3>
            <p>É mediada por <strong>anticorpos</strong>, moléculas produzidas por <strong>linfócitos B (células B)</strong> que circulam no sangue e nas secreções mucosas.</p>
            <ul>
                <li><strong>Alvo Principal:</strong> Microrganismos extracelulares (como bactérias no sangue) e suas toxinas.</li>
                <li><strong>Funções:</strong>
                    <ul>
                        <li><strong>Neutralização:</strong> Bloqueiam a capacidade dos microrganismos de infectar as células do hospedeiro.</li>
                        <li><strong>Opsonização:</strong> "Marcam" os microrganismos para serem fagocitados e destruídos por células como os macrófagos.</li>
                        <li><strong>Ativação do Sistema Complemento:</strong> Desencadeiam uma cascata de proteínas que ajuda a eliminar os patógenos.</li>
                    </ul>
                </li>
            </ul>

            <h3>3.2. Imunidade Mediada por Célula (ou Celular)</h3>
            <p>É mediada por <strong>linfócitos T (células T)</strong>.</p>
            <ul>
                <li><strong>Alvo Principal:</strong> Microrganismos intracelulares (como vírus e algumas bactérias) que sobrevivem e proliferam dentro das células do hospedeiro.</li>
                <li><strong>Funções:</strong>
                    <ul>
                        <li><strong>Ativação de Fagócitos:</strong> Linfócitos T auxiliares secretam citocinas que aumentam a capacidade dos macrófagos de destruir os microrganismos que fagocitaram.</li>
                        <li><strong>Morte de Células Infectadas:</strong> Linfócitos T citotóxicos (CTLs) reconhecem e matam diretamente as células infectadas, eliminando os reservatórios da infecção.</li>
                    </ul>
                    <div style="text-align: center; margin: 20px 0;">
                        <img src="Celular_humoral.png" alt="Diferenças entre imunidade celular e humoral" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Figura: Diferenças entre imunidade celular e humoral</p>
                    </div>
                </li>
            </ul>

            <h3>3.3. Imunidade Ativa vs. Passiva</h3>
            <p>A proteção imunológica pode ser adquirida de duas maneiras:</p>
            <ul>
                <li><strong>Imunidade Ativa:</strong> Induzida pela exposição a um antígeno, seja por infecção natural ou por vacinação. O indivíduo desempenha um papel ativo na montagem da resposta e gera memória imunológica de longa duração.</li>
                <li><strong>Imunidade Passiva:</strong> Conferida pela transferência de anticorpos ou linfócitos de um indivíduo imunizado para um não imunizado. Fornece proteção imediata, mas é temporária e não gera memória. Exemplos incluem a transferência de anticorpos maternos para o feto através da placenta e a administração de antitoxinas para tratar infecções letais como a raiva.</li>
            </ul>

            <h2>4. Características Fundamentais da Resposta Imune Adaptativa</h2>
            <p>As respostas adaptativas possuem propriedades essenciais que garantem sua eficácia e segurança.</p>
            <table class="info-table">
                <tr>
                    <th>Característica</th>
                    <th>Significância Funcional</th>
                </tr>
                <tr>
                    <td><strong>Especificidade</strong></td>
                    <td>Garante que a resposta imune seja direcionada apenas ao microrganismo que a iniciou.</td>
                </tr>
                <tr>
                    <td><strong>Diversidade</strong></td>
                    <td>Permite ao sistema imune responder a uma vasta variedade de antígenos (estimada entre 10⁷ e 10⁹).</td>
                </tr>
                <tr>
                    <td><strong>Memória</strong></td>
                    <td>Aumenta a capacidade de combater infecções repetidas pelo mesmo microrganismo, com respostas secundárias mais rápidas e fortes.</td>
                </tr>
                <tr>
                    <td><strong>Expansão Clonal</strong></td>
                    <td>Aumenta o número de linfócitos específicos para um antígeno, permitindo que a defesa acompanhe a proliferação do patógeno.</td>
                </tr>
                <tr>
                    <td><strong>Especialização</strong></td>
                    <td>Gera respostas otimizadas para diferentes tipos de microrganismos (ex: humoral para extracelulares, celular para intracelulares).</td>
                </tr>
                <tr>
                    <td><strong>Contração e Homeostase</strong></td>
                    <td>Permite que o sistema imune retorne ao seu estado de repouso após a eliminação do antígeno, pronto para responder a novas ameaças.</td>
                </tr>
                <tr>
                    <td><strong>Não reatividade ao próprio</strong></td>
                    <td>Previne lesões ao hospedeiro (doenças autoimunes) ao manter tolerância aos próprios antígenos.</td>
                </tr>
            </table>

            <h2>5. A Sequência de uma Resposta Imune Adaptativa</h2>
            <p>As respostas adaptativas se desenvolvem em fases sequenciais e coordenadas.</p>
            <ol>
                <li><strong>Captura e Apresentação de Antígenos:</strong> Células especializadas, como as <em>células dendríticas</em>, capturam microrganismos nos tecidos, processam-nos e transportam seus antígenos para os órgãos linfoides (linfonodos e baço).</li>
                <li><strong>Reconhecimento do Antígeno (Seleção Clonal):</strong> Nos órgãos linfoides, os antígenos são apresentados aos linfócitos T. Um pequeno número de linfócitos pré-existentes, com receptores específicos para aquele antígeno, o reconhece. O antígeno "seleciona" o clone de linfócitos apropriado para responder.</li>
                <li><strong>Ativação e Proliferação dos Linfócitos:</strong> Após o reconhecimento do antígeno e o recebimento de sinais coestimulatórios, os linfócitos selecionados são ativados, proliferam (expansão clonal) e se diferenciam em células efetoras e células de memória.</li>
                <li><strong>Eliminação do Antígeno (Fase Efetora):</strong>
                    <ul>
                        <li><strong>Linfócitos T auxiliares (CD4+)</strong> secretam citocinas que orquestram a resposta: ativam macrófagos para matar micróbios fagocitados, ajudam os linfócitos B a produzir anticorpos e recrutam outros leucócitos.</li>
                        <li><strong>Linfócitos T citotóxicos (CD8+)</strong> migram para o local da infecção e matam as células do hospedeiro infectadas.</li>
                        <li><strong>Linfócitos B</strong> diferenciam-se em plasmócitos, que produzem grandes quantidades de anticorpos. Os anticorpos neutralizam e eliminam os microrganismos extracelulares.</li>
                    </ul>
                </li>
                <li><strong>Contração (Homeostase):</strong> Após a eliminação do antígeno, a maioria dos linfócitos efetores morre por apoptose, e a resposta diminui.</li>
                <li><strong>Memória:</strong> As <em>células de memória</em> (tanto B quanto T) de longa vida persistem. Elas são mais numerosas e respondem mais rapidamente e eficazmente a uma futura exposição ao mesmo antígeno.</li>
            </ol>
            <div style="text-align: center; margin: 20px 0;">
                <img src="Etapas_imunidade.png" alt="Etapas de ativação da imunidade adaptativa" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Figura: Etapas de ativação da imunidade adaptativa</p>
            </div>

            <div style="text-align: center; margin: 20px 0;">
                <img src="Linfocitos_intro.png" alt="Funções efetoras dos linfócitos T e B" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Figura: Funções efetoras dos linfócitos T e B</p>
            </div>

            <h2>6. Evidência da Eficácia: O Impacto da Vacinação</h2>
            <p>A aplicação prática mais significativa dos princípios da imunologia é a vacinação, que explora a capacidade do sistema imune de gerar memória. A introdução de vacinas eficazes resultou em uma redução impressionante na incidência de doenças infecciosas comuns, conforme ilustrado na tabela abaixo.</p>
            
            <p><strong>Efetividade das Vacinas para Algumas Doenças Infecciosas Comuns (EUA)</strong></p>
            <table class="info-table">
                <tr>
                    <th>Doença</th>
                    <th>Número Máximo de Casos (Ano)</th>
                    <th>Número de Casos em 2009</th>
                    <th>Percentagem de Queda</th>
                </tr>
                <tr>
                    <td>Difteria</td>
                    <td>206.939 (1921)</td>
                    <td>0</td>
                    <td>–99,99%</td>
                </tr>
                <tr>
                    <td>Sarampo</td>
                    <td>894.134 (1941)</td>
                    <td>61</td>
                    <td>–99,99%</td>
                </tr>
                <tr>
                    <td>Caxumba</td>
                    <td>152.209 (1968)</td>
                    <td>982</td>
                    <td>–99,35%</td>
                </tr>
                <tr>
                    <td>Coqueluche (Pertussis)</td>
                    <td>265.269 (1934)</td>
                    <td>13.506</td>
                    <td>–94,72%</td>
                </tr>
                <tr>
                    <td>Pólio (paralítico)</td>
                    <td>21.269 (1952)</td>
                    <td>0</td>
                    <td>–100,0%</td>
                </tr>
                <tr>
                    <td>Rubéola</td>
                    <td>57.688 (1969)</td>
                    <td>4</td>
                    <td>–99,99%</td>
                </tr>
                <tr>
                    <td>Tétano</td>
                    <td>1.560 (1923)</td>
                    <td>14</td>
                    <td>–99,10%</td>
                </tr>
                <tr>
                    <td>Hepatite B</td>
                    <td>26.611 (1985)</td>
                    <td>3.020</td>
                    <td>–87,66%</td>
                </tr>
            </table>
            
            <p>O sucesso da vacinação, culminando na erradicação da varíola e na queda de 100% nos casos de poliomielite paralítica em muitos países, serve como uma prova irrefutável da importância e do poder da resposta imune adaptativa.</p>
        `,

        // --- MÍDIA ---
        midia: {
            audio: "intro_imuno.m4a",
            video: "1. Conceitos básicos.mp4",
            infographics: "1. Introdução e conceitos básicos.pdf"
        },


        // --- FLASHCARDS ---
        flashcards: [
            { q: "Qual a distinção fundamental entre imunidade inata e adaptativa na cinética?", a: "Inata é imediata; Adaptativa é tardia (dias)." },
            { q: "Qual a função da memória imunológica?", a: "Respostas mais rápidas e fortes em reexposições." },
            { q: "Quantos antígenos o sistema adaptativo pode discriminar?", a: "Entre 10^7 e 10^9." },
            { q: "Quem produz anticorpos?", a: "Linfócitos B." },
            { q: "Qual célula mata células infectadas por vírus?", a: "Linfócito T Citotóxico (CD8+)." },
            { q: "O que é imunidade passiva?", a: "Transferência de anticorpos (ex: placenta/soro). Não gera memória." },
            { q: "O que é expansão clonal?", a: "Proliferação dos linfócitos específicos após encontrar o antígeno." },
            { q: "Qual o papel das células dendríticas?", a: "Capturar antígenos e apresentar aos linfócitos T." },
            { q: "O que é autotolerância?", a: "Não reagir contra o próprio corpo." },
            { q: "Quem descobriu a antitoxina?", a: "Behring e Kitasato." },
            { q: "Exemplo de imunidade passiva natural:", a: "Anticorpos maternos via placenta." },
            { q: "Significado de Homeostasia na resposta imune:", a: "Retorno ao estado basal após eliminação do antígeno." },
            { q: "Função das citocinas:", a: "Moléculas mensageiras que regulam a resposta imune." },
            { q: "O que são APCs?", a: "Células Apresentadoras de Antígeno." },
            { q: "O que Edward Jenner fez?", a: "Criou a vacinação contra varíola." }
        ],

        // --- QUIZ ---
        quiz: {
            basico: [
                { q: "Qual é a principal diferença funcional entre a imunidade inata e a imunidade adaptativa no que tange ao tempo de resposta e especificidade?", options: ["A) A imunidade adaptativa é a primeira linha de defesa e responde em minutos.", "B) A imunidade inata possui memória imunológica e melhora com exposições repetidas.", "C) A imunidade inata é a defesa inicial (horas), específica para estruturas compartilhadas por grupos de microrganismos, enquanto a adaptativa é tardia (dias) e altamente específica.", "D) A imunidade adaptativa utiliza barreiras epiteliais, enquanto a inata utiliza anticorpos.", "E) A imunidade inata reconhece antígenos não microbianos, enquanto a adaptativa foca apenas em vírus."], correct: 2, feedback: "A imunidade inata fornece a defesa inicial (0-12 horas) e reconhece estruturas comuns a grupos de microrganismos. A imunidade adaptativa desenvolve-se mais tarde e é capaz de distinguir diferenças sutis entre substâncias distintas (especificidade) e gerar memória." },
                { q: "Sobre a Hipótese da Seleção Clonal, é correto afirmar que:", options: ["A) Os clones de linfócitos específicos para antígenos desenvolvem-se antes e independentemente da exposição ao antígeno.", "B) O antígeno 'ensina' o linfócito a produzir o receptor correto no momento da infecção.", "C) Um único linfócito pode alterar sua especificidade múltiplas vezes para se adaptar a diferentes antígenos.", "D) A expansão clonal ocorre na imunidade inata, mas não na adaptativa.", "E) Os clones são gerados apenas após o contato com células dendríticas infectadas."], correct: 0, feedback: "A hipótese da seleção clonal postula que clones de linfócitos com especificidades distintas já existem antes da exposição. O antígeno apenas seleciona e ativa o clone pré-existente." },
                { q: "A imunidade humoral é mediada por quais componentes e qual é o seu principal alvo?", options: ["A) Linfócitos T citotóxicos; microrganismos intracelulares.", "B) Macrófagos; bactérias no citoplasma.", "C) Linfócitos T auxiliares; ativação de neutrófilos.", "D) Células NK; células infectadas por vírus.", "E) Linfócitos B e anticorpos; microrganismos extracelulares e toxinas."], correct: 4, feedback: "A imunidade humoral é mediada por anticorpos produzidos por linfócitos B e é o principal mecanismo de defesa contra microrganismos extracelulares e suas toxinas." },
                { q: "Qual das alternativas abaixo descreve corretamente a Imunidade Passiva?", options: ["A) É induzida pela infecção natural e gera memória duradoura.", "B) Ocorre pela transferência de soro ou linfócitos de um indivíduo imune, conferindo resistência rápida mas sem gerar memória.", "C) É o processo de vacinação com microrganismos atenuados.", "D) Depende da ativação direta dos linfócitos T do receptor pelo antígeno.", "E) É mediada exclusivamente por células fagocíticas."], correct: 1, feedback: "A imunidade passiva é conferida pela transferência de anticorpos ou células, útil para resistência rápida, mas não gera memória imunológica, pois o indivíduo não montou a resposta por si mesmo." },
                { q: "Qual é a função primária dos Linfócitos T Auxiliares (CD4+)?", options: ["A) Secretar anticorpos para neutralizar toxinas.", "B) Fagocitar bactérias extracelulares.", "C) Matar diretamente células infectadas por vírus.", "D) Secretar citocinas que estimulam a proliferação e diferenciação de células T, B e ativam macrófagos.", "E) Formar barreiras físicas no epitélio intestinal."], correct: 3, feedback: "As células T auxiliares (CD4+) secretam citocinas, funcionando como moléculas mensageiras que ativam outras células (células B, macrófagos) e estimulam a própria proliferação celular." },
                { q: "O que caracteriza a 'memória imunológica' em uma resposta secundária?", options: ["A) Respostas mais rápidas, maiores e qualitativamente melhores (maior afinidade) em comparação à primária.", "B) Uma resposta idêntica à primeira exposição, mas com menos efeitos colaterais.", "C) A capacidade de responder a um antígeno completamente diferente do primeiro.", "D) A ativação exclusiva da imunidade inata na segunda exposição.", "E) A produção exclusiva de anticorpos IgM, sem troca de classe."], correct: 0, feedback: "A memória imunológica permite que, em uma segunda exposição, a resposta seja mais rápida, de maior magnitude e muitas vezes qualitativamente diferente (ex: maior afinidade)." },
                { q: "Quais são os principais componentes da Imunidade Inata?", options: ["A) Anticorpos, Linfócitos B e Linfócitos T.", "B) Células de memória, vacinas e soro.", "C) Barreiras físicas/químicas, células fagocíticas (neutrófilos/macrófagos) e proteínas do complemento.", "D) Moléculas do MHC, Linfócitos T citotóxicos e plasmócitos.", "E) Linfonodos, baço e timo exclusivamente."], correct: 2, feedback: "A imunidade inata consiste em barreiras (epitélio), células fagocíticas, células NK e proteínas sanguíneas como o sistema complemento." },
                { q: "O fenômeno de 'Contração e Homeostasia' ao final de uma resposta imune ocorre principalmente porque:", options: ["A) Os microrganismos se tornam resistentes aos anticorpos.", "B) Os linfócitos ativados privados de estímulo antigênico morrem por apoptose, restando apenas as células de memória.", "C) O sistema imune inato suprime o adaptativo.", "D) Os anticorpos degradam os próprios linfócitos.", "E) As citocinas se tornam tóxicas para o hospedeiro."], correct: 1, feedback: "A contração ocorre porque, após a eliminação do antígeno, o estímulo essencial para a sobrevivência dos linfócitos desaparece, levando a maioria das células ativadas à morte por apoptose, restaurando o equilíbrio (homeostasia)." },
                { q: "Em relação ao reconhecimento de antígenos, qual a diferença crucial entre Linfócitos B e T?", options: ["A) Linfócitos T reconhecem antígenos solúveis livres; Linfócitos B reconhecem apenas antígenos virais.", "B) Linfócitos B precisam que o antígeno seja apresentado via MHC; Linfócitos T não.", "C) Ambos reconhecem a conformação nativa de proteínas inteiras.", "D) Linfócitos T usam anticorpos de membrana; Linfócitos B usam receptores de citocina.", "E) Linfócitos B reconhecem antígenos solúveis/na superfície (conformação nativa); Linfócitos T reconhecem peptídeos apresentados por moléculas de MHC."], correct: 4, feedback: "Linfócitos B reconhecem antígenos extracelulares e de superfície. Linfócitos T têm especificidade restrita a peptídeos ligados a moléculas do MHC na superfície de células apresentadoras." },
                { q: "Qual é a principal função efetora dos Linfócitos T Citotóxicos (CTLs ou CD8+)?", options: ["A) Produzir grandes quantidades de anticorpos IgG.", "B) Apresentar antígenos para as células T auxiliares.", "C) Suprimir a resposta imune para evitar autoimunidade.", "D) Matar células infectadas que apresentam antígenos no citoplasma, eliminando reservatórios de infecção.", "E) Fagocitar bactérias extracelulares encapsuladas."], correct: 3, feedback: "Os CTLs matam células que produzem antígenos estranhos (como vírus) no citoplasma e destroem reservatórios de infecção intracelular." },
                { q: "O que é 'tolerância imunológica' ou 'autotolerância'?", options: ["A) A não reatividade do sistema imune aos antígenos próprios (self).", "B) A capacidade de tolerar infecções crônicas sem sintomas.", "C) A resistência de bactérias a antibióticos.", "D) A capacidade de receber transplantes de qualquer doador.", "E) O aumento da resposta imune após vacinação."], correct: 0, feedback: "Tolerância é a irresponsividade imunológica, especificamente a autotolerância refere-se à não reatividade às substâncias antigênicas do próprio indivíduo." },
                { q: "Qual é o papel das células dendríticas na resposta imune adaptativa?", options: ["A) Produzir anticorpos IgM.", "B) Capturar antígenos, transportá-los aos órgãos linfoides e apresentá-los aos linfócitos T imaturos.", "C) Eliminar parasitas grandes que não podem ser fagocitados.", "D) Formar o sistema complemento no sangue.", "E) Diferenciar-se em células de memória de vida longa."], correct: 1, feedback: "As células dendríticas são as APCs mais especializadas; elas capturam antígenos do ambiente, processam e apresentam aos linfócitos T para iniciar a resposta." },
                { q: "As citocinas são moléculas cruciais no sistema imune. Qual das seguintes afirmações melhor define sua função geral?", options: ["A) São receptores de membrana que ligam antígenos diretamente.", "B) São toxinas usadas para perfurar a parede de bactérias.", "C) São fragmentos de DNA viral.", "D) São lipídios que formam a barreira da pele.", "E) São proteínas secretadas que regulam e coordenam atividades das células da imunidade inata e adaptativa (mensageiras)."], correct: 4, feedback: "As citocinas constituem um grupo de proteínas secretadas que regulam o crescimento, diferenciação e ativação das células imunes, coordenando a resposta." },
                { q: "A vacinação é considerada o método mais efetivo de prevenção de infecções. Ela funciona induzindo:", options: ["A) Imunidade passiva temporária.", "B) Imunidade inata inespecífica.", "C) Imunidade ativa e memória imunológica sem causar a doença grave.", "D) Tolerância aos patógenos.", "E) Produção exclusiva de células T regulatórias."], correct: 2, feedback: "A vacinação induz imunidade ativa, permitindo que o indivíduo responda ao antígeno microbiano e gere proteção (memória) para exposições subsequentes." },
                { q: "Qual das alternativas abaixo descreve corretamente a 'Expansão Clonal'?", options: ["A) O aumento do tamanho físico de um único linfócito.", "B) A fusão de vários linfócitos para formar uma célula gigante.", "C) A conversão de um linfócito B em um linfócito T.", "D) O aumento no número de células que expressam receptores idênticos para um antígeno após a estimulação.", "E) A migração de linfócitos da medula óssea para o timo."], correct: 3, feedback: "Expansão clonal refere-se à proliferação considerável de linfócitos específicos após exposição ao antígeno, gerando um grande número de células com receptores idênticos." },
                { q: "O que significa 'opsonização' no contexto da função dos anticorpos?", options: ["A) O recobrimento de microrganismos por anticorpos para facilitar sua fagocitose.", "B) A lise direta da bactéria pelo anticorpo.", "C) A entrada do anticorpo no núcleo da célula infectada.", "D) A troca de classe de IgM para IgE.", "E) A morte programada de células B defeituosas."], correct: 0, feedback: "A opsonização foi descrita como o processo onde fatores (como anticorpos) recobrem a bactéria, preparando-a e facilitando a sua ingestão pelos fagócitos." },
                { q: "Onde ocorre a maturação e geração da diversidade dos receptores dos linfócitos (antes do contato com antígeno)?", options: ["A) Nos locais de infecção (pele, mucosa).", "B) Nos órgãos linfoides germinativos (geradores), na ausência de antígenos.", "C) No sangue periférico.", "D) Exclusivamente no baço após uma inflamação.", "E) Dentro dos macrófagos após a fagocitose."], correct: 1, feedback: "Clones de linfócitos maturam nos órgãos linfoides germinativos na ausência de antígenos, gerando o repertório diverso antes da exposição." },
                { q: "Qual classe de imunidade é especializada para combater microrganismos que sobrevivem e proliferam dentro dos fagócitos (intracelulares)?", options: ["A) Imunidade Inata (Barreiras Físicas).", "B) Imunidade Humoral (Anticorpos).", "C) Sistema Complemento.", "D) Imunidade Passiva Artificial.", "E) Imunidade Mediada por Célula (Células T)."], correct: 4, feedback: "A imunidade mediada por células (Linfócitos T) é necessária para combater infecções intracelulares onde os microrganismos estão inacessíveis aos anticorpos circulantes." },
                { q: "Historicamente, quem realizou a primeira vacinação bem-sucedida registrada contra a varíola utilizando material da varíola bovina?", options: ["A) Louis Pasteur.", "B) Robert Koch.", "C) Edward Jenner.", "D) Paul Ehrlich.", "E) Elie Metchnikoff."], correct: 2, feedback: "Edward Jenner, em 1798, publicou o tratado sobre a vacinação, tendo demonstrado que a inoculação com varíola bovina protegia contra a varíola humana." },
                { q: "O que são 'determinantes' ou 'epítopos'?", options: ["A) São os receptores na superfície das células T.", "B) São as células que destroem os anticorpos.", "C) São tipos de citocinas inflamatórias.", "D) São as partes específicas dos antígenos que são reconhecidas pelos linfócitos.", "E) São genes que codificam a resistência a antibióticos."], correct: 3, feedback: "As partes dos antígenos que são especificamente reconhecidas por linfócitos individuais são denominadas determinantes ou epítopos." }
            ],
            avancado: [
                { q: "O sistema imune adaptativo e o inato operam de forma cooperativa. Qual mecanismo essencial demonstra como as células da imunidade inata preparam a resposta adaptativa?", options: ["A. Neutralização de toxinas por complemento.", "B. Ativação de neutrófilos em CTLs.", "C. Captura de antígenos por células dendríticas e apresentação aos linfócitos T.", "D. Produção de anticorpos por células NK."], correct: 2, feedback: "As células dendríticas são o elo crucial, capturando antígenos na periferia e apresentando-os aos linfócitos T nos órgãos linfoides." },
                { q: "Sobre a hipótese da seleção clonal, qual afirmação melhor consolida os conceitos de diversidade e especificidade?", options: ["A. Antígeno induz produção de novos receptores.", "B. Antígeno seleciona e ativa um clone pré-existente dentre muitos gerados na maturação.", "C. Diversidade é limitada a vertebrados avançados.", "D. Sistema inato garante expansão apenas de não-autoantígenos."], correct: 1, feedback: "A diversidade é gerada antes do encontro com o antígeno; o antígeno apenas seleciona o clone específico correspondente." },
                { q: "Por que a imunidade mediada por célula (CTLs) é considerada crucial contra infecções virais estabelecidas, em contraste com a imunidade humoral?", options: ["A. Células B migram apenas para mucosas.", "B. Anticorpos não acessam patógenos intracitoplasmáticos; CTLs matam a célula infectada.", "C. Apenas humoral gera memória.", "D. CTLs secretam citocinas essenciais."], correct: 1, feedback: "Uma vez dentro da célula, o vírus está 'escondido' dos anticorpos. Os CTLs eliminam a 'fábrica' do vírus (a célula infectada)." },
                { q: "Qual é a correlação correta entre a exposição ao antígeno, memória e características da resposta secundária?", options: ["A. Resposta secundária mais lenta e longa.", "B. Células de memória ativadas por inato.", "C. Células de memória (mais numerosas) geram respostas mais rápidas, maiores e com maior afinidade.", "D. Memória exclusiva da imunidade celular."], correct: 2, feedback: "A resposta secundária é caracterizada por ser mais rápida, de maior magnitude e, frequentemente, com anticorpos de maior afinidade." },
                { q: "Qual situação representa um exemplo de imunidade passiva e sua principal desvantagem?", options: ["A. Infecção natural; falta de especialização.", "B. Transferência de anticorpos maternos via placenta; não gera memória imunológica.", "C. Vacinação contra varíola; autotolerância excessiva.", "D. Ingestão de microrganismos; proteção limitada."], correct: 1, feedback: "A imunidade passiva fornece proteção imediata mas passageira, pois o sistema imune do receptor não foi 'treinado' (sem memória)." },
                { q: "Qual é o papel consolidado das citocinas e quimiocinas na coordenação entre imunidade inata e adaptativa?", options: ["A. Neutralização exclusiva de extracelulares.", "B. Citocinas (ex: IL-2) estimulam proliferação; quimiocinas regulam movimento para tecidos.", "C. Ativam células B para IgE.", "D. Ligação direta a antígenos (opsonização)."], correct: 1, feedback: "Citocinas promovem o crescimento e diferenciação (como IL-2 para células T), enquanto quimiocinas dirigem o tráfego celular." },
                { q: "Qual afirmação reflete a diferença filogenética fundamental entre imunidade inata e adaptativa?", options: ["A. Inata surgiu em vertebrados com mandíbula.", "B. Inata é mais antiga (todos multicelulares); adaptativa é exclusiva de vertebrados.", "C. Inata baseada em receptores variáveis.", "D. Ambas surgiram simultaneamente."], correct: 1, feedback: "A imunidade inata é evolutivamente antiga e universal; a adaptativa é uma inovação dos vertebrados." },
                { q: "Por que o processo de contração e homeostasia é essencial e como é alcançado?", options: ["A. Essencial para expansão; via citocinas.", "B. Previne lesão tecidual; eliminação do antígeno remove estímulo -> apoptose dos efetores.", "C. Garante permanência de T auxiliares.", "D. Maturação de afinidade."], correct: 1, feedback: "Sem o antígeno para estimular, os linfócitos efetores (que gastam muita energia e são potencialmente danosos) morrem, restaurando o equilíbrio." },
                { q: "O experimento de Behring e Kitasato (soro imune) suporta diretamente qual conceito moderno?", options: ["A. Hipótese da seleção clonal.", "B. Teoria celular.", "C. Imunidade passiva e anticorpos como mediadores séricos.", "D. Necessidade de coestimuladores."], correct: 2, feedback: "Eles provaram que a proteção podia ser transferida pelo soro (anticorpos), definindo a imunidade humoral e passiva." },
                { q: "Qual a consequência da falha na autotolerância e qual mecanismo preventivo?", options: ["A. Imunidade ativa; expansão imediata.", "B. Doença autoimune; eliminação ou supressão de linfócitos autorreativos.", "C. Deficiência de IgE; migração de CTLs.", "D. Imunidade celular excessiva; regulação por complemento."], correct: 1, feedback: "Se o sistema ataca o próprio corpo (falha de tolerância), ocorre doença autoimune. Mecanismos de deleção (morte) ou supressão previnem isso." }
            ]
        },

        // --- QUESTÕES ABERTAS ---
        abertas: [
            {
                q: "A defesa do hospedeiro é mediada pela imunidade inata e adaptativa. Explique a distinção fundamental entre elas em termos de memória e especificidade e cite dois componentes celulares de cada sistema.",
                a: "A imunidade inata e a adaptativa diferem na memória e especificidade. A inata não tem memória e sua especificidade é limitada a estruturas compartilhadas. A adaptativa possui memória e alta especificidade. Componentes Inatos: Fagócitos (neutrófilos/macrófagos), NK, dendríticas. Componentes Adaptativos: Linfócitos B e T."
            },
            {
                q: "O sistema imune adaptativo é dividido em Imunidade Humoral e Imunidade Mediada por Célula. Identifique os mediadores de cada tipo e qual microrganismo combatem melhor.",
                a: "Humoral: Mediada por Linfócitos B e anticorpos; combate microrganismos extracelulares e toxinas. Celular: Mediada por Linfócitos T; combate microrganismos intracelulares (vírus, bactérias intracelulares)."
            },
            {
                q: "Descreva a importância funcional de três das principais características das respostas imunes adaptativas: Diversidade, Expansão Clonal e Autotolerância.",
                a: "Diversidade: Permite responder a uma vasta gama de antígenos. Expansão Clonal: Aumenta o número de células específicas para combater a rápida divisão dos patógenos. Autotolerância: Previne reações contra células e tecidos do próprio corpo (doenças autoimunes)."
            },
            {
                q: "O que estabelece a Hipótese da Seleção Clonal e como ela relaciona a especificidade e a diversidade dos linfócitos?",
                a: "Estabelece que clones específicos se desenvolvem antes da exposição ao antígeno (gerando diversidade). O antígeno entra, seleciona e ativa apenas o clone preexistente específico, estimulando sua proliferação (garantindo especificidade)."
            },
            {
                q: "Descreva como as células T Auxiliares (CD4+) e os Linfócitos T Citotóxicos (CTLs) contribuem para a eliminação de microrganismos.",
                a: "CD4+ (Auxiliares): Secretam citocinas que estimulam proliferação de células T e ativam macrófagos e células B. CTLs (Citotóxicos): Matam diretamente células infectadas que produzem antígenos estranhos, eliminando reservatórios de infecção."
            },
            {
                q: "De que maneira a imunidade inata estimula a adaptativa e como esta última aumenta a eficácia da defesa inata?",
                a: "A inata estimula a adaptativa via APCs (como dendríticas) e sinais coestimuladores. A adaptativa aumenta a inata através de anticorpos que opsonizam microrganismos e ativam o complemento, facilitando a eliminação pelos fagócitos da imunidade inata."
            },
            {
                q: "Que tipo de imunidade a vacinação induz e como ela difere da proteção via placenta?",
                a: "Vacinação induz Imunidade Ativa (gera memória e resposta própria). A proteção via placenta é Imunidade Passiva (transferência de anticorpos maternos), que é temporária e não gera memória imunológica no recém-nascido."
            },
            {
                q: "Qual é o papel principal das Células Apresentadoras de Antígeno (APCs) e por que transportar antígenos para órgãos linfoides é importante?",
                a: "APCs capturam antígenos e os apresentam com MHC. O transporte para órgãos linfoides é vital pois concentra antígenos e linfócitos no mesmo local, aumentando a chance de encontro e iniciação da resposta imune."
            },
            {
                q: "Qual é o propósito da fase de Contração e Homeostasia e como a eliminação do antígeno está ligada a esse processo?",
                a: "O propósito é retornar o sistema ao repouso e prevenir danos teciduais. A eliminação do antígeno remove o estímulo de sobrevivência dos linfócitos, levando à apoptose da maioria das células expandidas (contração)."
            },
            {
                q: "Defina Autotolerância e explique as consequências de uma falha na sua manutenção.",
                a: "Autotolerância é a não reatividade aos próprios antígenos. É vital para evitar que o sistema ataque o hospedeiro. Falhas na manutenção da autotolerância resultam em doenças autoimunes."
            }
        ]
    },

    // ========================================================================
    // ASSUNTO 2: CÉLULAS E ÓRGAOS DO SISTEMA IMUNE
    // ========================================================================
    "Celulaseorgaos": {
        titulo: "Células e órgãos do sistema imune",

        // --- MÍDIA (Adicionado para evitar erro no site) ---
        midia: {
            audio: "2. Células e órgãos.m4a",
            video: null,
            infographics: "Celulas_orgaos.pdf"
        },

        // --- MAPA MENTAL (Adicionado para evitar erro no site) ---
        mindmap: [],

        // --- RESUMO TEÓRICO ---
        resumo: `
    <h2 style="margin-top: 0;">Células e Tecidos do Sistema Imune</h2>

    <p>A organização anatômica das células imunes e sua capacidade de circular e trocar entre o sangue, a linfa e os tecidos são de importância crucial para a geração de respostas imunes efetivas. O sistema imune enfrenta desafios significativos, como responder rapidamente a pequenos números de microrganismos introduzidos em qualquer local do corpo, garantir que poucos linfócitos imaturos respondam especificamente ao antígeno, e permitir que os mecanismos efetores localizem e destruam microrganismos distantes do local de indução da resposta. A solução para esses desafios depende da variação e rapidez das células imunes e de como elas são organizadas nos tecidos linfoides.</p>

<h2>1. Células do Sistema Imune</h2>

<p>As células especializadas nas respostas imunes inata e adaptativa incluem fagócitos, células dendríticas, linfócitos e outros leucócitos que trabalham para eliminar antígenos.</p>

<h3>1.1. Fagócitos (Neutrófilos e Macrófagos)</h3>

<p>Os fagócitos têm como função primária ingerir e destruir microrganismos, além de se livrar de tecidos danificados. Suas funções envolvem o recrutamento para locais de infecção, reconhecimento e ativação por microrganismos, fagocitose (ingestão) e destruição.</p>

<ul>
    <li><strong>Neutrófilos (Leucócitos Polimorfonucleares):</strong> São a população mais abundante de células brancas circulantes (em média 4.400/µL) e medeiam as fases iniciais das reações inflamatórias. Possuem um núcleo segmentado (três a cinco lóbulos conectados) e grânulos citoplasmáticos de dois tipos: grânulos específicos (lisozima, colagenase, elastase) e grânulos azurofílicos (lisossomas com enzimas e substâncias microbicidas como defensinas e catelicidinas). São produzidos na medula óssea, estimulados pelo G-CSF, circulam por horas ou poucos dias, e morrem 1 a 2 dias após entrar nos tecidos.</li>
     <div style="text-align: center; margin: 20px 0;">
                <img src="Neutrofilo.jpg" alt="Neutrofilo" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Neutrófilo</p>
            </div>
    
    <li><strong>Fagócitos Mononucleares (Monócitos e Macrófagos):</strong> O sistema inclui os monócitos circulantes e os macrófagos residentes nos tecidos.
        <ul>
            <li><strong>Monócitos:</strong> Têm núcleo em formato de feijão e citoplasma finamente granular (10 a 15 µm). Originam-se de precursores na medula óssea, estimulados pelo M-CSF. Existem subgrupos, incluindo monócitos clássicos (CD14++CD16- em humanos) que produzem mediadores inflamatórios, e monócitos não clássicos (CD14+CD16++ em humanos) que contribuem para o reparo tecidual.</li>
            <div style="text-align: center; margin: 20px 0;">
                <img src="Monocito.jpg" alt="Monocito" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Monócito</p>
            </div>
            
            <li><strong>Macrófagos:</strong> Distribuídos amplamente, têm papel central na imunidade inata e adaptativa. Macrófagos residentes de vida longa são derivados de precursores fetais (ex: células de Kupffer no fígado, macrófagos alveolares nos pulmões, microglia no cérebro).</li>
            <div style="text-align: center; margin: 20px 0;">
                <img src="Macrofago.jpeg" alt="Macrofago" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Macrófago</p>
            </div>
        </ul>
    </li>
</ul>

<p><strong>Funções dos Macrófagos:</strong></p>
<ul>
    <li>Ingerir e matar microrganismos (geração enzimática de espécies reativas de oxigênio e nitrogênio).</li>
    <li>Limpeza (<em>clearing</em>) de células mortas do hospedeiro, incluindo neutrófilos e células apoptóticas.</li>
    <li>Secreção de citocinas para aumentar o recrutamento de leucócitos.</li>
    <li>Atuar como Células Apresentadoras de Antígenos (APCs), ativando linfócitos T.</li>
    <li>Promover o reparo tecidual (angiogênese e fibrose).</li>
</ul>
<p><strong>Ativação de Macrófagos:</strong> Ocorre pelo reconhecimento de moléculas microbianas (via receptores do tipo Toll) e por opsoninas (receptores para complemento ou Fc). A ativação clássica (mediada por citocinas de células T) os torna eficientes em matar microrganismos; a ativação alternativa promove remodelamento e reparo. Macrófagos sobrevivem mais tempo nos locais de inflamação e podem sofrer divisão celular, sendo as células efetoras dominantes nos estágios finais da resposta imune inata.</p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="2.1 Funções dos macrófagos.png" alt="Funcoes dos macrofagos" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Principais funções dos macrófagos</p>
            </div>

<h3>1.2. Mastócitos, Eosinófilos e Basófilos</h3>

<p>São três tipos celulares que participam das respostas imunes inata e adaptativa, com grânulos citoplasmáticos que contêm mediadores inflamatórios e antimicrobianos. Estão envolvidos na proteção contra helmintos e em reações alérgicas.</p>

<ul>
    <li><strong>Mastócitos:</strong> Derivados da medula, presentes na pele e mucosas, adjacentes a vasos e nervos. Possuem grânulos cheios de histamina. Expressam receptores de alta afinidade para IgE; a ligação de IgE ao antígeno desencadeia a liberação dos mediadores, promovendo inflamação.</li>
    <li><strong>Eosinófilos:</strong> Granulócitos sanguíneos derivados da medula óssea. Contêm enzimas danosas a parasitas e tecidos do hospedeiro. Sua maturação é promovida por GM-CSF, IL-3 e IL-5, e estão presentes em tecidos periféricos, especialmente coberturas mucosas.</li>
    <li><strong>Basófilos:</strong> Granulócitos sanguíneos (menos de 1% dos leucócitos), derivados da medula óssea, que circulam no sangue. Compartilham similaridades com mastócitos, ligam IgE e podem ser recrutados para locais inflamatórios.</li>

    </ul>
            <div style="text-align: center; margin: 20px 0;">
                <img src="2.3 Mastócitos basófilos e eosinófilos.png" alt="Mastócito basofilo e eosinofilo" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Principais funções dos mastócitos, eosinófilos e basófilos</p>
            </div>

<h3>1.3. Células Apresentadoras de Antígenos (APCs)</h3>

<p>As APCs capturam antígenos, apresentam-nos aos linfócitos e fornecem sinais para estimular a proliferação e diferenciação destas células.</p>

<ul>
    <li><strong>Células Dendríticas (DCs):</strong> As APCs mais importantes para a ativação de células T imaturas, ligando as imunidades inata e adaptativa. São fagocíticas, têm longas projeções membranosas, e se distribuem em epitélios e órgãos. Respondem a microrganismos migrando para os linfonodos para apresentar antígenos proteicos microbianos a linfócitos T.</li>
    <li><strong>Macrófagos e Células B:</strong> Apresentam antígenos a células T auxiliares CD4+. A apresentação por macrófagos é crucial para erradicar microrganismos que resistem à morte fagocítica; a apresentação por células B é vital para a cooperação T-B nas respostas de anticorpos.</li>
</ul>
           <div style="text-align: center; margin: 20px 0;">
                <img src="2.4 Células APCs.png" alt="Células APCs" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Células APCs do sistema imune</p>
            </div>

<h3>1.4. Linfócitos</h3>

<p>Os linfócitos são as únicas células que expressam receptores de antígenos altamente diversos e clonalmente expressos, sendo os mediadores da imunidade adaptativa.</p>

<p><strong>Repertório e Especificidade:</strong> Milhões de clones de linfócitos existem, cada um com um receptor (TCR ou BCR) específico para um determinante antigênico. A extrema diversidade dos receptores é gerada pela recombinação randômica de segmentos de DNA durante a maturação (recombinação somática).</p>
           <div style="text-align: center; margin: 20px 0;">
                <img src="2.5 Diversidade de receptores.png" alt="Diversidade de receptores" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Diversidade de receptores de antígenos de linfócitos</p>
            </div>

<p><strong>Subgrupos Principais:</strong></p>
<ul>
    <li><strong>Linfócitos B:</strong> Amadurecem na medula óssea. Produzem anticorpos (Imunidade Humoral). Os principais subgrupos são Células B Foliculares (diversidade alta), Células B da Zona Marginal, e Células B-1 (diversidade limitada).</li>
    <li><strong>Linfócitos T:</strong> Amadurecem no timo. Mediadores da Imunidade Celular.
        <ul>
            <li><strong>T Auxiliares CD4+:</strong> Expressam CD4. Essenciais na diferenciação de células B e na ativação de macrófagos, estimulando a inflamação.</li>
            <li><strong>T Citotóxicos (CTLs) CD8+:</strong> Expressam CD8. Matam células infectadas por vírus/bactérias intracelulares.</li>
            <li><strong>T Regulatórias:</strong> Expressam CD4 e FoxP3 (geralmente), suprimindo outras células T para manter a autotolerância.</li>
        </ul>
    </li>
</ul>

<p><strong>Populações Diferenciadas pela Exposição ao Antígeno:</strong></p>
<ul>
    <li><strong>Linfócitos Imaturos (<em>Naïve</em>):</strong> São células B ou T maduras que nunca encontraram antígeno estranho. São pequenas, quiescentes (G0) e morrem após 1 a 3 meses se não encontrarem antígeno. Sua sobrevivência depende de sinais gerados por receptores de antígenos e citocinas, como a IL-7 (para células T) e o BAFF (para células B).</li>
    <li><strong>Linfócitos Efetores:</strong> Células que proliferam (expansão clonal) e se diferenciam após a ativação antigênica, realizando as funções de eliminação do antígeno. Os linfócitos B efetores são os plasmócitos, células com retículo endoplasmático rugoso e complexo de Golgi proeminentes, especializadas na secreção de milhões de moléculas de anticorpos por segundo.</li>
    <li><strong>Linfócitos de Memória:</strong> Sobrevivem por longos períodos em estado quiescente (ou com ciclo lento), mediando respostas rápidas e aumentadas a exposições subsequentes. Podem ser distinguidos por marcadores de superfície alterados, como a expressão de CD45RO em células T de memória em humanos.</li>
</ul>
          <div style="text-align: center; margin: 20px 0;">
                <img src="2.6 Classificação dos linfócitos.png" alt="Classificação dos linfócitos" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Classificação dos linfócitos</p>
            </div>

<h3>1.5. Células Linfoides Inatas (ILCs)</h3>

<p>As ILCs são subgrupos de células efetoras da imunidade inata com morfologia linfoide, derivadas da medula óssea, que realizam funções similares às células T efetoras (como secreção de citocinas), mas sem expressar receptores de antígenos clonais altamente diversos.</p>

<ul>
    <li><strong>Células NK (<em>Natural Killer</em>):</strong> As primeiras ILCs caracterizadas, que secretam IFN-&gamma; e matam células infectadas e danificadas.</li>
    <li><strong>Outras ILCs:</strong> Secretam citocinas (como IL-5, IL-13, IL-17, IL-22) que mimetizam as produzidas por subgrupos de células T auxiliares CD4+.</li>
    <li><strong>Células Indutoras de Tecidos Linfoides (LTi):</strong> Um subgrupo de ILCs que produz linfotoxina e TNF, essenciais para a formação de tecidos linfoides secundários organizados.</li>
</ul>

<h2>2. Anatomia e Funções dos Tecidos Linfoides</h2>

<p>Os tecidos linfoides são anatomicamente definidos e concentram linfócitos e APCs, sendo os locais onde os antígenos estranhos são transportados e onde as respostas imunes são iniciadas.</p>

<p>Os órgãos são classificados em:</p>
<ul>
    <li><strong>Órgãos Linfoides Geradores (Primários ou Centrais):</strong> Locais onde os linfócitos expressam pela primeira vez os receptores de antígenos e atingem a maturidade fenotípica/funcional. Fornecem fatores de crescimento e sinais moleculares para a maturação, além de apresentarem autoantígenos para a seleção de linfócitos (tolerância).</li>
    <li><strong>Órgãos Linfoides Periféricos (Secundários):</strong> Locais onde as respostas dos linfócitos aos antígenos estranhos são iniciadas. Incluem linfonodos, baço, e sistemas imunes regionais.</li>
</ul>
          <div style="text-align: center; margin: 20px 0;">
                <img src="2.7 Órgãos linfoides.png" alt="Órgãos linfoides" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Classificação dos órgãos linfoides</p>
            </div>

<h3>2.1. Medula Óssea</h3>

<p>A medula óssea é o local de geração da maioria das células sanguíneas maduras (hematopoese) e o local dos eventos iniciais na maturação das células B. As células-tronco hematopoéticas (HSCs) são pluripotentes e autorrenováveis, dando origem a todas as linhagens celulares, incluindo linfócitos B e T (precursores). A maturação é estimulada por citocinas, muitas chamadas de fatores estimuladores de colônia. Além dos precursores, a medula óssea também abriga plasmócitos secretores de anticorpos de vida longa e linfócitos T de memória.</p>

<h3>2.2. Timo</h3>

<p>O timo é o local da maturação dos linfócitos T. É um órgão bilobado com um córtex externo (denso em timócitos imaturos) e uma medula interna (mais esparsamente povoada por células T maduras, macrófagos e células dendríticas). As células epiteliais tímicas corticais produzem IL-7, necessária para o desenvolvimento inicial da célula T. As Células Epiteliais Tímicas Medulares (MTEC) são especializadas na apresentação de autoantígenos para causar a deleção de células T autorreativas, garantindo a tolerância.</p>

<h3>2.3. Sistema Linfático</h3>

<p>O sistema linfático é uma rede de vasos que drena o fluido intersticial (linfa) dos tecidos, passando-o pelos linfonodos e retornando-o ao sangue. É essencial para a homeostasia do fluido e para as respostas imunes. Antígenos microbianos (solúveis ou carreados por células dendríticas) são transportados na linfa dos portais de entrada (pele, tratos mucosos) para os linfonodos.</p>

<h3>2.4. Linfonodos</h3>

<p>São órgãos linfoides secundários encapsulados, situados ao longo dos vasos linfáticos, onde os linfócitos B e T imaturos respondem aos antígenos coletados pela linfa.</p>

<ul>
    <li><strong>Estrutura:</strong> Possuem uma cápsula fibrosa e um sistema sinusal que se esvazia no sino subcapsular. O córtex rico em linfócitos se organiza em folículos (zona de células B), que podem conter centros germinativos (folículos secundários). A área circundante é o paracórtex (zona de células T).</li>
    <li><strong>Segregação Linfocitária:</strong> Os linfócitos B e T são separados em regiões distintas do córtex.
        <ul>
            <li><strong>Células B:</strong> Residem nos folículos, organizados em torno das FDCs, e são atraídas pela quimiocina CXCL13, que se liga ao receptor CXCR5 na célula B.</li>
            <li><strong>Células T e DCs:</strong> Localizam-se nas cordas paracorticais (zona T), atraídas pelas quimiocinas CCL19 e CCL21, que se ligam ao receptor CCR7.</li>
        </ul>
    </li>
    <li><strong>Microanatomia e Tráfego:</strong> Linfócitos imaturos entram nos linfonodos a partir da circulação pelas Vênulas Endoteliais Altas (HEVs). A zona T contém uma rede de Células Reticulares Fibroblásticas (FRCs) que formam conduítes. Estes conduítes FRC transportam antígenos solúveis de baixo peso molecular do sino subcapsular para as células dendríticas residentes no paracórtex.</li>
    <li><strong>Desenvolvimento:</strong> O desenvolvimento de órgãos linfoides secundários, como os linfonodos, depende da ação de Células Indutoras de Tecido Linfoide (LTi), que produzem citocinas como a linfotoxina-&beta; (LT&beta;), estimulando as células estromais (FRCs e FDCs) a secretarem as quimiocinas que organizam a estrutura (CXCL13 para B, CCL19/CCL21 para T).</li>
</ul>
         <div style="text-align: center; margin: 20px 0;">
                <img src="2.8. Linfonodo.png" alt="Linfonodo" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Estrutura do linfonodo</p>
            </div>

<h3>2.5. Baço</h3>

<p>O baço é um órgão altamente vascularizado que filtra o sangue, removendo células senescentes/danificadas e partículas (ex: microrganismos opsonizados), e inicia respostas imunes adaptativas a antígenos originados no sangue.</p>

<ul>
    <li><strong>Polpa Vermelha:</strong> Composta principalmente por sinusoides vasculares cheios de sangue, filtrando o sangue através de macrófagos.</li>
    <li><strong>Polpa Branca:</strong> Rica em linfócitos, organizada em torno de artérias centrais.
        <ul>
            <li><strong>Segregação:</strong> As células T formam as Bainhas Linfoides Periarteriolares (PALS). As células B ocupam os Folículos e a Zona Marginal. A segregação também é regulada pelas quimiocinas CXCR5/CXCL13 (para células B) e CCR7/CCL19/CCL21 (para células T), de forma análoga aos linfonodos.</li>
        </ul>
    </li>
</ul>
<p>Antígenos no sangue são distribuídos para o sino marginal ou amostrados por macrófagos na zona marginal.</p>

         <div style="text-align: center; margin: 20px 0;">
                <img src="2.9 Baço.png" alt="Baço" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Estrutura do baço</p>
            </div>

<h3>2.6. Sistemas Imunes Regionais</h3>

<p>As barreiras epiteliais, como pele e mucosas (tratos gastrintestinal e brônquico), possuem sistemas imunes especializados. O Tecido Linfoide Associado à Mucosa (<em>MALT</em>), por exemplo, responde a antígenos ingeridos e inalados, contendo uma grande proporção de células dos sistemas inato e adaptativo.</p>

<h3>Analogia para Solidificar a Compreensão</h3>

<p>Pode-se imaginar o sistema imune como um exército organizado em um complexo de bases militares e rotas de patrulha. As Células Geradoras (Medula Óssea e Timo) são as academias de treinamento, onde os soldados (linfócitos) são formados e equipados com armas únicas (receptores de antígenos). O Sistema Linfático funciona como uma rede de coleta de inteligência e estradas de transporte, levando informações sobre invasores (antígenos) dos campos de batalha (tecidos) para os Quartéis-Generais (Linfonodos e Baço). Nesses QGs, os linfócitos ingênuos (que nunca viram combate) estão separados em bairros distintos (Zonas B e T) para evitar confusão, mas as APCs (Células Dendríticas e Macrófagos) funcionam como mensageiros e centros de triagem, garantindo que o soldado correto encontre a informação do invasor. Uma vez ativados, esses soldados (Células Efetoras) se multiplicam rapidamente e saem para o campo de batalha, enquanto uma força de reserva de veteranos (Células de Memória) permanece pronta para responder a futuros ataques do mesmo inimigo.</p>
        `,

        // --- FLASHCARDS ---
        flashcards: [
            { q: "Onde as células do sistema imune inato e adaptativo estão localizadas no corpo?", a: "Estão dispersas como células circulantes no sangue e na linfa, como coleções anatomicamente definidas nos órgãos linfoides (como baço e linfonodos) e como células espalhadas em praticamente todos os tecidos. Essa distribuição é crucial para gerar respostas protetoras rápidas." },
            { q: "Qual a função primária dos fagócitos, que incluem neutrófilos e macrófagos?", a: "A principal função é ingerir e destruir microrganismos e se livrar dos tecidos danificados. Suas respostas funcionais envolvem passos sequenciais, como recrutamento, reconhecimento, ingestão (fagocitose) e destruição." },
            { q: "Qual é a população mais abundante de células brancas sanguíneas circulantes e qual seu papel principal?", a: "São os neutrófilos (ou leucócitos polimorfonucleares). Eles medeiam as fases iniciais das reações inflamatórias e, após migrarem para os tecidos, funcionam por apenas um a dois dias antes de morrerem." },
            { q: "Quais são os dois tipos celulares que compõem o sistema fagócito mononuclear?", a: "Inclui os monócitos, que são as células circulantes no sangue, e os macrófagos, que são as células residentes amplamente distribuídas nos órgãos e tecidos conectivos." },
            { q: "Cite três exemplos de macrófagos residentes teciduais com fenótipos especializados.", a: "Exemplos incluem as células de Kupffer (fígado), macrófagos alveolares (pulmões) ou células da microglia (cérebro). Esses macrófagos teciduais têm vida longa e se diferenciam conforme o órgão." },
            { q: "Qual é o principal fator que estimula a produção de neutrófilos na medula óssea?", a: "O fator estimulador de colônias (G-CSF). Um humano adulto produz mais de $1 \\times 10^{11}$ neutrófilos por dia." },
            { q: "Qual a citocina responsável por direcionar precursores da medula óssea para evoluírem para monócitos?", a: "O fator estimulador de colônia de monócito (M-CSF), que é uma proteína que direciona esses precursores para se tornarem monócitos circulantes que amadurecerão em macrófagos nos tecidos." },
            { q: "Qual a distinção funcional entre a ativação clássica e a ativação alternativa de macrófagos?", a: "A ativação clássica (induzida por citocinas) torna os macrófagos eficientes em matar microrganismos. Já a ativação alternativa promove o remodelamento e o reparo tecidual, como a estimulação da angiogênese e fibrose." },
            { q: "Qual característica morfológica é comum a mastócitos, basófilos e eosinófilos?", a: "Todos possuem grânulos citoplasmáticos que contêm vários mediadores inflamatórios e antimicrobianos. Essas células estão frequentemente envolvidas em respostas contra helmintos e em reações alérgicas." },
            { q: "Que tipo de anticorpo os mastócitos e basófilos expressam receptores de alta afinidade em sua superfície?", a: "O anticorpo IgE. A ligação do antígeno à IgE na superfície dessas células desencadeia a liberação dos conteúdos dos grânulos, como histamina, promovendo a inflamação." },
            { q: "Qual o principal tipo de Célula Apresentadora de Antígenos (APC) responsável por iniciar as respostas da célula T?", a: "A célula dendrítica. Elas capturam microrganismos e outros antígenos, migram para os linfonodos e fornecem os sinais necessários para a proliferação e diferenciação dos linfócitos T imaturos." },
            { q: "Qual a função especializada das células dendríticas plasmocitoides em resposta à infecção viral?", a: "Elas são respondedores celulares precoces à infecção viral, reconhecendo ácidos nucleicos de vírus intracelular e produzindo proteínas solúveis chamadas de interferons tipo I, que têm potentes atividades antivirais." },
            { q: "O que são as Células Dendríticas Foliculares (FDCs) e qual a sua origem?", a: "São células encontradas nos folículos linfoides que ligam e apresentam antígenos proteicos aos linfócitos B. É importante notar que as FDCs não são derivadas de precursores na medula óssea, ao contrário de outras células dendríticas." },
            { q: "O que torna os linfócitos (células B e T) únicos em comparação com outras células do corpo?", a: "Eles são as únicas células que expressam receptores de antígenos clonalmente expressos, cada um com uma especificidade única para um determinante antigênico diferente. Isso permite que o organismo reconheça e responda a milhões de antígenos estranhos." },
            { q: "Quais são os dois principais subgrupos de células T com base nos marcadores de superfície?", a: "Os linfócitos T auxiliares CD4+ e os Linfócitos T citotóxicos (CTLs) CD8+. As células CD4+ geralmente secretam citocinas, e as CD8+ são efetoras na morte de células infectadas." },
            { q: "O que são linfócitos imaturos (naives) e qual o seu estado funcional?", a: "São células T ou B maduras que nunca encontraram antígeno estranho (são imunologicamente inexperientes). Elas são chamadas de linfócitos em repouso por estarem em um estado funcionalmente quiescente (G0 do ciclo celular)." },
            { q: "Qual a morfologia característica dos plasmócitos (linfócitos B efetores)?", a: "Plasmócitos são células secretoras de anticorpos, morfologicamente identificáveis por terem um núcleo posicionado excentricamente ('padrão roda de carroça') e citoplasma abundante contendo denso retículo endoplasmático rugoso, local de síntese de anticorpos." },
            { q: "Quais são os dois órgãos linfoides geradores (ou primários) em mamíferos adultos?", a: "A medula óssea (onde os precursores de todos os linfócitos surgem e as células B amadurecem) e o timo (onde as células T amadurecem). Estes são os locais onde os linfócitos adquirem sua maturidade inicial." },
            { q: "Qual o papel essencial do sistema linfático na resposta imune adaptativa?", a: "O sistema coleta fluidos e, crucialmente, antígenos microbianos (em forma solúvel ou transportados por células dendríticas) de seus portais de entrada nos tecidos e os libera para os linfonodos, onde as respostas imunes adaptativas são iniciadas." },
            { q: "Como as células B e T são segregadas dentro dos linfonodos?", a: "As células B são sequestradas nos folículos (zonas de célula B), e as células T estão localizadas nas cordas paracorticais (zonas de célula T). Essa segregação é mantida pela ação de quimiocinas específicas, como a CXCL13 (para células B) e CCL19/CCL21 (para células T)." }
        ],
        // --- QUIZ ---
        quiz: {
            basico: [
                { q: "Qual a função principal dos fagócitos (neutrófilos e macrófagos) na defesa do hospedeiro?", options: ["A. Produzir anticorpos", "B. Ingerir e destruir microrganismos", "C. Secretar apenas citocinas", "D. Regular linfócitos T exclusivamente", "E. Apresentar antígenos apenas"], correct: 1, feedback: "Ingerir e destruir microrganismos." },
                { q: "Após migrarem para os tecidos, por quanto tempo os neutrófilos são capazes de funcionar?", options: ["A. 1 semana", "B. Somente 1 a 2 dias", "C. 5 a 7 dias", "D. 1 a 2 meses", "E. Permanecem por toda a vida"], correct: 1, feedback: "Somente 1 a 2 dias." },
                { q: "Qual o nome dos macrófagos residentes teciduais encontrados especificamente no fígado?", options: ["A. Macrófagos alveolares", "B. Microglia", "C. Células de Kupffer", "D. Células de Langerhans", "E. Osteoclastos"], correct: 2, feedback: "Células de Kupffer." },
                { q: "Qual tipo de anticorpo é fundamentalmente ligado aos receptores de alta afinidade presentes na superfície de mastócitos e basófilos?", options: ["A. IgG", "B. Anticorpo IgE", "C. IgM", "D. IgA", "E. IgD"], correct: 1, feedback: "Anticorpo IgE." },
                { q: "Qual a função especializada das células dendríticas plasmocitoides em resposta a infecções virais?", options: ["A. Produzir anticorpos", "B. Fagocitar bactérias apenas", "C. Produzir interferons tipo I (antivirais)", "D. Ativar complemento", "E. Secretar histamina"], correct: 2, feedback: "Produzir interferons tipo I (antivirais)." },
                { q: "Quais são os dois órgãos linfoides geradores (primários) em mamíferos adultos?", options: ["A. Baço e linfonodos", "B. Medula óssea e timo", "C. Fígado e rins", "D. MALT e GALT", "E. Pulmões e intestino"], correct: 1, feedback: "Medula óssea e timo." },
                { q: "Qual o papel essencial do sistema linfático para iniciar a resposta imune adaptativa?", options: ["A. Produzir anticorpos", "B. Coletar antígenos e levá-los aos linfonodos", "C. Destruir patógenos diretamente", "D. Regular temperatura corporal", "E. Transportar oxigênio"], correct: 1, feedback: "Coletar antígenos e levá-los aos linfonodos." },
                { q: "Qual tipo de ativação de macrófagos os torna altamente eficientes em matar microrganismos?", options: ["A. Ativação alternativa", "B. Ativação clássica", "C. Ativação regulatória", "D. Ativação supressora", "E. Ativação memória"], correct: 1, feedback: "Ativação clássica." },
                { q: "Onde as células imunes do sistema inato e adaptativo estão localizadas primariamente?", options: ["A. Apenas no sangue circulante", "B. Em células circulantes e órgãos linfoides", "C. Apenas nos tecidos periféricos", "D. Exclusivamente na medula óssea", "E. Apenas nos linfonodos"], correct: 1, feedback: "Em células circulantes e órgãos linfoides." },
                { q: "Qual o tipo de leucócito mais abundante no sangue, responsável pelas fases iniciais da inflamação?", options: ["A. Linfócitos B", "B. Monócitos", "C. Neutrófilos (leucócitos polimorfonucleares)", "D. Eosinófilos", "E. Células dendríticas"], correct: 2, feedback: "Neutrófilos (leucócitos polimorfonucleares)." },
                { q: "Quais são os dois tipos celulares que formam o sistema fagócito mononuclear?", options: ["A. Neutrófilos e eosinófilos", "B. Monócitos e macrófagos", "C. Linfócitos B e T", "D. Células dendríticas e NK", "E. Mastócitos e basófilos"], correct: 1, feedback: "Monócitos e macrófagos." },
                { q: "Qual fator estimulador (M-CSF) é necessário para que precursores da medula óssea evoluam para monócitos?", options: ["A. G-CSF", "B. IL-7", "C. Fator estimulador de colônia de monócito (M-CSF)", "D. IL-12", "E. CXCL13"], correct: 2, feedback: "Fator estimulador de colônia de monócito (M-CSF)." },
                { q: "Além de combater microrganismos, qual a função dos macrófagos na fase de 'limpeza' após uma lesão ou infecção?", options: ["A. Produzir anticorpos", "B. Ingerir células mortas do hospedeiro", "C. Secretar histamina", "D. Ativar o sistema complemento", "E. Diferenciar em linfócitos"], correct: 1, feedback: "Ingerir células mortas do hospedeiro." },
                { q: "Qual a característica morfológica em comum entre mastócitos, basófilos e eosinófilos?", options: ["A. Todos produzem anticorpos", "B. Possuem grânulos citoplasmáticos com mediadores", "C. Todos são linfócitos", "D. Todos amadurecem no timo", "E. Todos são células dendríticas"], correct: 1, feedback: "Possuem grânulos citoplasmáticos com mediadores." },
                { q: "Qual o principal tipo de Célula Apresentadora de Antígenos (APC) envolvido na ativação das células T imaturas?", options: ["A. Macrófago", "B. Célula B", "C. A célula dendrítica", "D. Neutrófilo", "E. Mastócito"], correct: 2, feedback: "A célula dendrítica." },
                { q: "O que torna os linfócitos únicos, conferindo-lhes especificidade na imunidade adaptativa?", options: ["A. Presença de núcleo", "B. Capacidade de fagocitose", "C. Expressam receptores de antígenos clonalmente", "D. Produção de citocinas apenas", "E. Presença de mitocôndrias"], correct: 2, feedback: "Expressam receptores de antígenos clonalmente." },
                { q: "Quais são os dois subgrupos principais de células T, definidos pelos seus marcadores de superfície?", options: ["A. Células NK e NKT", "B. Linfócitos T CD4+ e CD8+", "C. Células B1 e B2", "D. Células T γδ e αβ", "E. Células efetoras e de memória"], correct: 1, feedback: "Linfócitos T CD4+ e CD8+." },
                { q: "O que são os linfócitos imaturos (ou naives) em termos de exposição antigênica?", options: ["A. Células que já encontraram antígeno", "B. Linfócitos que nunca encontraram antígeno", "C. Células em divisão ativa", "D. Plasmócitos secretores", "E. Células de memória ativadas"], correct: 1, feedback: "Linfócitos que nunca encontraram antígeno." },
                { q: "Onde ocorre a maturação final dos precursores da célula T que migram da medula óssea?", options: ["A. No baço", "B. No timo", "C. Nos linfonodos", "D. No fígado", "E. Na medula óssea"], correct: 1, feedback: "No timo." },
                { q: "Qual o mecanismo molecular que direciona a migração e segregação das células B e T em zonas distintas dos linfonodos?", options: ["A. Por diferenças de tamanho", "B. Por expressão de integrinas diferentes", "C. Quimiocinas específicas (CXCL13, CCL19/CCL21)", "D. Por pressão osmótica", "E. Por gradiente de pH"], correct: 2, feedback: "Quimiocinas específicas (CXCL13, CCL19/CCL21)." }
            ],
            avancado: [
                { q: "A ativação de macrófagos pode ser classificada como clássica ou alternativa, dependendo dos estímulos. Qual citocina ou proteína de membrana secretada por linfócitos T auxiliares é fundamental para potencializar a capacidade microbicida do macrófago e se encaixa na ativação clássica?", options: ["A) Interleucina-7 (IL-7), que promove a sobrevivência celular.", "B) Fator de Ativação da Célula B (BAFF), necessário para a sobrevivência das células B.", "C) Citocinas Th1 (ex: IFN-γ) e proteínas de membrana nos linfócitos T, que aumentam as atividades microbicidas.", "D) Fator Estimulador de Colônia de Monócito (M-CSF), que induz a diferenciação de monócitos na medula óssea."], correct: 2, feedback: "A ativação clássica de macrófagos, que os torna eficientes em matar microrganismos, é induzida por certas citocinas (como aquelas produzidas pelos subgrupos de células T) e proteínas de membrana nos linfócitos T [1, 2]. Esta via de ativação adaptativa é crucial para erradicar microrganismos que resistem à morte após a ingestão pelos fagócitos [3]." },
                { q: "Os macrófagos e neutrófilos são ambos fagócitos. Em comparação com os neutrófilos, qual característica confere aos macrófagos o papel de célula efetora dominante nos estágios finais de uma resposta imune inata?", options: ["A) Macrófagos expressam um núcleo multilobulado (polimorfonuclear) que facilita a migração.", "B) Macrófagos são terminalmente diferenciados, mas possuem uma taxa de fagocitose muito superior.", "C) Macrófagos sobrevivem por muito mais tempo nos locais de inflamação e podem sofrer divisão celular.", "D) Macrófagos são as únicas células que secretam G-CSF para manter o recrutamento contínuo."], correct: 2, feedback: "Os macrófagos não são terminalmente diferenciados e podem sofrer divisão celular nos locais de inflamação. Eles sobrevivem por muito mais tempo (vários dias após o início da infecção) do que os neutrófilos, que funcionam por apenas 1 a 2 dias antes de morrerem [4, 5]." },
                { q: "As células B foliculares expressam Ig de superfície com especificidade diversa e são cruciais na imunidade humoral. Onde a maturação inicial das células B ocorre e onde a maturação é completada?", options: ["A) Ocorre e é completada no timo, similarmente às células T.", "B) A maturação inicial ocorre na medula óssea, e é completada nos órgãos linfoides secundários (periféricos).", "C) A maturação inicial ocorre no baço, e é completada na medula óssea.", "D) Ocorre no saco vitelino e é completada nos linfonodos cervicais."], correct: 1, feedback: "Os linfócitos B, chamados assim por sua origem na medula óssea em mamíferos [6], têm seus estágios iniciais de maturação ali. No entanto, as células B parcialmente maduras entram na circulação, ocupam os órgãos linfoides secundários (baço e linfonodos) e completam sua maturação principalmente no baço [7, 8]." },
                { q: "Em humanos, os linfócitos T CD4+ auxiliares e os linfócitos T CD8+ citotóxicos são diferenciados por seus marcadores de superfície. Qual é o nome do sistema de nomenclatura uniforme e amplamente adotado usado para essas proteínas de superfície?", options: ["A) Complexo Maior de Histocompatibilidade (MHC).", "B) Nomenclatura da Linha Germinativa (GLN).", "C) Agrupamento de Diferenciação (CD, *Cluster of Differentiation*).", "D) Família de Moléculas de Adesão (CAMs)."], correct: 2, feedback: "A nomenclatura do agrupamento de diferenciação (CD, do inglês *cluster of differentiation*) é o método uniforme usado para denominar moléculas da superfície celular que são características de uma linhagem ou estágio de diferenciação particular [9]." },
                { q: "A sobrevivência dos linfócitos T imaturos (naives) nos órgãos linfoides periféricos depende de dois sinais. Quais são esses sinais e por que eles são vitais?", options: ["A) Sinais de BAFF e M-CSF, que induzem a proliferação.", "B) Sinais gerados pelo fraco reconhecimento dos próprios antígenos e pela citocina IL-7, garantindo a quiescência.", "C) Sinais de antígenos estranhos e IL-2, promovendo a rápida expansão clonal.", "D) Sinais de Flt3 e LT-β, que garantem a correta segregação anatômica no córtex."], correct: 1, feedback: "A sobrevivência dos linfócitos imaturos depende de sinais gerados pelos receptores de antígenos e pelas citocinas. Postula-se que o fraco reconhecimento dos próprios antígenos é suficiente para gerar sinais de sobrevivência, e a interleucina-7 (IL-7) é essencial para promover a sobrevivência das células T [10, 11]." },
                { q: "As Células Dendríticas Foliculares (FDCs) estão localizadas nos folículos linfoides. Qual é a principal característica que as distingue das células dendríticas clássicas que ativam células T?", options: ["A) FDCs se originam exclusivamente da linhagem mieloide na medula óssea.", "B) FDCs são células fagocíticas ativas que migram para o paracórtex.", "C) FDCs não são derivadas de precursores na medula óssea e apresentam antígenos a linfócitos B.", "D) FDCs secretam grandes quantidades de interferons tipo I em resposta a ácidos nucleicos virais."], correct: 2, feedback: "As FDCs são distintas das células dendríticas clássicas (que ativam células T), pois não são derivadas de precursores na medula óssea. Sua função é ligar e apresentar antígenos proteicos em suas superfícies para o reconhecimento pelos linfócitos B [12]." },
                { q: "Os linfonodos e a polpa branca do baço exibem zonas segregadas de células B e T. Qual o mecanismo molecular principal que garante a migração preferencial das células T imaturas para a zona T (paracórtex/bainha periarteriolar)?", options: ["A) Expressão de CXCR5, que reconhece CXCL13 secretada pelas FDCs.", "B) Expressão do receptor CCR7, que reconhece as quimiocinas CCL19 e CCL21 produzidas por células estromais da zona T.", "C) Expressão de Ig de superfície, que garante a retenção no centro germinativo.", "D) Receptores do tipo Toll (TLRs), que respondem a sinais inflamatórios nas HEVs."], correct: 1, feedback: "As células T imaturas (e as células dendríticas ativadas) expressam o receptor CCR7, que se liga às quimiocinas CCL19 e CCL21 produzidas pelas células estromais nas zonas da célula T, direcionando sua migração do sangue, através das Vênulas Endoteliais Altas (HEVs), para essa área [13]." },
                { q: "Um plasmócito é o linfócito B efetor especializado na secreção de anticorpos. Qual organela citoplasmática está hipertrofiada nessa célula e é responsável por sua alta taxa de síntese proteica?", options: ["A) Mitocôndrias, para fornecer energia para a fagocitose.", "B) Lisossomas, para a digestão de patógenos.", "C) Retículo endoplasmático rugoso denso e Complexos de Golgi perinuclear distintos.", "D) Filamentos do citoesqueleto, para manter a forma esférica."], correct: 2, feedback: "Plasmócitos são caracterizados por possuírem citoplasma abundante contendo retículo endoplasmático rugoso denso (local de síntese de anticorpos) e complexos de Golgi perinuclear distintos (onde as moléculas são processadas para secreção), o que reflete sua função de secretar milhões de moléculas de anticorpos por segundo [14]." },
                { q: "As Células Linfoides Inatas (ILCs) possuem morfologia linfoide. Qual característica fundamental as distingue dos linfócitos T e B na imunidade adaptativa?", options: ["A) As ILCs são derivadas da linhagem eritroide, não da linfoide.", "B) As ILCs não expressam receptores de antígenos altamente diversos e clonalmente distribuídos.", "C) As ILCs são as únicas células que produzem citocinas (IFN-γ e IL-17).", "D) As ILCs são fagócitos e não estão envolvidas em funções citotóxicas."], correct: 1, feedback: "ILCs têm morfologia linfoide e funções efetoras similares às células T, mas são definidas pela ausência de receptores de antígenos altamente diversos e clonalmente distribuídos, sendo células do sistema imune inato [15, 16]." },
                { q: "O baço é vital na defesa do hospedeiro por desempenhar duas funções primárias. Quais são elas?", options: ["A) Ser o local da maturação da célula T e eliminar células apoptóticas.", "B) Remover células sanguíneas velhas/danificadas e iniciar respostas imunes adaptativas a antígenos originados no sangue.", "C) Atuar como filtro linfático primário e secretar G-CSF para hematopoese.", "D) Remover imunocomplexos e ser o local de amadurecimento inicial da célula B."], correct: 1, feedback: "As principais funções do baço são remover células sanguíneas velhas e danificadas e partículas (incluindo microrganismos opsonizados) da circulação, e iniciar as respostas imunes adaptativas a antígenos originados no sangue [17]." },
                { q: "Qual a importância fisiológica do fenômeno da proliferação homeostática de linfócitos?", options: ["A) Permite que as células B da zona marginal troquem isotipo após a exposição ao antígeno.", "B) Garante a expansão clonal imediata das células T citotóxicas em hospedeiros normais.", "C) É a habilidade da população de linfócitos em preencher o espaço disponível em um hospedeiro linfopênico, mantendo o número constante.", "D) É o mecanismo pelo qual as células dendríticas migram através dos conduítes FRC para o paracórtex."], correct: 2, feedback: "A proliferação homeostática demonstra a habilidade da população de linfócitos em preencher o espaço disponível. Se células imaturas são transferidas para um hospedeiro com deficiência de linfócitos (linfopênico), as células proliferam até atingir os números de animais normais, sendo direcionada pelo reconhecimento dos próprios antígenos e IL-7 [18]." },
                { q: "As células dendríticas clássicas (convencionais) desempenham um papel crucial na iniciação da resposta T. Qual citocina é essencial para a maturação dessas células precursoras na medula óssea?", options: ["A) IL-7.", "B) Ligante Flt3.", "C) G-CSF.", "D) Linfotoxina (LT)."], correct: 1, feedback: "A maturação das células dendríticas, que se originam de uma linhagem mieloide, é dependente de uma citocina denominada ligante Flt3, que se liga ao receptor tirosinoquinase Flt3 nas células precursoras [19, 20]." },
                { q: "Os órgãos linfoides periféricos (secundários) compartilham a função de permitir a interação cooperativa entre células T e B. Qual é o mecanismo de transporte que permite aos antígenos solúveis de baixo peso molecular chegarem das HEVs às células dendríticas residentes no córtex do linfonodo?", options: ["A) Através da circulação porta esplênica.", "B) Pela via da veia cava superior via ducto torácico.", "C) Através do sistema de conduítes FRC (Células Reticulares Fibroblásticas).", "D) Pela fagocitose direta pelos linfócitos B na zona marginal."], correct: 2, feedback: "Antígenos solúveis de baixo peso molecular são transportados para fora do sino subcapsular através dos conduítes FRC (Células Reticulares Fibroblásticas), que os levam às células dendríticas corticais residentes localizadas ao lado dos conduítes, sendo uma via importante para o início da resposta T [21]." },
                { q: "Qual a principal diferença na expressão da isoforma CD45 (um marcador de superfície) entre linfócitos T imaturos (*naives*) e a maioria das células T de memória em humanos?", options: ["A) T imaturos expressam CD45RA alta, enquanto a maioria das células T de memória expressa CD45RO alta.", "B) T imaturos expressam CD45RO alta, enquanto as células de memória expressam CD45RA alta.", "C) T imaturos expressam CD45, mas as células de memória não expressam nenhuma isoforma.", "D) Ambas expressam CD45RA, mas as células de memória têm CD45RO no citoplasma."], correct: 0, feedback: "Em humanos, a maioria das células T imaturas expressa a isoforma CD45RA (200-kD), enquanto a maioria das células T ativadas e de memória expressa a isoforma CD45RO (180-kD), onde o RNA do éxon A foi retirado [22]." },
                { q: "As Células Indutoras de Tecido Linfoide (ILCs) são essenciais para a formação dos órgãos linfoides secundários. Qual citocina da família da Linfotoxina (LT) é fundamental para este processo, estimulando as células estromais a secretarem quimiocinas?", options: ["A) Interleucina-7 (IL-7).", "B) Fator Estimulador de Colônia de Granulócito (G-CSF).", "C) Linfotoxina-α (LTα) e Linfotoxina-β (LTβ).", "D) Interferon tipo I (IFN-I)."], correct: 2, feedback: "As células indutoras de tecido linfoide (um subgrupo de ILCs) estimulam o desenvolvimento dos linfonodos e outros órgãos linfoides secundários, mediando esta função pela citocina linfotoxina-α (LTα) e linfotoxina-β (LTβ). A ausência destas citocinas em camundongos impede o desenvolvimento desses órgãos [23, 24]." },
                { q: "Por que a capacidade de recirculação e troca constante entre sangue, linfa e tecidos é considerada de 'importância crucial' para o sistema imune adaptativo?", options: ["A) Porque garante a maturação das células T no timo.", "B) Porque permite que um número muito pequeno de linfócitos específicos para o antígeno encontre e responda ao antígeno em qualquer local do corpo.", "C) Porque a medula óssea não consegue produzir linfócitos em número suficiente.", "D) Porque é necessário para a troca de isotipo de Ig nas células B foliculares."], correct: 1, feedback: "A circulação e a troca entre sangue, linfa e tecidos são cruciais porque, na resposta imune adaptativa, um número muito pequeno de linfócitos imaturos reconhece especificamente e responde a qualquer antígeno, e essa mobilidade é necessária para localizá-lo [25]." },
                { q: "Qual é a distinção no local de amadurecimento que deu origem aos nomes 'Linfócitos B' e 'Linfócitos T'?", options: ["A) Células B amadurecem no baço e células T nos tecidos mucosos.", "B) Células B amadurecem na bursa de Fabricius (ou medula óssea em mamíferos) e células T amadurecem no timo.", "C) Células B amadurecem nos linfonodos e células T na circulação.", "D) Células B se originam de progenitores embrionários e células T de progenitores adultos."], correct: 1, feedback: "O nome 'Linfócito B' se deve à bursa de Fabricius em pássaros, sendo que em mamíferos o amadurecimento inicial ocorre na medula óssea. 'Linfócitos T' se referem aos linfócitos que surgem na medula óssea, migram para e amadurecem no timo [6]." },
                { q: "Um paciente apresenta deficiência congênita no desenvolvimento do timo (como na Síndrome de DiGeorge). Qual deficiência celular primária é esperada, e por quê?", options: ["A) Deficiência de neutrófilos, pois o timo produz G-CSF.", "B) Deficiência de células B, pois o timo é o principal órgão linfoide gerador.", "C) Deficiência de células T, pois o timo é o local de maturação dos precursores de células T.", "D) Deficiência de mastócitos, pois o timo produz o ligante c-Kit."], correct: 2, feedback: "O timo é o local da maturação da célula T. Pacientes com a Síndrome de DiGeorge sofrem de deficiência da célula T por causa de uma deleção cromossômica que elimina genes necessários para o desenvolvimento do timo [20]." },
                { q: "No contexto da maturação e diferenciação dos linfócitos, o que representa o processo de 'expansão clonal' em termos numéricos e funcionais durante uma infecção?", options: ["A) A migração de linfócitos imaturos para a medula óssea para completar o amadurecimento.", "B) O aumento drástico no tamanho dos clones de linfócitos específicos para o antígeno (podendo ser >50 mil vezes) para combater a replicação microbiana.", "C) A fusão de macrófagos para formar células gigantes multinucleadas nos tecidos inflamados.", "D) A alteração de Ig de membrana (IgM e IgD) para Ig secretada (IgG, IgA, IgE)."], correct: 1, feedback: "A expansão clonal é o processo de proliferação resultante em um aumento dramático no tamanho dos clones específicos para o antígeno (células T podem aumentar em mais de 50 mil vezes). Esta rápida expansão é necessária para acompanhar a rápida replicação dos microrganismos e gerar uma resposta protetora [26]." },
                { q: "Em relação aos fagócitos mononucleares, qual é a principal distinção no padrão de circulação dos monócitos 'clássicos' (CD14++CD16-) versus monócitos 'não clássicos' (CD14+CD16++) em humanos?", options: ["A) Monócitos não clássicos são recrutados rapidamente para inflamação; clássicos patrulham o endotélio.", "B) Monócitos clássicos produzem mediadores inflamatórios e são rapidamente recrutados; não clássicos patrulham ao longo das superfícies endoteliais.", "C) Monócitos não clássicos se diferenciam em células B da zona marginal.", "D) Monócitos clássicos não têm o núcleo em formato de feijão, ao contrário dos não clássicos."], correct: 1, feedback: "Os monócitos 'clássicos' (CD14++CD16-) são os mais numerosos, produzem abundantes mediadores inflamatórios e são rapidamente recrutados para locais de infecção. Os monócitos 'não clássicos' (CD14+CD16++) constituem a minoria sanguínea e são conhecidos por rolar ao longo das superfícies endoteliais ('patrulhamento') e contribuir para o reparo tecidual [27]." }
            ]
        },

        // --- QUESTÕES ABERTAS ---
        abertas: [
            { q: "Distingua imunidade inata e adaptativa em termos de memória e especificidade.", a: "Inata: Sem memória, especificidade baixa (padrões). Adaptativa: Com memória, especificidade alta (antígenos únicos)." },
            { q: "Quais os mediadores da imunidade Humoral vs Celular?", a: "Humoral: Linfócitos B e Anticorpos. Celular: Linfócitos T." },
            { q: "Explique a Expansão Clonal.", a: "Aumento do número de células específicas para um antígeno para combater a rápida proliferação do patógeno." },
            { q: "O que diz a Hipótese da Seleção Clonal?", a: "O antígeno seleciona um clone específico pré-existente e estimula sua proliferação." },
            { q: "Função de CD4 vs CD8.", a: "CD4 (Auxiliar): Comanda a resposta via citocinas. CD8 (Citotóxico): Mata células infectadas." },
            { q: "Como a inata estimula a adaptativa?", a: "Via APCs (Dendríticas) apresentando antígenos e sinais coestimuladores." },
            { q: "Vacinação vs Placenta (tipo de imunidade).", a: "Vacina: Ativa (memória). Placenta: Passiva (temporária)." },
            { q: "Papel das APCs e transporte para linfonodos.", a: "Capturar antígeno e concentrar nos linfonodos para encontrar os linfócitos T raros." },
            { q: "Propósito da Contração.", a: "Retornar ao equilíbrio e evitar dano tecidual (apoptose dos efetores)." },
            { q: "Defina Autotolerância.", a: "Não reatividade ao próprio. Falha leva a doença autoimune." }
        ]
    },

    // ========================================================================
    // ASSUNTO: INFLAMAÇÃO E MIGRAÇÃO CELULAR
    // ========================================================================
    "inflamacao": {
        titulo: "Inflamação e migração celular",
        resumo: `
            <h2 style="margin-top: 0;">1. Introdução: A Lógica do Movimento</h2>
            <p>O sistema imune distingue-se de outros sistemas pela mobilidade constante. Esse movimento não é aleatório; é altamente regulado e possui três funções vitais:</p>
            <ol>
                <li><strong>Entrega de Leucócitos Mieloides (Neutrófilos/Monócitos):</strong> Do sangue para locais de infecção ou lesão (Inflamação).</li>
                <li><strong>Entrega de Linfócitos Naïve (Virgens):</strong> Dos órgãos geradores (timo/medula) para os órgãos linfoides secundários (como linfonodos) para encontrar antígenos.</li>
                <li><strong>Entrega de Linfócitos Efetores:</strong> Dos órgãos linfoides (onde foram ativados) para os tecidos periféricos infectados para eliminar o patógeno.</li>
            </ol>

            <p>O processo geral de saída do sangue para o tecido é chamado de <strong>recrutamento</strong> ou <strong>migração</strong>, e o direcionamento para um tecido específico é chamado de <strong>homing</strong>.</p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="trafego_leucocitos.jpg" alt="Tráfego de Leucócitos: Recrutamento, Migração e Homing" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Figura: Tráfego de Leucócitos - Recrutamento, Migração e Homing</p>
            </div>

            <hr>

            <h2>2. As Ferramentas Moleculares: Moléculas de Adesão e Quimiocinas</h2>
            <p>Para sair do vaso sanguíneo, o leucócito precisa "conversar" com a célula endotelial. Isso é mediado por pares de receptores e ligantes.</p>

            <h3>A. Selectinas (O "Velcro" de Rolamento)</h3>
            <p>São moléculas dos leucócitos que se ligam a carboidratos (açúcares) na membrana plasmática das células endoteliais e mediam a adesão inicial de <strong>baixa afinidade</strong>. Como a ligação é fraca e rápida, o fluxo sanguíneo empurra a célula, fazendo-a rolar (rolling).</p>
            <ul>
                <li><strong>P-Selectina (CD62P):</strong> Expressa no endotélio. Está armazenada em grânulos citoplasmáticos e é liberada rapidamente (minutos) em resposta a histamina ou trombina.</li>
                <li><strong>E-Selectina (CD62E):</strong> Expressa no endotélio. Não está pronta; precisa ser sintetizada (leva 1-2 horas) em resposta a citocinas inflamatórias como <strong>TNF</strong> e <strong>IL-1</strong>.</li>
                <li><strong>L-Selectina (CD62L):</strong> Expressa nos <strong>leucócitos</strong>, não no endotélio. É crucial para que linfócitos naïve entrem nos linfonodos através das Vênulas Endoteliais Altas (HEVs).</li>
            </ul>

            <p>Os ligantes das selectinas são glicoproteínas com carboidratos específicos, como o <strong>Sialil Lewis X</strong>.</p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="moleculas_migracao.jpg" alt="Moléculas-chave da migração de leucócitos: Selectinas, Integrinas e Quimiocinas" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Figura: Moléculas-chave da migração de leucócitos</p>
            </div>

            <h3>B. Integrinas (A Adesão Firme)</h3>
            <p>São proteínas heterodiméricas (cadeias &alpha; e &beta;) que garantem a parada total da célula. Uma característica crítica é que elas podem alterar sua conformação:</p>
            <ul>
                <li><strong>Estado de Baixa Afinidade:</strong> A molécula está "dobrada" ou enovelada. Não liga bem.</li>
                <li><strong>Estado de Alta Afinidade:</strong> A molécula se "estende" e expõe o sítio de ligação. Essa mudança é desencadeada por sinais de quimiocinas (ativação "de dentro para fora").</li>
            </ul>

            <p><strong>Principais Integrinas e seus Ligantes:</strong></p>
            <ol>
                <li><strong>LFA-1 (&alpha;_L&beta;_2):</strong> Presente em neutrófilos, monócitos e células T. Liga-se às <strong>ICAM-1</strong> e <strong>ICAM-2</strong> no endotélio.</li>
                <li><strong>VLA-4 (&alpha;_4&beta;_1):</strong> Presente em monócitos e células T. Liga-se à <strong>VCAM-1</strong> no endotélio.</li>
                <li><strong>Mac-1:</strong> Presente em monócitos, liga-se à ICAM-1 e também funciona como receptor de complemento (para fagocitose).</li>
            </ol>

            <h3>C. Quimiocinas (O Sistema de GPS e Ativação)</h3>
            <p>São citocinas quimiotáticas (famílias CC e CXC) que regulam a migração. Elas têm dois papéis fundamentais na migração:</p>
            <ol>
                <li><strong>Aumentar a adesão:</strong> Quando a quimiocina se liga ao receptor no leucócito, ela ativa a integrina para o estado de alta afinidade.</li>
                <li><strong>Quimiocinese:</strong> Estimulam o movimento do leucócito através do tecido em direção à maior concentração da quimiocina (fonte da infecção).</li>
            </ol>

            <hr>

            <h2>3. A Cascata de Adesão e Migração (Passo a Passo)</h2>
            <p>Independentemente do tipo de leucócito, o processo de saída do vaso segue uma sequência lógica de eventos.</p>

            <p><strong>Passo 1: Rolamento (Rolling) mediado por Selectinas</strong><br>
            Nos locais de infecção, macrófagos secretam TNF e IL-1, que ativam o endotélio a expressar E-selectina e P-selectina. O vaso se dilata, o fluxo fica lento e os leucócitos se aproximam da parede (marginação). As selectinas "pegam" os leucócitos, que começam a rolar devido à força do sangue que quebra e refaz as ligações fracas.</p>

            <p><strong>Passo 2: Ativação das Integrinas por Quimiocinas</strong><br>
            O endotélio apresenta quimiocinas ligadas à sua superfície (nos proteoglicanos). O leucócito, enquanto rola, detecta essas quimiocinas através de seus receptores. Isso gera um sinal intracelular que converte as integrinas (como LFA-1) para o estado de <strong>alta afinidade</strong>.</p>

            <p><strong>Passo 3: Adesão Estável</strong><br>
            Agora com alta afinidade, as integrinas (LFA-1, VLA-4) se ligam firmemente aos seus ligantes no endotélio (ICAM-1, VCAM-1). O citoesqueleto se reorganiza e a célula se espalha ("achata") no endotélio, parando de rolar.</p>

            <p><strong>Passo 4: Transmigração (Diapedese)</strong><br>
            O leucócito migra através da parede do vaso, geralmente passando <em>entre</em> as células endoteliais (via paracelular). Isso envolve o rompimento temporário das junções (complexo VE-caderina) e é auxiliado por moléculas como <strong>CD31</strong>.</p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="cascata_adesao.jpg" alt="A Cascata de Adesão e Migração (Passo a Passo)" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Figura: A Cascata de Adesão e Migração</p>
            </div>

            <hr>

            <h2>4. Padrões Específicos de Migração</h2>

            <p>Embora os passos sejam os mesmos, os "códigos" (combinações de moléculas) mudam dependendo do destino.</p>

            <h3>A. Neutrófilos vs. Monócitos (Na Inflamação)</h3>
            <ul>
                <li><strong>Neutrófilos:</strong> São os primeiros a chegar. Eles expressam receptores <strong>CXCR1 e CXCR2</strong>, que se ligam à quimiocina <strong>CXCL8 (IL-8)</strong>, produzida abundantemente e cedo pelos macrófagos teciduais.</li>
                <li><strong>Monócitos:</strong> Chegam mais tarde. Monócitos clássicos expressam <strong>CCR2</strong>, que se liga à quimiocina <strong>CCL2 (MCP-1)</strong>.</li>
            </ul>

            <h3>B. Linfócitos T Naïve: O Trânsito para Linfonodos</h3>
            <p>Células T virgens não devem ir para tecidos inflamados; elas devem ir para os linfonodos procurar antígenos.</p>
            <ul>
                <li><strong>Entrada:</strong> Elas entram através de vasos especializados chamados <strong>Vênulas Endoteliais Altas (HEVs)</strong>.</li>
                <li><strong>O Código Molecular:</strong>
                    <ol>
                        <li><strong>Rolamento:</strong> <strong>L-Selectina</strong> na célula T liga-se à adressina <strong>PNAd</strong> na HEV.</li>
                        <li><strong>Ativação:</strong> O receptor <strong>CCR7</strong> na célula T reconhece as quimiocinas <strong>CCL19</strong> e <strong>CCL21</strong> produzidas no linfonodo.</li>
                        <li><strong>Adesão:</strong> Integrina LFA-1 liga-se à ICAM-1.</li>
                    </ol>
                </li>
            </ul>

            <h3>C. Saída dos Linfócitos do Linfonodo (O mecanismo da S1P)</h3>
            <p>Se a célula T naïve não encontrar antígeno, ela deve sair. Se encontrar, deve ficar. Isso é controlado pela <strong>Esfingosina 1-Fosfato (S1P)</strong>.</p>
            <ul>
                <li><strong>O Gradiente:</strong> A concentração de S1P é alta no sangue/linfa e baixa no tecido do linfonodo (devido à enzima S1P liase).</li>
                <li><strong>A Saída:</strong> Células T expressam o receptor <strong>S1PR1</strong> e "seguem o cheiro" da S1P para sair do nodo.</li>
                <li><strong>A Retenção (Se houver ativação):</strong> Se a célula T reconhece um antígeno, ela é ativada e expressa <strong>CD69</strong>. O CD69 internaliza o receptor S1PR1. Sem o receptor, a célula não sente o gradiente de saída e fica presa no linfonodo para proliferar. Dias depois, a expressão de CD69 cai, o S1PR1 volta, e as células efetoras saem.</li>
            </ul>

            <p><em>Nota clínica:</em> O fármaco <strong>Fingolimod</strong> bloqueia o S1PR1, impedindo que linfócitos saiam dos linfonodos, sendo usado na Esclerose Múltipla para evitar autoimunidade.</p>

            <h3>D. Linfócitos Efetores: Voltando ao Tecido</h3>
            <p>Uma vez ativadas e diferenciadas em células efetoras, as células T mudam seus receptores. Elas diminuem a expressão de CCR7 e L-Selectina (não entram mais em linfonodos) e aumentam a expressão de ligantes para E-selectina e P-selectina e receptores de quimiocinas inflamatórias (como CXCR3), permitindo que migrem especificamente para locais de infecção.</p>

            <hr>

            <h3>Resumo das Diferenças de "Endereçamento"</h3>

            <table class="info-table">
                <tr>
                    <th>Célula</th>
                    <th>Destino</th>
                    <th>Molécula de Adesão Chave</th>
                    <th>Receptor de Quimiocina Chave</th>
                </tr>
                <tr>
                    <td><strong>Neutrófilo</strong></td>
                    <td>Inflamação Aguda</td>
                    <td>Ligantes de E/P-Selectina</td>
                    <td><strong>CXCR1/CXCR2</strong> (busca IL-8)</td>
                </tr>
                <tr>
                    <td><strong>Monócito</strong></td>
                    <td>Inflamação</td>
                    <td>Ligantes de E/P-Selectina, VLA-4</td>
                    <td><strong>CCR2</strong> (busca CCL2)</td>
                </tr>
                <tr>
                    <td><strong>T Naïve</strong></td>
                    <td>Linfonodo (HEV)</td>
                    <td><strong>L-Selectina</strong> (busca PNAd)</td>
                    <td><strong>CCR7</strong> (busca CCL19/21)</td>
                </tr>
                <tr>
                    <td><strong>T Efetor</strong></td>
                    <td>Tecido Infectado</td>
                    <td>Ligantes de Selectina, VLA-4</td>
                    <td>CXCR3, CCR5 (variável)</td>
                </tr>
            </table>
        `,
        midia: { audio: "podcast_inflamacao.m4a", video: null, infographics: null },
        flashcards: [
            { q: "O que é inflamação no contexto da migração celular e quais leucócitos são primariamente recrutados para os locais de infecção?", a: "A inflamação é o recrutamento de leucócitos e proteínas plasmáticas do sangue para locais de infecção e lesão tecidual. Os leucócitos primariamente recrutados são neutrófilos e monócitos." },
            { q: "Qual é a principal diferença no padrão de migração (homing) entre linfócitos naïve e linfócitos efetores?", a: "Linfócitos naïve migram continuamente principalmente para os tecidos linfoides secundários (linfonodos/baço). Linfócitos efetores, assim como leucócitos mieloides, chegam preferencialmente aos tecidos nos quais existe uma infecção ou lesão tecidual." },
            { q: "Qual é o nome do processo que maximiza a chance de que linfócitos naïve encontrem seu antígeno em qualquer parte do corpo, e o que este processo envolve?", a: "O processo é chamado de recirculação. Ele envolve a chegada repetida dos linfócitos aos órgãos linfoides secundários, permanência transitória e retorno ao sangue." },
            { q: "Cite as duas principais classes de moléculas de adesão envolvidas na adesão leucócito-endotélio e o papel inicial de cada uma.", a: "Selectinas mediam o passo inicial de adesão de baixa afinidade (rolamento). Integrinas medeiam a adesão estável e firme (interações de alta afinidade)." },
            { q: "Diferencie a regulação da expressão das selectinas endoteliais P-selectina (CD62P) e E-selectina (CD62E).", a: "P-selectina é rapidamente redistribuída de grânulos citoplasmáticos em resposta à histamina e trombina. E-selectina é sintetizada e expressa em 1 a 2 horas em resposta às citocinas IL-1 e TNF." },
            { q: "O que é o tetrassacarídeo sialil Lewis X (sLeX) e a quais selectinas ele se liga?", a: "O sLeX é o complexo de carboidratos ligante de selectina presente em granulócitos, monócitos e células T efetoras. Ele é o principal ligante para a P-selectina e E-selectina nas células endoteliais." },
            { q: "Qual é o principal determinante de reconhecimento que liga a L-selectina (CD62L) nas células às sialomucinas das células endoteliais?", a: "O principal determinante de reconhecimento é o sialil 6-sulfo Lewis X." },
            { q: "O que são as integrinas em termos estruturais e qual o papel de seus domínios citoplasmáticos?", a: "São proteínas heterodiméricas (cadeias α e β ligadas não covalentemente). Os domínios citoplasmáticos interagem com componentes do citoesqueleto (incluindo vinculina, talina e actina), integrando sinais extracelulares com motilidade celular." },
            { q: "Qual é o principal ligante no endotélio para a integrina LFA-1 (CD11aCD18) e qual a família de proteínas a que este ligante pertence?", a: "O principal ligante é a ICAM-1 (Molécula de Adesão Intercelular 1, CD54). Pertence à superfamília de Imunoglobulinas (Ig)." },
            { q: "Explique o conceito de \"sinal de dentro para fora\" (inside-out signaling) aplicado à ativação de integrinas.", a: "É o processo pelo qual sinais intracelulares, gerados pela ligação de quimiocinas (ou antígeno), alteram as funções de ligação do domínio extracelular das integrinas. Isso resulta em alterações conformacionais que aumentam rapidamente a afinidade das integrinas pelos seus ligantes." },
            { q: "Quais são as duas principais famílias de quimiocinas, baseadas na estrutura de seus resíduos N-terminais de cisteína, e qual delas é primária para o recrutamento de neutrófilos?", a: "As famílias são: CC (os dois resíduos de cisteína são adjacentes) e CXC (os resíduos são separados por um aminoácido). A família CXC está primariamente associada ao recrutamento de neutrófilos (Ex.: CXCL8/IL-8)." },
            { q: "Descreva o papel das quimiocinas na adesão aumentada dos leucócitos ao endotélio (além de sua função quimiotática).", a: "As quimiocinas se ligam aos proteoglicanos heparan sulfato nas células endoteliais. Ao serem apresentadas aos leucócitos, elas se ligam aos seus receptores (GPCRs), disparando o sinal de dentro para fora que aumenta a afinidade das integrinas." },
            { q: "Liste a sequência dos quatro passos principais da interação leucócito-endotélio que medeia o recrutamento de leucócitos para os tecidos.", a: "1. Rolamento (mediado por selectina). 2. Aumento na afinidade das integrinas (mediado por quimiocina). 3. Adesão estável (mediada pela integrina). 4. Transmigração (através do endotélio)." },
            { q: "Qual é a causa molecular da Deficiência de Adesão de Leucócito Tipo 1 (LAD-1) e qual é a principal consequência clínica?", a: "É causada por uma deficiência recessiva herdada no gene CD18, que codifica a subunidade β da integrina LFA-1 e Mac-1. A consequência é a falta de acúmulo de neutrófilos nos locais de infecção e infecções recorrentes." },
            { q: "Quais estruturas especializadas as células T naïve usam para entrar nos linfonodos, e qual molécula de adesão é crucial para o rolamento neste local?", a: "Elas entram através das Vênulas Endoteliais Altas (HEVs). O rolamento é mediado pela L-selectina." },
            { q: "Quais são as duas quimiocinas essenciais para a ativação da integrina e a adesão firme das células T naïve nas HEVs, e qual é o receptor comum para elas?", a: "As quimiocinas são CCL19 e CCL21. O receptor é o CCR7." },
            { q: "Qual lipídio quimioatraente e seu receptor controlam a saída (egressão) das células T naïve e plasmócitos dos órgãos linfoides?", a: "É a Esfingosina 1-fosfato (S1P) e seu receptor, o S1PR1." },
            { q: "Qual é o mecanismo pelo qual as células T ativadas são retidas no linfonodo após o reconhecimento do antígeno, antes de se diferenciarem em células efetoras?", a: "A reexpressão de S1PR1 é suprimida por vários dias. O aumento da proteína CD69 se liga ao S1PR1 e reduz sua expressão na superfície, tornando a célula insensível ao gradiente de S1P." },
            { q: "Qual molécula é expressa nas HEVs de tecidos linfoides associados à mucosa (ex: Placas de Peyer) e se liga tanto à L-selectina quanto à integrina α4β7?", a: "A MadCAM-1 (Molécula 1 de adesão celular de adressina de mucosa)." },
            { q: "Como a transmigração paracelular de leucócitos através do endotélio é alcançada em termos moleculares, e qual complexo deve ser rompido?", a: "Ocorre entre as células endoteliais, dependendo de integrinas e ligantes. O rompimento transiente e reversível do complexo VE-caderina é necessário." }
        ],
        quiz: {
            basico: [
                { q: "Qual é o termo utilizado para descrever a migração de um leucócito do sangue em direção a um tecido específico ou local de infecção?", options: ["A) Homing", "B) Fagocitose", "C) Apoptose", "D) Maturação", "E) Proliferação"], correct: 0, feedback: "O termo homing refere-se à migração para um tecido particular. A migração geral do sangue para os tecidos é chamada de recrutamento." },
                { q: "As selectinas são moléculas de adesão que se ligam a qual tipo de estrutura nas células alvo?", options: ["A) Proteínas do citoesqueleto", "B) Carboidratos da membrana plasmática", "C) Ácidos nucleicos", "D) Lipídios intracelulares", "E) Enzimas digestivas"], correct: 1, feedback: "Selectinas possuem domínios similares a lectinas que se ligam a carboidratos de membrana de maneira dependente de cálcio." },
                { q: "Qual família de citocinas é responsável por ativar as integrinas nos leucócitos, aumentando sua afinidade, e estimular a quimiotaxia?", options: ["A) Interleucinas", "B) Interferons", "C) Quimiocinas", "D) Fatores de Crescimento", "E) Selectinas"], correct: 2, feedback: "As quimiocinas estimulam o movimento dos leucócitos e aumentam a afinidade das integrinas, permitindo adesão firme." },
                { q: "Qual é a primeira etapa da sequência de eventos na migração de leucócitos do sangue para os tecidos?", options: ["A) Adesão estável", "B) Transmigração", "C) Ativação de integrina", "D) Rolamento", "E) Quimiotaxia no tecido"], correct: 3, feedback: "A sequência começa com o rolamento mediado por selectinas, seguido pela ativação de integrinas, adesão estável e transmigração." },
                { q: "As Vênulas Endoteliais Altas (HEVs) são vasos sanguíneos especializados encontrados principalmente em:", options: ["A) Tecidos infectados na pele", "B) Músculo cardíaco", "C) Fígado e rins", "D) Medula óssea", "E) Órgãos linfoides secundários (como linfonodos)"], correct: 4, feedback: "As HEVs são vênulas pós-capilares especializadas localizadas nas zonas de células T dos tecidos linfoides secundários (como linfonodos), permitindo a entrada de linfócitos naïve." },
                { q: "Qual das seguintes selectinas é expressa na superfície dos leucócitos (e não nas células endoteliais)?", options: ["A) L-selectina", "B) P-selectina", "C) E-selectina", "D) Z-selectina", "E) M-selectina"], correct: 0, feedback: "A L-selectina (CD62L) é expressa nos leucócitos. A E-selectina e P-selectina são expressas no endotélio." },
                { q: "A integrina LFA-1, presente em neutrófilos e células T, liga-se principalmente a qual molécula no endotélio?", options: ["A) VCAM-1", "B) ICAM-1", "C) MadCAM-1", "D) PNAd", "E) CD34"], correct: 1, feedback: "O ligante importante para LFA-1 é a molécula de adesão intercelular 1 (ICAM-1)." },
                { q: "As quimiocinas são classificadas em subfamílias (como CC e CXC) com base em:", options: ["A) Seu peso molecular", "B) O tipo de célula que as produz", "C) O número e localização de resíduos N-terminais de cisteína", "D) Sua capacidade de induzir febre", "E) Sua cor sob microscopia"], correct: 2, feedback: "As quimiocinas são classificadas em famílias (CC, CXC, etc.) baseadas no número e localização dos resíduos de cisteína N-terminais." },
                { q: "A Deficiência de Adesão de Leucócito tipo 1 (LAD-1) é causada por um defeito genético em qual tipo de molécula?", options: ["A) Selectinas", "B) Quimiocinas", "C) Imunoglobulinas", "D) Integrinas (subunidade β2)", "E) Receptores de Esfingosina"], correct: 3, feedback: "A LAD-1 é causada por mutações no gene CD18, que codifica a subunidade β2 das integrinas LFA-1 e Mac-1." },
                { q: "Qual receptor de quimiocina é essencial para que células T naïve e células dendríticas migrem para as zonas de células T nos linfonodos?", options: ["A) CCR5", "B) CXCR4", "C) CCR2", "D) CXCR2", "E) CCR7"], correct: 4, feedback: "O CCR7 liga-se às quimiocinas CCL19 e CCL21, guiando células T naïve e células dendríticas para os linfonodos." },
                { q: "Qual lipídio quimioatraente regula a saída das células T dos linfonodos de volta para a circulação?", options: ["A) Esfingosina 1-fosfato (S1P)", "B) Colesterol", "C) Fosfatidilcolina", "D) Ácido araquidônico", "E) Triglicerídeo"], correct: 0, feedback: "A saída das células T depende do gradiente de concentração do lipídio esfingosina 1-fosfato (S1P) e seu receptor S1PR1." },
                { q: "Quais são os primeiros tipos de leucócitos a serem recrutados do sangue para um local de infecção ou lesão tecidual aguda?", options: ["A) Linfócitos B", "B) Neutrófilos", "C) Células T de memória", "D) Eosinófilos", "E) Basófilos"], correct: 1, feedback: "Os neutrófilos são os primeiros leucócitos recrutados para locais de infecção ou lesão, seguidos posteriormente pelos monócitos." },
                { q: "O processo de migração dos leucócitos através das junções entre as células endoteliais para alcançar o tecido extravascular é chamado de:", options: ["A) Rolamento", "B) Marginação", "C) Transmigração (ou Diapedese)", "D) Ativação", "E) Recirculação"], correct: 2, feedback: "A migração através da parede do vaso, geralmente entre as bordas das células endoteliais, chama-se transmigração ou transmigração paracelular." },
                { q: "A quimiocina CXCL13 é crucial para a migração de qual tipo celular para os folículos dos órgãos linfoides?", options: ["A) Neutrófilos", "B) Células T Efetoras", "C) Monócitos", "D) Linfócitos B", "E) Células NK"], correct: 3, feedback: "A CXCL13 é produzida nos folículos e atrai células B naïve através do receptor CXCR5." },
                { q: "As integrinas são proteínas heterodiméricas de superfície celular compostas por:", options: ["A) Três cadeias idênticas", "B) Apenas uma cadeia polipeptídica", "C) Carboidratos complexos", "D) Lipídios de membrana", "E) Duas cadeias polipeptídicas (α e β)"], correct: 4, feedback: "Integrinas são heterodímeros compostos por duas cadeias polipeptídicas ligadas não covalentemente, uma alfa (α) e uma beta (β)." },
                { q: "Por que o rolamento dos leucócitos no endotélio é um processo instável e repetitivo?", options: ["A) Porque as interações selectina-ligante têm baixa afinidade e alta taxa de desligamento.", "B) Porque as integrinas bloqueiam o fluxo sanguíneo.", "C) Porque as quimiocinas repelem as células.", "D) Porque o endotélio é liso demais.", "E) Porque os leucócitos morrem rapidamente."], correct: 0, feedback: "As interações das selectinas são de baixa afinidade e rompidas facilmente pela força do fluxo sanguíneo, causando o efeito de rolamento." },
                { q: "Diferente das células T naïve, as células T efetoras migram preferencialmente para:", options: ["A) O timo", "B) Locais de infecção e inflamação nos tecidos periféricos", "C) A medula óssea exclusivamente", "D) O baço, na polpa branca", "E) As Vênulas Endoteliais Altas (HEVs)"], correct: 1, feedback: "Linfócitos efetores migram preferencialmente para tecidos periféricos infectados ou lesionados para combater microrganismos, não voltando para os órgãos linfoides como as células naïve." },
                { q: "Além de aumentar a adesão dos leucócitos ao endotélio, qual é a outra função principal das quimiocinas nos tecidos?", options: ["A) Matar bactérias diretamente", "B) Produzir anticorpos", "C) Estimular o movimento direcionado (quimiocinese) em direção à fonte da quimiocina", "D) Coagular o sangue", "E) Degradar a matriz extracelular"], correct: 2, feedback: "As quimiocinas estimulam o movimento dos leucócitos ao longo de um gradiente de concentração em direção à fonte (quimiocinese ou quimioatração)." },
                { q: "A molécula de adesão VCAM-1, expressa no endotélio ativado, serve como ligante para qual integrina?", options: ["A) LFA-1", "B) Mac-1", "C) gp120", "D) VLA-4", "E) CD31"], correct: 3, feedback: "A integrina VLA-4 liga-se à molécula de adesão celular vascular 1 (VCAM-1)." },
                { q: "A recirculação dos linfócitos naïve, passando repetidamente pelos órgãos linfoides secundários, tem como principal objetivo:", options: ["A) Eliminar patógenos diretamente no sangue.", "B) Maturar em células dendríticas.", "C) Evitar o contato com antígenos.", "D) Reparar tecidos danificados.", "E) Maximizar as chances de encontrar o antígeno específico que eles reconhecem."], correct: 4, feedback: "A recirculação maximiza a chance de que o pequeno número de linfócitos naïve específicos para um antígeno encontre esse antígeno nos órgãos linfoides." }
            ],
            avancado: [
                { q: "Qual é o principal mecanismo molecular que permite que as quimiocinas ligadas à superfície endotelial convertam a adesão de baixa afinidade (rolamento) em uma adesão estável e firme do leucócito?", options: ["A. A quimiocina estimula a polimerização da actina, que degrada o complexo VE-caderina, permitindo a transmigração.", "B. A quimiocina induz o processo de \"sinal de dentro para fora\", alterando a conformação dos domínios extracelulares das integrinas, aumentando drasticamente sua afinidade de ligação.", "C. A quimiocina se liga diretamente aos ligantes da selectina, competindo com as moléculas de adesão para liberar o leucócito.", "D. A quimiocina ativa a síntese e expressão rápida da E-selectina na superfície endotelial."], correct: 1, feedback: "A quimiocina induz o processo de \"sinal de dentro para fora\", alterando a conformação dos domínios extracelulares das integrinas, aumentando drasticamente sua afinidade de ligação." },
                { q: "A P-selectina (CD62P) e a E-selectina (CD62E) são expressas nas células endoteliais. Qual afirmação descreve corretamente a diferença na regulação da expressão dessas duas selectinas?", options: ["A. A P-selectina é sintetizada em 1 a 2 horas em resposta à IL-1 e TNF; a E-selectina é armazenada em grânulos.", "B. Ambas são constitutivas no endotélio e se ligam à L-selectina nos leucócitos.", "C. A P-selectina é rapidamente redistribuída de grânulos citoplasmáticos em resposta à histamina e trombina; a E-selectina é sintetizada e expressa em horas em resposta à IL-1 e TNF.", "D. A P-selectina liga-se somente a células T naïve; a E-selectina liga-se a neutrófilos e monócitos."], correct: 2, feedback: "A P-selectina é rapidamente redistribuída de grânulos citoplasmáticos em resposta à histamina e trombina; a E-selectina é sintetizada e expressa em horas em resposta à IL-1 e TNF." },
                { q: "Em contraste com os linfócitos efetores, qual é o destino primário dos linfócitos naïve em circulação e qual molécula de adesão é crucial para mediar seu rolamento e entrada inicial neste local?", options: ["A. Locais de infecção; E-selectina.", "B. Tecidos não linfoides periféricos; Mac-1.", "C. Órgãos linfoides secundários (via Vênulas Endoteliais Altas - HEVs); L-selectina.", "D. Tecidos com dano; Integrina Mac-1."], correct: 2, feedback: "O destino primário é os órgãos linfoides secundários (via HEVs), e a L-selectina é crucial para o rolamento." },
                { q: "As integrinas LFA-1 e VLA-4 são importantes para a adesão dos leucócitos ao endotélio ativado. Quais são os principais ligantes dessas integrinas, respectivamente, expressos nas células endoteliais ativadas por citocinas?", options: ["A. Sialil Lewis X e PNAd.", "B. PNAd e GlyCAM-1.", "C. ICAM-1 (CD54) e VCAM-1 (CD106).", "D. CD34 e MadCAM-1."], correct: 2, feedback: "ICAM-1 (CD54) é ligante de LFA-1 e VCAM-1 (CD106) é ligante de VLA-4." },
                { q: "O processo de recrutamento de leucócitos do sangue para os tecidos é uma sequência de eventos regulados. Qual é a ordem correta destes passos?", options: ["A. Adesão estável → Ativação de integrina → Rolamento → Transmigração.", "B. Rolamento mediado por selectina → Ativação de integrina mediada por quimiocina → Adesão estável → Transmigração.", "C. Ativação de integrina → Transmigração → Adesão estável → Rolamento.", "D. Transmigração → Adesão de baixa afinidade → Adesão de alta afinidade."], correct: 1, feedback: "A ordem correta é: Rolamento mediado por selectina → Ativação de integrina mediada por quimiocina → Adesão estável → Transmigração." },
                { q: "A principal função do processo de recirculação do linfócito naïve é:", options: ["A. Garantir que as células T ativadas retornem aos órgãos linfoides secundários para maturar as células B.", "B. Maximizar a chance de que o pequeno número de linfócitos naïve específicos para um antígeno encontre esse antígeno se ele for apresentado em qualquer local do corpo.", "C. Distribuir leucócitos de linhagem mieloide para locais de infecção.", "D. Permitir a migração de monócitos não clássicos para o endotélio."], correct: 1, feedback: "A recirculação maximiza a chance de encontro entre o linfócito naïve específico e seu antígeno." },
                { q: "As duas principais famílias de quimiocinas são a CC e a CXC, classificadas pela localização de seus resíduos N-terminais de cisteína. Qual dessas famílias está primariamente associada ao recrutamento de neutrófilos, e qual quimiocina específica é crucial para isso?", options: ["A. Família CC; CCL2 (MCP-1).", "B. Família CXC; CXCL8 (IL-8).", "C. Família CC; CCL19 (MIP-3β).", "D. Família C; Linfotactina (XCL1)."], correct: 1, feedback: "A família CXC, especificamente a CXCL8 (IL-8), é crucial para o recrutamento de neutrófilos." },
                { q: "Qual é a causa molecular da Deficiência de Adesão de Leucócito Tipo 1 (LAD-1)?", options: ["A. Mutações raras nas vias de sinalização que ligam os receptores de quimiocinas à ativação da integrina (LAD-3).", "B. Deficiência recessiva herdada no gene CD18, que codifica a subunidade β da integrina LFA-1 e Mac-1.", "C. Falha na síntese do transportador fucose, necessário para expressar ligantes para E-selectina e P-selectina (LAD-2).", "D. Supressão da reexpressão de S1PR1."], correct: 1, feedback: "LAD-1 é causada por uma deficiência no gene CD18, afetando a subunidade β das integrinas." },
                { q: "A saída (egressão) das células T naïve dos linfonodos para a corrente sanguínea é dependente da detecção de um gradiente de concentração. Qual lipídio quimioatraente e seu receptor controlam este processo?", options: ["A. Fator de necrose tumoral (TNF) e E-selectina.", "B. Quimiocinas CCL19/CCL21 e CCR7.", "C. Esfingosina 1-fosfato (S1P) e S1PR1.", "D. Lipopolissacarídeo (LPS) e Integrinas."], correct: 2, feedback: "A saída depende do gradiente de Esfingosina 1-fosfato (S1P) e seu receptor S1PR1." },
                { q: "Durante a diferenciação das células T naïve em células efetoras, as células sofrem alterações na expressão de moléculas de adesão que promovem a migração para os locais de infecção. Qual é uma característica dessas células T efetoras?", options: ["A. Expressão aumentada de CCR7 e L-selectina, favorecendo o retorno ao linfonodo.", "B. Expressão reduzida de CCR7 e L-selectina, mas expressão aumentada de integrinas e ligantes de E-selectina e P-selectina.", "C. Elas perdem completamente a expressão de integrinas.", "D. Elas se tornam insensíveis ao gradiente de CXCL8."], correct: 1, feedback: "Células T efetoras reduzem CCR7 e L-selectina e aumentam integrinas e ligantes de selectinas inflamatórias." },
                { q: "O que acontece com a expressão do receptor S1PR1 nas células T naïve se elas forem ativadas por um antígeno no linfonodo?", options: ["A. A expressão de S1PR1 é imediatamente e permanentemente aumentada, acelerando a saída.", "B. A reexpressão de S1PR1 é suprimida por vários dias, permitindo que as células permaneçam e sofram expansão clonal e diferenciação.", "C. S1PR1 é internalizado devido à baixa concentração de S1P no linfonodo.", "D. O receptor muda de especificidade para se ligar ao LPS."], correct: 1, feedback: "A expressão de S1PR1 é suprimida temporariamente para permitir a proliferação e diferenciação no linfonodo." },
                { q: "A migração das células T naïve do sangue para os linfonodos é orquestrada pela ligação de quais quimiocinas aos seus receptores nas células T?", options: ["A. CXCL8 e CXCR1/2.", "B. CCL2 e CCR2.", "C. CCL19 e CCL21, que se ligam ao receptor CCR7.", "D. CXCL13 e CXCR5."], correct: 2, feedback: "CCL19 e CCL21 ligando-se ao receptor CCR7 orquestram a entrada nos linfonodos." },
                { q: "O que permite a transmigração paracelular de leucócitos através do endotélio, e qual complexo de adesão é transientemente rompido para que o leucócito passe?", options: ["A. O movimento através das células endoteliais, mediado pela CD31.", "B. O movimento entre as células endoteliais, dependente do rompimento reversível do complexo VE-caderina.", "C. A degradação da matriz extracelular pela Mac-1.", "D. A ligação de S1P ao S1PR1."], correct: 1, feedback: "A transmigração paracelular envolve o rompimento reversível do complexo VE-caderina entre as células endoteliais." },
                { q: "Qual molécula de adesão é expressa especificamente nas Vênulas Endoteliais Altas (HEVs) em tecidos linfoides associados à mucosa (como as placas de Peyer) e desempenha um papel duplo, ligando-se tanto à L-selectina quanto à integrina α4β7?", options: ["A. VCAM-1.", "B. ICAM-1.", "C. Adressina de nodo periférico (PNAd).", "D. MadCAM-1 (Molécula 1 de adesão celular de adressina de mucosa)."], correct: 3, feedback: "MadCAM-1 é expressa em HEVs de tecidos linfoides de mucosa e liga-se a L-selectina e integrina α4β7." },
                { q: "Qual é o papel das quimiocinas nos tecidos extravasculares (fora da circulação), uma vez que o leucócito completou a transmigração?", options: ["A. Induzir a reexpressão de S1PR1 para que o leucócito retorne ao sangue.", "B. Estimular a diferenciação do linfócito naïve em célula T efetora.", "C. Estimular diretamente o movimento do leucócito ao longo de um gradiente de concentração em direção à sua fonte, um processo chamado quimiocinese.", "D. Manter as integrinas em estado de baixa afinidade."], correct: 2, feedback: "Nos tecidos, as quimiocinas orientam o movimento dos leucócitos em direção à fonte (quimiocinese)." }
            ],
        },
        abertas: [
            { q: "Defina o processo de inflamação no contexto da migração celular e liste as três principais funções do movimento constante e regulado dos componentes celulares do sistema imune.", a: "A inflamação é o processo de recrutamento de leucócitos e proteínas plasmáticas para locais de infecção/lesão. As três funções são: 1) Distribuição de leucócitos mieloides para locais de infecção; 2) Distribuição de linfócitos para órgãos linfoides secundários (maturação/reconhecimento); 3) Distribuição de linfócitos efetores para locais de infecção." },
            { q: "Descreva a diferença fundamental nos padrões de migração (homing) entre os linfócitos naïve e os linfócitos efetores, e qual é a importância da recirculação para os linfócitos naïve?", a: "Linfócitos naïve migram para tecidos linfoides secundários; efetores migram para tecidos infectados/lesionados. A recirculação maximiza a chance de encontro entre o linfócito naïve específico e seu antígeno." },
            { q: "Compare as selectinas P-selectina (CD62P) e E-selectina (CD62E) em termos de sua localização e do estímulo que leva à sua expressão na superfície da célula endotelial durante a inflamação.", a: "P-selectina: armazenada em grânulos, redistribuída rapidamente por histamina/trombina. E-selectina: sintetizada em 1-2h em resposta a citocinas (IL-1, TNF) e LPS." },
            { q: "Explique o papel das interações selectina-ligante de selectina no passo de \"rolamento\" do leucócito e como as propriedades de ligação molecular permitem este fenômeno.", a: "Mediam adesão inicial de baixa afinidade. A rápida taxa de desligamento e religação sob fluxo sanguíneo causa o rolamento, lentificando o leucócito." },
            { q: "Descreva o conceito de \"sinal de dentro para fora\" (inside-out signaling) no contexto da ativação das integrinas e sua importância para a adesão leucocitária.", a: "Sinais intracelulares (via quimiocinas) alteram a conformação das integrinas, aumentando sua afinidade por ligantes. Isso permite a adesão firme necessária para a parada e transmigração." },
            { q: "As integrinas LFA-1 e Mac-1 compartilham uma característica estrutural e a deficiência nesta estrutura causa uma doença imunodeficiente. Identifique a estrutura compartilhada e o nome da síndrome resultante de sua deficiência.", a: "Compartilham a subunidade beta (CD18). A deficiência causa a Deficiência de Adesão de Leucócito Tipo 1 (LAD-1)." },
            { q: "Explique como as quimiocinas, além de serem quimioatraentes diretos, desempenham um papel crucial na adesão aumentada dos leucócitos ao endotélio.", a: "Elas ativam integrinas (sinal de dentro para fora) aumentando a adesão ao endotélio, além de guiar a migração (quimiocinese)." },
            { q: "Diferencie as duas principais famílias de quimiocinas (CC e CXC) com base em sua estrutura e indique qual família está primariamente associada ao recrutamento de neutrófilos.", a: "CC: cisteínas adjacentes. CXC: cisteínas separadas por um aminoácido. CXC (ex: CXCL8) recruta neutrófilos." },
            { q: "O recrutamento de neutrófilos e monócitos segue um padrão temporal distinto para os locais de infecção. Explique a ordem e a base molecular dessa diferença de tempo.", a: "Neutrófilos chegam primeiro (CXCL8 precoce). Monócitos chegam depois (CCL2 mais tardia/prolongada)." },
            { q: "Descreva as Vênulas Endoteliais Altas (HEVs) e explique a combinação específica de moléculas de adesão e quimiocinas que medeia a entrada das células T naïve nos linfonodos.", a: "Vênulas especializadas em linfonodos. Entrada mediada por L-selectina (rolamento) e CCR7 ligando-se a CCL19/CCL21 (adesão firme)." },
            { q: "Explique o mecanismo molecular pelo qual os linfócitos T naïve deixam os linfonodos e como este mecanismo é transientemente suprimido após a ativação antigênica da célula T.", a: "Saída via gradiente de S1P e receptor S1PR1. Após ativação, CD69 internaliza S1PR1, retendo a célula para proliferação." },
            { q: "As células T efetoras apresentam um padrão de migração diferente das células T naïve. Quais são as principais alterações na expressão de moléculas de adesão e receptores de quimiocinas que promovem a chegada preferencial das células T efetoras aos locais de infecção periféricos?", a: "Redução de L-selectina/CCR7. Aumento de integrinas (VLA-4, LFA-1), ligantes de selectinas inflamatórias e receptores de quimiocinas inflamatórias (ex: CXCR3)." },
            { q: "O que é a transmigração paracelular de leucócitos e qual complexo de adesão endotelial deve ser transientemente rompido para que o leucócito passe?", a: "Passagem entre células endoteliais. Requer rompimento transiente do complexo VE-caderina." },
            { q: "O que é a Adressina de Nodo Periférico (PNAd) e qual molécula relacionada é encontrada especificamente em tecidos linfoides associados à mucosa, como as Placas de Peyer?", a: "PNAd: ligantes de L-selectina em HEVs de linfonodos. MadCAM-1 é a molécula específica de mucosas (Placas de Peyer)." },
            { q: "Cite e descreva uma doença hereditária humana rara (Deficiência de Adesão de Leucócito) que ilustra a importância essencial das selectinas ou de seus ligantes na migração celular.", a: "LAD-2. Deficiência no transportador de fucose impede síntese de ligantes de selectina (sialil Lewis X), falhando o rolamento e recrutamento." }
        ]
    },

    // ========================================================================
    // ASSUNTO 3: ANTICORPOS
    // ========================================================================
    "anticorpos": {
        titulo: "Anticorpos: estrutura e função",

        // --- RESUMO TEÓRICO ---
        resumo: `
            <h2 style="margin-top: 0;">1. Introdução: O Que São Anticorpos?</h2>
                <p>Os anticorpos são os guardiões especializados do nosso sistema imune. Pense neles como uma força de segurança molecular altamente precisa, cuja principal missão é identificar e neutralizar invasores, como vírus e bactérias, e outras substâncias estranhas ao corpo.</p>
                
                <p>Formalmente, os anticorpos são <strong>glicoproteínas</strong> (proteínas ligadas a carboidratos) conhecidas como <strong>imunoglobulinas (Ig)</strong>. Eles circulam em nosso sangue e são encontrados em outros fluidos corporais e tecidos, sempre prontos para entrar em ação.</p>

                <div class="highlight-box">
                    <strong>A produção dessas moléculas notáveis é um processo elegante e específico:</strong>
                    <ul style="margin-top: 10px; padding-left: 15px;">
                        <li>Cada <strong>linfócito B</strong> possui em sua superfície um anticorpo que funciona como receptor, com uma especificidade única para um determinado invasor (antígeno).</li>
                        <li>Quando o antígeno específico se liga a esse receptor, o linfócito B é ativado.</li>
                        <li>O linfócito B ativado se multiplica e se diferencia em células especializadas chamadas <strong>plasmócitos</strong>.</li>
                        <li>Os plasmócitos são verdadeiras "fábricas" de anticorpos, secretando enormes quantidades de cópias idênticas ao receptor original.</li>
                    </ul>
                </div>

                <h2>2. A Anatomia de um Guardião: A Estrutura do Anticorpo</h2>
                <p>A estrutura de um anticorpo é perfeitamente projetada para suas duas tarefas principais: reconhecer o inimigo (antígeno) e acionar os mecanismos para eliminá-lo. Sua arquitetura básica é surpreendentemente simétrica, formando uma molécula em formato de "Y".</p>
                
                <div style="text-align: center; margin: 20px 0;">
                    <img src="Untitled-1030x721.png" alt="Estrutura do Anticorpo mostrando cadeias leves, pesadas e regiões Fab/Fc" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Figura 1: Estrutura detalhada de um anticorpo.</p>
                </div>

                <table class="info-table">
                    <tr>
                        <th>Região</th>
                        <th>Função Principal</th>
                    </tr>
                    <tr>
                        <td><strong>Região Variável (V)</strong></td>
                        <td>Localizada nas pontas dos "braços" do Y. Sua sequência de aminoácidos varia enormemente, permitindo reconhecer milhões de antígenos diferentes. Contém as <strong>CDRs</strong> que fazem contato direto com o epítopo.</td>
                    </tr>
                    <tr>
                        <td><strong>Região Constante (C)</strong></td>
                        <td>Corresponde ao restante da molécula (base do Y). É igual para todos os anticorpos da mesma classe. Determina a <strong>função efetora</strong> (o que acontece após a ligação).</td>
                    </tr>
                </table>
                
                <p>Esta divisão funcional pode ser ainda mais detalhada em duas porções principais:</p>
                <ul>
                    <li><strong>Porção Fab (Fragment, antigen-binding):</strong> Corresponde aos dois "braços" do Y. Responsável por reconhecer e se ligar ao antígeno.</li>
                    <li><strong>Porção Fc (Fragment, crystallizable):</strong> Corresponde à "base" ou "tronco" do Y. Interage com células (como macrófagos) e proteínas de defesa para eliminar o patógeno.</li>
                </ul>

                <h2>3. O Arsenal de Defesa: Como os Anticorpos Atuam</h2>
                <p>Uma vez que os "braços" (Fab) se ligam a um antígeno, a "base" (Fc) entra em ação. As três principais funções efetoras são:</p>
                <ul>
                    <li><strong>Neutralização:</strong> Bloqueiam fisicamente a entrada de vírus ou toxinas nas células.</li>
                    <li><strong>Opsonização e Fagocitose:</strong> Marcam o patógeno para destruição. Macrófagos reconhecem a porção Fc dos anticorpos que cobrem o invasor e o "engolem" mais facilmente.</li>
                    <li><strong>Ativação do Sistema Complemento:</strong> A porção Fc (principalmente IgG e IgM) ativa proteínas do sangue que destroem patógenos diretamente e promovem inflamação.</li>
                </ul>

                <div style="text-align: center; margin: 20px 0;">
                    <img src="Fab_Fc.png" alt="Regiões Fab (de ligação ao antígeno) e Fc (região que determina as funções ejetoras) do anticorpo" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <p style="font-size: 0.8rem; color: #64748b; margin-top: 5px;">Figura 2: Regiões Fab e Fc de um anticorpo.</p>
                </div>

                <h2>4. As Classes de Anticorpos: Um Soldado para Cada Batalha</h2>
                <p>Existem cinco classes principais (isotipos). A diferença reside na estrutura da região constante (C) de suas cadeias pesadas.</p>
                
                <table class="info-table">
                    <tr>
                        <th>Isotipo</th>
                        <th>Função Principal e Característica Chave</th>
                    </tr>
                    <tr>
                        <td><strong>IgG</strong></td>
                        <td>Mais abundante no sangue. Faz opsonização, ativa complemento e <strong>atravessa a placenta</strong> (imunidade fetal).</td>
                    </tr>
                    <tr>
                        <td><strong>IgM</strong></td>
                        <td>Primeiro a ser produzido. É um <strong>pentâmero</strong> (5 unidades), tendo altíssima avidez e ativando o complemento com eficiência.</td>
                    </tr>
                    <tr>
                        <td><strong>IgA</strong></td>
                        <td>Guardião das <strong>mucosas</strong> (saliva, intestino). Secretado como dímero, neutraliza patógenos antes que invadam.</td>
                    </tr>
                    <tr>
                        <td><strong>IgE</strong></td>
                        <td>Mediador de <strong>alergias</strong> e defesa contra parasitas. Liga-se a mastócitos causando desgranulação.</td>
                    </tr>
                    <tr>
                        <td><strong>IgD</strong></td>
                        <td>Atua principalmente como receptor na superfície de linfócitos B virgens.</td>
                    </tr>
                </table>

                <h2>5. Conclusão: A Essência dos Anticorpos</h2>
                <p>Em resumo, os anticorpos são moléculas centrais na nossa defesa. São proteínas especializadas produzidas por plasmócitos para identificar (via Fab) e eliminar (via Fc) substâncias estranhas, garantindo nossa sobrevivência em um mundo cheio de microrganismos.</p>
        `,

        // --- MÍDIA ---
        midia: {
            audio: "Soro_Animal_ao_Anticorpo_Inteligente.m4a",
            video: "video_anticorpos.mp4",
            infographics: "3. Anticorpos.pdf"
        },

        // --- MAPA MENTAL ---
        mindmap: [
            {
                title: "I. Definição e Contexto",
                content: `
                    <div class="mm-subnode"><strong>Definição:</strong> Glicoproteínas (Ig) da imunidade humoral.</div>
                    <div class="mm-subnode"><strong>Chaves:</strong> Especificidade e Memória.</div>
                `
            },
            {
                title: "II. Estrutura Básica",
                content: `
                    <div class="mm-subnode"><strong>Forma:</strong> Y simétrico.</div>
                    <div class="mm-subnode"><strong>Cadeias:</strong> 2 Leves + 2 Pesadas.</div>
                    <div class="mm-subnode"><strong>Fab:</strong> Variável (liga antígeno).</div>
                    <div class="mm-subnode"><strong>Fc:</strong> Constante (função efetora).</div>
                `
            },
            {
                title: "III. Isotipos",
                content: `
                    <div class="mm-subnode"><strong>IgG:</strong> Placenta, opsonização, +abundante.</div>
                    <div class="mm-subnode"><strong>IgM:</strong> Pentâmero, complemento.</div>
                    <div class="mm-subnode"><strong>IgA:</strong> Mucosas.</div>
                    <div class="mm-subnode"><strong>IgE:</strong> Alergias/Parasitas.</div>
                `
            },
            {
                title: "IV. Desenvolvimento",
                content: `
                    <div class="mm-subnode">Diversidade (V(D)J) e Maturação de Afinidade.</div>
                `
            }
        ],

        // --- FLASHCARDS ---
        flashcards: [
            { q: "Qual a estrutura básica de um anticorpo?", a: "2 cadeias pesadas e 2 leves ligadas por dissulfeto." },
            { q: "Onde fica o sítio de ligação ao antígeno?", a: "Nas regiões variáveis (Fab), especificamente nas CDRs." },
            { q: "Como a IgM é secretada?", a: "Como Pentâmero (alta avidez)." },
            { q: "Qual a função da IgA?", a: "Imunidade de mucosas." },
            { q: "Qual Ig causa alergias?", a: "IgE (liga a mastócitos)." },
            { q: "Para que serve a IgD?", a: "Receptor em células B virgens." },
            { q: "O que é um epítopo?", a: "A parte específica do antígeno onde o anticorpo se liga." },
            { q: "Diferença de reconhecimento B vs T?", a: "B (anticorpo) vê macromoléculas nativas; T vê peptídeos no MHC." },
            { q: "Função da região Fc?", a: "Funções efetoras (fagocitose, complemento)." },
            { q: "O que é afinidade vs avidez?", a: "Afinidade: força de 1 ligação. Avidez: força total das ligações somadas." },
            { q: "Tipo de cadeia leve mais comum:", a: "Kappa." },
            { q: "O que é repertório de linfócitos?", a: "Conjunto total de clones com especificidades únicas." },
            { q: "Citocina dos centros germinativos:", a: "CXCL13." },
            { q: "Resposta a antígenos T-independentes:", a: "IgM predominante." },
            { q: "O que é CD40L?", a: "Molécula do T auxiliar que ativa B e macrófagos." }
        ],

        // --- QUIZ ---
        quiz: {
            basico: [
                { q: "A estrutura básica de uma molécula de anticorpo (imunoglobulina) é composta por quatro cadeias polipeptídicas. Qual das alternativas descreve corretamente essa organização?", options: ["A) Duas cadeias pesadas idênticas e duas cadeias leves idênticas, mantidas juntas por ligações dissulfeto.", "B) Quatro cadeias pesadas idênticas ligadas a uma cadeia leve central.", "C) Uma cadeia pesada e três cadeias leves, formando uma estrutura assimétrica.", "D) Duas cadeias alfa e duas cadeias beta, sem ligações covalentes.", "E) Uma estrutura pentamérica composta apenas por cadeias leves."], correct: 0, feedback: "A estrutura central de uma molécula de anticorpo é simétrica e composta por duas cadeias leves idênticas e duas cadeias pesadas idênticas. Estas cadeias contêm unidades homólogas repetidas e são mantidas unidas por ligações dissulfeto (covalentes) e interações não covalentes." },
                { q: "As moléculas de anticorpo possuem regiões com funções distintas. Qual é a principal função da região Fab (fragmento de ligação ao antígeno) e da região Fc (fragmento cristalizável), respectivamente?", options: ["A) A região Fab cristaliza-se facilmente, enquanto a Fc liga-se ao antígeno.", "B) A região Fab é responsável pelo reconhecimento do antígeno, enquanto a região Fc media a maioria das funções efetoras biológicas.", "C) A região Fab ancora o anticorpo na membrana, enquanto a Fc é secretada.", "D) Ambas as regiões têm a mesma função, diferindo apenas no tamanho.", "E) A região Fab ativa o complemento, enquanto a Fc contém os CDRs."], correct: 1, feedback: "A digestão enzimática revelou que a molécula de anticorpo tem funções espacialmente separadas. Os fragmentos Fab (Fragment antigen binding) retêm a habilidade de se ligar ao antígeno. Já o fragmento Fc (Fragment crystallizable) é responsável pelas funções biológicas e efetoras, ligando-se a receptores em células e ao complemento." },
                { q: "A digestão enzimática de anticorpos foi crucial para elucidar sua estrutura. Ao tratar uma molécula de IgG com a enzima papaína, quais são os produtos resultantes?", options: ["A) Um único fragmento F(ab')2 e fragmentos peptídicos da região Fc.", "B) Quatro cadeias isoladas (duas pesadas e duas leves).", "C) Duas moléculas Fab separadas e uma molécula Fc.", "D) Apenas aminoácidos livres, devido à digestão total.", "E) Um fragmento Fab ligado a um fragmento Fc."], correct: 2, feedback: "O tratamento de IgG com a enzima papaína cliva a molécula na região da dobradiça, resultando em três pedaços separados: dois fragmentos Fab idênticos (que contêm o local de ligação ao antígeno) e um fragmento Fc. Isso difere da pepsina, que gera um fragmento F(ab')2." },
                { q: "A variabilidade dos anticorpos concentra-se em regiões específicas chamadas de Regiões Determinantes de Complementariedade (CDRs). Qual das afirmações abaixo sobre as CDRs é verdadeira?", options: ["A) Elas estão localizadas nas regiões constantes das cadeias pesadas.", "B) Existem apenas duas CDRs em cada molécula de anticorpo inteira.", "C) As CDRs não entram em contato direto com o antígeno.", "D) A CDR3 é a mais variável das três CDRs e faz os contatos mais extensos com o antígeno.", "E) Elas são formadas por folhas-beta rígidas e invariáveis."], correct: 3, feedback: "As regiões hipervariáveis ou CDRs (Regiões Determinantes de Complementariedade) são alças que formam a superfície de ligação ao antígeno. A CDR3 é a mais variável das três e, análises cristalográficas mostram que ela forma o contato mais extenso com o antígeno." },
                { q: "A avidez de um anticorpo difere de sua afinidade. Como a IgM pentamérica consegue compensar a baixa afinidade de seus sítios de ligação individuais?", options: ["A) Através da maturação de afinidade rápida no timo.", "B) Ligando-se a receptores Fc de alta afinidade em neutrófilos.", "C) Trocando suas cadeias leves para o tipo lambda.", "D) Secretando toxinas que destroem o antígeno sem ligação.", "E) Utilizando seus 10 locais de ligação para interagir simultaneamente com antígenos polivalentes, gerando uma alta avidez total."], correct: 4, feedback: "A molécula de IgM pentamérica possui 10 locais de ligação ao antígeno. Embora a afinidade individual de cada sítio possa ser baixa, a força geral de ligação (avidez) é muito alta porque ela pode se ligar a múltiplos epítopos repetidos simultaneamente." },
                { q: "A superfamília das imunoglobulinas (Ig) inclui moléculas que compartilham uma estrutura de dobramento comum. Qual é a característica estrutural básica do 'domínio Ig'?", options: ["A) Duas camadas de folhas beta-pregueadas mantidas juntas por uma ponte dissulfeto.", "B) Uma hélice alfa longa enrolada em torno de um íon de zinco.", "C) Uma estrutura lipídica circular hidrofóbica.", "D) Três cadeias polipeptídicas entrelaçadas em forma de hélice tripla.", "E) Um anel de carboidratos complexos sem aminoácidos."], correct: 0, feedback: "O domínio Ig é um motivo globular característico da superfamília das imunoglobulinas. Ele consiste em duas camadas de folhas β-pregueadas (compostas por 3 a 5 fitas antiparalelas cada) mantidas juntas por uma ponte dissulfeto conservada." },
                { q: "Os anticorpos são divididos em isotipos com base na estrutura de suas regiões constantes da cadeia pesada. Qual é a função primária associada à IgE?", options: ["A) Imunidade mucosa e proteção do recém-nascido via leite materno.", "B) Defesa contra parasitas helmínticos e reações de hipersensibilidade imediata (alergia).", "C) Ativação da via clássica do complemento e opsonização bacteriana.", "D) Atuar exclusivamente como receptor de antígeno em células B virgens.", "E) Transporte através da placenta para o feto."], correct: 1, feedback: "A função efetora primária da IgE está relacionada à defesa contra parasitas helmínticos e reações de hipersensibilidade imediata (alergia). A IgE liga-se a receptores Fc específicos em mastócitos, disparando a desgranulação." },
                { q: "A IgG possui uma meia-vida sérica excepcionalmente longa (cerca de 3 semanas) em comparação com outros isotipos. Qual mecanismo explica esse fenômeno?", options: ["A) A IgG forma pentâmeros que são grandes demais para serem filtrados pelos rins.", "B) A IgG é revestida por carboidratos que impedem a proteólise.", "C) A ligação da IgG ao receptor Fc neonatal (FcRn) em endossomos ácidos a protege da degradação lisossômica e a recicla para o sangue.", "D) A IgG liga-se covalentemente à albumina sérica.", "E) A IgG não é captada por nenhuma célula do corpo."], correct: 2, feedback: "A longa meia-vida da IgG (21-28 dias) deve-se à sua capacidade de se ligar ao receptor Fc neonatal (FcRn). O FcRn protege a IgG da degradação lisossômica dentro das células (endossomas acídicos) e a recicla, liberando-a de volta à circulação em pH neutro." },
                { q: "Antígenos proteicos podem apresentar determinantes (epítopos) lineares ou conformacionais. O que caracteriza um determinante conformacional?", options: ["A) É formado por uma sequência contínua de aminoácidos na estrutura primária.", "B) É reconhecido apenas por células T, nunca por anticorpos.", "C) É resistente à desnaturação da proteína.", "D) É formado por resíduos de aminoácidos que são espacialmente justapostos pelo dobramento da proteína, mas não estão em sequência na cadeia linear.", "E) É criado exclusivamente por clivagem proteolítica (neoantígeno)."], correct: 3, feedback: "Determinantes conformacionais são formados por resíduos de aminoácidos que não estão em sequência linear, mas que se tornam espacialmente justapostos quando a proteína se dobra em sua estrutura terciária (nativa). Eles geralmente são perdidos se a proteína for desnaturada." },
                { q: "Durante a produção de anticorpos monoclonais pela técnica de hibridoma, utiliza-se um meio de seleção chamado HAT. Qual é o princípio de funcionamento desse meio?", options: ["A) Estimular a fusão de todas as células do baço.", "B) Fornecer nutrientes extras para as células de mieloma crescerem mais rápido.", "C) Matar as células B normais que não se fundiram.", "D) Induzir mutações somáticas nos hibridomas.", "E) Permitir apenas o crescimento de células híbridas (hibridomas), pois as células de mieloma mutantes morrem por falta da enzima HGPRT e as células B não fundidas morrem naturalmente."], correct: 4, feedback: "No meio HAT, apenas os hibridomas sobrevivem. As células de mieloma mutantes morrem porque não possuem a enzima HGPRT necessária para a via de salvação (e a via de novo é bloqueada pela aminopterina). As células B normais morrem naturalmente pois não são imortais. O hibridoma sobrevive pois herda a imortalidade do mieloma e a enzima HGPRT da célula B." },
                { q: "Qual isotipo de imunoglobulina é encontrado principalmente nas secreções mucosas (como saliva, lágrimas e trato intestinal) e é frequentemente secretado como um dímero?", options: ["A) IgA.", "B) IgD.", "C) IgE.", "D) IgG.", "E) IgM."], correct: 0, feedback: "A IgA é a principal classe de anticorpo nas secreções mucosas e é eficientemente secretada através do epitélio mucoso, frequentemente na forma de dímero estabilizado pela cadeia J." },
                { q: "Na maturação dos linfócitos B, diferentes formas de imunoglobulinas são expressas. O que caracteriza o padrão de imunoglobulinas na superfície de uma célula B madura virgem (naïve)?", options: ["A) Expressão exclusiva de cadeia pesada mu citoplasmática.", "B) Expressão simultânea de IgM e IgD de membrana.", "C) Secreção de grandes quantidades de IgG.", "D) Ausência de qualquer imunoglobulina de membrana.", "E) Expressão de receptores de célula T em vez de anticorpos."], correct: 1, feedback: "Células B maduras (mas virgens/naïve, que ainda não encontraram antígeno) expressam simultaneamente formas membranares de IgM e IgD, que funcionam como receptores de antígeno." },
                { q: "Qual é a principal diferença estrutural entre a forma secretada e a forma ligada à membrana de um anticorpo do mesmo isotipo?", options: ["A) A forma secretada possui mais domínios variáveis.", "B) A forma de membrana possui uma região Fab maior.", "C) A sequência de aminoácidos da porção carboxiterminal da cadeia pesada (hidrofílica na secretada, hidrofóbica/transmembrana na de membrana).", "D) A forma secretada não possui cadeias leves.", "E) A forma de membrana é sempre um pentâmero."], correct: 2, feedback: "A diferença reside na extremidade carboxiterminal da cadeia pesada. A forma secretada tem uma cauda hidrofílica, enquanto a forma de membrana possui uma região transmembrana hidrofóbica e uma cauda citoplasmática curta." },
                { q: "Um fenômeno importante na imunologia é a reação cruzada. O que define esse evento?", options: ["A) Quando um anticorpo ativa o complemento e a fagocitose ao mesmo tempo.", "B) Quando dois anticorpos diferentes se ligam ao mesmo epítopo.", "C) A troca de classe de IgM para IgG.", "D) Quando um anticorpo produzido contra um antígeno se liga a um antígeno diferente, mas estruturalmente relacionado.", "E) Quando o anticorpo se liga ao receptor Fc da própria célula B."], correct: 3, feedback: "Reação cruzada ocorre quando um anticorpo produzido contra um antígeno específico se liga a um antígeno diferente, porém estruturalmente relacionado. Isso pode ser a base de certas doenças autoimunes." },
                { q: "O processo de 'Maturação de Afinidade' ocorre durante as respostas imunes humorais a antígenos proteicos. Qual é o resultado desse processo?", options: ["A) Mudança do isotipo de IgM para IgE.", "B) Aumento do número de sítios de ligação de 2 para 10.", "C) Transformação de anticorpos secretados em anticorpos de membrana.", "D) Perda da capacidade de ativar o sistema complemento.", "E) Aumento na força de ligação (menor Kd) dos anticorpos ao antígeno devido a mutações somáticas nas regiões V."], correct: 4, feedback: "A maturação de afinidade é o processo onde mutações somáticas nas regiões V das células B geram anticorpos com maior afinidade (menor Kd) pelo antígeno durante a resposta imune. As células que produzem esses anticorpos de alta afinidade são selecionadas para sobreviver." },
                { q: "O que são os alótipos de anticorpos?", options: ["A) Variantes polimórficas herdadas (pequenas diferenças nas regiões C) encontradas em alguns indivíduos da mesma espécie.", "B) Diferenças nas regiões hipervariáveis (CDRs) que determinam a especificidade pelo antígeno.", "C) As diferentes classes de imunoglobulinas (IgM, IgG, etc.) presentes em todos os indivíduos.", "D) Anticorpos produzidos em espécies diferentes (ex: cavalo vs. humano).", "E) Anticorpos monoclonais modificados geneticamente."], correct: 0, feedback: "Alótipos referem-se a variantes polimórficas herdadas (pequenas diferenças na sequência de aminoácidos) nas regiões constantes dos anticorpos, encontradas em alguns indivíduos de uma espécie, mas não em outros." },
                { q: "O que é necessário para que um anticorpo inicie suas funções efetoras, como a ativação do complemento ou fagocitose via FcR?", options: ["A) O anticorpo deve estar na forma de monômero livre no plasma.", "B) O anticorpo deve se ligar ao antígeno, permitindo que múltiplas porções Fc fiquem adjacentes/agrupadas.", "C) O anticorpo deve perder suas cadeias leves.", "D) O anticorpo deve ser do isotipo IgD.", "E) O anticorpo deve sofrer digestão pela papaína in vivo."], correct: 1, feedback: "Funções efetoras, como a ativação do complemento, requerem que o anticorpo esteja ligado ao antígeno. Isso agrupa as moléculas de anticorpo, permitindo que duas ou mais porções Fc fiquem adjacentes para ligar e disparar os sistemas efetores (como o C1q do complemento)." },
                { q: "A formação de complexos antígeno-anticorpo (imunocomplexos) depende das concentrações relativas dos reagentes. O que ocorre na 'zona de equivalência'?", options: ["A) Há um grande excesso de anticorpos livres, impedindo a formação de complexos.", "B) Há um grande excesso de antígenos livres, formando complexos muito pequenos.", "C) Anticorpo e antígeno formam uma malha extensa e grandes complexos (precipitados), pois a maioria das moléculas está ligada.", "D) Os anticorpos se dissociam dos antígenos espontaneamente.", "E) Ocorre a lise das moléculas de anticorpo."], correct: 2, feedback: "A zona de equivalência é alcançada quando as concentrações de antígeno e anticorpo permitem a formação de uma extensa malha cruzada, resultando em grandes imunocomplexos. No excesso de antígeno ou anticorpo, formam-se apenas complexos pequenos." },
                { q: "Pequenas moléculas químicas, como o dinitrofenol, podem se ligar a anticorpos, mas não conseguem ativar células B por conta própria. Como são chamadas essas moléculas e como podem se tornar imunogênicas?", options: ["A) Citocinas; se injetadas com anti-inflamatórios.", "B) Adjuvantes; se misturadas com óleo.", "C) Isotipos; se sofrerem mutação.", "D) Haptenos; se conjugadas a uma macromolécula carreadora (carrier).", "E) Receptores; se expressas na membrana."], correct: 3, feedback: "Pequenas moléculas que se ligam a anticorpos mas não ativam células B sozinhas são chamadas de haptenos. Para se tornarem imunogênicas, elas precisam ser conjugadas a uma macromolécula chamada carreador (carrier)." },
                { q: "Anticorpos monoclonais têm amplo uso clínico. Qual das opções abaixo é uma aplicação terapêutica correta descrita no texto?", options: ["A) Uso de anticorpos policlonais de cavalo para tratar artrite crônica.", "B) Uso de IgD monoclonal para aumentar a resposta alérgica.", "C) Injeção de células de hibridoma vivas diretamente no paciente.", "D) Uso de anticorpos monoclonais para destruir todas as células T do corpo indiscriminadamente.", "E) Uso de anticorpos contra o TNF (fator de necrose tumoral) para tratar artrite reumatoide bloqueando a inflamação."], correct: 4, feedback: "Uma das terapias com anticorpos monoclonais citadas envolve o uso de anticorpos contra o TNF (fator de necrose tumoral) para bloquear a inflamação em doenças como artrite reumatoide e psoríase." }
            ],
            avancado: [
                { q: "As imunoglobulinas compartilham um motivo estrutural comum conhecido como 'dobra de Ig' (Ig fold). Qual das descrições abaixo define precisamente a estrutura terciária de um domínio de imunoglobulina?", options: ["A) Uma hélice alfa central rodeada por alças desordenadas ricas em cisteína.", "B) Duas folhas beta-pregueadas antiparalelas mantidas unidas por uma ponte dissulfeto.", "C) Um barril beta formado por oito fitas paralelas estabilizadas por íons de zinco.", "D) Três cadeias polipeptídicas entrelaçadas formando uma estrutura fibrosa alongada."], correct: 1, feedback: "O domínio Ig é uma estrutura globular compacta composta por duas camadas de folhas β-pregueadas (cada uma com 3 a 5 fitas de cadeia polipeptídica antiparalela), mantidas juntas por uma ponte dissulfeto conservada." },
                { q: "A tecnologia de hibridomas utiliza um meio seletivo (HAT) para isolar clones produtores de anticorpos monoclonais. Qual é o papel específico da aminopterina neste meio?", options: ["A) Fornecer nucleotídeos essenciais para a via de salvação das células de mieloma.", "B) Bloquear a síntese de novo de purinas, forçando o uso da via de salvação.", "C) Induzir a fusão das membranas plasmáticas entre linfócitos B e mielomas.", "D) Inibir a enzima HGPRT nas células B normais para impedir seu crescimento."], correct: 1, feedback: "A aminopterina bloqueia a via de síntese de novo de purinas (antagonista do folato). As células só sobrevivem se possuírem a enzima HGPRT para usar a via de salvação (hipoxantina), característica presente nos hibridomas mas ausente nos mielomas parentais." },
                { q: "O receptor Fc neonatal (FcRn) desempenha um papel fundamental na homeostase da IgG. Qual é o mecanismo molecular que permite ao FcRn prolongar a meia-vida da IgG?", options: ["A) Ele se liga covalentemente à região Fab da IgG, impedindo sua interação com proteases séricas.", "B) Ele transporta a IgG ativamente para dentro do núcleo celular, onde ela fica protegida.", "C) Ele se liga à IgG em pH ácido nos endossomas e a libera em pH neutro na superfície.", "D) Ele modifica a glicosilação da IgG no complexo de Golgi, tornando-a resistente à hidrólise."], correct: 2, feedback: "O FcRn liga-se à IgG micropinocitada no ambiente ácido dos endossomas (< pH 7,0), reciclando-a de volta para a superfície celular, onde o pH neutro do sangue provoca a dissociação e liberação da IgG intacta." },
                { q: "A avidez é uma medida da força total de ligação de um anticorpo. Por que a IgM pentamérica é frequentemente descrita como tendo alta avidez, mesmo que seus sítios individuais tenham baixa afinidade?", options: ["A) Porque a IgM possui regiões dobradiça extras que permitem maior flexibilidade conformacional.", "B) Porque a IgM recruta células T auxiliares mais eficientemente que outros isotipos de anticorpos.", "C) Porque a IgM sofre maturação de afinidade extensa antes de ser secretada como pentâmero.", "D) Porque possui 10 locais de ligação, permitindo interações simultâneas com epítopos repetitivos."], correct: 3, feedback: "A IgM pentamérica possui 10 locais de ligação de antígeno idênticos. A soma das múltiplas interações (valência) resulta em uma força de ligação total (avidez) muito alta, compensando a baixa afinidade intrínseca de cada sítio individual na resposta primária." },
                { q: "A formação de imunocomplexos depende das concentrações relativas de antígeno e anticorpo. O que caracteriza a 'zona de equivalência' neste processo?", options: ["A) Excesso de anticorpos, resultando na formação de pequenos complexos solúveis (dímeros).", "B) Formação de uma extensa rede ou malha cruzada, precipitando a maioria das moléculas.", "C) Excesso de antígeno, levando ao deslocamento dos anticorpos e complexos pequenos.", "D) Ligação monovalente onde cada anticorpo se liga a apenas um antígeno independente."], correct: 1, feedback: "A zona de equivalência é a concentração onde o anticorpo e o antígeno formam uma malha extensamente cruzada (cross-linked), de tal forma que a maioria das moléculas é incorporada em grandes complexos que podem precipitar." },
                { q: "A maturação de afinidade resulta no aumento da força de ligação dos anticorpos ao longo do tempo. Qual é o mecanismo genético subjacente a este fenômeno?", options: ["A) Recombinação de novos segmentos V e D que não foram usados na resposta primária.", "B) Troca de isotipo da cadeia pesada, que altera a flexibilidade da região da dobradiça.", "C) Aumento da expressão de moléculas de adesão na superfície das células B de memória.", "D) Acúmulo de mutações somáticas pontuais nas regiões V e seleção de clones de alta afinidade."], correct: 3, feedback: "A maturação de afinidade ocorre através de mutações somáticas nas regiões V dos genes de Ig em células B estimuladas. Clones com mutações que conferem maior afinidade são selecionados para sobreviver e proliferar." },
                { q: "As Regiões Determinantes de Complementariedade (CDRs) são alças hipervariáveis. Estruturalmente, onde essas alças estão localizadas no contexto do domínio variável da imunoglobulina?", options: ["A) Elas conectam as fitas adjacentes das folhas beta antiparalelas que compõem o domínio V.", "B) Elas formam o núcleo hidrofóbico entre as duas folhas beta do domínio constante.", "C) Elas estão localizadas exclusivamente na região transmembrana das cadeias pesadas.", "D) Elas são hélices alfa projetadas para fora da estrutura principal da folha beta."], correct: 0, feedback: "As regiões hipervariáveis (CDRs) correspondem a três alças protuberantes que conectam as fitas adjacentes das folhas β que compõem os domínios variáveis (V) das cadeias pesada e leve." },
                { q: "Embora a maioria das subclasses de IgG humana tenha uma meia-vida longa (cerca de 3 semanas), a IgG3 é uma exceção notável. Qual é a razão molecular para a meia-vida reduzida da IgG3?", options: ["A) A IgG3 é preferencialmente degradada por proteases secretadas por neutrófilos ativados.", "B) A IgG3 forma agregados espontâneos que são rapidamente removidos pelo baço.", "C) A IgG3 tem baixa afinidade de ligação ao receptor Fc neonatal (FcRn) endocítico.", "D) A IgG3 não possui a região Fc necessária para a reciclagem endossomal."], correct: 2, feedback: "A meia-vida da IgG depende de sua reciclagem pelo FcRn. Existem diferenças entre os subtipos: a IgG3 tem uma meia-vida curta (aprox. 1 semana) especificamente porque se liga fracamente ao FcRn, sendo degradada mais rapidamente." },
                { q: "Proteínas de fusão terapêuticas, como o CTLA4-Ig, combinam domínios biologicamente ativos com a região Fc da IgG. Qual é a dupla vantagem conferida pela porção Fc nessas moléculas?", options: ["A) Aumentar a toxicidade direta contra células tumorais e permitir administração oral.", "B) Permitir a travessia da barreira hematoencefálica e ativar células T supressoras.", "C) Aumentar a meia-vida (via FcRn) e conferir funções efetoras ou estabilidade.", "D) Facilitar a excreção renal rápida para evitar toxicidade sistêmica acumulada."], correct: 2, feedback: "A porção Fc da IgG permite que a proteína de fusão se ligue ao FcRn, estendendo significativamente sua meia-vida plasmática. Além disso, fornece estabilidade e pode conferir funções efetoras dependentes de Fc (embora em imunossupressores o foco seja a meia-vida)." },
                { q: "Determinantes antigênicos podem ser classificados como 'neoantigênicos'. Qual é a característica definidora deste tipo específico de epítopo?", options: ["A) Estão presentes na proteína nativa, mas são mascarados por carboidratos.", "B) São formados apenas pela sequência linear de aminoácidos da proteína.", "C) São reconhecidos exclusivamente por receptores de células T, não anticorpos.", "D) Surgem apenas após modificações na proteína, como clivagem proteolítica."], correct: 3, feedback: "Determinantes neoantigênicos são epítopos 'novos' que não existem na proteína nativa original, sendo criados por modificações pós-síntese como glicosilação, fosforilação ou clivagem proteolítica (proteólise)." },
                { q: "Existem diferenças estruturais críticas entre as formas secretada e de membrana das cadeias pesadas. O que distingue a região C-terminal da Ig de membrana?", options: ["A) Uma cauda hidrofílica longa rica em cisteína para a formação de pentâmeros.", "B) Um domínio globular extra que se liga a citocinas inflamatórias no plasma.", "C) Um sítio de clivagem proteolítica sensível à papaína para liberação rápida.", "D) Uma hélice alfa transmembrana hidrofóbica e uma cauda citoplasmática carregada."], correct: 3, feedback: "A forma ligada à membrana possui um segmento carboxiterminal contendo uma região transmembrana hidrofóbica (alfa-helicoidal) e uma pequena cauda citoplasmática carregada positivamente para ancoragem, ausentes na forma secretada hidrofílica." },
                { q: "O reconhecimento de epítopos conformacionais difere do de epítopos lineares. O que acontece com a ligação de um anticorpo a um epítopo conformacional se a proteína antígeno for desnaturada?", options: ["A) A ligação é perdida, pois os resíduos que formam o epítopo não estão mais justapostos espacialmente.", "B) A ligação é mantida, pois a sequência primária de aminoácidos permanece intacta.", "C) A ligação aumenta, pois a estrutura linear fica mais acessível ao anticorpo.", "D) O anticorpo passa a reconhecer um novo epítopo na região interna da proteína."], correct: 0, feedback: "Determinantes conformacionais dependem da estrutura terciária (dobra) da proteína para justapor resíduos distantes na sequência linear. A desnaturação destrói essa estrutura 3D, levando à perda da ligação do anticorpo." },
                { q: "A digestão enzimática de anticorpos revela aspectos cruciais de sua estrutura modular. Diferentemente da papaína, qual é o produto específico gerado pela digestão da IgG com pepsina?", options: ["A) Um fragmento bivalente F(ab')2 e fragmentos peptídicos da região Fc degradada.", "B) Dois fragmentos monovalentes Fab e um fragmento Fc intacto e cristalizável.", "C) Quatro cadeias polipeptídicas livres (duas pesadas e duas leves) desnaturadas.", "D) Um fragmento Fc funcional capaz de se ligar ao receptor FcRn no endossoma."], correct: 0, feedback: "A pepsina cliva a IgG distalmente à região de dobradiça, mantendo as pontes dissulfeto intercadeias intactas. Isso gera um único fragmento bivalente capaz de precipitar antígenos, o F(ab')2, e degrada a porção Fc em peptídeos menores." },
                { q: "A análise da razão entre cadeias leves kappa (κ) e lambda (λ) é clinicamente relevante. O que uma alteração significativa na proporção normal (aprox. 60% κ e 40% λ em humanos) geralmente indica?", options: ["A) A presença de uma proliferação clonal de células B (como em linfomas), que expressam um único tipo de cadeia leve.", "B) Uma deficiência na enzima RAG, impedindo a recombinação da cadeia lambda.", "C) Uma resposta policlonal saudável a uma infecção viral recente e aguda.", "D) A troca de isotipo da cadeia pesada de Mu para Gama no centro germinativo."], correct: 0, feedback: "Em humanos, a razão normal é 60% kappa para 40% lambda. Como cada clone de célula B expressa apenas um tipo de cadeia leve, um desvio marcante nessa razão sugere a proliferação de um único clone neoplásico (tumor monoclonal)." },
                { q: "Moléculas pequenas chamadas haptenos (ex: dinitrofenol) podem ser reconhecidas por anticorpos, mas não induzem uma resposta imune sozinhas. Qual é a explicação imunológica para isso?", options: ["A) Haptenos não conseguem promover a ligação cruzada (cross-linking) necessária dos receptores de célula B.", "B) Haptenos são rapidamente degradados por enzimas plasmáticas antes de encontrar células B.", "C) Haptenos se ligam ao MHC de classe I, induzindo tolerância em vez de ativação.", "D) Haptenos bloqueiam o sítio de ligação do antígeno, inibindo a sinalização intracelular."], correct: 0, feedback: "A ativação da célula B requer que múltiplos receptores de antígeno sejam mantidos juntos (ligação cruzada ou cross-linking). Haptenos monovalentes pequenos não conseguem fazer isso a menos que estejam conjugados a uma macromolécula carreadora (polivalente)." },
                { q: "Além dos isotipos e idiótipos, os anticorpos podem apresentar variações alotípicas. O que define um alótipo?", options: ["A) Diferenças na sequência dos CDRs geradas pela recombinação V(D)J única de cada clone.", "B) Variantes polimórficas herdadas na região constante dos anticorpos entre indivíduos da mesma espécie.", "C) Diferenças nas classes de cadeia pesada (ex: mu vs gama) presentes em todos os humanos.", "D) Mutações somáticas que ocorrem apenas nas células de memória após infecção secundária."], correct: 1, feedback: "Alótipos são variantes polimórficas (alelos) nos genes que codificam as regiões constantes das cadeias pesadas e leves, encontrados em alguns indivíduos da espécie mas não em outros." },
                { q: "A reação cruzada ocorre quando um anticorpo se liga a um antígeno diferente daquele que induziu sua produção. Qual é a base estrutural para este fenômeno?", options: ["A) O anticorpo sofre uma mudança conformacional induzida pelo novo antígeno.", "B) O novo antígeno compartilha um epítopo idêntico ou estruturalmente muito similar ao imunógeno original.", "C) O anticorpo possui múltiplos sítios de ligação com especificidades completamente diferentes.", "D) O antígeno reage inespecificamente com a região Fc do anticorpo em vez da região Fab."], correct: 1, feedback: "A reação cruzada ocorre quando um anticorpo específico para um epítopo se liga a um epítopo em outro antígeno que é estruturalmente semelhante ou idêntico, permitindo o reconhecimento apesar da origem diferente." },
                { q: "A cadeia J (Junction chain) é um componente polipeptídico essencial para certos isotipos. Qual é a função primária desta molécula?", options: ["A) Iniciar a sinalização intracelular associada ao receptor de célula B (BCR).", "B) Promover a troca de classe de IgM para IgG no centro germinativo.", "C) Estabilizar as formas multiméricas secretadas de IgA e IgM e auxiliar no transporte mucoso.", "D) Servir como o local de ligação para o antígeno nas imunoglobulinas de superfície."], correct: 2, feedback: "A cadeia J é um polipeptídio de 15-kD ligado por dissulfeto às caudas das formas secretadas de IgA (dímero) e IgM (pentâmero), estabilizando o complexo e permitindo o transporte através de células epiteliais." }, { q: "A maturação de afinidade resulta no aumento da força de ligação dos anticorpos ao longo do tempo. Qual é o mecanismo genético subjacente a este fenômeno?", options: ["A) Recombinação de novos segmentos V e D que não foram usados na resposta primária.", "B) Troca de isotipo da cadeia pesada, que altera a flexibilidade da região da dobradiça.", "C) Aumento da expressão de moléculas de adesão na superfície das células B de memória.", "D) Acúmulo de mutações somáticas pontuais nas regiões V e seleção de clones de alta afinidade."], correct: 3, feedback: "A maturação de afinidade ocorre através de mutações somáticas nas regiões V dos genes de Ig em células B estimuladas. Clones com mutações que conferem maior afinidade são selecionados para sobreviver e proliferar." },
                { q: "Anticorpos monoclonais murinos podem induzir respostas imunes em pacientes humanos (HAMA). Como a engenharia genética resolveu esse problema com os anticorpos 'humanizados'?", options: ["A) Inserindo o gene inteiro da Ig de camundongo em células humanas para alterar sua glicosilação.", "B) Removendo quimicamente as regiões imunogênicas da proteína após a purificação.", "C) Usando apenas o fragmento Fc murino fundido a uma região Fab humana.", "D) Enxertando apenas as sequências de DNA dos CDRs murinos em um arcabouço de Ig humana."], correct: 3, feedback: "Anticorpos humanizados são criados pela inserção dos segmentos de DNA que codificam as regiões de ligação ao antígeno (CDRs) do anticorpo murino em um cDNA que codifica a estrutura (framework) de uma Ig humana, reduzindo sua imunogenicidade." },
                { q: "A estrutura dos domínios constantes varia entre os isotipos. Qual característica estrutural diferencia as cadeias pesadas de IgM e IgE das cadeias de IgG, IgA e IgD?", options: ["A) Elas possuem uma região de dobradiça estendida rica em prolina.", "B) Elas contêm apenas dois domínios constantes (CH1 e CH2).", "C) Elas contêm quatro domínios constantes de Ig e carecem de uma região de dobradiça distinta.", "D) Elas são sempre glicosiladas no domínio variável em vez do constante."], correct: 2, feedback: "As regiões C da IgM e IgE contêm quatro domínios Ig (CH1 a CH4), diferentemente de IgG, IgA e IgD que possuem três domínios e uma região de dobradiça distinta." },
            ]
        },

        // --- QUESTÕES ABERTAS ---
        abertas: [
            {
                q: "Descreva a estrutura central simétrica de uma Imunoglobulina (Ig) secretada, e detalhe a diferença funcional entre as porções Fab e Fc, explicando como a especificidade de cada região contribui para a função global do anticorpo.",
                a: "Estrutura: 4 cadeias (2 leves + 2 pesadas) ligadas por pontes dissulfeto formando um Y. Fab: região variável que reconhece o antígeno (especificidade). Fc: região constante que interage com células/complemento para executar funções efetoras (eliminação)."
            },
            {
                q: "Explique o mecanismo de ativação da via clássica do sistema complemento pelos anticorpos e cite, com base nas subclasses de IgG, qual subclasse é a mais eficiente e qual delas não participa dessa ativação, justificando a relevância clínica dessa diferença.",
                a: "Ativação: C1q se liga ao anticorpo complexado ao antígeno. IgG3 é a mais eficiente; IgG4 não fixa complemento. Deficiências em IgG2/IgG3 aumentam suscetibilidade a infecções bacterianas."
            },
            {
                q: "Diferencie a contribuição da Diversidade Juncional (um evento pré-antigênico) da Maturação da Afinidade (um evento pós-antigênico) para o repertório de anticorpos, detalhando o papel da enzima AID no processo de refinamento pós-antigênico.",
                a: "Diversidade Juncional: Adição aleatória de nucleotídeos nas junções V(D)J (pré-antigênico). Maturação de Afinidade: Mutações somáticas nas regiões V após exposição ao antígeno (aumenta afinidade). AID: Enzima chave que insere mutações para maturação e troca de isotipo."
            },
            {
                q: "O desenvolvimento de anticorpos monoclonais (AcMs) passou por diversas gerações. Explique a limitação primária dos AcMs de primeira geração (murinos) e como o avanço da engenharia genética e a tecnologia de Phage Display superaram essa limitação.",
                a: "Limitação Murina: Eram imunogênicos (o corpo os rejeitava, causando doença do soro). Superação: Engenharia criou anticorpos quiméricos/humanizados. Phage Display permitiu criar anticorpos totalmente humanos in vitro sem imunização animal."
            },
            {
                q: "A metodologia de Phage Display é considerada o padrão ouro para a produção de anticorpos recombinantes. Descreva o princípio básico desta técnica e cite dois fragmentos de anticorpos comuns que são produzidos com essa tecnologia.",
                a: "Princípio: Ligação física entre o DNA do anticorpo e a proteína expressa na superfície de um fago, permitindo seleção por afinidade. Fragmentos comuns: scFv (cadeia única variável) e Fab. São menores e mais fáceis de produzir em bactérias."
            },
            {
                q: "Os anticorpos biespecíficos (BsAbs) são moléculas construídas para se ligarem a dois antígenos diferentes. Cite duas vantagens funcionais que esta biespecificidade pode conferir e discuta a importância da região Fc.",
                a: "Vantagens: Recrutar células efetoras (ex: T ou NK) para perto do tumor e aumentar especificidade ao alvo. Região Fc: Aumenta estabilidade, meia-vida e facilita purificação (IgG-like)."
            },
            {
                q: "Anticorpos Conjugados a Fármacos (ADCs) são uma importante inovação. Descreva os três componentes principais de um ADC e explique o dilema crítico envolvendo o espaçador sintético.",
                a: "Componentes: Anticorpo (guiagem), Fármaco (citotóxico), Espaçador (linker). Dilema: O espaçador deve ser estável no sangue (evitar toxicidade sistêmica) mas liberar o fármaco eficientemente dentro da célula alvo."
            },
            {
                q: "A resposta imune adaptativa é a segunda linha de defesa. Cite e descreva brevemente as duas características fundamentais da resposta adaptativa, explicando como elas se relacionam com a exposição repetida a um antígeno.",
                a: "Especificidade: Distingue antígenos únicos. Memória: Gera células de vida longa que respondem mais rápido e forte na reexposição. Juntas, garantem que a segunda infecção seja combatida mais eficazmente."
            },
            {
                q: "Os anticorpos e os receptores de antígenos dos linfócitos T (TCRs) são as três classes de moléculas usadas pelo sistema imune adaptativo. Descreva a principal diferença na natureza do antígeno que cada uma dessas moléculas é capaz de reconhecer.",
                a: "Anticorpos reconhecem macromoléculas (proteínas, lipídios, açúcares) inteiras em sua forma nativa (conformacional ou linear). TCRs reconhecem apenas pequenos peptídeos processados e apresentados no MHC."
            },
            {
                q: "A autotolerância é uma propriedade fundamental. Explique o papel da coestimulação na ativação das células T naive e descreva o que ocorre quando essas células reconhecem um autoantígeno apresentado por uma APC em repouso.",
                a: "Coestimulação (B7-CD28) é necessária para ativar células T. Se uma célula T reconhece autoantígeno em APC repouso (sem coestimulador), ela não ativa e entra em anergia (não responsividade), mantendo a tolerância periférica."
            }
        ]
    }
};
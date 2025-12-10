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
    // ASSUNTO: IMUNIDADE INATA
    // ========================================================================
    "imunidade_inata": {
        titulo: "Imunidade Inata",
        resumo: `
<style>
    /* CSS Scoped for Imunidade Inata Report */
    .inata-wrapper {
        --color-primary: #007bff;
        --color-secondary: #6c757d;
        --color-background: #f8f9fa;
        --color-text: #212529;
        --color-highlight: #e9ecef;
        --color-success: #28a745;
        --color-warning: #ffc107;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: var(--color-background);
        color: var(--color-text);
        line-height: 1.6;
        padding: 0;
        margin: 0;
    }

    .inata-container {
        display: block;
        max-width: 960px; /* Wider reading area */
        margin: 0 auto;
        padding: 20px;
    }

    /* Hide original sidebar */
    .inata-sidebar {
        display: none !important;
    }

    /* Floating Menu Button */
    .inata-menu-btn {
        position: fixed;
        top: 85px;
        left: 20px;
        z-index: 2000;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        font-size: 22px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s, background-color 0.2s;
    }
    .inata-menu-btn:hover {
        transform: scale(1.05);
        background-color: #0056b3;
    }

    /* Menu Dropdown */
    .inata-toc-dropdown {
        position: fixed;
        top: 145px;
        left: 20px;
        width: 280px;
        max-height: 60vh;
        overflow-y: auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        padding: 20px;
        z-index: 2000;
        display: none;
        border: 1px solid rgba(0,0,0,0.05);
        animation: fadeIn 0.2s ease-out;
    }
    .inata-toc-dropdown.active {
        display: block;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Adjust TOC styles for dropdown */
    .inata-toc-dropdown h3 {
        color: var(--color-primary);
        border-bottom: 1px solid var(--color-highlight);
        padding-bottom: 10px;
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 1.1em;
    }
    .inata-toc-dropdown ul {
        list-style: none;
        padding: 0;
    }
    .inata-toc-dropdown ul li a {
        text-decoration: none;
        color: var(--color-text);
        display: block;
        padding: 8px 10px;
        border-radius: 6px;
        font-size: 0.9em;
        transition: background-color 0.1s;
    }
    .inata-toc-dropdown ul li a:hover {
        background-color: var(--color-highlight);
        color: var(--color-primary);
    }
    .inata-toc-dropdown ul li a.sub-link {
        padding-left: 20px;
        font-size: 0.85em;
        color: var(--color-secondary);
    }


    
    /* Conteúdo Principal */
    .inata-content {
        flex-grow: 1;
        background-color: #fff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    }

    .inata-wrapper h1, .inata-wrapper h2, .inata-wrapper h3 {
        color: var(--color-primary);
        margin-top: 0;
    }

    .inata-wrapper h1 {
        border-bottom: 3px solid var(--color-primary);
        padding-bottom: 10px;
        margin-bottom: 30px;
        text-align: center;
    }

    .inata-wrapper h2 {
        margin-top: 40px;
        border-bottom: 2px solid var(--color-highlight);
        padding-bottom: 5px;
        color: #0056b3;
    }
    
    .inata-wrapper h3 {
        margin-top: 30px;
        color: var(--color-secondary);
    }

    .inata-wrapper p {
        margin-bottom: 15px;
        text-align: justify;
    }

    /* Tooltip/Item Clicável */
    .tooltip-trigger {
        color: var(--color-primary);
        cursor: pointer;
        border-bottom: 1px dashed var(--color-primary);
        position: relative;
        font-weight: 600;
    }

    .tooltip-trigger:hover {
        color: #0056b3;
        border-bottom-style: solid;
    }

    /* Caixas de Informação/Quadros Explicativos (<details>) */
    .inata-wrapper details {
        margin: 20px 0;
        padding: 15px;
        border-left: 5px solid var(--color-success);
        background-color: #f1f9f2;
        border-radius: 4px;
    }

    .inata-wrapper summary {
        font-weight: bold;
        cursor: pointer;
        color: var(--color-success);
    }
    
    .inata-wrapper details p {
        margin-top: 10px;
        padding-left: 10px;
        border-left: 1px solid var(--color-success);
    }

    /* Tabelas */
    .inata-wrapper table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        font-size: 0.95em;
    }

    .inata-wrapper th, .inata-wrapper td {
        border: 1px solid var(--color-highlight);
        padding: 12px;
        text-align: left;
    }

    .inata-wrapper th {
        background-color: var(--color-primary);
        color: white;
        font-weight: 600;
    }

    .inata-wrapper tr:nth-child(even) {
        background-color: #f3f3f3;
    }

    /* Listas */
    .inata-wrapper ul {
        padding-left: 25px;
    }

    .inata-wrapper li {
        margin-bottom: 8px;
    }

    /* Tags de Imagem */
    .image-placeholder {
        display: block;
        margin: 20px auto;
        padding: 15px;
        background-color: var(--color-highlight);
        border: 1px solid var(--color-secondary);
        border-radius: 4px;
        text-align: center;
        font-style: italic;
        color: var(--color-secondary);
        max-width: 100%;
    }
    
    .image-placeholder strong {
        color: var(--color-text);
    }
    
    /* Modal */
    .inata-modal {
        display: none; 
        position: fixed; 
        z-index: 1000; 
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; 
        background-color: rgba(0,0,0,0.4); 
        padding-top: 60px;
    }

    .inata-modal-content {
        background-color: #fff;
        margin: 5% auto; 
        padding: 20px;
        border: 1px solid #888;
        width: 80%; 
        max-width: 600px;
        border-radius: 8px;
        position: relative;
    }

    .close-btn {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close-btn:hover,
    .close-btn:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
</style>

<div class="inata-wrapper">
    <!-- Floating Menu Button -->
    <button class="inata-menu-btn" onclick="window.toggleInataMenu()" title="Índice">
        ☰
    </button>

    <!-- Dropdown Menu -->
    <div class="inata-toc-dropdown" id="inata-toc-dropdown">
        <h3>Índice</h3>
        <ul id="toc-list"></ul>
    </div>

    <div class="inata-container">
        
        <!-- Sidebar Removed -->
        
        <div class="inata-content">
            <header>
                <h1>Imunidade Inata</h1>
                <p>O sistema imune inato representa a primeira e mais rápida linha de defesa do organismo contra patógenos e danos teciduais. Seus mecanismos estão prontos para agir imediatamente, fornecendo a defesa crucial antes que a resposta adaptativa, mais lenta e especializada, possa se desenvolver.</p>
            </header>

            <section id="visao-geral">
                <h2>Visão Geral e Funções Essenciais</h2>
                
                <p>A imunidade inata não apenas <span class="tooltip-trigger" data-tooltip="defesa-inicial">previne, controla ou elimina infecções</span>, mas também desempenha papéis cruciais no reparo tecidual e na orquestração da imunidade adaptativa.</p>
                
                <details>
                    <summary>As 3 Funções Essenciais da Imunidade Inata</summary>
                    <p><strong>1. Defesa Inicial:</strong> É a resposta imediata, ativada por microrganismos. Deficiências em seus mecanismos aumentam drasticamente a suscetibilidade a infecções, mesmo com o sistema adaptativo intacto.</p>
                    <p><strong>2. Limpeza e Reparo:</strong> Mecanismos inatos eliminam células danificadas (reconhecendo <span class="tooltip-trigger" data-tooltip="DAMPs">DAMPs</span>) e iniciam o processo de reparo tecidual.</p>
                    <p><strong>3. Estímulo da Imunidade Adaptativa:</strong> A inata fornece os "sinais de perigo" necessários para alertar e <span class="tooltip-trigger" data-tooltip="sinal-2">direcionar a resposta adaptativa</span>, garantindo que ela seja otimamente eficaz contra o tipo específico de patógeno (e.g., bactérias vs. vírus).</p>
                </details>

                <p>As duas principais reações de defesa são a <strong>Inflamatória</strong> (recrutamento de leucócitos e proteínas plasmáticas para destruir e eliminar agentes agressores) e a <strong>Antiviral</strong> (alterações celulares que previnem a replicação viral).</p>

                <h3>Tabela de Comparação: Imunidade Inata vs. Adaptativa</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Característica</th>
                            <th>Imunidade Inata</th>
                            <th>Imunidade Adaptativa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Tempo de Resposta</strong></td>
                            <td>Imediata (pronta ou rapidamente ativada).</td>
                            <td>Desenvolve-se em vários dias após a exposição.</td>
                        </tr>
                        <tr>
                            <td><strong>Memória</strong></td>
                            <td>Pouca ou nenhuma memória. Qualidade/magnitude não se alteram significativamente após exposição repetida.</td>
                            <td>Memória robusta. Respostas aumentam em rapidez, magnitude e eficácia após exposição repetida.</td>
                        </tr>
                        <tr>
                            <td><strong>Especificidade</strong></td>
                            <td>Limitada. Reconhece estruturas moleculares compartilhadas (PAMPs/DAMPs). Cerca de 1.000 padrões.</td>
                            <td>Alta. Reconhece detalhes estruturais (antígenos). Potencialmente milhões de diferentes estruturas.</td>
                        </tr>
                        <tr>
                            <td><strong>Receptores</strong></td>
                            <td>Codificados na linhagem germinativa (diversidade limitada). Exemplos: TLRs, NLRs, Lectinas.</td>
                            <td>Gerados por recombinação somática de segmentos de genes (alta diversidade). Exemplos: TCRs, BCRs (Anticorpos).</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <section id="reconhecimento">
                <h2>Reconhecimento de Microrganismos e Células Danificadas</h2>
                <p>O sistema inato distingue o "próprio saudável" do "não-próprio perigoso" através de receptores de reconhecimento de padrão que visam duas classes de moléculas:</p>
                
                <h3>Padrões Moleculares Associados a Patógenos (PAMPs)</h3>
                <p>São estruturas moleculares produzidas por patógenos microbianos, frequentemente <strong>essenciais para a sobrevivência</strong> dos microrganismos, o que impede que estes os descartem para evadir à detecção.</p>
                <ul>
                    <li><strong>Ácidos Nucleicos:</strong> RNA de fita dupla (dsRNA) viral (um intermediário essencial no ciclo viral), sequências de DNA CpG não metiladas (comuns em procariotos).</li>
                    <li><strong>Componentes Estruturais:</strong> Lipopolissacarídeos (LPS) em bactérias Gram-negativas, ácido lipoteicoico em Gram-positivas.</li>
                    <li><strong>Proteínas:</strong> Flagelina (componente de flagelos) e proteínas iniciadas por <span class="tooltip-trigger" data-tooltip="N-formilmetionina">N-formilmetionina</span> (típica de proteínas bacterianas).</li>
                </ul>

                <h3>Padrões Moleculares Associados ao Dano (DAMPs)</h3>
                <p>Moléculas endógenas produzidas ou liberadas de células danificadas, estressadas ou mortas (mas geralmente não por apoptose). Sinalizam lesão estéril (e.g., trauma, queimaduras) ou lesão causada por infecção.</p>
                <ul>
                    <li><strong>Proteínas de Estresse:</strong> Proteínas de choque térmico (<span class="tooltip-trigger" data-tooltip="HSPs">HSPs</span>).</li>
                    <li><strong>Conteúdo Nuclear/Intracelular:</strong> HMGB1 (high-mobility group box 1), ATP extracelular (indicando dano), cristais de urato monossódico.</li>
                </ul>
                
                <h3>Receptores de Reconhecimento de Padrão (PRRs)</h3>
                <p>Os PRRs são expressos em diferentes localizações para monitorar o patógeno onde ele possa estar. Eles podem ser expressos na membrana plasmática, associados às membranas dos endosomas ou livres no citoplasma.</p>
                <div class="image-placeholder">
                    <img src="./assets/imunidade_inata/prr_locations.png" alt="Localização dos PRRs" style="max-width: 100%; height: auto; border-radius: 4px;">
                    <p><strong>Figura 4-1:</strong> Localização celular dos Receptores de Reconhecimento de Padrão (PRRs).</p>
                </div>

                <h4>Receptores do Tipo Toll (TLRs)</h4>
                <p>Uma família de glicoproteínas integrais de membrana, conservada evolutivamente, que reconhece uma ampla variedade de PAMPs/DAMPs.</p>
                <ul>
                    <li><strong>Localização e Ligantes:</strong>
                        <ul>
                            <li><strong>Superfície Celular (TLR1, 2, 4, 5, 6):</strong> Detectam PAMPs extracelulares, como LPS (TLR4) e lipopeptídeos/ácido lipoteicoico (TLR2/1 e TLR2/6).</li>
                            <li><strong>Endossomas (TLR3, 7, 8, 9):</strong> Detectam ácidos nucleicos microbianos. Essa localização é crucial para distinguir o DNA/RNA viral/bacteriano do ácido nucleico do hospedeiro, que normalmente não está presente nos endossomas. Exemplos: dsRNA (TLR3), ssRNA (TLR7/8), DNA CpG (TLR9).</li>
                        </ul>
                    </li>
                    <li><strong>Sinalização Chave:</strong> A dimerização do TLR recruta proteínas adaptadoras com <span class="tooltip-trigger" data-tooltip="dominio-TIR">Domínio TIR</span>, ativando fatores de transcrição.
                        <ul>
                            <li><strong>Via MyD88:</strong> Usada por todos, exceto TLR3. Ativa <strong>NF-κB</strong> e <strong>AP-1</strong>, resultando na expressão de genes inflamatórios (TNF, IL-1, quimiocinas).</li>
                            <li><strong>Via TRIF:</strong> Usada por TLR3 e TLR4. Ativa <strong>IRF3</strong> e <strong>IRF7</strong>, levando à produção de <span class="tooltip-trigger" data-tooltip="IFNs-tipo-I">Interferons Tipo I</span> (resposta antiviral).</li>
                        </ul>
                    </li>
                </ul>
                <div class="image-placeholder">
                    <img src="./assets/imunidade_inata/tlr_signaling.png" alt="Sinalização dos TLRs" style="max-width: 100%; height: auto; border-radius: 4px;">
                    <p><strong>Figura 4-3:</strong> Estrutura e vias de sinalização dos Receptores do Tipo Toll (TLRs).</p>
                </div>

                <h4>Receptores Citosólicos (NLRs, RLRs, CDSs)</h4>
                <p>Esses receptores detectam infecção ou dano que ocorre no citosol, onde partes dos ciclos de vida de microrganismos (e.g., replicação viral) acontecem.</p>
                <ul>
                    <li><strong>Receptores do Tipo NOD (NLRs):</strong> Família de mais de 20 proteínas.
                        <ul>
                            <li><strong>NOD1 e NOD2:</strong> Reconhecem peptidoglicanos bacterianos no citosol. Sua ativação forma um complexo de sinalização que ativa o NF-κB, promovendo inflamação. Mutações em NOD2 estão associadas à Doença de Crohn.</li>
                            <li><strong>Família NLRP (Inflamassoma):</strong> Respondendo a PAMPs e DAMPs (cristais, efluxo de K+), os NLRPs oligomerizam, recrutando a proteína adaptadora ASC e a pró-caspase-1. O complexo ativado (Inflamassoma) cliva a pró-IL-1β e pró-IL-18 em suas formas ativas, secretando-as para induzir uma <span class="tooltip-trigger" data-tooltip="inflamacao-aguda">inflamação aguda</span>. A ativação desregulada causa Síndromes Periódicas Associadas à Criopirina (CAPS).</li>
                        </ul>
                    </li>
                    <li><strong>Receptores do Tipo RIG (RLRs):</strong> Sensores de RNA viral citosólico (e.g., dsRNA e ssRNA), como RIG-I e MDA5. Ativam IRF3/IRF7 e NF-κB, induzindo a produção de Interferons Tipo I (resposta antiviral).</li>
                    <li><strong>Sensores Citosólicos de DNA (CDSs):</strong> Detectam DNA bacteriano ou viral no citosol. O mecanismo chave envolve a CGAS, que sintetiza o CGAMP, que por sua vez ativa a proteína STING (localizada no RE). A STING promove a fosforilação de IRF3, levando à expressão de IFN Tipo I.</li>
                </ul>
            </section>
            
            <section id="celulas">
                <h2>Componentes Celulares do Sistema Imune Inato</h2>

                <h3>Barreiras Epiteliais e Defesas Físico-Químicas</h3>
                <p>A pele e as superfícies mucosas dos tratos gastrointestinal, respiratório e geniturinário formam barreiras físicas contínuas. A perda da integridade destas barreiras predispõe à infecção.</p>
                <ul>
                    <li><strong>Defesas Físicas:</strong> Junções estreitas entre células, camada externa de queratina, muco (contendo mucinas) e ação ciliar/peristaltismo.</li>
                    <li><strong>Defesas Químicas (Peptídeos Antimicrobianos):</strong>
                        <ul>
                            <li><strong>Defensinas (α e β):</strong> Pequenos peptídeos catiônicos produzidos por células epiteliais (e.g., Células de Paneth) e leucócitos. Matam microrganismos (bactérias, fungos, vírus) por inserção e rompimento das membranas microbianas.</li>
                            <li><strong>Catelicidinas:</strong> Produzidas por neutrófilos e células epiteliais. Protegem por toxicidade direta e ativação de leucócitos. O fragmento LL-37 neutraliza o LPS.</li>
                        </ul>
                    </li>
                </ul>
                <div class="image-placeholder">
                    <img src="./assets/imunidade_inata/epithelial_barriers.png" alt="Barreiras Epiteliais" style="max-width: 100%; height: auto; border-radius: 4px;">
                    <p><strong>Figura 4-5:</strong> Mecanismos de defesa das barreiras epiteliais.</p>
                </div>
                
                <h3>Fagócitos (Neutrófilos e Macrófagos)</h3>
                <p>São a principal linha de defesa contra microrganismos que rompem as barreiras. Deficiências em sua função levam a infecções bacterianas/fúngicas letais.</p>
                <ul>
                    <li><strong>Fagocitose:</strong> A ingestão é mediada por PRRs (receptores de manose, scavenger) ou, de forma mais eficiente, por receptores de opsoninas (como FcγRI para IgG e receptores de Complemento).</li>
                    <li><strong>Mecanismos Microbicidas no Fagolisossoma:</strong>
                        <ol>
                            <li><strong>Espécies Reativas de Oxigênio (ROS):</strong> A fagócito oxidase usa NADPH para reduzir O2 a radicais superóxido e, subsequentemente, a peróxido de hidrogênio e ácido hipoaloso tóxico (<span class="tooltip-trigger" data-tooltip="explosao-respiratoria">Explosão Respiratória</span>).</li>
                            <li><strong>Óxido Nítrico (NO):</strong> Produzido pela óxido nítrico sintase induzida (<span class="tooltip-trigger" data-tooltip="iNOS">iNOS</span>), o NO combina-se com ROS para formar radicais peroxinitrito altamente reativos.</li>
                            <li><strong>Enzimas Proteolíticas:</strong> Lisossomais como elastase e catepsina G.</li>
                        </ol>
                    </li>
                    <li><strong>Redes Extracelulares de Neutrófilos (NETs):</strong> Neutrófilos morrem ao extruir seu DNA e conteúdo granular (histonas, elastase, defensinas), formando redes que aprisionam e matam bactérias e fungos.</li>
                </ul>
                <div class="image-placeholder">
                    <img src="./assets/imunidade_inata/phagocytosis_steps.jpg" alt="Etapas da Fagocitose" style="max-width: 100%; height: auto; border-radius: 4px;">
                    <p><strong>Figura 4-13:</strong> Etapas da fagocitose e mecanismos microbicidas.</p>
                </div>

                <h3>Células Natural Killer (NK) e Células Linfoides Inatas (ILCs)</h3>
                <p>ILCs são células derivadas da medula óssea, com morfologia linfoide, mas que não expressam receptores de antígenos de células T/B. São a primeira linha de defesa contra vírus e bactérias intracelulares.</p>
                <ul>
                    <li><strong>ILCs Grupo 1 (inclui Células NK):</strong> Produzem IFN-γ.
                        <ul>
                            <li><strong>Citotoxicidade:</strong> Células NK matam células infectadas ou estressadas por apoptose, usando perforina e granzimas (mecanismo similar aos CTLs).</li>
                            <li><strong>Ativação/Inibição:</strong> A função NK é regulada pelo balanço de sinais entre <strong>Receptores Ativadores</strong> (que reconhecem ligantes em células estressadas, e.g., NKG2D liga MIC-A/B) e <strong>Receptores Inibitórios</strong> (que reconhecem <span class="tooltip-trigger" data-tooltip="MHC-I">MHC de Classe I</span> em células saudáveis).
                                <p><strong>"Falta do Próprio" (Missing Self):</strong> A inibição é perdida quando vírus inibem a expressão de MHC-I na célula infectada, permitindo que os sinais ativadores prevaleçam e a célula NK mate o alvo.</p>
                            </li>
                            <li><strong>Produção de IFN-γ:</strong> Ativadas por IL-12 e IL-15, as NK secretam IFN-γ, que ativa os macrófagos para destruírem microrganismos fagocitados (Fig. 4-7, B).</li>
                        </ul>
                    </li>
                    <li><strong>ILCs Grupo 2:</strong> Produzem IL-5 e IL-13. Envolvidas na defesa contra helmintos e inflamação alérgica.</li>
                    <li><strong>ILCs Grupo 3:</strong> Produzem IL-17 e IL-22. Atuam na função de barreira intestinal e defesa contra bactérias extracelulares.</li>
                </ul>
            </section>

            <section id="moleculas-soluveis">
                <h2>Moléculas Solúveis e Humorais</h2>
                <p>Fornecem defesa contra patógenos fora das células. Atuam principalmente como <strong>opsoninas</strong> (aumentando a fagocitose) ou ativando respostas inflamatórias/mecanismos de morte.</p>

                <h3>Sistema Complemento</h3>
                <p>Consiste em proteínas plasmáticas que trabalham em cascata proteolítica para opsonizar, promover inflamação e lisar microrganismos.</p>
                <div class="image-placeholder">
                    <img src="./assets/imunidade_inata/complement_activation.jpg" alt="Ativação do Complemento" style="max-width: 100%; height: auto; border-radius: 4px;">
                    <p><strong>Figura 4-10:</strong> Vias de ativação e funções efetoras do Sistema Complemento.</p>
                </div>
                
                <p>As três vias de iniciação (todas culminam na clivagem de C3 em C3a e C3b):</p>
                <ul>
                    <li><strong>Via Alternativa:</strong> Disparada por C3 que reconhece diretamente estruturas microbianas (e.g., LPS). É a via mais antiga e crucial na inata, pois distingue o próprio do não-próprio pela ausência de proteínas regulatórias nas superfícies microbianas.</li>
                    <li><strong>Via da Lectina:</strong> Disparada pela <span class="tooltip-trigger" data-tooltip="MBL">Lectina Ligante de Manose (MBL)</span>, que reconhece resíduos de manose terminal em glicoproteínas microbianas. MBL se associa a serinoproteases (MASP1/2) para iniciar a cascata.</li>
                    <li><strong>Via Clássica:</strong> Inicia-se quando a proteína C1q se liga a anticorpos (IgM/IgG) ou a <span class="tooltip-trigger" data-tooltip="Pentraxinas">Pentraxinas</span> ligadas ao patógeno.</li>
                </ul>
                <p><strong>Funções Efetoras:</strong> <strong>C3b</strong> é uma potente opsonina. <strong>C3a e C5a</strong> são quimioatraentes e mediadores inflamatórios. O <strong>Complexo de Ataque à Membrana (MAC - C5b-9)</strong> forma poros na membrana, lisando o microrganismo.</p>
                
                <h3>Pentraxinas, Colectinas e Ficolinas</h3>
                <ul>
                    <li><strong>Pentraxinas:</strong>
                        <ul>
                            <li><strong>Proteína C-Reativa (PCR) e Amiloide P Sérica (SAP):</strong> Pentraxinas pequenas, reagentes de fase aguda (sintetizadas no fígado em resposta a IL-1/IL-6). Ligam-se a bactérias/fungos (e.g., fosforilcolina) e ativam a via clássica do complemento por ligação ao C1q.</li>
                        </ul>
                    </li>
                    <li><strong>Colectinas e Ficolinas:</strong> Moléculas com caudas do tipo colágeno.
                        <ul>
                            <li><strong>MBL (Colectina):</strong> Além de ativar o complemento, atua como opsonina.</li>
                            <li><strong>SP-A e SP-D (Colectinas Surfactantes):</strong> Encontradas nos alvéolos pulmonares. Ligam-se a microrganismos e atuam como opsoninas para macrófagos alveolares.</li>
                            <li><strong>Ficolinas:</strong> Estruturalmente similares às colectinas, ligam-se a N-acetilglucosamina e ácido lipoteicoico, opsonizando e ativando o complemento.</li>
                        </ul>
                    </li>
                </ul>
            </section>
            
            <section id="inflamacao-citocinas">
                <h2>A Resposta Inflamatória e as Citocinas Chave</h2>
                <p>A inflamação aguda é o acúmulo de leucócitos, proteínas plasmáticas e fluido no tecido extravascular. É induzida por <span class="tooltip-trigger" data-tooltip="mediadores-inflamatorios">mediadores inflamatórios</span> liberados por células residentes (mastócitos, macrófagos, células endoteliais) em resposta a PAMPs/DAMPs.</p>

                <h3>Principais Citocinas Pró-Inflamatórias</h3>
                <p>Produzidas principalmente por macrófagos e células dendríticas, essas citocinas agem localmente (parácrina) ou sistemicamente (endócrina) em infecções graves.</p>
                <ul>
                    <li><strong>Fator de Necrose Tumoral (TNF):</strong> Mediador primário da inflamação aguda. Induzido por PAMPs (via TLRs/NLRs/RLRs).
                        <ul>
                            <li><strong>Ações Locais:</strong> Ativa células endoteliais (aumentando a expressão de moléculas de adesão/quimiocinas) e neutrófilos, promovendo o recrutamento de leucócitos.</li>
                            <li><strong>Ações Sistêmicas Protetoras:</strong> Induz febre no hipotálamo.</li>
                            <li><strong>Ações Sistêmicas Patológicas (Choque Séptico):</strong> Em grandes quantidades, causa colapso vascular (inibe contratilidade miocárdica/tônus vascular), trombose intravascular (prejuízo das propriedades anticoagulantes do endotélio) e caquexia (fadiga de músculo/gordura).</li>
                        </ul>
                    </li>
                    <li><strong>Interleucina-1 (IL-1β):</strong> Ações similares ao TNF. Sua produção requer dois sinais: 1) ativação do NF-κB (TLR) para produzir o precursor Pró-IL-1β, e 2) ativação do <span class="tooltip-trigger" data-tooltip="inflamassoma-IL1">Inflamassoma NLRP3</span> para clivar o precursor em IL-1β ativo. Medeia febre e síntese de reagentes de fase aguda.</li>
                    <li><strong>Interleucina-6 (IL-6):</strong> Induzida por PAMPs, IL-1 e TNF. É o principal indutor da síntese de <strong>Reagentes de Fase Aguda</strong> (PCR, SAP, fibrinogênio) no fígado.</li>
                    <li><strong>IL-12:</strong> Secretada por Células Dendríticas e Macrófagos. Estimula Células NK e T a produzir <span class="tooltip-trigger" data-tooltip="IFN-gama">IFN-γ</span> (ativação de macrófagos) e promove a diferenciação de células T em TH1.</li>
                </ul>
                <div class="image-placeholder">
                    <img src="./assets/imunidade_inata/cytokine_actions.jpg" alt="Ações das Citocinas" style="max-width: 100%; height: auto; border-radius: 4px;">
                    <p><strong>Figura 4-15:</strong> Ações locais e sistêmicas das citocinas inflamatórias (TNF, IL-1, IL-6).</p>
                </div>
            </section>

            <section id="antiviral">
                <h2>Resposta Antiviral: Interferons Tipo I (IFN-α/β)</h2>
                <p>A principal defesa inata contra vírus é a indução de Interferons Tipo I (IFN-α e IFN-β), que agem inibindo a replicação viral.</p>
                <ul>
                    <li><strong>Indução:</strong> IFN- α é primariamente produzido por <span class="tooltip-trigger" data-tooltip="pDCs">Células Dendríticas Plasmacitoides (pDCs)</span>. A indução ocorre quando ácidos nucleicos virais são reconhecidos por TLRs endossomais (TLR3, 7, 8, 9), RLRs citosólicos (RIG-I, MDA5) e CDSs (via STING). Todos ativam a família de fatores de transcrição <strong>IRF</strong>, levando à expressão de IFN-α/β.</li>
                    <li><strong>Estado Antiviral:</strong> O IFN Tipo I secretado age (via receptores em todas as células nucleadas) para induzir a expressão de enzimas que bloqueiam a replicação viral nas células vizinhas não infectadas (<span class="tooltip-trigger" data-tooltip="estado-antiviral">Estado Antiviral</span>).</li>
                    <li><strong>Outras Funções:</strong>
                        <ul>
                            <li>Aumentam a citotoxicidade de Células NK e CTLs.</li>
                            <li>Regulam positivamente a expressão de <strong>MHC de Classe I</strong>, aumentando a probabilidade de células infectadas serem reconhecidas e mortas por CTLs CD8+.</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section id="adaptativa">
                <h2>Estímulo e Direcionamento da Imunidade Adaptativa</h2>
                <p>A resposta inata fornece os **segundos sinais** (além do antígeno - sinal 1) necessários para a proliferação e diferenciação ótimas dos linfócitos T e B.</p>
                
                <details>
                    <summary>Hipótese dos Dois Sinais para Ativação de Linfócitos</summary>
                    <p><strong>Sinal 1 (Específico):</strong> O reconhecimento do antígeno pelo receptor de antígeno do linfócito (TCR ou BCR). Garante a especificidade.</p>
                    <p><strong>Sinal 2 (Inato):</strong> Moléculas induzidas pelas respostas imunes inatas (e.g., coestimuladores nas Células Dendríticas, citocinas, ou fragmentos do complemento). Garante que a resposta adaptativa seja induzida quando houver **infecção danosa**, e não contra autoantígenos ou antígenos inofensivos.</p>
                </details>
                
                <ul>
                    <li><strong>Células Dendríticas (CDs):</strong> Ativadas por PAMPs (sinalização de TLR), CDs aumentam a expressão de <strong>coestimuladores</strong> (e.g., CD80, CD86 - Sinal 2 para T) e migram para linfonodos. Ali, elas apresentam o antígeno (Sinal 1) e fornecem os sinais 2 e citocinas que ativam e diferenciam as células T.</li>
                    <li><strong>Direcionamento da Resposta:</strong> A natureza da resposta inata molda o tipo de resposta adaptativa. Por exemplo:
                        <ul>
                            <li>IL-12 e IFN-γ: Estimulam a diferenciação de T CD4+ em células TH1 (defesa contra patógenos intracelulares).</li>
                            <li>IL-1, IL-6 e IL-23: Estimulam a diferenciação em células TH17 (defesa contra bactérias extracelulares/fungos).</li>
                        </ul>
                    </li>
                    <li><strong>Adjuvantes:</strong> Substâncias (como alúmen) usadas em vacinas que atuam ativando a resposta imune inata (e.g., ativando o inflamassoma ou TLRs) para garantir que o antígeno purificado elicite uma resposta adaptativa robusta.</li>
                </ul>
            </section>
            
            <section id="regulacao">
                <h2>Mecanismos de Regulação e Limitação da Resposta Inata</h2>
                <p>A resposta inflamatória, embora essencial, tem potencial de causar dano tecidual. Por isso, mecanismos de <span class="tooltip-trigger" data-tooltip="retroalimentacao-negativa">retroalimentação negativa</span> limitam a magnitude e a duração da resposta inata.</p>
                <ul>
                    <li><strong>Interleucina-10 (IL-10):</strong> É uma citocina regulatória produzida por macrófagos e células dendríticas (e células T regulatórias). Ela <strong>inibe</strong> a produção de citocinas inflamatórias (IL-1, TNF, IL-12) pelos macrófagos e células dendríticas ativadas, atuando como um regulador de retroalimentação negativa.</li>
                    <li><strong>Antagonista do Receptor de IL-1 (IL-1RA):</strong> Produzido por fagócitos mononucleares. É estruturalmente homólogo à IL-1, mas biologicamente inativo. Liga-se ao receptor de IL-1 (IL-1R) como um inibidor competitivo, bloqueando a sinalização da IL-1 ativa.</li>
                    <li><strong>Proteínas Supressoras de Sinalização de Citocinas (SOCS):</strong> Inibem as vias de sinalização JAK-STAT associadas aos receptores de citocinas (e.g., Interferons).</li>
                    <li><strong>SHP-1:</strong> Uma proteína fosfatase intracelular que regula negativamente a sinalização de TLRs e outras vias dependentes de tirosinoquinases.</li>
                </ul>
            </section>
            
        </div>
        
    </div>

    <div id="infoModal" class="inata-modal">
        <div class="inata-modal-content">
            <span class="close-btn" onclick="window.closeModal()">&times;</span>
            <h3 id="modalTitle" style="color: var(--color-primary);"></h3>
            <p id="modalText"></p>
        </div>
    </div>
</div>

<script>
    // JavaScript para Interatividade e Navegação

    // 1. Geração do Índice de Conteúdo (TOC)
    (function() {
        const content = document.querySelector('.inata-content');
        const tocList = document.getElementById('toc-list');
        if (!content || !tocList) return;
        
        const sections = content.querySelectorAll('section');

        sections.forEach(section => {
            const h2 = section.querySelector('h2');
            if (!h2) return;
            const sectionTitle = h2.textContent;
            const sectionId = section.id;

            // Adiciona o link principal ao TOC
            let listItem = document.createElement('li');
            let link = document.createElement('a');
            link.href = '#' + sectionId;
            link.textContent = sectionTitle;
            listItem.appendChild(link);
            
            // Adiciona links de subseções (h3)
            const subHeadings = section.querySelectorAll('h3');
            if (subHeadings.length > 0) {
                let subList = document.createElement('ul');
                subHeadings.forEach(sub => {
                    let subListItem = document.createElement('li');
                    let subLink = document.createElement('a');
                    
                    // Cria um ID se não existir (necessário para sub-links)
                    let subId = sub.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    sub.id = subId; 
                    
                    subLink.href = '#' + subId;
                    subLink.textContent = sub.textContent;
                    subLink.classList.add('sub-link');
                    subListItem.appendChild(subLink);
                    subList.appendChild(subListItem);
                });
                listItem.appendChild(subList);
            }

            tocList.appendChild(listItem);
        });
        
        // Adiciona listener para rolar suavemente ao clicar nos links do TOC
        tocList.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                const href = e.target.getAttribute('href');
                if (!href) return;
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Close menu on click
                    window.toggleInataMenu();
                }
            }
        });
    })();

    // Toggle Menu Function
    window.toggleInataMenu = function() {
        const menu = document.getElementById('inata-toc-dropdown');
        if (menu) {
            menu.classList.toggle('active');
        }
    }

    // Close menu when clicking outside
    window.addEventListener('click', function(e) {
        const menu = document.getElementById('inata-toc-dropdown');
        const btn = document.querySelector('.inata-menu-btn');
        if (menu && menu.classList.contains('active') && !menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('active');
        }
    });

    // 2. Lógica do Modal/Tooltip
    // Dados dos Tooltips
    Object.assign(window.tooltips, {
        'defesa-inicial': {
            title: 'Defesa Inicial',
            text: 'A resposta imune inata é a defesa imediata, que atua antes que a resposta adaptativa (que leva dias para se desenvolver) possa ser efetiva. A importância disso é vista em deficiências inatas que aumentam drasticamente a suscetibilidade a infecções, mesmo com a imunidade adaptativa intacta.'
        },
        'DAMPs': {
            title: 'DAMPs (Padrões Moleculares Associados ao Dano)',
            text: 'Moléculas que sinalizam estresse e dano tecidual (lesão estéril) na ausência de infecção, ou lesão causada por infecção. Incluem ATP extracelular, cristais de urato, e proteínas de choque térmico (HSPs). São cruciais para iniciar o reparo e a inflamação.'
        },
        'sinal-2': {
            title: 'Sinal 2 (Coestimulação)',
            text: 'No contexto da ativação de linfócitos, o "sinal 2" é a molécula (e.g., coestimulador ou citocina) fornecida pelo sistema inato (geralmente uma Célula Dendrítica) para garantir que a resposta adaptativa seja ativada apenas em caso de perigo real (microrganismos/dano) e não contra autoantígenos inofensivos. O sinal 1 é o antígeno.'
        },
        'N-formilmetionina': {
            title: 'N-formilmetionina',
            text: 'Este resíduo é característico do início da síntese proteica em **bactérias** (procariotos), mas raro nas proteínas de mamíferos (exceto nas mitocondriais). O receptor N-formil-met-leu-phe (FPR1) em leucócitos reconhece peptídeos contendo N-formilmetionil e estimula o movimento celular (quimiotaxia) em direção à fonte bacteriana.'
        },
        'HSPs': {
            title: 'HSPs (Proteínas de Choque Térmico)',
            text: 'São chaperonas intracelulares induzidas em resposta a vários estressores celulares. Quando liberadas para o meio extracelular por células danificadas ou morrendo, atuam como DAMPs, ativando receptores como TLR2 e TLR4, alertando o sistema imune inato.'
        },
        'dominio-TIR': {
            title: 'Domínio TIR (Toll/IL-1 Receptor)',
            text: 'Domínio citoplasmático encontrado nos TLRs e nos receptores das citocinas IL-1 e IL-18. Este domínio é essencial para a sinalização, pois recruta proteínas adaptadoras que iniciam as cascatas de sinalização (e.g., via MyD88 ou TRIF) para ativação de fatores de transcrição.'
        },
        'IFNs-tipo-I': {
            title: 'Interferons Tipo I (IFN-α e IFN-β)',
            text: 'Citocinas antivirais produzidas em resposta a ácidos nucleicos virais (via RLRs e TLRs endossomais). Sua principal função é induzir o "Estado Antiviral" em células vizinhas, bloqueando a replicação viral. Também aumentam a citotoxicidade de NKs e CTLs.'
        },
        'piropotose': {
            title: 'Piroptose',
            text: 'Uma forma de morte celular programada, induzida pela Caspase-1 ativada pelo Inflamassoma. É caracterizada por inchaço celular, perda da integridade da membrana e liberação de mediadores inflamatórios (como IL-1β) – diferindo da apoptose, que é silenciosa e não inflamatória.'
        },
        'explosao-respiratoria': {
            title: 'Explosão Respiratória',
            text: 'O rápido consumo de oxigênio pelos fagócitos ativados, catalisado pela enzima fagócito oxidase, para converter O2 em Espécies Reativas de Oxigênio (ROS), como o superóxido. Essas ROS são agentes oxidantes altamente reativos usados para destruir microrganismos dentro do fagolisossoma.'
        },
        'iNOS': {
            title: 'iNOS (Óxido Nítrico Sintase Induzida)',
            text: 'Enzima citosólica induzida em macrófagos (por sinais de TLRs e IFN-γ) que catalisa a produção de Óxido Nítrico (NO). O NO se combina com ROS para formar radicais peroxinitrito, poderosos agentes microbicidas no fagolisossoma.'
        },
        'MHC-I': {
            title: 'MHC de Classe I (Complexo Principal de Histocompatibilidade)',
            text: 'Moléculas de superfície celular expressas em todas as células nucleadas. Sua função primária é apresentar peptídeos citoplasmáticos para linfócitos T CD8+. No contexto da NK, o MHC-I é o ligante para o Receptor Inibitório, sinalizando "célula saudável".'
        },
        'MBL': {
            title: 'MBL (Lectina Ligante de Manose)',
            text: 'Uma proteína plasmática da família das colectinas. Reconhece resíduos de manose e fucose em microrganismos. Ativa a Via da Lectina do Complemento e atua como opsonina, facilitando a fagocitose.'
        },
        'Pentraxinas': {
            title: 'Pentraxinas (PCR e SAP)',
            text: 'Proteínas plasmáticas pentaméricas. Atuam como reagentes de fase aguda. Se ligam a microrganismos (e.g., fosforilcolina) e ativam o Complemento via C1q (Via Clássica).'
        },
        'inflamacao-aguda': {
            title: 'Inflamação Aguda',
            text: 'Uma resposta rápida e inespecífica a danos teciduais ou infecções, caracterizada pelo recrutamento de leucócitos e proteínas plasmáticas para o local da lesão. No contexto do Inflamassoma, a secreção de IL-1β e IL-18 promove essa resposta inflamatória potente.'
        },
        'mediadores-inflamatorios': {
            title: 'Mediadores Inflamatórios',
            text: 'Pequenas moléculas e citocinas que causam as alterações vasculares da inflamação aguda (dilatação arteriolar, aumento da permeabilidade capilar e adesividade endotelial). Os principais incluem TNF, IL-1, IL-6, quimiocinas e histamina (dos mastócitos).'
        },
        'inflamassoma-IL1': {
            title: 'Inflamassoma e IL-1',
            text: 'O Inflamassoma (geralmente NLRP3) é o complexo multiproteico que atua como uma plataforma de clivagem. É essencial para processar o precursor Pró-IL-1β na sua forma madura e ativa. Sem o inflamassoma, a IL-1β não é secretada de forma ativa.'
        },
        'IFN-gama': {
            title: 'IFN-γ (Interferon Gama)',
            text: 'Uma citocina de ativação de macrófagos, produzida por Células NK e, posteriormente, por células T (TH1). O IFN-γ é o principal sinal para o Macrófago matar ativamente os microrganismos fagocitados, aumentando a atividade da fagócito oxidase e iNOS.'
        },
        'pDCs': {
            title: 'Células Dendríticas Plasmacitoides (pDCs)',
            text: 'Um subgrupo de Células Dendríticas que expressa grande quantidade de TLRs endossomais (TLR7, 9) e é a principal fonte de produção de Interferons Tipo I (IFN-α) na resposta a infecções virais.'
        },
        'estado-antiviral': {
            title: 'Estado Antiviral',
            text: 'Um estado celular induzido por Interferons Tipo I, no qual a célula aumenta a expressão de enzimas (e.g., PKR, 2′,5′-oligoadenilato sintetase/RNase L) que inibem a síntese proteica viral e degradam o RNA viral, conferindo resistência à infecção viral.'
        },
        'retroalimentacao-negativa': {
            title: 'Retroalimentação Negativa',
            text: 'Mecanismos regulatórios que limitam a magnitude e a duração de uma resposta. Por exemplo, a IL-10 é produzida por macrófagos ativados e, em seguida, age para inibir a própria produção de citocinas inflamatórias (TNF, IL-12) pelos macrófagos.'
        }
    });
</script>
        `,
        midia: {
            audio: null,
            video: null,
            infographics: null
        },
        flashcards: [],
        quiz: {
            basico: [],
            avancado: []
        },
        abertas: []
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
    },
    "mecanismos_efetores": {
        titulo: "Mecanismos efetores de anticorpos e Sistema complemento",
        resumo: `
<style>
    /* CSS Scoped for Mecanismos Efetores Report */
    .efetores-wrapper {
        --color-primary: #007bff; /* Azul Padrão */
        --color-secondary: #6c757d;
        --color-background: #f8f9fa;
        --color-text: #212529;
        --color-highlight: #e9ecef;
        --color-complement: #5d005d; /* Roxo Escuro */
        --color-warning: #ffc107;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: var(--color-background);
        color: var(--color-text);
        line-height: 1.6;
        padding: 0;
        margin: 0;
    }

    .efetores-container {
        display: block;
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
    }

    /* Floating Menu Button */
    .efetores-menu-btn {
        position: fixed;
        top: 85px;
        left: 20px;
        z-index: 2000;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        font-size: 22px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s, background-color 0.2s;
    }
    .efetores-menu-btn:hover {
        transform: scale(1.05);
        background-color: #5d005d; /* Cor do complemento no hover */
    }

    /* Menu Dropdown */
    .efetores-toc-dropdown {
        position: fixed;
        top: 145px;
        left: 20px;
        width: 280px;
        max-height: 60vh;
        overflow-y: auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        padding: 20px;
        z-index: 2000;
        display: none;
        border: 1px solid rgba(0,0,0,0.05);
        animation: fadeIn 0.2s ease-out;
    }
    .efetores-toc-dropdown.active {
        display: block;
    }
    
    .efetores-toc-dropdown ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .efetores-toc-dropdown li {
        margin-bottom: 8px;
    }

    .efetores-toc-dropdown a {
        text-decoration: none;
        color: var(--color-text);
        display: block;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.95em;
        transition: all 0.2s;
    }

    .efetores-toc-dropdown a:hover {
        background-color: var(--color-highlight);
        color: var(--color-primary);
    }
    
    .efetores-toc-dropdown a.sub-link {
        padding-left: 24px;
        font-size: 0.9em;
        color: var(--color-secondary);
    }

    /* Content Styling */
    .efetores-content {
        background-color: #fff;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }

    .efetores-content h1 {
        color: var(--color-primary);
        border-bottom: 3px solid var(--color-primary);
        padding-bottom: 15px;
        margin-bottom: 40px;
        text-align: center;
        font-size: 2.2rem;
    }

    .efetores-content h2 {
        margin-top: 50px;
        border-bottom: 2px solid var(--color-highlight);
        padding-bottom: 10px;
        color: var(--color-complement); /* Roxo */
        font-size: 1.8rem;
    }
    
    .efetores-content h3 {
        margin-top: 35px;
        color: var(--color-complement);
        border-left: 4px solid var(--color-complement);
        padding-left: 15px;
        font-size: 1.4rem;
    }
    
    .efetores-content h4 {
        margin-top: 25px;
        color: var(--color-text);
        font-weight: 700;
        font-size: 1.1rem;
    }

    .efetores-content p {
        margin-bottom: 15px;
        text-align: justify;
        font-size: 1.05rem;
    }
    
    .efetores-content ul, .efetores-content ol {
        margin-bottom: 20px;
        padding-left: 25px;
    }
    
    .efetores-content li {
        margin-bottom: 8px;
    }

    /* Tooltip/Item Clicável */
    .tooltip-trigger {
        color: var(--color-primary);
        cursor: pointer;
        border-bottom: 1px dashed var(--color-primary);
        position: relative;
        font-weight: 600;
        transition: all 0.2s;
    }
    
    .complement-trigger {
        color: var(--color-complement);
        border-bottom: 1px dashed var(--color-complement);
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s;
    }

    .tooltip-trigger:hover, .complement-trigger:hover {
        background-color: rgba(0,0,0,0.05);
        border-bottom-style: solid;
    }

    /* Caixas de Informação/Quadros Explicativos (<details>) */
    .efetores-content details {
        margin: 25px 0;
        padding: 20px;
        border-left: 5px solid var(--color-warning);
        background-color: #fffaf0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    .efetores-content summary {
        font-weight: bold;
        cursor: pointer;
        color: var(--color-complement);
        font-size: 1.1rem;
    }
    
    .efetores-content details p {
        margin-top: 15px;
        padding-left: 15px;
        border-left: 2px solid var(--color-warning);
        color: #555;
    }

    /* Tabelas */
    .efetores-content table {
        width: 100%;
        border-collapse: collapse;
        margin: 30px 0;
        font-size: 0.95em;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    .efetores-content th, .efetores-content td {
        border: 1px solid var(--color-highlight);
        padding: 15px;
        text-align: left;
    }

    .efetores-content th {
        background-color: var(--color-primary);
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.85rem;
        letter-spacing: 0.5px;
    }

    .efetores-content tr:nth-child(even) {
        background-color: #f8f9fa;
    }
    
    /* Destaque para Citações/Observações */
    .citation-note {
        font-style: italic;
        font-size: 0.9em;
        color: var(--color-secondary);
        margin-top: -10px;
        margin-bottom: 25px;
        display: block;
        background: #f8f9fa;
        padding: 10px;
        border-radius: 6px;
    }

    /* Tags de Imagem */
    .image-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px auto;
        padding: 20px;
        background-color: #fff5f7;
        border: 1px dashed #ff99aa;
        border-radius: 8px;
        text-align: center;
        color: var(--color-secondary);
        max-width: 100%;
    }
    
    .image-placeholder img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
        margin-bottom: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    
    .image-placeholder p {
        font-size: 0.9rem;
        margin-bottom: 0;
        color: #666;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Modal Styles */
    .efetores-modal {
        display: none; 
        position: fixed; 
        z-index: 1000; 
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; 
        background-color: rgba(0,0,0,0.5); 
        padding-top: 60px;
    }

    .efetores-modal-content {
        background-color: #fff;
        margin: 5% auto; 
        padding: 25px;
        border: 1px solid #ddd;
        width: 90%; 
        max-width: 500px;
        border-radius: 10px;
        position: relative;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    .close-btn {
        color: #aaa;
        float: right;
        font-size: 32px;
        font-weight: bold;
        line-height: 1;
    }

    .close-btn:hover,
    .close-btn:focus {
        color: #333;
        text-decoration: none;
        cursor: pointer;
    }
</style>

<div class="efetores-wrapper">
    <!-- Floating Menu Button -->
    <button class="efetores-menu-btn" onclick="window.toggleEfetoresMenu()" title="Índice">
        ☰
    </button>

    <!-- Dropdown Menu -->
    <div id="efetores-toc-dropdown" class="efetores-toc-dropdown">
        <h3>Índice</h3>
        <ul id="toc-list-efetores">
            <!-- TOC generated by JS -->
        </ul>
    </div>

    <div class="efetores-container">
        <div class="efetores-content">
            <header>
                <h1>Mecanismos Efetores da Imunidade Humoral</h1>
                <p>A <span class="tooltip-trigger" data-tooltip="imunidade-humoral">imunidade humoral</span> é a principal defesa contra microrganismos extracelulares e toxinas, sendo mediada por <strong>anticorpos secretados</strong>. Os anticorpos realizam suas funções efetoras em locais distantes de sua produção (órgãos linfoides secundários, medula óssea) e são cruciais na proteção induzida por vacinas.</p>
                <div class="image-placeholder">
                    <img src="assets/efetores/figura1.jpg" alt="Visão geral das funções efetoras dos anticorpos">
                    <p><strong>Figura 1:</strong> Visão geral das funções efetoras dos anticorpos.</p>
                </div>
            </header>
            
            <section id="funcoes-anticorpos">
                <h2>Funções Efetoras dos Anticorpos</h2>
                <p>Muitas funções efetoras dos anticorpos são mediadas pelas <strong>regiões constantes (Fc)</strong> da cadeia pesada da Ig, enquanto a <span class="tooltip-trigger" data-tooltip="neutralizacao">neutralização</span> é a única função mediada inteiramente pela ligação do antígeno às regiões variáveis (Fab).</p>

                <h3>1. Neutralização de Microrganismos e Toxinas</h3>
                <p>Anticorpos bloqueiam a infecção e o dano patológico por meio do <strong>bloqueio estereoquímico</strong>.</p>
                <ul>
                    <li>Anticorpos ligam-se a moléculas superficiais de microrganismos (e.g., hemaglutinina do influenza, pilosidades bacterianas), <span class="tooltip-trigger" data-tooltip="bloqueio-ligacao">impedindo sua ligação</span> a receptores da célula hospedeira.</li>
                    <li>Anticorpos contra toxinas (e.g., toxina tetânica ou diftérica) bloqueiam sua ligação a receptores celulares, <span class="tooltip-trigger" data-tooltip="bloqueio-toxina">neutralizando seus efeitos patológicos</span>.</li>
                    <li>Este processo é independente da região Fc e é mediado por anticorpos de <strong>qualquer isotipo</strong> (IgG no sangue, IgA nas mucosas).</li>
                </ul>

                <h3>2. Opsonização e Fagocitose</h3>
                <p>Os anticorpos do isotipo <strong>IgG</strong> cobrem (opsonizam) os microrganismos, facilitando sua fagocitose por macrófagos e neutrófilos, que expressam receptores Fc.</p>

                <h4>Receptores Fc em Leucócitos (FcγR)</h4>
                <p>Receptores para as porções Fc da IgG (<span class="complement-trigger" data-tooltip="FcyRI">FcγRI / CD64</span>, FcγRII, FcγRIII) são cruciais para a internalização de partículas opsonizadas e para a ativação microbicida dos fagócitos.</p>
                <ul>
                    <li><strong>FcγRI (CD64):</strong> Principal receptor Fc em <strong>macrófagos e neutrófilos</strong>. Liga-se a IgG1 e IgG3 com <strong>alta afinidade</strong>. É o receptor mais importante para a fagocitose de partículas opsonizadas. Sua expressão é estimulada pelo IFN-γ.</li>
                    <li><strong>FcγRIIB (CD32):</strong> É o único receptor de Fc que é <strong>inibitório</strong>. Expresso em células B e mieloides, ele inibe a ativação de células B e pode reduzir a inflamação (mecanismo da terapia com IVIG). Contém um <span class="complement-trigger" data-tooltip="ITIM">motivo ITIM</span> na cauda citoplasmática.</li>
                    <li><strong>Ativação:</strong> A ligação cruzada (agrupamento) dos FcγRs por anticorpos ligados a um antígeno multivalente desencadeia a fosforilação de <span class="complement-trigger" data-tooltip="ITAM">motivos ITAM</span> (em cadeias de sinalização como FcRγ ou ζ) e ativa cascatas que levam à fagocitose e à produção de microbicidas (ROS, NO).</li>
                </ul>
                <div class="image-placeholder">
                    <img src="assets/efetores/figura2_v2.jpg" alt="Opsonização e fagocitose mediada por anticorpos">
                    <p><strong>Figura 2:</strong> Opsonização e fagocitose mediada por anticorpos.</p>
                </div>
                <div class="citation-note"><strong>Observação:</strong> Opsonização é o processo de cobrir partículas, e substâncias (como IgG e C3b) que realizam essa função são chamadas <strong>opsoninas</strong>.</div>

                <h3>3. Citotoxicidade Mediada por Células Dependente de Anticorpo (ADCC)</h3>
                <p>É o processo pelo qual <strong>Células Natural Killer (NK)</strong> e outros leucócitos destroem células revestidas por anticorpo.</p>
                <ul>
                    <li>As células NK utilizam o receptor <strong>FcγRIIIA (CD16)</strong> para se ligar às moléculas de IgG agregadas na superfície da célula-alvo.</li>
                    <li>A ligação do FcγRIIIA ativa a célula NK para liberar o conteúdo de seus grânulos (perforina e granzimas), <span class="tooltip-trigger" data-tooltip="adcc-morte">induzindo a morte apoptótica</span> da célula revestida por anticorpo.</li>
                </ul>
                <div class="image-placeholder">
                    <img src="assets/efetores/figura3.jpg" alt="Mecanismo de Citotoxicidade Celular Dependente de Anticorpo (ADCC)">
                    <p><strong>Figura 3:</strong> Mecanismo de Citotoxicidade Celular Dependente de Anticorpo (ADCC).</p>
                </div>
                
                <h3>4. Eliminação de Helmintos</h3>
                <p>Helmintos são grandes demais para fagocitose. O combate é mediado por <strong>IgE</strong> e <strong>eosinófilos</strong>.</p>
                <ul>
                    <li>Anticorpos IgE revestem o parasita e se ligam ao receptor de alta afinidade <span class="complement-trigger" data-tooltip="FceRI">FcεRI</span> em eosinófilos e mastócitos.</li>
                    <li>A ligação induz a desgranulação do eosinófilo, liberando a <strong>proteína básica principal</strong> (major basic protein, tóxica), que mata o parasita.</li>
                </ul>
                <div class="image-placeholder">
                    <img src="assets/efetores/figura4.jpg" alt="Eliminação de Helmintos mediada por IgE e Eosinófilos">
                    <p><strong>Figura 4:</strong> Eliminação de Helmintos mediada por IgE e Eosinófilos.</p>
                </div>
            </section>

            <section id="sistema-complemento">
                <h2>Sistema Complemento</h2>
                <p>O sistema complemento é uma cascata proteolítica de zimógenos (proteínas plasmáticas inativas) que complementa a função lítica dos anticorpos. Sua ativação é limitada a superfícies microbianas ou a complexos antígeno-anticorpo para evitar danos ao hospedeiro.</p>
                
                <details>
                    <summary>As 4 Características Essenciais da Ativação do Complemento</summary>
                    <p>1. Ativado por microrganismos ou por anticorpos ligados a antígenos.</p>
                    <p>2. Envolve a <strong>proteólise sequencial de zimógenos</strong> (cascata enzimática) que permite enorme amplificação.</p>
                    <p>3. Produtos de ativação (e.g., C3b) ligam-se <strong>covalentemente</strong> a superfícies microbianas ou a imunocomplexos, garantindo a localização da reação.</p>
                    <p>4. Regulação é feita por <strong>proteínas reguladoras do hospedeiro</strong> (ausentes em microrganismos) que inibem a cascata nas células normais.</p>
                </details>

                <h3>Vias de Ativação (Etapas Iniciais)</h3>
                <p>Todas as três vias convergem para a formação da <strong>C3-convertase</strong>, que cliva C3 e inicia as funções efetoras.</p>
                
                <table>
                    <thead>
                        <tr>
                            <th>Via</th>
                            <th>Iniciação (Reconhecimento)</th>
                            <th>C3-Convertase</th>
                            <th>Principal Ativação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="complement-trigger" data-tooltip="via-classica">Clássica</span></td>
                            <td>Ligação do <strong>C1</strong> (C1q, C1r, C1s) a regiões Fc de <strong>IgM</strong> ou <strong>IgG</strong> (IgG1, IgG3) ligadas ao antígeno.</td>
                            <td>C4b2a</td>
                            <td>Imunidade Adaptativa Humoral</td>
                        </tr>
                        <tr>
                            <td><span class="complement-trigger" data-tooltip="via-alternativa">Alternativa</span></td>
                            <td>Ligação espontânea do <strong>C3b</strong> (gerado por hidrólise de C3) diretamente a superfícies ativadoras (microrganismos).</td>
                            <td>C3bBb</td>
                            <td>Imunidade Inata (e Amplificação)</td>
                        </tr>
                        <tr>
                            <td><span class="complement-trigger" data-tooltip="via-lectinas">Lectinas</span></td>
                            <td>Ligação da <strong>Lectina Ligadora de Manose (MBL)</strong> ou <strong>Ficolinas</strong> a polissacarídios microbianos (manose, N-acetilglicosamina).</td>
                            <td>C4b2a</td>
                            <td>Imunidade Inata</td>
                        </tr>
                    </tbody>
                </table>
                <div class="image-placeholder">
                    <img src="assets/efetores/figura5.jpg" alt="Vias de ativação do complemento">
                    <p><strong>Figura 5:</strong> Vias de ativação do complemento.</p>
                </div>

                <h3>Etapas Finais e Funções Efetoras</h3>
                <p>Após a clivagem de C3, o <strong>C3b</strong> recém-gerado se liga à C3-convertase, formando a <strong>C5-convertase</strong> (<span class="complement-trigger" data-tooltip="C5-convertase">C4b2a3b ou C3bBbC3b</span>).</p>
                <ul>
                    <li>A C5-convertase cliva C5 em <strong>C5a</strong> (liberado) e <strong>C5b</strong> (ligado à célula).</li>
                    <li><strong>C5b</strong> inicia a montagem da via terminal (C6, C7, C8, C9), culminando na formação do <strong>Complexo de Ataque à Membrana (MAC)</strong>.</li>
                </ul>
                
                <h4>Mecanismos de Ação do Complemento</h4>
                <ol>
                    <li><strong>Opsonização e Fagocitose:</strong> <strong>C3b</strong> e <strong>iC3b</strong> atuam como opsoninas. Eles se ligam a microrganismos e são reconhecidos por receptores nos fagócitos (CR1, CR3/Mac-1, CR4), promovendo a eliminação fagocitária.</li>
                    <li><strong>Lise Celular:</strong> O <strong>MAC</strong> (poli-C9) forma poros de ~100 Å na membrana, resultando em influxo osmótico de água e lise celular. A lise é crucial principalmente para bactérias com paredes celulares delgadas, como <span class="complement-trigger" data-tooltip="Neisseria">Neisseria</span>.</li>
                    <li><strong>Estímulo da Inflamação:</strong> Os fragmentos <strong>C5a, C3a</strong> e, em menor grau, C4a, são <span class="complement-trigger" data-tooltip="anafilatoxinas">anafilatoxinas</span>. Eles ativam mastócitos (desgranulação e liberação de histamina), neutrófilos (aumentando motilidade, adesão e explosão respiratória) e células endoteliais.</li>
                    <li><strong>Aumento da Imunidade Humoral:</strong> C3d liga-se ao <strong>CR2</strong> (<span class="complement-trigger" data-tooltip="CR2">CD21</span>) em células B, formando um correceptor que amplifica a sinalização do BCR, facilitando a ativação de células B e a produção de anticorpos.</li>
                </ol>
                <div class="image-placeholder">
                    <img src="assets/efetores/figura6.png" alt="Via terminal e formação do MAC">
                    <p><strong>Figura 6:</strong> Via terminal e formação do MAC.</p>
                </div>
            </section>

            <section id="regulacao-complemento">
                <h2>Regulação e Evasão do Complemento</h2>
                <p>A ativação é rigidamente controlada por proteínas reguladoras para proteger as células do hospedeiro, mas os microrganismos evoluíram mecanismos de evasão.</p>
                
                <h3>Reguladores do Hospedeiro</h3>
                <p>As proteínas reguladoras previnem a formação de C3-convertase, desestabilizam convertases ativas e inibem a formação do MAC.</p>
                <ul>
                    <li><span class="complement-trigger" data-tooltip="C1INH"><strong>Inibidor de C1 (C1-INH)</strong></span><strong>:</strong> Proteína plasmática que <strong>dissocia</strong> C1r₂s₂ de C1q, impedindo a ativação da Via Clássica. (Deficiência causa Angioedema Hereditário).</li>
                    <li><strong>Fator de Aceleração do Decaimento (DAF/CD55):</strong> Proteína de membrana que <strong>dissocia</strong> C2a de C4b e Bb de C3b, desestabilizando as C3-convertases.</li>
                    <li><strong>Proteína Cofatora de Membrana (MCP/CD46) e Fator H:</strong> Atuam como <strong>cofatores</strong> para a protease Fator I. O Fator I cliva C3b e C4b em formas inativas (iC3b), <strong>degradando as convertases</strong>. O Fator H regula a Via Alternativa.</li>
                    <li><strong>CD59:</strong> Proteína de membrana que se insere no complexo C5b-8, <strong>bloqueando a polimerização de C9</strong> e, assim, a formação do MAC.</li>
                </ul>
                
                <h3>Evasão Microbiana</h3>
                <p>Microrganismos evoluíram estratégias para se protegerem da lise e opsonização.</p>
                <ul>
                    <li><strong>Recrutamento de Reguladores do Hospedeiro:</strong> Patógenos (e.g., <em>Neisseria, Schistosoma</em>) expressam ácido siálico ou produzem proteínas que recrutam o <strong>Fator H</strong> do hospedeiro para suas superfícies, inibindo a Via Alternativa. O HIV, por exemplo, incorpora DAF e CD59.</li>
                    <li><strong>Produção de Miméticos Regulatórios:</strong> Bactérias (<em>S. aureus</em>) ou vírus (<em>vírus vaccínia</em>) produzem proteínas que imitam ou inibem componentes do complemento, como o SCIN (<em>S. aureus</em>), que inibe as C3-convertases.</li>
                    <li><strong>Paredes Celulares Espessas:</strong> Impedem o acesso do MAC à membrana.</li>
                </ul>
            </section>
            
            <section id="deficiencias-patologia">
                <h2>Deficiências e Patologia do Complemento</h2>
                <p>Deficiências genéticas no complemento causam suscetibilidade a infecções e autoimunidade.</p>
                <ul>
                    <li><strong>Deficiências em C1, C2, C4 (Via Clássica):</strong> Fortemente associadas ao <span class="complement-trigger" data-tooltip="LES">Lúpus Eritematoso Sistêmico (LES)</span>, possivelmente devido à falha na eliminação de imunocomplexos e corpos apoptóticos.</li>
                    <li><strong>Deficiência em C3:</strong> Causa suscetibilidade grave a <strong>infecções bacterianas piogênicas</strong> (frequentes e letais), ilustrando o papel central de C3 na opsonização.</li>
                    <li><strong>Deficiência na Via Terminal (C5-C9):</strong> Associada a uma propensão específica a infecções disseminadas por <strong>bactérias <em>Neisseria</em></strong> (meningococo, gonococo), sublinhando a importância do MAC contra estes patógenos de parede celular fina.</li>
                </ul>
            </section>
            
            <section id="imunidade-neonatal">
                <h2>Imunidade Neonatal</h2>
                <p>Neonatos obtêm proteção passiva da mãe.</p>
                <ul>
                    <li>A <strong>IgG materna</strong> é transportada através da placenta para a circulação fetal.</li>
                    <li>O transporte de IgG (e sua proteção contra o catabolismo em adultos) é mediado pelo <strong>Receptor Fc Neonatal (FcRn)</strong>. O FcRn é estruturalmente semelhante a uma molécula de MHC de Classe I, mas não apresenta peptídeos.</li>
                </ul>
            </section>

        </div>
    </div>
    
    <!-- Modal for Tooltips -->
    <div id="infoModal" class="efetores-modal">
        <div class="efetores-modal-content">
            <span class="close-btn" onclick="window.closeModal()">&times;</span>
            <h3 id="modalTitle" style="color: var(--color-complement);"></h3>
            <p id="modalText"></p>
        </div>
    </div>
</div>


<script>
    (function() {
        // --------------------------------------------------------
        // Script de Interatividade (TOC e Tooltips)
        // --------------------------------------------------------
        
        // 1. Definição e Merge dos Tooltips
        window.tooltips = window.tooltips || {};
        Object.assign(window.tooltips, {
            'imunidade-humoral': {
                title: 'Imunidade Humoral',
                text: 'Tipo de imunidade adaptativa mediada por anticorpos produzidos por linfócitos B. É a principal defesa contra microrganismos extracelulares e suas toxinas.'
            },
            'neutralizacao': {
                title: 'Neutralização',
                text: 'Processo pelo qual anticorpos se ligam a microrganismos ou toxinas, bloqueando sua capacidade de infectar células ou causar danos. É a única função mediada exclusivamente pela região Fab.'
            },
            'bloqueio-ligacao': {
                title: 'Bloqueio de Ligação',
                text: 'Anticorpos impedem a interação de moléculas de superfície do patógeno com receptores celulares, prevenindo a entrada do microrganismo na célula.'
            },
            'bloqueio-toxina': {
                title: 'Neutralização de Toxinas',
                text: 'Anticorpos impedem que toxinas (como a tetânica ou diftérica) se liguem aos seus receptores nas células-alvo, inibindo seus efeitos tóxicos.'
            },
            'FcyRI': {
                title: 'FcγRI (CD64)',
                text: 'Receptor de alta afinidade para IgG (especialmente IgG1 e IgG3) presente em macrófagos e neutrófilos. Essencial para a fagocitose de partículas opsonizadas.'
            },
            'ITIM': {
                title: 'ITIM (Motivo de Inibição Baseado em Tirosina)',
                text: 'Sequência de aminoácidos na cauda citoplasmática de receptores inibitórios (como FcγRIIB). Quando fosforilado, recruta fosfatases que inibem vias de sinalização de ativação.'
            },
            'ITAM': {
                title: 'ITAM (Motivo de Ativação Baseado em Tirosina)',
                text: 'Sequência encontrada em cadeias de sinalização de receptores ativadores. Sua fosforilação recruta quinases que iniciam a cascata de ativação celular.'
            },
            'adcc-morte': {
                title: 'Morte por ADCC',
                text: 'A célula NK libera grânulos contendo perforina e granzimas. A perforina facilita a entrada das granzimas, que ativam caspases na célula-alvo, levando à apoptose.'
            },
            'FceRI': {
                title: 'FcεRI',
                text: 'Receptor de alta afinidade para IgE, expresso em mastócitos, basófilos e eosinófilos. Sua ligação cruzada por antígenos multvalentes induz desgranulação potente.'
            },
            'via-classica': {
                title: 'Via Clássica',
                text: 'Iniciada pela ligação do complexo C1 (C1q) a anticorpos (IgM ou IgG) ligados à superfície do patógeno. Conecta a imunidade adaptativa ao sistema complemento.'
            },
            'via-alternativa': {
                title: 'Via Alternativa',
                text: 'Ativada pela hidrólise espontânea de C3 e estabilização de C3b na superfície microbiana. É um mecanismo de vigilância inata constante.'
            },
            'via-lectinas': {
                title: 'Via das Lectinas',
                text: 'Iniciada pela ligação de MBL ou ficolinas a carboidratos na superfície de patógenos. Semelhante à via clássica, mas independente de anticorpos.'
            },
            'C5-convertase': {
                title: 'C5-convertase',
                text: 'Complexo enzimático (C4b2a3b ou C3bBbC3b) que cliva C5, iniciando a etapa final da ativação do complemento (formação do MAC e anafilatoxinas potentes).'
            },
            'Neisseria': {
                title: 'Neisseria spp.',
                text: 'Gênero de bactérias (inclui meningococo e gonococo) com parede celular fina, sendo particularmente suscetíveis à lise pelo MAC. Deficiências nos componentes terminais do complemento aumentam o risco de infecções disseminadas por Neisseria.'
            },
            'anafilatoxinas': {
                title: 'Anafilatoxinas (C5a, C3a)',
                text: 'Fragmentos pequenos da clivagem do complemento que induzem inflamação aguda: recrutam leucócitos (quimiotaxia), aumentam a permeabilidade vascular e ativam mastócitos.'
            },
            'CR2': {
                title: 'CR2 (CD21)',
                text: 'Receptor para C3d presente em células B. Atua como parte do complexo correceptor da célula B, reduzindo o limiar de ativação necessário para a resposta de anticorpos.'
            },
            'C1INH': {
                title: 'Inibidor de C1 (C1-INH)',
                text: 'Proteína reguladora que inibe a atividade proteolítica de C1r e C1s (Via Clássica) e MASPs (Via das Lectinas), prevenindo ativação excessiva ou espontânea.'
            },
            'LES': {
                title: 'Lúpus Eritematoso Sistêmico (LES)',
                text: 'Doença autoimune complexa. A deficiência de componentes iniciais do complemento (C1, C4, C2) predispõe ao LES, provavelmente devido à falha na eliminação silenciosa de células apoptóticas e imunocomplexos, gerando autoantígenos.'
            }
        });

        // 2. Geração do Índice de Conteúdo (TOC)
        const content = document.querySelector('.efetores-content');
        const tocList = document.getElementById('toc-list-efetores');

        if (content && tocList) {
            tocList.innerHTML = '';
            const sections = content.querySelectorAll('section');

            sections.forEach(section => {
                const h2 = section.querySelector('h2');
                if (!h2) return;
                const sectionTitle = h2.textContent;
                const sectionId = section.id;

                let listItem = document.createElement('li');
                let link = document.createElement('a');
                link.href = '#' + sectionId;
                link.textContent = sectionTitle;
                listItem.appendChild(link);

                // Adiciona links de subseções (h3)
                const subHeadings = section.querySelectorAll('h3');
                if (subHeadings.length > 0) {
                    let subList = document.createElement('ul');
                    subHeadings.forEach(sub => {
                        let subListItem = document.createElement('li');
                        let subLink = document.createElement('a');
                        
                        // Cria um ID se não existir (necessário para sub-links)
                        let subId = sub.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                        sub.id = subId;
                        
                        subLink.href = '#' + subId;
                        subLink.textContent = sub.textContent;
                        subLink.classList.add('sub-link');
                        subListItem.appendChild(subLink);
                        subList.appendChild(subListItem);
                    });
                    listItem.appendChild(subList);
                }
                tocList.appendChild(listItem);
            });

            // Adiciona listener para rolar suavemente ao clicar nos links do TOC
            tocList.addEventListener('click', function(e) {
                if (e.target.tagName === 'A') {
                    e.preventDefault();
                    const href = e.target.getAttribute('href');
                    if (!href) return;
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.toggleEfetoresMenu();
                    }
                }
            });
        }

        // 3. Menu Toggle Logic
        window.toggleEfetoresMenu = function() {
            const dropdown = document.getElementById('efetores-toc-dropdown');
            if (dropdown) dropdown.classList.toggle('active');
        }

        // Close menu when clicking outside
        window.addEventListener('click', function(e) {
            const dropdown = document.getElementById('efetores-toc-dropdown');
            const btn = document.querySelector('.efetores-menu-btn');
            if (dropdown && btn && !dropdown.contains(e.target) && !btn.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

    })();
</script>
        `,
        midia: {
            audio: null,
            video: null,
            infographics: null
        },
        flashcards: [],
        quiz: {
            basico: [],
            avancado: []
        },
        abertas: []
    },
    "moleculas_mhc": {
        titulo: "Moléculas do MHC e apresentação de antígenos para linfócitos T",
        resumo: `
<style>
    /* CSS Scoped for Report */
    .efetores-wrapper {
        --color-primary: #2c7a7b; /* Verde Petróleo Profundo - tema científico */
        --color-secondary: #546e7a; /* Azul Acinzentado */
        --color-background: #f0f4f8; /* Fundo cinza azulado muito claro */
        --color-text: #2d3748; /* Cinza escuro para texto */
        --color-highlight: #e2e8f0;
        --color-complement: #2b6cb0; /* Azul Real para destaques secundários */
        --color-warning: #c05621; /* Laranja queimado para notas importantes */
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: var(--color-background);
        color: var(--color-text);
        line-height: 1.7;
        padding: 0;
        margin: 0;
    }

    .efetores-container {
        display: block;
        max-width: 1024px;
        margin: 0 auto;
        padding: 20px;
    }

    /* Floating Menu Button */
    .efetores-menu-btn {
        position: fixed;
        top: 85px;
        left: 20px;
        z-index: 2000;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s, background-color 0.2s;
    }
    .efetores-menu-btn:hover {
        transform: scale(1.1);
        background-color: var(--color-complement);
    }

    /* Menu Dropdown */
    .efetores-toc-dropdown {
        position: fixed;
        top: 145px;
        left: 20px;
        width: 300px;
        max-height: 65vh;
        overflow-y: auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        padding: 20px;
        z-index: 2000;
        display: none;
        border: 1px solid rgba(0,0,0,0.05);
        animation: fadeIn 0.2s ease-out;
    }
    .efetores-toc-dropdown.active {
        display: block;
    }
    
    .efetores-toc-dropdown h3 {
        margin-top: 0;
        color: var(--color-primary);
        font-size: 1.2rem;
        border-bottom: 2px solid var(--color-highlight);
        padding-bottom: 10px;
    }

    .efetores-toc-dropdown ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .efetores-toc-dropdown li {
        margin-bottom: 5px;
    }

    .efetores-toc-dropdown a {
        text-decoration: none;
        color: var(--color-text);
        display: block;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.9em;
        transition: all 0.2s;
    }

    .efetores-toc-dropdown a:hover {
        background-color: var(--color-highlight);
        color: var(--color-primary);
        font-weight: 600;
    }
    
    .efetores-toc-dropdown a.sub-link {
        padding-left: 24px;
        font-size: 0.85em;
        color: var(--color-secondary);
        border-left: 2px solid transparent;
    }
    .efetores-toc-dropdown a.sub-link:hover {
        border-left: 2px solid var(--color-primary);
    }

    /* Content Styling */
    .efetores-content {
        background-color: #fff;
        padding: 50px;
        border-radius: 12px;
        box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
    }

    .efetores-content header {
        text-align: center;
        margin-bottom: 60px;
    }

    .efetores-content h1 {
        color: var(--color-primary);
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 20px;
        line-height: 1.2;
    }

    .efetores-content .intro-text {
        font-size: 1.2rem;
        color: var(--color-secondary);
        max-width: 800px;
        margin: 0 auto;
    }

    .efetores-content h2 {
        margin-top: 60px;
        border-bottom: 2px solid var(--color-highlight);
        padding-bottom: 15px;
        color: var(--color-primary); 
        font-size: 1.8rem;
    }
    
    .efetores-content h3 {
        margin-top: 40px;
        color: var(--color-complement);
        border-left: 4px solid var(--color-complement);
        padding-left: 15px;
        font-size: 1.4rem;
    }
    
    .efetores-content h4 {
        margin-top: 30px;
        color: var(--color-text);
        font-weight: 700;
        font-size: 1.15rem;
    }

    .efetores-content p {
        margin-bottom: 18px;
        text-align: justify;
        font-size: 1.05rem;
    }
    
    .efetores-content ul, .efetores-content ol {
        margin-bottom: 25px;
        padding-left: 30px;
        color: var(--color-text);
    }
    
    .efetores-content li {
        margin-bottom: 10px;
    }

    /* Tooltip/Item Clicável */
    .tooltip-trigger, .complement-trigger {
        color: var(--color-primary);
        cursor: pointer;
        border-bottom: 1px dashed var(--color-primary);
        position: relative;
        font-weight: 600;
        transition: all 0.2s;
        background-color: rgba(44, 122, 123, 0.05);
        padding: 0 4px;
        border-radius: 4px;
    }

    .complement-trigger {
        color: var(--color-complement);
        border-bottom: 1px dashed var(--color-complement);
        background-color: rgba(43, 108, 176, 0.05);
    }

    .tooltip-trigger:hover, .complement-trigger:hover {
        background-color: var(--color-highlight);
        border-bottom-style: solid;
    }

    /* Caixas de Informação/Quadros Explicativos (<details>) */
    .efetores-content details {
        margin: 30px 0;
        padding: 0;
        border: 1px solid var(--color-highlight);
        border-left: 6px solid var(--color-warning);
        background-color: #fffaf0;
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .efetores-content details[open] {
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }

    .efetores-content summary {
        padding: 15px 20px;
        font-weight: bold;
        cursor: pointer;
        color: #9c4221;
        font-size: 1.05rem;
        background-color: rgba(255, 250, 240, 0.5);
        display: flex;
        align-items: center;
    }
    
    .efetores-content summary:hover {
        background-color: rgba(255, 250, 240, 1);
    }
    
    .efetores-content details .details-content {
        padding: 20px;
        border-top: 1px solid rgba(0,0,0,0.05);
        color: #4a5568;
    }

    /* Tabelas */
    .table-container {
        overflow-x: auto;
        margin: 30px 0;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    .efetores-content table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.95em;
        background-color: white;
    }

    .efetores-content th, .efetores-content td {
        border: 1px solid var(--color-highlight);
        padding: 16px;
        text-align: left;
        vertical-align: top;
    }

    .efetores-content th {
        background-color: var(--color-primary);
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.85rem;
        letter-spacing: 0.5px;
    }

    .efetores-content tr:nth-child(even) {
        background-color: #f8fafc;
    }
    
    .efetores-content tr:hover {
        background-color: #e6fffa;
    }
    
    /* Destaque para Citações/Observações */
    .citation-note {
        font-style: italic;
        font-size: 0.95em;
        color: var(--color-secondary);
        margin: 25px 0;
        display: block;
        background: #edf2f7;
        padding: 15px 20px;
        border-radius: 0 8px 8px 0;
        border-left: 4px solid var(--color-secondary);
    }

    /* Tags de Imagem */
    .image-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px auto;
        padding: 25px;
        background-color: #ffffff;
        border: 2px dashed #cbd5e0;
        border-radius: 12px;
        text-align: center;
        color: var(--color-secondary);
        transition: all 0.3s;
    }
    
    .image-placeholder:hover {
        border-color: var(--color-primary);
        background-color: #f0fff4;
    }
    
    .image-placeholder .icon {
        font-size: 40px;
        margin-bottom: 15px;
        color: var(--color-primary);
    }

    .image-placeholder p {
        font-size: 0.95rem;
        margin-bottom: 5px;
        color: #4a5568;
        font-style: italic;
    }
    
    .image-caption {
        margin-top: 10px;
        font-weight: bold;
        color: var(--color-text);
        font-size: 0.9rem;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Modal Styles */
    .efetores-modal {
        display: none; 
        position: fixed; 
        z-index: 3000; 
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; 
        background-color: rgba(0,0,0,0.6); 
        backdrop-filter: blur(3px);
    }

    .efetores-modal-content {
        background-color: #fff;
        margin: 10% auto; 
        padding: 30px;
        border: 1px solid #ddd;
        width: 90%; 
        max-width: 600px;
        border-radius: 12px;
        position: relative;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
        from { transform: translateY(-30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    .close-btn {
        color: #aaa;
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 28px;
        font-weight: bold;
        line-height: 1;
        transition: color 0.2s;
    }

    .close-btn:hover,
    .close-btn:focus {
        color: var(--color-primary);
        text-decoration: none;
        cursor: pointer;
    }
    
    #modalTitle {
        margin-top: 0;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
        margin-bottom: 15px;
    }
</style>
<div class="efetores-wrapper">
    <!-- Floating Menu Button -->
    <button class="efetores-menu-btn" onclick="window.toggleEfetoresMenu()" title="Índice">
        ☰
    </button>

    <!-- Dropdown Menu -->
    <div id="efetores-toc-dropdown" class="efetores-toc-dropdown">
        <h3>Índice</h3>
        <ul id="toc-list-efetores">
            <!-- TOC generated by JS -->
        </ul>
    </div>

    <div class="efetores-container">
        <div class="efetores-content">
            <header>
                <h1>O Complexo Principal de Histocompatibilidade (MHC) e o Processamento de Antígenos</h1>

                

            </header>
            
            <section id="introducao">
                <h2>1. Introdução e Princípios de Reconhecimento</h2>
                <p>Ao contrário dos linfócitos B, que podem reconhecer antígenos em sua conformação nativa (solúveis ou na superfície de microrganismos), os <strong>linfócitos T</strong> possuem um mecanismo de reconhecimento altamente restritivo. Eles evoluíram para detectar apenas fragmentos de antígenos proteicos que estão "exibidos" na superfície de células hospedeiras.</p>
                
                <div class="citation-note">
                    <strong>Conceito Fundamental:</strong> A função do MHC é apresentar peptídios para as células T. Isso garante que as células T interajam com outras células (células infectadas, macrófagos, células dendríticas) e não com antígenos livres na circulação.
                </p>
                <div class="image-placeholder">
                    <img src="MHC_funcao.jpg" alt="Função do MHC na apresentação de antígenos" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div class="image-caption">Figura 1: A função do MHC é apresentar peptídios para as células T. Isso garante que as células T interajam com outras células (células infectadas, macrófagos, células dendríticas) e não com antígenos livres na circulação.</div>
                </div>
                </div>

                <h3>Propriedades dos Antígenos Reconhecidos por Células T</h3>
                <p>O reconhecimento de antígenos pelas células T possui características únicas:</p>
                <ul>
                    <li><strong>Restrição a Peptídeos:</strong> A vasta maioria das células T reconhece apenas pequenos <span class="tooltip-trigger" data-tooltip="peptidio">peptídeos lineares</span>, e não proteínas inteiras ou outras macromoléculas (exceto um pequeno grupo de células T que reconhece lipídios via CD1).</li>
                    <li><strong>Associação Celular:</strong> As células T não reconhecem antígenos solúveis. Elas requerem que o antígeno seja processado e exibido por moléculas especializadas de membrana chamadas <strong>MHC</strong> (Complexo Principal de Histocompatibilidade).</li>
                    <li><strong>Restrição pelo MHC:</strong> Uma célula T específica reconhece um antígeno estranho <em>apenas</em> quando este é apresentado por uma molécula do MHC do próprio indivíduo (self-MHC). Esse fenômeno é chamado de <span class="tooltip-trigger" data-tooltip="restricao-mhc">Restrição pelo MHC</span>.</li>
                </ul>
            </section>

            <section id="apcs">
                <h2>2. Células Apresentadoras de Antígenos (APCs)</h2>
                <p>A captura e apresentação de antígenos é realizada por células especializadas. Embora todas as células nucleadas possam apresentar antígenos via MHC Classe I (para CD8+), apenas um grupo seleto, denominado <span class="tooltip-trigger" data-tooltip="apc-profissional">APCs Profissionais</span>, expressa MHC Classe II e co-estimuladores para ativar células T auxiliares (CD4+).</p>

                <h3>O Papel Central das Células Dendríticas (DCs)</h3>
                <p>As <strong>Células Dendríticas</strong> são as sentinelas mais eficazes do sistema imune. Localizadas estrategicamente em barreiras epiteliais (pele, mucosa intestinal), elas capturam antígenos e migram para os linfonodos.</p>
                
                <details>
                    <summary>Ciclo de Maturação da Célula Dendrítica (Clique para expandir)</summary>
                    <div class="details-content">
                        <p><strong>1. Estado Imaturo:</strong> Nos tecidos periféricos, as DCs são altamente fagocíticas, mas expressam baixos níveis de MHC e co-estimuladores. Seu foco é a <em>captura</em>.</p>
                        <p><strong>2. Ativação:</strong> Ao detectar sinais de perigo (PAMPs) via receptores Toll-like (TLR), a DC é ativada. Ela perde a adesividade ao tecido e começa a migrar via vasos linfáticos.</p>
                        <p><strong>3. Estado Maduro:</strong> Ao chegar no linfonodo, a DC deixa de fagocitar e aumenta drasticamente a expressão de MHC carregado com peptídios e moléculas co-estimuladoras (B7). Ela se torna uma potente ativadora de <span class="complement-trigger" data-tooltip="celula-t-naive">células T Naïve</span>.</p>
                    </div>
                </details>

                <div class="image-placeholder">
                    <img src="MHC_maturacao.jpg" alt="Ciclo de Maturação da Célula Dendrítica" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div class="image-caption">Figura 2: A maturação da célula dendrítica envolve mudanças morfológicas (aumento de dendritos) e moleculares (aumento de MHC e B7).</div>
                </div>

                <h3>Comparação das Principais APCs</h3>
                <div class="image-placeholder">
                    <img src="MHC_APCs.jpg" alt="Principais Células Apresentadoras de Antígenos (APCs)" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div class="image-caption">Figura 3: Principais Células Apresentadoras de Antígenos (APCs): Célula Dendrítica, Macrófago e Célula B, destacando suas funções na captura e apresentação de antígenos.</div>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo Celular</th>
                                <th>Expressão de MHC II</th>
                                <th>Expressão de Co-estimuladores</th>
                                <th>Função Principal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Células Dendríticas</strong></td>
                                <td>Constitutiva; aumenta com a maturação e IFN-γ.</td>
                                <td>Constitutiva em células maduras; induzível por TLRs/citocinas.</td>
                                <td>Iniciação de respostas primárias de células T (ativação de células naïve).</td>
                            </tr>
                            <tr>
                                <td><strong>Macrófagos</strong></td>
                                <td>Baixa ou negativa; induzível por IFN-γ.</td>
                                <td>Induzível por LPS, IFN-γ e CD40L.</td>
                                <td>Fase efetora da imunidade celular (ativação de células T CD4+ para matar microrganismos intravesiculares).</td>
                            </tr>
                            <tr>
                                <td><strong>Linfócitos B</strong></td>
                                <td>Constitutiva; aumenta por IL-4.</td>
                                <td>Induzível por células T (CD40-CD40L) e cross-linking do BCR.</td>
                                <td>Apresentação de antígenos proteicos para células T auxiliares na imunidade humoral (produção de anticorpos).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="estrutura-mhc">
                <h2>3. O Complexo Principal de Histocompatibilidade (MHC)</h2>
                <p>O <strong>MHC</strong> é uma região gênica altamente polimórfica. Em humanos, é chamado de <strong>HLA</strong> (Antígeno Leucocitário Humano). Seus genes codificam duas classes principais de moléculas estruturalmente distintas, mas homólogas: <strong>Classe I</strong> e <strong>Classe II</strong>.</p>

                <h3>Estrutura e Função das Moléculas do MHC</h3>
                
                <h4>MHC de Classe I</h4>
                <p>Expressas em <strong>todas as células nucleadas</strong>. Apresentam peptídios citosólicos para células T <strong>CD8+</strong> (Citotóxicas).</p>
                <ul>
                    <li>Composta por uma cadeia pesada <strong>α</strong> (polimórfica) e uma cadeia leve não-polimórfica chamada <strong>β2-microglobulina</strong>.</li>
                    <li>A fenda de ligação do peptídio é formada pelos domínios α1 e α2.</li>
                    <li>A fenda é <strong>fechada</strong> nas extremidades, acomodando peptídios curtos (8-11 aminoácidos).</li>
                </ul>
                <div class="image-placeholder">
                    <img src="MHC_Classe_I_nova.png" alt="Estrutura e Apresentação de Peptídeo pela Molécula de MHC Classe I" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div class="image-caption">Figura 4: Estrutura de uma molécula de MHC de classe I. Diagrama esquemático (esquerda) ilustrando as diferentes regiões da molécula de MHC (omitido na escala). As moléculas de classe I são compostas por uma cadeia α polimórfica ligada de modo não covalente à β2-microglobulina (β2m) não polimórfica. A cadeia α é glicosilada; os resíduos de carboidrato foram omitidos. O diagrama de fitas (direita) mostra a estrutura da porção extracelular da molécula HLA-B27 com um peptídeo ligado, resolvida por cristalografia de raios X.</div>
                </div>

                <h4>MHC de Classe II</h4>
                <p>Expressas principalmente em <strong>APCs profissionais</strong>. Apresentam peptídios extracelulares (vesiculares) para células T <strong>CD4+</strong> (Auxiliares).</p>
                <ul>
                    <li>Composta por duas cadeias polimórficas: cadeia <strong>α</strong> e cadeia <strong>β</strong>.</li>
                    <li>A fenda de ligação é formada pelos domínios α1 e β1.</li>
                    <li>A fenda é <strong>aberta</strong> nas extremidades, acomodando peptídios maiores (10-30 aminoácidos ou mais).</li>
                </ul>

                <div class="image-placeholder">
                    <img src="MHC_Classe_II_nova.png" alt="Estrutura e Apresentação de Peptídeo pela Molécula de MHC Classe II" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div class="image-caption">Figura 5: Estrutura de uma molécula de MHC de classe II. Diagrama esquemático (esquerda) ilustrando as diferentes regiões da molécula de MHC (omitido na escala). As moléculas de classe II são compostas por uma cadeia α polimórfica ligada de forma não covalente a uma cadeia β. Ambas as cadeias são glicosiladas; os resíduos de carboidrato foram omitidos. O diagrama de fitas (direita) mostra a estrutura da porção extracelular da molécula de HLA-DR1 com um peptídeo ligado, resolvida por cristalografia de raios X.</div>
                </div>

                <details>
                    <summary>Curiosidade: O Polimorfismo do MHC</summary>
                    <div class="details-content">
                        <p>Os polimorfismos de MHC (Complexo Principal de Histocompatibilidade) referem-se à extraordinária variedade genética encontrada nos genes que codificam as moléculas de MHC (chamadas de HLA em humanos).</p>
                        
                        <p><strong>Para simplificar:</strong> imagine que o MHC é uma "mão" molecular que segura pedaços de invasores (bactérias, vírus) para mostrar ao sistema imune. O polimorfismo significa que existem milhares de formatos diferentes dessa "mão" na população humana.</p>

                        <h4>1. O que são exatamente?</h4>
                        <p>Em termos genéticos, o MHC é a região mais polimórfica do genoma humano. Isso significa que, para cada gene do MHC (como o HLA-A, HLA-B ou HLA-DR), existem milhares de variantes (alelos) diferentes espalhadas pela população.</p>
                        <ul>
                            <li><strong>Variação na Fenda:</strong> A maior parte dessas diferenças ocorre na "fenda de ligação ao peptídeo" — o local exato onde a molécula segura o antígeno.</li>
                            <li><strong>Expressão Codominante:</strong> Você herda um conjunto de genes do seu pai e outro da sua mãe, e suas células expressam ambos. Isso aumenta a variedade de "mãos" que você tem para segurar antígenos.</li>
                        </ul>

                        <h4>2. Por que são importantes?</h4>
                        <p>A importância pode ser dividida em nível individual, populacional e clínico:</p>

                        <h5>A. Defesa contra Pathógenos (Nível Populacional)</h5>
                        <p>Esta é a razão evolutiva principal. Como cada variante de MHC consegue segurar apenas certos tipos de peptídeos, se todos nós tivéssemos o mesmo MHC, um único vírus que sofresse uma mutação para não ser "segurado" por esse MHC poderia dizimar a humanidade inteira.</p>
                        <p><strong>O polimorfismo garante a sobrevivência da espécie:</strong> Mesmo que um vírus escape da defesa de algumas pessoas, outras terão variantes de MHC capazes de reconhecê-lo e combatê-lo.</p>

                        <h5>B. Suscetibilidade a Doenças</h5>
                        <p>Certos alelos de MHC são melhores em apresentar certos antígenos do que outros.</p>
                        <ul>
                            <li><strong>Doenças Infecciosas:</strong> Algumas pessoas, chamadas de "controladores de elite" no HIV, possuem alelos de MHC (como o HLA-B57) que são excepcionalmente bons em apresentar pedaços críticos do vírus, controlando a infecção sem remédios.</li>
                            <li><strong>Doenças Autoimunes:</strong> Infelizmente, certos alelos podem apresentar "pedaços do próprio corpo" por engano. Por exemplo, portadores do alelo HLA-B27 têm um risco muito maior de desenvolver Espondilite Anquilosante.</li>
                        </ul>

                        <h5>C. Transplantes</h5>
                        <p>O polimorfismo é o principal obstáculo na medicina de transplantes.</p>
                        <p>Como o MHC é tão variável, é estatisticamente muito difícil encontrar duas pessoas (que não sejam gêmeos idênticos) com o mesmo conjunto de MHC. Se o sistema imune do receptor percebe que o MHC do órgão doado é diferente (polimórfico), ele o ataca, causando a rejeição do enxerto.</p>

                        <h4>Resumo Visual</h4>
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Característica</th>
                                        <th>Consequência Prática</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alta variabilidade genética</td>
                                        <td>Dificuldade em encontrar doadores de medula/órgãos compatíveis.</td>
                                    </tr>
                                    <tr>
                                        <td>Diferenças na fenda de ligação</td>
                                        <td>Cada pessoa responde de forma única a infecções e vacinas.</td>
                                    </tr>
                                    <tr>
                                        <td>Herança de pai e mãe</td>
                                        <td>Aumenta o repertório de defesa de cada indivíduo.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </details>
            </section>

            <section id="processamento-antigenos">
                <h2>4. Vias de Processamento e Apresentação de Antígenos</h2>
                <p>O sistema imune precisa distinguir entre patógenos intracelulares (como vírus no citoplasma) e extracelulares (como bactérias fagocitadas). Para isso, utiliza duas vias segregadas de processamento que direcionam os antígenos para a molécula de MHC correta.</p>

                <h3>Via da Classe I: Antígenos Citossólicos</h3>
                <p>Esta via processa proteínas que são sintetizadas dentro da célula (endógenas) ou que escapam para o citoplasma.</p>
                <ol>
                    <li><strong>Marcação:</strong> Proteínas virais ou defeituosas no citosol são marcadas com ubiquitina.</li>
                    <li><strong>Degradação:</strong> O <span class="tooltip-trigger" data-tooltip="proteassoma">Proteassoma</span> degrada essas proteínas em peptídios.</li>
                    <li><strong>Transporte:</strong> Os peptídios são bombeados do citosol para dentro do Retículo Endoplasmático (RE) pela proteína transportadora <span class="complement-trigger" data-tooltip="tap">TAP</span> (Transporter associated with Antigen Processing).</li>
                    <li><strong>Montagem:</strong> No RE, o MHC Classe I recém-sintetizado recebe o peptídio, com auxílio da Tapasina.</li>
                    <li><strong>Expressão:</strong> O complexo estável MHC I-Peptídio viaja via Golgi até a superfície celular para ser reconhecido por um linfócito T CD8+.</li>
                </ol>

                <div class="image-placeholder">
                    <img src="MHC_Via_Classe_I.png" alt="Via do MHC de classe I de apresentação antigênica" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div class="image-caption"><strong>Figura 6: Via do MHC de classe I de apresentação antigênica.</strong> As etapas do processamento de proteínas citosólicas são descritas no texto. Esta figura representa a proteólise proteassômica de uma proteína sintetizada no interior da célula ou que é ingerida em um fagossomo e então transportada para o citosol. A apresentação de proteínas ingeridas por moléculas do MHC de classe I constitui a base da apresentação cruzada descrita adiante, neste capítulo (Fig. 6.17). ERAP, peptidase associada ao retículo endoplasmático; RE, retículo endoplasmático; β2m, β2-microglobulina; TAP, transportador associado ao processamento antigênico; Ub, ubiquitina.</div>
                </div>

                <h3>Via da Classe II: Antígenos Vesiculares (Extracelulares)</h3>
                <p>Esta via processa proteínas capturadas do meio externo por endocitose ou fagocitose.</p>
                <ol>
                    <li><strong>Captura:</strong> A APC internaliza o antígeno em um endossomo/fagossomo.</li>
                    <li><strong>Degradação:</strong> O endossomo se acidifica e funde com lisossomos. Enzimas proteolíticas (Catepsinas) degradam o antígeno em peptídios.</li>
                    <li><strong>Biossíntese e Proteção:</strong> O MHC Classe II é sintetizado no RE. Para evitar que ele se ligue a peptídios do RE (destinados à Classe I), sua fenda é bloqueada pela <span class="tooltip-trigger" data-tooltip="cadeia-invariante">Cadeia Invariante (Ii)</span>.</li>
                    <li><strong>Fusão:</strong> A vesícula contendo o MHC II trafega para o citoplasma e funde-se com o endossomo contendo os peptídios antigênicos (formando o compartimento MIIC).</li>
                    <li><strong>Troca de Peptídios:</strong> Enzimas degradam a Cadeia Invariante, deixando apenas um fragmento chamado <span class="complement-trigger" data-tooltip="clip">CLIP</span> na fenda. Uma molécula chamada <strong>HLA-DM</strong> remove o CLIP e permite a ligação do peptídio antigênico de alta afinidade.</li>
                    <li><strong>Expressão:</strong> O complexo MHC II-Peptídio é transportado à superfície para ativar células T CD4+.</li>
                </ol>

                <div class="image-placeholder">
                    <img src="MHC_Via_Classe_II.png" alt="Via do MHC de classe II de apresentação antigênica" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div class="image-caption"><strong>Figura 7: A via do MHC de classe II de apresentação antigênica.</strong> Os estágios no processamento de antígenos extracelulares são descritos no texto. CLIP, peptídeo de cadeia invariante associado à classe II; RE, retículo endoplasmático; Ii, cadeia invariante.</div>
                </div>
            </section>

            <section id="apresentacao-cruzada">
                <h2>5. Apresentação Cruzada (Cross-Presentation)</h2>
                <p>Existe uma exceção crucial à regra de segregação das vias. Como uma célula T CD8+ naïve pode ser ativada contra um vírus que infecta células teciduais (ex: hepatócitos), mas não infecta células dendríticas?</p>
                <p>A resposta é a <strong>Apresentação Cruzada</strong>. Neste processo, uma Célula Dendrítica fagocita uma célula infectada (via endossômica), mas consegue desviar os antígenos virais para o citosol. Lá, eles entram na via do MHC Classe I. Isso permite que a DC ative células T CD8+ contra vírus ou tumores que não infectam a própria DC.</p>
                
                <div class="image-placeholder">
                    <img src="MHC_Apresentacao_Cruzada.png" alt="Apresentação cruzada de antígenos para células T CD8+" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div class="image-caption"><strong>Figura 8: Apresentação cruzada de antígenos para células T CD8+.</strong> As células infectadas com microrganismos intracelulares, tais como vírus, são endocitadas pelas células dendríticas e os antígenos dos microrganismos infecciosos são transportados para o citosol e processados e apresentados em associação com moléculas do MHC da classe I às células T CD8+ (Fig. 6-16). Desta forma, as células dendríticas são capazes de apresentar antígenos vesiculares endocitados pela via da classe I. Observe que as mesmas APCs de apresentação cruzada podem apresentar antígenos associados ao MHC da classe II de microrganismos para o reconhecimento pelas células T auxiliares CD4+.</div>
                </div>
            </section>

            <section id="resumo-fisiologico">
                <h2>6. Significado Fisiológico</h2>
                <p>A segregação das vias garante a resposta imune correta:</p>
                <ul>
                    <li><strong>Patógenos Intracelulares (Citosol):</strong> Apresentados via MHC I → Ativam CD8+ → Morte da célula infectada (única forma de eliminar o reservatório).</li>
                    <li><strong>Patógenos Extracelulares (Vesículas/Fluido):</strong> Apresentados via MHC II → Ativam CD4+ → Auxílio para produção de anticorpos (Células B) ou ativação de macrófagos para destruir o que fagocitaram.</li>
                </ul>
            </section>

        </div>
    </div>
    
    <!-- Modal for Tooltips -->
    <div id="infoModal" class="efetores-modal">
        <div class="efetores-modal-content">
            <span class="close-btn" onclick="window.closeModal()">&times;</span>
            <h3 id="modalTitle" style="color: var(--color-primary);"></h3>
            <div id="modalText" style="line-height: 1.6; color: #4a5568;"></div>
        </div>
    </div>
</div>
<script>
    (function() {
       
        // 1. Definição e Merge dos Tooltips
        Object.assign(window.tooltips, {
            'peptidio': {
                title: 'Peptídeo',
                text: 'Fragmento curto de proteína. As células T reconhecem sequências lineares de aminoácidos resultantes da digestão proteolítica de proteínas maiores.'
            },
            'restricao-mhc': {
                title: 'Restrição pelo MHC',
                text: 'Princípio fundamental onde uma célula T só pode reconhecer um antígeno estranho se ele estiver ligado a uma molécula do MHC próprio. A célula T "vê" o complexo peptídio + MHC.'
            },
            'apc-profissional': {
                title: 'APC Profissional',
                text: 'Células especializadas (Células Dendríticas, Macrófagos e Células B) capazes de expressar MHC de Classe II e moléculas co-estimuladoras necessárias para ativar células T CD4+.'
            },
            'celula-t-naive': {
                title: 'Célula T Naïve (Virgem)',
                text: 'Linfócito T maduro que saiu do timo mas ainda não encontrou seu antígeno específico. Requer ativação potente por Células Dendríticas para iniciar a expansão clonal.'
            },
            'proteassoma': {
                title: 'Proteassoma',
                text: 'Complexo enzimático cilíndrico presente no citoplasma responsável por degradar proteínas marcadas com ubiquitina em peptídeos. Essencial para a via do MHC Classe I.'
            },
            'tap': {
                title: 'TAP (Transporter associated with Antigen Processing)',
                text: 'Proteína transportadora localizada na membrana do Retículo Endoplasmático (RE). Bombeia ativamente peptídeos do citosol para o lúmen do RE para se ligarem ao MHC I.'
            },
            'cadeia-invariante': {
                title: 'Cadeia Invariante (Ii)',
                text: 'Proteína chaperona que se liga ao MHC Classe II recém-sintetizado no RE. Ela bloqueia a fenda de ligação, impedindo que peptídeos endógenos se liguem, e direciona o MHC II para os endossomas tardios.'
            },
            'clip': {
                title: 'CLIP (Class II-associated Invariant Chain Peptide)',
                text: 'Pequeno fragmento remanescente da Cadeia Invariante que fica alojado na fenda do MHC II após a digestão enzimática. Precisa ser removido pelo HLA-DM para permitir a ligação do antígeno.'
            }
        });

        // 2. Geração do Índice de Conteúdo (TOC)
        const content = document.querySelector('.efetores-content');
        const tocList = document.getElementById('toc-list-efetores');

        if (content && tocList) {
            tocList.innerHTML = '';
            const sections = content.querySelectorAll('section');

            sections.forEach(section => {
                const h2 = section.querySelector('h2');
                if (!h2) return;
                const sectionTitle = h2.textContent;
                const sectionId = section.id;

                let listItem = document.createElement('li');
                let link = document.createElement('a');
                link.href = '#' + sectionId;
                link.textContent = sectionTitle;
                listItem.appendChild(link);

                // Adiciona links de subseções (h3)
                const subHeadings = section.querySelectorAll('h3');
                if (subHeadings.length > 0) {
                    let subList = document.createElement('ul');
                    subHeadings.forEach(sub => {
                        let subListItem = document.createElement('li');
                        let subLink = document.createElement('a');
                        
                        // Cria um ID se não existir
                        let subId = sub.id;
                        if (!subId) {
                             subId = sub.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                             sub.id = subId;
                        }
                        
                        subLink.href = '#' + subId;
                        subLink.textContent = sub.textContent;
                        subLink.classList.add('sub-link');
                        subListItem.appendChild(subLink);
                        subList.appendChild(subListItem);
                    });
                    listItem.appendChild(subList);
                }
                tocList.appendChild(listItem);
            });

            // Scroll suave
            tocList.addEventListener('click', function(e) {
                if (e.target.tagName === 'A') {
                    e.preventDefault();
                    const href = e.target.getAttribute('href');
                    if (!href) return;
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        // Offset para o cabeçalho fixo ou espaço visual
                        const yOffset = -20; 
                        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        
                        window.scrollTo({top: y, behavior: 'smooth'});
                        window.toggleEfetoresMenu();
                    }
                }
            });
        }

        // 3. Menu Toggle Logic
        window.toggleEfetoresMenu = function() {
            const dropdown = document.getElementById('efetores-toc-dropdown');
            if (dropdown) dropdown.classList.toggle('active');
        }

        // Close menu when clicking outside
        window.addEventListener('click', function(e) {
            const dropdown = document.getElementById('efetores-toc-dropdown');
            const btn = document.querySelector('.efetores-menu-btn');
            if (dropdown && btn && !dropdown.contains(e.target) && !btn.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

    })();
</script>
`,

        midia: {
            audio: null,
            video: null,
            infographics: null
        },
        flashcards: [],
        quiz: {
            basico: [],
            avancado: []
        },
        abertas: []
    },

    // ========================================================================
    // ASSUNTO: TCR, BCR e transdução de sinais
    // ========================================================================
    "tcr_bcr": {
        titulo: "TCR, BCR e transdução de sinais",
        resumo: `
<style>
    /* CSS Scoped for Report */
    .efetores-wrapper {
        --color-primary: #005f73; /* Azul Petróleo Profundo - Profissional e Científico */
        --color-secondary: #0a9396; /* Azul esverdeado */
        --color-background: #fdfdfd;
        --color-text: #2b2d42;
        --color-highlight: #e9c46a; /* Tom mostarda para destaque suave */
        --color-complement: #9b2226; /* Vermelho queimado para destaques importantes */
        --color-light-bg: #e8f1f2;
        --color-border: #daeef0;
        
        font-family: 'Segoe UI', 'Roboto', Helvetica, Arial, sans-serif;
        background-color: #f0f4f8; /* Fundo geral da página */
        color: var(--color-text);
        line-height: 1.8;
        padding: 0;
        margin: 0;
    }

    .efetores-container {
        display: block;
        max-width: 1024px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    /* Floating Menu Button */
    .efetores-menu-btn {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 2000;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    .efetores-menu-btn:hover {
        transform: scale(1.1);
        background-color: var(--color-secondary);
    }

    /* Menu Dropdown */
    .efetores-toc-dropdown {
        position: fixed;
        top: 80px;
        left: 20px;
        width: 300px;
        max-height: 70vh;
        overflow-y: auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        padding: 25px;
        z-index: 2000;
        display: none;
        border-left: 5px solid var(--color-primary);
        animation: fadeIn 0.3s ease-out;
    }
    
    /* Scrollbar customizada para o menu */
    .efetores-toc-dropdown::-webkit-scrollbar {
        width: 6px;
    }
    .efetores-toc-dropdown::-webkit-scrollbar-thumb {
        background-color: var(--color-secondary);
        border-radius: 3px;
    }

    .efetores-toc-dropdown.active {
        display: block;
    }
    
    .efetores-toc-dropdown h3 {
        margin-top: 0;
        color: var(--color-primary);
        font-size: 1.2rem;
        border-bottom: 2px solid var(--color-light-bg);
        padding-bottom: 10px;
    }

    .efetores-toc-dropdown ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .efetores-toc-dropdown li {
        margin-bottom: 5px;
    }

    .efetores-toc-dropdown a {
        text-decoration: none;
        color: var(--color-text);
        display: block;
        padding: 8px 10px;
        border-radius: 6px;
        font-size: 0.9em;
        transition: all 0.2s;
        border-left: 3px solid transparent;
    }

    .efetores-toc-dropdown a:hover {
        background-color: var(--color-light-bg);
        color: var(--color-primary);
        border-left: 3px solid var(--color-secondary);
    }
    
    .efetores-toc-dropdown a.sub-link {
        padding-left: 25px;
        font-size: 0.85em;
        color: #666;
    }

    /* Content Styling */
    .efetores-content {
        background-color: #fff;
        padding: 60px;
        border-radius: 16px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    }

    .efetores-content header {
        text-align: center;
        margin-bottom: 60px;
    }

    .efetores-content h1 {
        color: var(--color-primary);
        padding-bottom: 20px;
        margin-bottom: 20px;
        font-size: 2.5rem;
        letter-spacing: -0.5px;
        line-height: 1.2;
    }
    
    .efetores-content .intro-text {
        font-size: 1.2rem;
        color: #555;
        max-width: 800px;
        margin: 0 auto;
    }

    .efetores-content h2 {
        margin-top: 60px;
        margin-bottom: 25px;
        padding-bottom: 15px;
        border-bottom: 2px solid var(--color-light-bg);
        color: var(--color-primary);
        font-size: 1.8rem;
        position: relative;
    }
    
    .efetores-content h2::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 80px;
        height: 2px;
        background-color: var(--color-secondary);
    }
    
    .efetores-content h3 {
        margin-top: 40px;
        margin-bottom: 15px;
        color: var(--color-secondary);
        font-size: 1.4rem;
        font-weight: 600;
    }
    
    .efetores-content h4 {
        margin-top: 30px;
        color: #444;
        font-weight: 700;
        font-size: 1.15rem;
    }

    .efetores-content p {
        margin-bottom: 20px;
        text-align: justify;
        font-size: 1.05rem;
        color: #333;
    }
    
    .efetores-content ul, .efetores-content ol {
        margin-bottom: 25px;
        padding-left: 20px;
    }
    
    .efetores-content li {
        margin-bottom: 10px;
        padding-left: 10px;
    }
    
    .efetores-content li::marker {
        color: var(--color-secondary);
        font-weight: bold;
    }

    /* Tooltip/Item Clicável */
    .tooltip-trigger, .complement-trigger {
        color: var(--color-primary);
        cursor: pointer;
        border-bottom: 1px dashed var(--color-primary);
        font-weight: 600;
        transition: all 0.2s;
        background-color: rgba(0, 95, 115, 0.05);
        padding: 0 4px;
        border-radius: 4px;
    }

    .complement-trigger {
        color: var(--color-complement);
        border-bottom: 1px dashed var(--color-complement);
        background-color: rgba(155, 34, 38, 0.05);
    }

    .tooltip-trigger:hover {
        background-color: var(--color-primary);
        color: white;
        border-bottom: none;
    }
    
    .complement-trigger:hover {
        background-color: var(--color-complement);
        color: white;
        border-bottom: none;
    }

    /* Caixas de Informação/Quadros Explicativos (<details>) */
    .efetores-content details {
        margin: 30px 0;
        background-color: #f8fdfe;
        border: 1px solid var(--color-border);
        border-left: 6px solid var(--color-secondary);
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .efetores-content details[open] {
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }

    .efetores-content summary {
        padding: 15px 20px;
        font-weight: bold;
        cursor: pointer;
        color: var(--color-primary);
        font-size: 1.1rem;
        background-color: rgba(255,255,255,0.5);
        list-style: none; /* Remove default arrow */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .efetores-content summary::after {
        content: '+';
        font-size: 1.5rem;
        color: var(--color-secondary);
        font-weight: 300;
    }
    
    .efetores-content details[open] summary::after {
        content: '-';
    }
    
    .efetores-content details p {
        margin: 0;
        padding: 20px;
        border-top: 1px solid var(--color-border);
        color: #4a4a4a;
        background-color: #fff;
    }

    /* Tabelas */
    .table-responsive {
        overflow-x: auto;
        margin: 30px 0;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    .efetores-content table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.95em;
        background: white;
    }

    .efetores-content th, .efetores-content td {
        padding: 18px 15px;
        text-align: left;
        border-bottom: 1px solid #eee;
    }

    .efetores-content th {
        background-color: var(--color-primary);
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.85rem;
        letter-spacing: 0.5px;
        border: none;
    }

    .efetores-content tr:nth-child(even) {
        background-color: #fcfcfc;
    }
    
    .efetores-content tr:hover {
        background-color: #f0f7f8;
    }
    
    /* Destaque para Citações/Observações */
    .citation-note {
        font-style: italic;
        font-size: 1rem;
        color: #555;
        margin: 30px 0;
        padding: 20px;
        border-left: 4px solid var(--color-highlight);
        background: #fffdf5;
        border-radius: 0 8px 8px 0;
    }
    
    .citation-note strong {
        color: #d4a017;
        display: block;
        margin-bottom: 5px;
        text-transform: uppercase;
        font-size: 0.8rem;
    }

    /* Tags de Imagem */
    .image-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px auto;
        padding: 30px;
        background-color: #fdfdfd;
        border: 2px dashed #cbd5e1;
        border-radius: 12px;
        text-align: center;
        color: #64748b;
        max-width: 100%;
        transition: border-color 0.3s;
    }
    
    .image-placeholder:hover {
        border-color: var(--color-secondary);
        background-color: #f8fdfe;
    }
    
    .image-placeholder p {
        font-size: 0.95rem;
        margin-top: 15px;
        margin-bottom: 0;
        color: #555;
        font-weight: 500;
        text-align: center;
    }
    
    .image-caption {
        font-size: 0.85rem;
        color: #777;
        margin-top: 10px;
        font-style: italic;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Modal Styles */
    .efetores-modal {
        display: none; 
        position: fixed; 
        z-index: 3000; 
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden; 
        background-color: rgba(0,0,0,0.6); 
        backdrop-filter: blur(3px);
    }

    .efetores-modal-content {
        background-color: #fff;
        margin: 10% auto; 
        padding: 30px;
        border: none;
        width: 90%; 
        max-width: 600px;
        border-radius: 12px;
        position: relative;
        box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease-out;
    }
    
    .efetores-modal-content h3 {
        margin-top: 0;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;
        color: var(--color-primary);
        font-size: 1.5rem;
    }
    
    @keyframes slideIn {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    .close-btn {
        color: #aaa;
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 28px;
        font-weight: bold;
        line-height: 1;
        transition: color 0.2s;
    }

    .close-btn:hover,
    .close-btn:focus {
        color: var(--color-complement);
        text-decoration: none;
        cursor: pointer;
    }
    
    /* Responsividade */
    @media (max-width: 768px) {
        .efetores-content {
            padding: 30px 20px;
        }
        .efetores-content h1 {
            font-size: 1.8rem;
        }
        .efetores-content h2 {
            font-size: 1.5rem;
        }
    }
</style>

<div class="efetores-wrapper">
    <!-- Floating Menu Button -->
    <button class="efetores-menu-btn" onclick="window.toggleEfetoresMenu()" title="Índice de Tópicos">
        ☰
    </button>

    <!-- Dropdown Menu -->
    <div id="efetores-toc-dropdown" class="efetores-toc-dropdown">
        <h3>Índice</h3>
        <ul id="toc-list-efetores">
            <!-- TOC generated by JS -->
        </ul>
    </div>

    <div class="efetores-container">
        <div class="efetores-content">
            <header>
                <h1>Receptores de antígenos de linfócitos T e B; transdução de sinais dos receptores imunológicos</h1>
                

            </header>
            
            <!-- SEÇÃO 1: INTRODUÇÃO E CONCEITOS GERAIS -->
            <section id="familia-receptores">
                <h2>1. A Família dos Receptores Imunológicos</h2>
                <p>Os receptores imunológicos constituem uma família sofisticada de complexos proteicos, fundamentais para a imunidade adaptativa e inata. Tipicamente, esses receptores pertencem à superfamília das <span class="tooltip-trigger" data-tooltip="imunoglobulina">imunoglobulinas (Ig)</span>. A característica arquitetônica central desses sistemas é a <strong>segregação de funções</strong>:</p>
                <ul>
                    <li><strong>Reconhecimento do Ligante:</strong> Realizado por cadeias extracelulares (geralmente com domínios variáveis).</li>
                    <li><strong>Sinalização Intracelular:</strong> Realizada por cadeias ou módulos associados que contêm motivos baseados em tirosina.</li>
                </ul>

                <p>Frequentemente, as proteínas de sinalização estão fisicamente próximas a quinases da <span class="tooltip-trigger" data-tooltip="familia-src">família Src</span>, que se encontram ancoradas à face interna da membrana plasmática por âncoras lipídicas.</p>

                <div class="image-placeholder">
                    <img src="familia_receptores.png" alt="Família de receptores imunológicos" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <p><strong>Figura 1:</strong> Membros selecionados da família dos receptores imunológicos. Quatro membros selecionados da família de receptores imunes estão representados. Tipicamente, receptores imunes que ativam células do sistema imunológico possuem cadeias polipeptídicas separadas para o reconhecimento e cadeias de polipeptídios associados que contêm ITAMs citossólicas. Exemplos aqui apresentados incluem o receptor de células B (BCR), o receptor de células T (TCR), e receptor de alta afinidade para IgE (FcεRI). Os receptores inibitórios no sistema imunológico têm normalmente motivos ITIM sobre a porção citossólica da mesma cadeia que utiliza o seu domínio extracelular por reconhecimento do ligante. O receptor inibitório mostrado, FcgRIIB, encontra-se em células B e células mieloides.</p>
                </div>

                <details>
                    <summary>Entendendo os Motivos de Tirosina: ITAMs vs ITIMs</summary>
                    <p>A sinalização é ditada por sequências específicas de aminoácidos nas caudas citoplasmáticas:</p>
                    <ul>
                        <li><strong>ITAM (Motivo de Ativação):</strong> Responsável por iniciar a cascata de ativação. Possui a sequência consenso <code>YxxL/I(x)₆₋₈YxxL/I</code>. Quando as duas tirosinas (Y) são fosforiladas, elas recrutam quinases da família <span class="tooltip-trigger" data-tooltip="syk-zap70">Syk/ZAP-70</span>.</li>
                        <li><strong>ITIM (Motivo de Inibição):</strong> Responsável por neutralizar o sinal. Possui a sequência consenso <code>V/L/IxYxxL</code>. Quando fosforilado, recruta fosfatases (como SHP-1 ou SHIP) que removem os grupos fosfato, "desligando" a célula.</li>
                    </ul>
                </details>
            </section>

            <!-- SEÇÃO 2: O RECEPTOR DE CÉLULAS T -->
            <section id="complexo-tcr">
                <h2>2. O Complexo Receptor de Células T (TCR)</h2>
                <p>O reconhecimento de antígenos por células T é mediado por um complexo multiproteico. Ao contrário das imunoglobulinas, o TCR nunca é secretado; ele funciona exclusivamente como um sensor de membrana.</p>

                <h3>2.1 Estrutura do Heterodímero αβ</h3>
                <p>A maioria das células T (chamadas T αβ) expressa um receptor formado por duas cadeias: alfa (α) e beta (β). Ambas possuem:</p>
                <ul>
                    <li>Um domínio Variável (V) N-terminal: Onde ocorre o reconhecimento do antígeno. Contém 3 regiões hipervariáveis ou <span class="tooltip-trigger" data-tooltip="cdrs">CDRs</span>.</li>
                    <li>Um domínio Constante (C).</li>
                    <li>Uma região transmembrana hidrofóbica com resíduos carregados positivamente (essenciais para a montagem do complexo).</li>
                    <li>Uma cauda citoplasmática curta (insuficiente para sinalização própria).</li>
                </ul>
                
                <div class="image-placeholder">
                    <img src="estrutura_tcr.png" alt="Estrutura do receptor de células T" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <p><strong>Figura 2:</strong> Estrutura do receptor de células T. O diagrama esquemático do TCR ab (à esquerda) mostra os domínios de um TCR específico típico de um complexo peptídio-MHC. A porção do TCR de ligação ao antígeno é formada pelos domínios Vb e Va. O diagrama de fita (direita) mostra a estrutura da porção extracelular de um TCR conforme revelado por cristalografia de raios-X. O segmento hipervariável que forma o peptídio-MHC local de ligação está no topo.</p>
                </div>

                <h3>2.2 O Complexo de Sinalização: CD3 e Cadeia ζ</h3>
                <p>Como o TCR αβ tem caudas curtas, a transdução do sinal depende de proteínas invariáveis associadas não covalentemente:</p>
                <ul>
                    <li><strong>Proteínas CD3:</strong> Formadas pelas cadeias γ, δ e ε. Organizadas geralmente como heterodímeros (CD3γε e CD3δε).</li>
                    <li><strong>Cadeia Zeta (ζ):</strong> Um homodímero com uma longa cauda citoplasmática.</li>
                </ul>

                <div class="image-placeholder">
                    <img src="complexo_tcr.png" alt="Componentes do complexo TCR" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <p><strong>Figura 3:</strong> Componentes do complexo TCR. O complexo de TCR de células T do MHC restrito consiste no TCR ab não covalentemente ligado ao CD3 e a proteínas ζ. A associação destas proteínas umas com as outras é mediada por resíduos carregados nas suas regiões transmembranares (não mostrado).</p>
                </div>
                
                <div class="citation-note">
                    <strong>Ponto Crítico de Estudo</strong>
                    O TCR reconhece o antígeno, mas é o complexo CD3/ζ que "avisa" a célula. O complexo TCR completo possui <strong>10 ITAMs</strong> no total (graças aos múltiplos ITAMs na cadeia ζ), permitindo uma amplificação robusta do sinal.
                </div>
            </section>

            <!-- SEÇÃO 3: SINALIZAÇÃO TCR -->
            <section id="sinalizacao-tcr">
                <h2>3. Mecanismos de Sinalização em Células T</h2>
                
                <h3>3.1 O Papel dos Co-receptores CD4 e CD8</h3>
                <p>A ativação eficiente requer que co-receptores se liguem simultaneamente à molécula de MHC. Isso estabiliza a interação e, crucialmente, recruta a quinase <span class="complement-trigger" data-tooltip="lck">Lck</span> para a proximidade dos ITAMs.</p>

                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Característica</th>
                                <th>Co-receptor CD4</th>
                                <th>Co-receptor CD8</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Estrutura</strong></td>
                                <td>Monômero com 4 domínios Ig extracelulares.</td>
                                <td>Heterodímero αβ ligado por pontes dissulfeto.</td>
                            </tr>
                            <tr>
                                <td><strong>Ligante no MHC</strong></td>
                                <td>Liga-se aos domínios invariáveis α2 e β2 do <strong>MHC Classe II</strong>.</td>
                                <td>Liga-se ao domínio invariável α3 do <strong>MHC Classe I</strong>.</td>
                            </tr>
                            <tr>
                                <td><strong>Função Enzimática</strong></td>
                                <td colspan="2">Ambos têm a quinase <strong>Lck</strong> associada constitutivamente à sua cauda citoplasmática.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="image-placeholder">
                    <img src="fosforilacao_tcr.png" alt="Eventos iniciais da fosforilação" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <p><strong>Figura 4:</strong> Eventos iniciais da fosforilação da tirosina durante a ativação de células T. Com o reconhecimento do antígeno, há agrupamento de complexos de TCR com os correceptores (CD4, neste caso). A Lck associada ao CD4 torna-se ativa e fosforila as tirosinas nos ITAMs de CD3 e cadeias ζ.</p>
                </div>

                <h3>3.2 A Sinapse Imunológica</h3>
                <p>O contato entre a célula T e a APC (Célula Apresentadora de Antígeno) organiza-se em uma estrutura altamente ordenada chamada <strong>Sinapse Imunológica</strong> ou SMAC (Supramolecular Activation Cluster).</p>
                
                <details>
                    <summary>Organização da SMAC (c-SMAC vs p-SMAC)</summary>
                    <p><strong>c-SMAC (Central):</strong> Contém o TCR, CD3, co-receptores (CD4/CD8), co-estimuladores (CD28) e enzimas de sinalização como PKC-θ. É o centro da ativação e, posteriormente, da degradação (downregulation) dos receptores.</p>
                    <p><strong>p-SMAC (Periférico):</strong> Anel externo composto por moléculas de adesão, principalmente as integrinas como <span class="tooltip-trigger" data-tooltip="lfa-1">LFA-1</span> ligada ao ICAM-1, que estabilizam a interação celular.</p>
                </details>

                <div class="image-placeholder">
                    <img src="sinapse_imunologica.png" alt="Sinapse Imunológica" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <p><strong>Figura 5:</strong> Sinapse imunológica: visão esquemática da sinapse, mostrando a talina e LFA-1 na p-SMAC (verde) e PKC-θ e TCR no c-SMAC (vermelho).</p>
                </div>

                <h3>3.3 Fatores de Transcrição Ativados</h3>
                <p>A cascata de fosforilação iniciada pela ZAP-70 resulta na ativação de três fatores de transcrição principais que migram para o núcleo para induzir a expressão de genes (ex: IL-2):</p>
                <ol>
                    <li><strong>NFAT (Fator Nuclear de Células T Ativadas):</strong> Dependente de cálcio. A enzima <span class="complement-trigger" data-tooltip="calcineurina">calcineurina</span> remove fosfatos do NFAT, permitindo sua entrada no núcleo. (Alvo da ciclosporina).</li>
                    <li><strong>AP-1:</strong> Um dímero (Fos e Jun) ativado via cascata das MAP quinases (Ras/Rac).</li>
                    <li><strong>NF-κB:</strong> Ativado pela via da PKC, essencial para síntese de citocinas.</li>
                </ol>
            </section>

            <!-- SEÇÃO 4: O RECEPTOR DE CÉLULAS B -->
            <section id="complexo-bcr">
                <h2>4. O Complexo Receptor de Células B (BCR)</h2>
                <p>O BCR permite que células B reconheçam antígenos solúveis ou ligados a membranas sem a necessidade de processamento via MHC.</p>

                <h3>4.1 Comparação Estrutural e Funcional: TCR vs BCR</h3>
                <p>Embora análogos, existem diferenças fundamentais entre os receptores T e B, conforme detalhado na tabela abaixo:</p>

                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Propriedade</th>
                                <th>TCR (Célula T)</th>
                                <th>BCR (Imunoglobulina de Membrana)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Componentes de Reconhecimento</strong></td>
                                <td>Heterodímero αβ</td>
                                <td>Cadeias Pesadas e Leves (IgM e IgD em naive)</td>
                            </tr>
                            <tr>
                                <td><strong>Módulo de Sinalização</strong></td>
                                <td>Complexo CD3 (γ, δ, ε) e Cadeias ζ</td>
                                <td>Heterodímero <strong>Igα e Igβ</strong> (CD79a/CD79b)</td>
                            </tr>
                            <tr>
                                <td><strong>Valência</strong></td>
                                <td>Monovalente (1 sítio de ligação)</td>
                                <td>Bivalente (2 sítios de ligação)</td>
                            </tr>
                            <tr>
                                <td><strong>Mutações Somáticas</strong></td>
                                <td>Não ocorrem</td>
                                <td>Sim (Maturação de afinidade)</td>
                            </tr>
                            <tr>
                                <td><strong>Quinase ITAM associada</strong></td>
                                <td>ZAP-70</td>
                                <td><span class="tooltip-trigger" data-tooltip="syk">Syk</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="image-placeholder">
                    <img src="complexo_bcr.png" alt="Complexo receptor de antígenos das células B" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <p><strong>Figura 6:</strong> Complexo receptor de antígenos das células B. As IgM (e IgD) de membrana na superfície de células B maduras estão associadas às moléculas invariantes Igβ e Igα, que contêm ITAMs nas suas caudas citoplasmáticas que medeiam as funções de sinalização. Observe a semelhança com o complexo de TCR.</p>
                </div>

                <h3>4.2 Iniciação do Sinal: "Cross-Linking"</h3>
                <p>A ativação do BCR depende fundamentalmente do agrupamento (<em>cross-linking</em>) de múltiplos receptores por um antígeno multivalente. Isso aproxima as quinases da família Src (Lyn, Fyn, Blk) dos ITAMs nas cadeias Igα/Igβ, iniciando a cascata.</p>
                

            </section>

            <!-- SEÇÃO 5: CO-RECEPTOR DE CÉLULAS B -->
            <section id="coreceptor-b">
                <h2>5. O Complexo Co-receptor de Células B e o Complemento</h2>
                <p>Assim como as células T usam CD4/8, as células B possuem um poderoso sistema co-receptor que conecta a imunidade inata à adaptativa.</p>

                <h3>5.1 O Complexo CR2-CD19-CD81</h3>
                <p>Este complexo trimolecular atua como um amplificador de sinal:</p>
                <ul>
                    <li><strong>CR2 (CD21):</strong> Receptor para <span class="complement-trigger" data-tooltip="c3d">C3d</span>. O C3d é um fragmento do sistema complemento que recobre patógenos.</li>
                    <li><strong>CD19:</strong> A molécula de sinalização. Quando o CR2 liga-se ao C3d, o CD19 é fosforilado e recruta PI3-Kinase.</li>
                    <li><strong>CD81:</strong> Proteína estrutural (tetraspanina).</li>
                </ul>

                <div class="image-placeholder">
                    <img src="papel_complemento.png" alt="Papel do complemento na ativação da célula B" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <p><strong>Figura 7:</strong> Papel do complemento na ativação da célula B. As células B expressam um complexo formado pelo receptor do complemento CR2, CD19, e CD81. Os antígenos microbianos que se ligaram ao fragmento do complemento C3d podem simultaneamente se acoplar tanto à molécula CR2 quanto à Ig de membrana na superfície de uma célula B. Isso conduz ao início da cascata de sinalização a partir do complexo BCR e do complexo CR2 uma vez que a resposta aos complexos C3d-antígeno é muito maior em comparação com a resposta ao antígeno sozinho.</p>
                </div>

                <div class="citation-note">
                    <strong>Sinergia Inata-Adaptativa</strong>
                    Quando uma célula B reconhece um antígeno (via BCR) que também está marcado com complemento (reconhecido via CR2), o sinal de ativação é drasticamente amplificado (1.000 a 10.000 vezes), garantindo resposta forte contra patógenos opsonizados.
                </div>
            </section>
            
        </div>
    </div>
    
    <!-- Modal for Tooltips -->
    <div id="infoModal" class="efetores-modal">
        <div class="efetores-modal-content">
            <span class="close-btn" onclick="window.closeModal()">&times;</span>
            <h3 id="modalTitle"></h3>
            <div id="modalText"></div>
        </div>
    </div>
</div>

<script>
    // --------------------------------------------------------
    // Inicialização e Lógica de TOC
    // --------------------------------------------------------
    (function() {
        
        // 2. Geração Automática do Índice (TOC)
        const content = document.querySelector('.efetores-content');
        const tocList = document.getElementById('toc-list-efetores');

        if (content && tocList) {
            tocList.innerHTML = '';
            const sections = content.querySelectorAll('section');

            sections.forEach(section => {
                const h2 = section.querySelector('h2');
                if (!h2) return;
                
                // Limpa o texto do H2 (pode ter spans ou formatação) para o link
                const sectionTitle = h2.innerText; 
                const sectionId = section.id;

                let listItem = document.createElement('li');
                let link = document.createElement('a');
                link.href = '#' + sectionId;
                link.textContent = sectionTitle;
                listItem.appendChild(link);

                // Procura por H3 dentro da seção
                const subHeadings = section.querySelectorAll('h3');
                if (subHeadings.length > 0) {
                    let subList = document.createElement('ul');
                    subHeadings.forEach((sub, index) => {
                        let subListItem = document.createElement('li');
                        let subLink = document.createElement('a');
                        
                        // Garante que o H3 tenha um ID
                        if (!sub.id) {
                            sub.id = sectionId + '-sub-' + index;
                        }
                        
                        subLink.href = '#' + sub.id;
                        subLink.textContent = sub.innerText;
                        subLink.classList.add('sub-link');
                        subListItem.appendChild(subLink);
                        subList.appendChild(subListItem);
                    });
                    listItem.appendChild(subList);
                }
                tocList.appendChild(listItem);
            });

            // Smooth Scroll e Fechar Menu ao clicar
            tocList.addEventListener('click', function(e) {
                if (e.target.tagName === 'A') {
                    e.preventDefault();
                    const href = e.target.getAttribute('href');
                    if (!href) return;
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        // Offset para o cabeçalho fixo se houvesse, aqui deixamos um respiro
                        const yOffset = -20; 
                        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        
                        window.scrollTo({top: y, behavior: 'smooth'});
                        
                        // Fecha o menu se estiver em mobile ou se desejar comportamento padrão
                        const dropdown = document.getElementById('efetores-toc-dropdown');
                        if (dropdown) dropdown.classList.remove('active');
                    }
                }
            });
        }

        // 3. Menu Toggle Logic
        window.toggleEfetoresMenu = function() {
            const dropdown = document.getElementById('efetores-toc-dropdown');
            if (dropdown) dropdown.classList.toggle('active');
        }

        // Close menu when clicking outside
        window.addEventListener('click', function(e) {
            const dropdown = document.getElementById('efetores-toc-dropdown');
            const btn = document.querySelector('.efetores-menu-btn');
            if (dropdown && btn && !dropdown.contains(e.target) && !btn.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

    })();
</script>
        `,
        tooltips: {
            'imunoglobulina': {
                title: 'Superfamília das Imunoglobulinas (IgSF)',
                text: 'Um grande grupo de proteínas de superfície celular e solúveis envolvidas no reconhecimento, ligação ou adesão processos de células. Caracterizam-se por possuírem domínios estruturais de "dobra de imunoglobulina" (sanduíche de folhas beta).'
            },
            'familia-src': {
                title: 'Quinases da Família Src',
                text: 'Tirosina quinases não receptoras (citoplasmáticas) que estão ancoradas à membrana plasmática por lipídios. São as primeiras enzimas a serem ativadas após o reconhecimento do antígeno. Exemplos: Lck e Fyn (Células T), Lyn, Fyn e Blk (Células B).'
            },
            'syk-zap70': {
                title: 'Família Syk / ZAP-70',
                text: 'Tirosina quinases citoplasmáticas cruciais que se ligam aos ITAMs fosforilados através de seus domínios SH2. ZAP-70 é predominante em células T e NK, enquanto Syk é predominante em células B.'
            },
            'cdrs': {
                title: 'Regiões Determinantes de Complementariedade (CDRs)',
                text: 'São as regiões hipervariáveis dentro dos domínios variáveis dos receptores (TCR ou BCR). São alças que formam a superfície de contato direto com o antígeno (ou complexo MHC-peptídeo).'
            },
            'lck': {
                title: 'Lck (Lymphocyte-specific protein tyrosine kinase)',
                text: 'Uma quinase da família Src que está constitutivamente associada às caudas citoplasmáticas dos co-receptores CD4 e CD8. É responsável pela fosforilação inicial dos ITAMs do complexo CD3.'
            },
            'lfa-1': {
                title: 'LFA-1 (Antígeno 1 Associado à Função Leucocitária)',
                text: 'Uma integrina fundamental na adesão celular. Na sinapse imunológica, ela forma o anel externo (p-SMAC), ligando-se ao ICAM-1 na célula apresentadora de antígeno para estabilizar o contato.'
            },
            'calcineurina': {
                title: 'Calcineurina',
                text: 'Uma fosfatase dependente de cálcio/calmodulina. Ela remove grupos fosfato do fator de transcrição NFAT no citoplasma, permitindo que ele entre no núcleo. É o alvo farmacológico de drogas imunossupressoras como a Ciclosporina e o Tacrolimo.'
            },
            'syk': {
                title: 'Syk (Spleen tyrosine kinase)',
                text: 'A quinase equivalente à ZAP-70 nas células B. Ela se liga aos ITAMs fosforilados da Igα/Igβ e é essencial para a transdução de sinal do BCR.'
            },
            'c3d': {
                title: 'Fragmento C3d do Complemento',
                text: 'Um produto de degradação do componente C3 do complemento. Ele permanece ligado covalentemente à superfície do microrganismo ou antígeno. O reconhecimento do C3d pelo receptor CR2 (CD21) na célula B serve como um potente "segundo sinal" de ativação.'
            }
        },
        midia: {
            audio: null,
            video: null,
            infographics: null
        },
        flashcards: [],
        quiz: {
            basico: [],
            avancado: []
        },
        abertas: []
    }
};
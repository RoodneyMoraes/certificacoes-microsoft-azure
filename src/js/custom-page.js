async function carregarPerguntas($json) {
    try {
        const response = await fetch($json);
        const data = await response.json();
        console.log('Dados carregados com sucesso', data);
        return data;
    } catch (error) {
        console.error('Erro ao carregar os dados', error);
    }
}

async function carregarPagina($json, $localStorage) {
    const data = await carregarPerguntas($json);
    if (!data) return;

    let topicos = Object.keys(data).filter(key => key !== 'title').map(key => ({ Titulo: key, Itens: data[key] }));
    let paginaAtual = 0;

    function contarTotalDeLinks() {
        let totalLinks = 0;
        topicos.forEach(topico => {
            totalLinks += topico.Itens.length;
        });
        return totalLinks;
    }

    function marcarComoVisitado(link) {
        const visitados = JSON.parse(localStorage.getItem($localStorage) || '[]');
        if (!visitados.includes(link)) {
            visitados.push(link);
            localStorage.setItem($localStorage, JSON.stringify(visitados));
        }
        atualizarBarraDeProgresso();
    }

    function foiVisitado(link) {
        const visitados = JSON.parse(localStorage.getItem($localStorage) || '[]');
        return visitados.includes(link);
    }

    function exibirTopicos() {
        if (topicos.length === 0) return;
        const topicoAtual = topicos[paginaAtual];
        const container = document.getElementById("topicos");
        const tituloPagina = document.getElementById("tituloPagina");
        tituloPagina.textContent = topicoAtual.Titulo;
        container.innerHTML = "";

        topicoAtual.Itens.forEach(item => {
            const elemento = document.createElement("a");
            elemento.href = item.link;
            elemento.classList.add("list-group-item", "list-group-item-action");
            elemento.target = "_blank";
            elemento.textContent = item.title;
            if (foiVisitado(item.link)) {
                elemento.style.backgroundColor = "lightgreen";
            }
            elemento.addEventListener('click', (e) => {
                e.target.style.backgroundColor = "lightgreen";
                marcarComoVisitado(item.link);
            });
            container.appendChild(elemento);
        });
        atualizarInfoPagina();
        atualizarBotoes();
        atualizarBarraDeProgresso();
    }

    function proximaPagina() {
        if (paginaAtual < topicos.length - 1) {
            paginaAtual++;
            exibirTopicos();
        }
    }

    function paginaAnterior() {
        if (paginaAtual > 0) {
            paginaAtual--;
            exibirTopicos();
        }
    }

    function atualizarInfoPagina() {
        const infoPagina = document.getElementById("infoPagina");
        infoPagina.textContent = `Página ${paginaAtual + 1} de ${topicos.length}`;
    }

    function atualizarBotoes() {
        const btnAnterior = document.getElementById("btnAnterior");
        const btnProxima = document.getElementById("btnProxima");
        btnAnterior.disabled = paginaAtual === 0;
        btnProxima.disabled = paginaAtual >= topicos.length - 1;
    }

    function atualizarBarraDeProgresso() {
        const topicoAtual = topicos[paginaAtual];
        const visitados = JSON.parse(localStorage.getItem($localStorage) || '[]');
        const totalItens = topicoAtual.Itens.length;
        const itensVisitados = topicoAtual.Itens.filter(item => visitados.includes(item.link)).length;
        const percentualVisitado = (itensVisitados / totalItens) * 100;
        const textoDescricao = `Você acessou ${Math.round(percentualVisitado)}% porcento (${itensVisitados} de ${totalItens}) dos links abaixo - Total de Perguntas: (${contarTotalDeLinks()})`;
        const descricaoProgresso = document.getElementById("descricaoProgresso");
        descricaoProgresso.textContent = textoDescricao;
    }

    window.limparLocalStorage = function () {
        $('#confirmacaoModal').modal('show');
    };

    window.proximaPagina = proximaPagina;
    window.paginaAnterior = paginaAnterior;

    // Função para confirmar volta ao menu principal
    window.confirmarVoltarHome = function () {
        $('#voltarHomeModal').modal('show');
    };

    $(document).ready(function () {
        var localStorage = $localStorage;
        $('body').append(`
                            <div class="modal fade" id="confirmacaoModal" tabindex="-1" aria-labelledby="confirmacaoModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="confirmacaoModalLabel">Confirmação</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Deseja realmente reiniciar todo o progresso? Ao confirmar será excluido todo o historico de acesso aos links de cada tópico que está armazenado no Local Storage, essa ação irá fazer você voltar ao tópico 1.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button type="button" class="btn btn-danger" onclick="localStorage.removeItem('${localStorage}'); $('#confirmacaoModal').modal('hide'); location.reload();">Reiniciar o Progresso</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `);

        // Modal de confirmação para voltar ao menu principal
        $('body').append(`
                            <div class="modal fade" id="voltarHomeModal" tabindex="-1" aria-labelledby="voltarHomeModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="voltarHomeModalLabel">Voltar ao Menu Principal</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Tem certeza que deseja voltar ao menu principal? Ao confirmar você será redirecionado para a página "Simulados para as Certificações da Microsoft Azure".
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button type="button" class="btn btn-primary" onclick="window.location.href='../../index.html';">Confirmar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `);

        exibirTopicos();
    });

    exibirTopicos();
}
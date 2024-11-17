document.addEventListener('DOMContentLoaded', () => {
    const certificados = [
        {
            img: "src/img/MS-900.png",
            alt: "MS-900",
            title: "Microsoft Certified: MS-900",
            desc: "Demonstre a compreensão do Microsoft 365 para fornecer aplicativos de produtividade líderes do setor, juntamente com serviços de nuvem inteligentes e segurança de classe mundial.",
            plano: "https://github.com/RoodneyMoraes/certificacoes-microsoft-azure/wiki/%2301-%E2%80%90-Microsoft-Certified:-MS%E2%80%90900",
            simulado: "src/page/ms-900.html"
        },
        {
            img: "src/img/AZ-900.png",
            alt: "AZ-900",
            title: "Microsoft Certified: AZ-900",
            desc: "Demonstrar conhecimento fundamental dos conceitos de nuvem e dos principais serviços do Azure, além de recursos e ferramentas de gerenciamento e governança do Azure.",
            plano: "https://github.com/RoodneyMoraes/certificacoes-microsoft-azure/wiki/%2302-%E2%80%90-Microsoft-Certified:-AZ%E2%80%90900",
            simulado: "src/page/az-900.html"
        },
        {
            img: "src/img/DP-900.png",
            alt: "DP-900",
            title: "Microsoft Certified: DP-900",
            desc: "Demonstre conhecimento fundamental em conceitos de dados e como eles são implementados usando serviços de dados do Microsoft Azure.",
            plano: "https://github.com/RoodneyMoraes/certificacoes-microsoft-azure/wiki/%2303-%E2%80%90-Microsoft-Certified:-DP%E2%80%90900",
            simulado: "src/page/dp-900.html"
        },
        {
            img: "src/img/SC-900.png",
            alt: "SC-900",
            title: "Microsoft Certified: SC-900",
            desc: "Este curso fornece conhecimento de nível básico sobre conceitos de segurança, conformidade e identidade e soluções da Microsoft baseadas na nuvem.",
            plano: "https://github.com/RoodneyMoraes/certificacoes-microsoft-azure/wiki/%2304-%E2%80%90-Microsoft-Certified:-SC%E2%80%90900",
            simulado: "src/page/sc-900.html"
        },
        {
            img: "src/img/AI-900.png",
            alt: "AI-900",
            title: "Microsoft Certified: AI-900",
            desc: "Demonstre conhecimento fundamental em conceitos de inteligência artificial e como eles são implementados usando serviços de IA do Microsoft Azure.",
            plano: "https://github.com/RoodneyMoraes/certificacoes-microsoft-azure/wiki/%2305-%E2%80%90-Microsoft-Certified:-AI%E2%80%90900",
            simulado: "src/page/ai-900.html"
        },
        {
            img: "src/img/AZ-104.png",
            alt: "AZ-104",
            title: "Microsoft Certified: AZ-104",
            desc: "Demonstre conhecimento avançado em serviços de nuvem e como implementá-los, gerenciá-los e monitorá-los no Microsoft Azure.",
            plano: "https://github.com/RoodneyMoraes/certificacoes-microsoft-azure/wiki/%2306-%E2%80%90-Microsoft-Certified:-AZ%E2%80%90104",
            simulado: "src/page/az-104.html"
        },
        {
            img: "src/img/AZ-204.png",
            alt: "AZ-204",
            title: "Microsoft Certified: AZ-204",
            desc: "Demonstre habilidades em desenvolvimento de soluções no Microsoft Azure, incluindo design, construção, teste e manutenção de aplicativos e serviços.",
            plano: "https://github.com/RoodneyMoraes/certificacoes-microsoft-azure/wiki/%2307-%E2%80%90-Microsoft-Certified:-AZ%E2%80%90204",
            simulado: "src/page/az-204.html"
        },
        {
            img: "src/img/AZ-305.png",
            alt: "AZ-305",
            title: "Microsoft Certified: AZ-305",
            desc: "Demonstre habilidades em design de soluções no Microsoft Azure, incluindo aspectos de segurança, escalabilidade e confiabilidade.",
            plano: "https://github.com/RoodneyMoraes/certificacoes-microsoft-azure/wiki/%2308-%E2%80%90-Microsoft-Certified:-AZ%E2%80%90305",
            simulado: "src/page/az-305.html"
        }
    ];

    const container = document.querySelector('#certificados .container .row');
    const template = document.getElementById('certificado-card-template').content;

    certificados.forEach(cert => {
        const clone = document.importNode(template, true);
        clone.querySelector('img').src = cert.img;
        clone.querySelector('img').alt = cert.alt;
        clone.querySelector('h5').textContent = cert.title;
        clone.querySelector('p').textContent = cert.desc;
        clone.querySelector('.btn-plano').href = cert.plano;
        clone.querySelector('.btn-simulado').href = cert.simulado;
        container.appendChild(clone);
    });
});
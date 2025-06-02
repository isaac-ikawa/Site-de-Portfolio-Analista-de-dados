document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("musica");
    let linkNome = document.querySelector(".link-nome");
    let inactivityTimer;

    function startInactivityTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            audio.muted = false;
            let playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => console.log("Autoplay bloqueado:", error));
            }
        }, 1000); // 1000 milissegundos = 1 segundo
    }

    // Tenta tocar o áudio 1 segundo após o carregamento
    setTimeout(function() {
        let playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay bloqueado:", error);

                // Se bloqueado, aguarda o primeiro movimento do mouse ou clique
                document.addEventListener("mousemove", function() {
                    audio.muted = false;
                    audio.play();
                }, { once: true });

                document.addEventListener("click", function() {
                    audio.muted = false;
                    audio.play();
                }, { once: true });
            });
        }
    }, 1000); // 1000ms = 1s

    // Se o áudio não tocar, tenta novamente após 1 segundo
    setTimeout(function() {
        if (audio.paused) {
            audio.muted = false;
            audio.play().catch(error => console.log("Erro ao tentar tocar novamente:", error));
        }
    }, 1000);

    // Ativa a música quando o mouse se move sobre o site
    document.addEventListener("mouseover", function() {
        audio.muted = false;
        audio.play().catch(error => console.log("Erro ao tocar ao passar o mouse:", error));
    }, { once: true });

    // Ativa a música ao passar o mouse sobre "Isaac Ikawa"
    linkNome.addEventListener("mouseover", function() {
        audio.muted = false;
        audio.play().catch(error => console.log("Erro ao tocar música ao passar o mouse:", error));
    });

    // Reseta o contador quando o usuário interage (movendo mouse ou clicando)
    document.addEventListener("mousemove", startInactivityTimer);
    document.addEventListener("click", startInactivityTimer);
    document.addEventListener("keypress", startInactivityTimer);

    // Se o usuário ficar parado na página por 1 segundo, começa a tocar
    inactivityTimer = setTimeout(() => {
        audio.muted = false;
        let playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => console.log("Autoplay bloqueado:", error));
        }
    }, 1000); // 1000 milissegundos = 1 segundo
});

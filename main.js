document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-deposito');
    const campoA = document.getElementById('campo-A');
    const campoB = document.getElementById('campo-B');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Resetando as mensagens de erro e sucesso
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        // Validando se os campos estão preenchidos com números
        if (campoA.value === '' || campoB.value === '') {
            errorMessage.innerText = 'Preencha este campo.';
            errorMessage.style.display = 'block';
            return;
        }

        // Convertendo os valores dos campos para números inteiros
        const numA = parseInt(campoA.value);
        const numB = parseInt(campoB.value);

        // Validando se os campos estão dentro das faixas especificadas
        if (numA < 0 || numA > 8) {
            errorMessage.style.display = 'block';
            return;
        }

        if (numB < 1 || numB > 9 || numB <= numA) {
            errorMessage.innerText = 'O número do campo B deve ser maior que o número do campo A.';
            errorMessage.style.display = 'block';
            return;
        }

        // Se todas as validações passarem, exibir mensagem de sucesso
        successMessage.innerText = 'Parabéns! Está correto.';
        successMessage.style.display = 'block';
    });

    // Adicionando eventos para limpar a mensagem de sucesso ao alterar os campos
    campoA.addEventListener('input', function () {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none'; // Ocultar mensagem de erro ao alterar o campo A
    });

    campoB.addEventListener('input', function () {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none'; // Ocultar mensagem de erro ao alterar o campo B
    });
});
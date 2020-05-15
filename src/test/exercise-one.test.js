import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
  });

  test('Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    const { getByLabelText, queryByText } = render(<App />);
  });
});

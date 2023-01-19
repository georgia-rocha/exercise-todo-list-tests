import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  it('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const buttonAdicionar = screen.getByText('Adicionar');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(buttonAdicionar.type).toBe('button');
    expect(buttonAdicionar).toHaveProperty('type', 'button');
  });

  it('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const inputTarefa = screen.getByLabelText('Tarefa:');
    const buttonAdicionar = screen.getByText('Adicionar');
    const tarefa = 'minha primeira tarefa';

    userEvent.type(inputTarefa, tarefa);
    expect(screen.queryByText(tarefa)).not.toBeInTheDocument();

    userEvent.click(buttonAdicionar);
    expect(screen.queryByText(tarefa)).toBeInTheDocument();
    expect(inputTarefa).toHaveValue('');
  });
});

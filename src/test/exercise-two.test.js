import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const inputTarefa = screen.getByLabelText('Tarefa:');
    const buttonAdicionar = screen.getByText('Adicionar');

    listTodo.forEach((task) => {
      userEvent.type(inputTarefa, task);
      userEvent.click(buttonAdicionar);
    });

    listTodo.forEach((task) => {
      const currentTask = screen.getByText(task);
      expect(currentTask).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="string" />);
    expect(screen.getByText('string')).toBeInTheDocument();
  });
});

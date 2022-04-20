import { fireEvent, render, screen } from '@testing-library/react';
import Todo from './Todo';

it('should render component', () => {
  render(<Todo />)
  const text = screen.getByText('Your todo list')
  expect(text).toBeInTheDocument;
})

it('should add item to the todo list', () => {
  render(<Todo />)
  const task = screen.getByLabelText('Task:')
  fireEvent.input(task, { target : {value: 'Bring Milk'}})

  const date = screen.getByLabelText('Date:')
  fireEvent.input(date, { target : {value: '22/04/2022'}})

  fireEvent.click(screen.getByText('Submit'))

  fireEvent.input(task, { target : {value: 'Bring bread'}})
  fireEvent.input(date, { target : {value: '23/04/2022'}})
  fireEvent.click(screen.getByText('Submit'))

  const listItems = screen.getAllByRole('listitem');

  expect(listItems.length).toBe(2);
  expect(listItems[0].textContent).toMatch('Bring Milk')
  expect(listItems[1].textContent).toMatch('Bring bread')


})


import { TodoAppPage } from './app.po';
import { clearJsonDB } from './util';

describe('todo-app App', () => {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
    page.navigateTo();
  });

  afterAll(() => {
    clearJsonDB();
  });

  it('should display a title of Todos', () => {
    expect(page.getTitle()).toEqual('Todos');
  });

  it('should create a todo and add it to the list', () => {
    const todoText = 'A TEST Todo by Protractor';
    page.createTodo(todoText);
    const createdTodo = page.todoList.last();

    expect(page.getTodoText(createdTodo)).toEqual(todoText);
  });
});

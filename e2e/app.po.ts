import { browser, element, by, Key, ElementFinder } from 'protractor';

export class TodoAppPage {

  title = element(by.css('app-root app-todo-list-header h1'));

  inputField = element(by.css('app-root app-todo-list-header .new-todo'));

  todoList = element.all(by.css('app-root app-todo-list app-todo-list-item'));

  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return this.title.getText();
  }

  createTodo(todo: string) {
    return this.inputField.sendKeys(todo, Key.ENTER);
  }

  getTodoList() {
    return element.all(by.css('app-root app-todo-list app-todo-list-item'));
  }

  getTodoText(todoElement: ElementFinder) {
    return todoElement.element(by.tagName('label')).getText();
  }

}

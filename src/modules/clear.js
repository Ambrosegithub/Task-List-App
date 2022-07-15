const clearAll = document.querySelector('#clear');

const cleartodos = (taskstore) => {
  taskstore.taskliskArr = taskstore.taskliskArr.filter((task) => task.completed === false);
  taskstore.updateIndex();
  taskstore.populateLocalStorage();
  taskstore.displayTask();
};

export { clearAll, cleartodos };

    const STORAGE_KEY = 'todo_vue';
    let save = function(items) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
    let fetch = function() {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
    }

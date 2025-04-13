const password = "Elysium2025"; // Cambiar por una más segura
const fileList = document.getElementById('fileList');
const folderList = document.getElementById('folderList');
const folders = {};

function login() {
  const input = document.getElementById('passwordInput').value;
  if (input === password) {
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
  } else {
    alert("Contraseña incorrecta.");
  }
}

function uploadFile() {
  const input = document.getElementById('fileInput');
  const category = document.getElementById('categorySelect').value;
  if (input.files.length > 0) {
    const file = input.files[0];
    if (!folders[category]) {
      folders[category] = [];
      const li = document.createElement('li');
      li.textContent = category;
      li.onclick = () => showFolder(category);
      folderList.appendChild(li);
    }
    folders[category].push(file.name);
    input.value = '';
  } else {
    alert("Selecciona un archivo primero.");
  }
}

function showFolder(category) {
  fileList.innerHTML = '';
  folders[category].forEach(fileName => {
    const li = document.createElement('li');
    li.textContent = fileName;
    fileList.appendChild(li);
  });
}

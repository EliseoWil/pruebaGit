/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  const listaCursos = document.getElementById('lista-cursos');
  const buscador = document.getElementById('buscador');

  const cursos = [
    { titulo: 'Programación desde cero', descripcion: 'Aprende HTML, CSS y JS.', enlace: 'curso.html' },
    { titulo: 'Marketing Digital', descripcion: 'SEO, redes sociales y anuncios.', enlace: 'curso.html' },
    { titulo: 'Diseño Gráfico', descripcion: 'Photoshop e Illustrator.', enlace: 'curso.html' },
    { titulo: 'Inglés para todos', descripcion: 'Inglés básico e intermedio.', enlace: 'curso.html' },
  ];

  function renderCursos(filtro = '') {
    listaCursos.innerHTML = '';
    cursos.filter(c => c.titulo.toLowerCase().includes(filtro.toLowerCase())).forEach(curso => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${curso.titulo}</h3>
        <p>${curso.descripcion}</p>
        <a href="${curso.enlace}" class="btn-secondary">Ver curso</a>
      `;
      listaCursos.appendChild(card);
    });
  }

  if (listaCursos) renderCursos();
  if (buscador) {
    buscador.addEventListener('input', (e) => {
      renderCursos(e.target.value);
    });
  }
});
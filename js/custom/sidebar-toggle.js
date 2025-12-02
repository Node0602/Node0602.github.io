document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.sidebar .widget');

  sections.forEach(section => {
    const title = section.querySelector('.widget-title');
    if (!title) return;

    title.style.cursor = 'pointer';

    // 初始化折叠状态（默认展开）
    let content = section.querySelector('ul, .tagcloud');
    if (!content) return;

    title.addEventListener('click', function () {
      if (content.style.display === 'none') {
        content.style.display = '';
      } else {
        content.style.display = 'none';
      }
    });
  });
});

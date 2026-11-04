// A seleção é mantida em memória durante a visita à página.
let activePopover = null;

function closePopover() {
  if (!activePopover) return;
  activePopover.popover.dispose();
  activePopover = null;
}

function openOptions(trigger, paragraph, slot, textElement, selectedIndex) {
  if (activePopover?.trigger === trigger) {
    closePopover();
    return;
  }

  closePopover();

  const options = document.createElement('div');
  options.className = 'list-group list-group-flush essay-options';

  slot.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'list-group-item list-group-item-action';
    button.textContent = option;

    if (index === selectedIndex.value) {
      button.classList.add('active');
      button.setAttribute('aria-current', 'true');
    }

    button.addEventListener('click', () => {
      selectedIndex.value = index;
      textElement.textContent = option;
      trigger.setAttribute('aria-label', `Trecho ${paragraph.id}.${slot.position}: ${option}. Ativar para trocar.`);
      closePopover();
      trigger.focus();
    });
    options.append(button);
  });

  const popover = new bootstrap.Popover(trigger, {
    title: `Alternativas ${paragraph.id}.${slot.position}`,
    content: options,
    customClass: 'essay-popover',
    html: true,
    placement: 'auto',
    container: 'body',
    trigger: 'manual'
  });

  activePopover = { trigger, popover };
  popover.show();
}

function renderParagraph(paragraph) {
  const section = document.querySelector(`[data-paragraph="${paragraph.id}"]`);
  if (!section) return;

  const content = section.querySelector('.essay-content');
  for (const slot of paragraph.slots) {
    const selectedIndex = {
      value: Math.floor(Math.random() * slot.options.length)
    };
    const trigger = document.createElement('span');
    trigger.className = 'essay-piece';
    trigger.setAttribute('role', 'button');
    trigger.tabIndex = 0;
    if (slot.connective) trigger.classList.add('is-connective');

    const number = document.createElement('span');
    number.className = 'piece-number';
    number.setAttribute('aria-hidden', 'true');
    number.textContent = `${paragraph.id}.${slot.position}`;

    const text = document.createElement('span');
    text.textContent = slot.options[selectedIndex.value];
    trigger.setAttribute('aria-label', `Trecho ${paragraph.id}.${slot.position}: ${text.textContent}. Ativar para trocar.`);

    trigger.append(number, text);
    trigger.addEventListener('click', () => {
      openOptions(trigger, paragraph, slot, text, selectedIndex);
    });
    trigger.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openOptions(trigger, paragraph, slot, text, selectedIndex);
    });
    content.append(trigger, ' ');
  }
}

ESSAY_DATA.forEach(renderParagraph);

document.addEventListener('click', (event) => {
  if (!activePopover) return;
  if (activePopover.trigger.contains(event.target) || event.target.closest('.essay-popover')) return;
  closePopover();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closePopover();
});

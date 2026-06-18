/**
 * Shared accordion toggle for sidebar panels.
 * Drop this into your layout JS or include it in your vendor script.
 * Works independently — no Bootstrap collapse dependency needed for sidebars.
 */
function toggleAccordion(bodyId, iconId) {
    const body = document.getElementById(bodyId);
    const icon = document.getElementById(iconId);
    if (!body) return;

    const isHidden = body.classList.contains('hidden');

    body.classList.toggle('hidden', !isHidden);
    body.classList.toggle('block', isHidden);

    if (icon) {
        icon.style.transform = isHidden ? 'rotate(180deg)' : '';
    }
}
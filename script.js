// Toggle the visibility of more information in the About section
function showMore(sectionId) {
  const moreInfo = document.getElementById(`${sectionId}-more-info`);
  if (moreInfo.style.display === 'block') {
    moreInfo.style.display = 'none';
  } else {
    moreInfo.style.display = 'block';
  }
}

// Handle form submission
document.getElementById('reservation-form').add

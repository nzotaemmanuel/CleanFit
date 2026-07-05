/* Form Validation, Input Sanitization, and Mock Submission Handling */

// Helper to sanitize input strings (strips HTML tags)
export function sanitizeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#039;';
      default: return m;
    }
  });
}

// Validator helpers
export function isValidEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

export function isValidPhone(phone) {
  // Matches Nigerian formats: +234..., 080..., 090..., 070... (11 digits for local, 14 digits with +234)
  const re = /^(\+234\d{10}|0[789]\d{9})$/;
  return re.test(phone.replace(/\s+/g, ''));
}

// Rate Limiting (Cookie/LocalStorage based - max 1 submit per 60s per form)
function checkRateLimit(formId) {
  const key = `form_submit_time_${formId}`;
  const lastSubmit = localStorage.getItem(key);
  if (lastSubmit) {
    const elapsed = Date.now() - parseInt(lastSubmit, 10);
    if (elapsed < 60000) {
      const waitTime = Math.ceil((60000 - elapsed) / 1000);
      return waitTime;
    }
  }
  return 0;
}

function updateSubmitTimestamp(formId) {
  localStorage.setItem(`form_submit_time_${formId}`, Date.now().toString());
}

export function initForms() {
  // 1. General Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => handleContactSubmit(e));
  }

  // 2. Corporate Solutions Form
  const corporateForm = document.getElementById('corporate-form');
  if (corporateForm) {
    corporateForm.addEventListener('submit', (e) => handleCorporateSubmit(e));
  }

  // 3. Booking Pickup Form (Modal)
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => handleBookingSubmit(e));
  }

  // Set minimum date for pickup to today
  const dateInput = document.getElementById('pickup-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Booking Modal Controls
  const bookingModal = document.getElementById('booking-modal');
  const openModalBtns = document.querySelectorAll('.btn-trigger-booking');
  const closeModalBtn = document.getElementById('close-booking-modal');

  function openModal(estimateData = null) {
    if (!bookingModal) return;
    
    const summaryBox = document.getElementById('modal-booking-summary-box');
    const hiddenDetails = document.getElementById('booking-estimate-details');
    const hiddenTotal = document.getElementById('booking-estimate-total');

    if (estimateData && summaryBox) {
      // User booked from calculator
      summaryBox.style.display = 'block';
      const summaryItems = summaryBox.querySelector('.booking-summary-items');
      if (summaryItems) summaryItems.innerHTML = estimateData.summary;
      const totalSpan = summaryBox.querySelector('.booking-summary-total span');
      if (totalSpan) totalSpan.textContent = estimateData.total.toLocaleString();
      
      // Store in hidden fields for submission
      if (hiddenDetails) hiddenDetails.value = estimateData.summary;
      if (hiddenTotal) hiddenTotal.value = estimateData.total.toString();
    } else {
      // General booking
      if (summaryBox) summaryBox.style.display = 'none';
      if (hiddenDetails) hiddenDetails.value = 'General Pickup Request';
      if (hiddenTotal) hiddenTotal.value = '0';
    }

    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!bookingModal) return;
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  openModalBtns.forEach(btn => {
    // Remove existing listener to prevent duplicates in React StrictMode
    const newBtn = btn.cloneNode(true);
    if (btn.parentNode) {
      btn.parentNode.replaceChild(newBtn, btn);
      newBtn.addEventListener('click', () => openModal(null));
    }
  });

  if (closeModalBtn) {
    const newCloseBtn = closeModalBtn.cloneNode(true);
    if (closeModalBtn.parentNode) {
      closeModalBtn.parentNode.replaceChild(newCloseBtn, closeModalBtn);
      newCloseBtn.addEventListener('click', closeModal);
    }
    
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeModal();
    });
  }

  // Listen to pricing calculator booking trigger
  const openModalHandler = (e) => {
    openModal(e.detail);
  };
  window.removeEventListener('openBookingModal', window._openModalHandler);
  window._openModalHandler = openModalHandler;
  window.addEventListener('openBookingModal', openModalHandler);
}

// Handler functions
function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formId = form.id;

  const nameInput = form.querySelector('#contact-name');
  const emailInput = form.querySelector('#contact-email');
  const phoneInput = form.querySelector('#contact-phone');
  const messageInput = form.querySelector('#contact-message');

  let valid = true;

  // Rate limit check
  const wait = checkRateLimit(formId);
  if (wait > 0) {
    showFormFeedback(form, false, `Too many attempts! Please wait ${wait}s before submitting again.`);
    return;
  }

  // Validate Name
  if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
    showInputError(nameInput, 'Please enter your name (minimum 3 characters)');
    valid = false;
  } else {
    clearInputError(nameInput);
  }

  // Validate Email
  if (!isValidEmail(emailInput.value)) {
    showInputError(emailInput, 'Please enter a valid email address');
    valid = false;
  } else {
    clearInputError(emailInput);
  }

  // Validate Phone
  if (!isValidPhone(phoneInput.value)) {
    showInputError(phoneInput, 'Enter a valid Nigerian phone number (e.g. 08012345678)');
    valid = false;
  } else {
    clearInputError(phoneInput);
  }

  // Validate Message
  if (!messageInput.value.trim()) {
    showInputError(messageInput, 'Please write a message detailing your request');
    valid = false;
  } else {
    clearInputError(messageInput);
  }

  if (valid) {
    // Sanitize values
    const data = {
      name: sanitizeHTML(nameInput.value),
      email: sanitizeHTML(emailInput.value),
      phone: sanitizeHTML(phoneInput.value),
      message: sanitizeHTML(messageInput.value)
    };

    console.log("Contact form submitted successfully:", data);
    
    // Simulate API Call success
    showFormFeedback(form, true, `Thank you, ${data.name}! We have received your enquiry and will contact you shortly.`);
    updateSubmitTimestamp(formId);
    form.reset();
  }
}

function handleCorporateSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formId = form.id;

  const companyInput = form.querySelector('#corp-company');
  const contactInput = form.querySelector('#corp-contact');
  const emailInput = form.querySelector('#corp-email');
  const phoneInput = form.querySelector('#corp-phone');
  const volumeInput = form.querySelector('#corp-volume');

  let valid = true;

  // Rate limit check
  const wait = checkRateLimit(formId);
  if (wait > 0) {
    showFormFeedback(form, false, `Please wait ${wait}s before submitting another request.`);
    return;
  }

  // Validate Company Name
  if (!companyInput.value.trim()) {
    showInputError(companyInput, 'Please enter your company/organization name');
    valid = false;
  } else {
    clearInputError(companyInput);
  }

  // Validate Contact Name
  if (!contactInput.value.trim() || contactInput.value.trim().length < 3) {
    showInputError(contactInput, 'Please enter a contact person name');
    valid = false;
  } else {
    clearInputError(contactInput);
  }

  // Validate Email
  if (!isValidEmail(emailInput.value)) {
    showInputError(emailInput, 'Please enter a valid business email');
    valid = false;
  } else {
    clearInputError(emailInput);
  }

  // Validate Phone
  if (!isValidPhone(phoneInput.value)) {
    showInputError(phoneInput, 'Enter a valid Nigerian phone number');
    valid = false;
  } else {
    clearInputError(phoneInput);
  }

  if (valid) {
    const data = {
      company: sanitizeHTML(companyInput.value),
      contactName: sanitizeHTML(contactInput.value),
      email: sanitizeHTML(emailInput.value),
      phone: sanitizeHTML(phoneInput.value),
      volume: volumeInput.value
    };

    console.log("Corporate request submitted:", data);

    showFormFeedback(form, true, `Success! CleanFit account manager will reach out to ${data.company} within 24 hours.`);
    updateSubmitTimestamp(formId);
    form.reset();
  }
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formId = form.id;

  const nameInput = form.querySelector('#pickup-name');
  const phoneInput = form.querySelector('#pickup-phone');
  const addressInput = form.querySelector('#pickup-address');
  const dateInput = form.querySelector('#pickup-date');
  const timeInput = form.querySelector('#pickup-time');
  const notesInput = form.querySelector('#pickup-notes');

  let valid = true;

  // Rate limit check
  const wait = checkRateLimit(formId);
  if (wait > 0) {
    showFormFeedback(form, false, `Please wait ${wait}s before making another booking.`);
    return;
  }

  // Validate Name
  if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
    showInputError(nameInput, 'Name is required');
    valid = false;
  } else {
    clearInputError(nameInput);
  }

  // Validate Phone
  if (!isValidPhone(phoneInput.value)) {
    showInputError(phoneInput, 'Enter a valid phone number');
    valid = false;
  } else {
    clearInputError(phoneInput);
  }

  // Validate Address
  if (!addressInput.value.trim()) {
    showInputError(addressInput, 'Please specify your pickup location');
    valid = false;
  } else {
    clearInputError(addressInput);
  }

  // Validate Date
  if (!dateInput.value) {
    showInputError(dateInput, 'Select a pickup date');
    valid = false;
  } else {
    clearInputError(dateInput);
  }

  if (valid) {
    // Collect estimate metadata if present
    const estimateDetails = form.querySelector('#booking-estimate-details')?.value || 'General Pickup Request';
    const estimateTotal = form.querySelector('#booking-estimate-total')?.value || '0';

    const data = {
      name: sanitizeHTML(nameInput.value),
      phone: sanitizeHTML(phoneInput.value),
      address: sanitizeHTML(addressInput.value),
      date: dateInput.value,
      time: timeInput.value,
      notes: sanitizeHTML(notesInput.value),
      estimate: estimateDetails,
      total: estimateTotal
    };

    console.log("Pickup booking request submitted:", data);

    showFormFeedback(form, true, `Booking Confirmed! We will be at your doorstep on ${data.date} around ${data.time || 'your scheduled time'}.`);
    updateSubmitTimestamp(formId);
    
    // Clear booking state and reset
    setTimeout(() => {
      form.reset();
      // Close booking modal
      const modal = document.getElementById('booking-modal');
      if (modal) modal.classList.remove('active');
      
      // Clean success banner inside modal for next open
      const successBanner = form.querySelector('.form-success-banner');
      if (successBanner) successBanner.style.display = 'none';
      
      // Clear pricing calculator selection
      window.dispatchEvent(new Event('clearCalculator'));
    }, 4000);
  }
}

// Error state display utilities
function showInputError(input, message) {
  input.classList.add('is-invalid');
  const parent = input.closest('.form-group');
  if (parent) {
    let errorEl = parent.querySelector('.form-error-msg');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'form-error-msg';
      parent.appendChild(errorEl);
    }
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }
}

function clearInputError(input) {
  input.classList.remove('is-invalid');
  const parent = input.closest('.form-group');
  if (parent) {
    const errorEl = parent.querySelector('.form-error-msg');
    if (errorEl) errorEl.style.display = 'none';
  }
}

function showFormFeedback(form, success, message) {
  let banner = form.querySelector('.form-success-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.className = 'form-success-banner';
    form.insertBefore(banner, form.firstChild);
  }
  
  banner.textContent = message;
  banner.style.display = 'flex';
  
  if (success) {
    banner.style.backgroundColor = '#ecfdf5';
    banner.style.borderColor = '#10b981';
    banner.style.color = '#065f46';
  } else {
    banner.style.backgroundColor = '#fef2f2';
    banner.style.borderColor = '#ef4444';
    banner.style.color = '#991b1b';
  }

  // Scroll to top of form to see the banner
  form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

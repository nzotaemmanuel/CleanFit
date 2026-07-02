/* Laundry Price Estimator Logic */

export const CATALOG = {
  wash_fold: [
    { id: 'wf_load', name: 'Standard Bag (up to 5kg)', price: 4500, desc: 'Everyday wear, socks, underwear, t-shirts' },
    { id: 'wf_load_large', name: 'Large Bag (up to 10kg)', price: 8000, desc: 'Bulk family clothes wash & fold' }
  ],
  dry_cleaning: [
    { id: 'dc_suit', name: '2-Piece Suit', price: 4500, desc: 'Professional suit jacket & trousers' },
    { id: 'dc_native_3pc', name: 'Agbada (3-Piece)', price: 6000, desc: 'Traditional agbada complete wear' },
    { id: 'dc_native_2pc', name: 'Native Wear (Top & Pants)', price: 2500, desc: 'Caftan, senator wear, Ankara' },
    { id: 'dc_shirt', name: 'Corporate Shirt', price: 1200, desc: 'Wash, starch, and crisp press' },
    { id: 'dc_trouser', name: 'Office Trousers / Chinos', price: 1200, desc: 'Dry clean and crease line fold' },
    { id: 'dc_gown', name: 'Formal Dress / Gown', price: 3500, desc: 'Evening gowns, wedding guest attire' }
  ],
  pressing: [
    { id: 'pr_shirt', name: 'Shirt Pressing', price: 600, desc: 'Crease-free steam iron only' },
    { id: 'pr_trouser', name: 'Trouser Pressing', price: 600, desc: 'Sharp line iron only' },
    { id: 'pr_native', name: 'Native Wear Pressing', price: 1200, desc: 'Agbada or Caftan iron only' }
  ],
  bedding_home: [
    { id: 'bh_duvet', name: 'Duvet / Comforter', price: 5000, desc: 'Thick winter bedding' },
    { id: 'bh_bedsheet', name: 'Bed Sheet Set', price: 3000, desc: '1 fitted sheet, 1 flat sheet, 2 pillowcases' },
    { id: 'bh_curtain', name: 'Curtains (per panel)', price: 2500, desc: 'Heavy window curtains' }
  ]
};

export class PricingCalculator {
  constructor() {
    this.selectedItems = {}; // { itemId: quantity }
    this.currentCategory = 'wash_fold';
    
    this.initDOM();
    this.renderTabs();
    this.renderCategoryItems();
    this.updateSummary();
  }

  initDOM() {
    this.tabsContainer = document.getElementById('calc-tabs');
    this.gridContainer = document.getElementById('calc-items-grid');
    this.summaryContainer = document.getElementById('calc-summary-container');
  }

  renderTabs() {
    if (!this.tabsContainer) return;
    
    const categories = [
      { id: 'wash_fold', name: 'Wash & Fold' },
      { id: 'dry_cleaning', name: 'Dry Cleaning' },
      { id: 'pressing', name: 'Ironing Only' },
      { id: 'bedding_home', name: 'Bedding & Home' }
    ];

    this.tabsContainer.innerHTML = categories.map(cat => `
      <button class="calc-tab-btn ${cat.id === this.currentCategory ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.name}
      </button>
    `).join('');

    // Tab click listeners
    this.tabsContainer.querySelectorAll('.calc-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentCategory = e.target.dataset.cat;
        
        // Update active tab class
        this.tabsContainer.querySelectorAll('.calc-tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        this.renderCategoryItems();
      });
    });
  }

  renderCategoryItems() {
    if (!this.gridContainer) return;

    const items = CATALOG[this.currentCategory];
    
    this.gridContainer.innerHTML = items.map(item => {
      const qty = this.selectedItems[item.id] || 0;
      const isSelected = qty > 0;
      
      return `
        <div class="calc-item-card ${isSelected ? 'has-qty' : ''}" data-id="${item.id}">
          <div class="calc-item-icon-wrapper">
            ${this.getIcon(this.currentCategory)}
          </div>
          <div class="calc-item-name">${item.name}</div>
          <div class="calc-item-price">₦${item.price.toLocaleString()}</div>
          <div class="calc-item-controls">
            <button class="calc-ctrl-btn btn-minus" data-id="${item.id}">−</button>
            <span class="calc-item-qty">${qty}</span>
            <button class="calc-ctrl-btn btn-plus" data-id="${item.id}">+</button>
          </div>
        </div>
      `;
    }).join('');

    // Attach listeners to buttons
    this.gridContainer.querySelectorAll('.btn-plus').forEach(btn => {
      btn.addEventListener('click', (e) => this.updateItemQty(e.target.dataset.id, 1));
    });

    this.gridContainer.querySelectorAll('.btn-minus').forEach(btn => {
      btn.addEventListener('click', (e) => this.updateItemQty(e.target.dataset.id, -1));
    });
  }

  updateItemQty(id, change) {
    const currentQty = this.selectedItems[id] || 0;
    const newQty = Math.max(0, currentQty + change);

    if (newQty === 0) {
      delete this.selectedItems[id];
    } else {
      this.selectedItems[id] = newQty;
    }

    // Rerender item controls and update summary
    this.renderCategoryItems();
    this.updateSummary();
  }

  getItemDetails(id) {
    for (const cat in CATALOG) {
      const found = CATALOG[cat].find(item => item.id === id);
      if (found) return found;
    }
    return null;
  }

  calculateTotal() {
    let total = 0;
    for (const id in this.selectedItems) {
      const item = this.getItemDetails(id);
      if (item) {
        total += item.price * this.selectedItems[id];
      }
    }
    return total;
  }

  updateSummary() {
    if (!this.summaryContainer) return;

    const total = this.calculateTotal();
    const hasItems = Object.keys(this.selectedItems).length > 0;

    if (!hasItems) {
      this.summaryContainer.innerHTML = `
        <div class="calc-summary-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-75 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <p>No items selected.<br>Add items to estimate your total.</p>
        </div>
      `;
      return;
    }

    // Draw summary list
    let listHTML = '';
    for (const id in this.selectedItems) {
      const item = this.getItemDetails(id);
      const qty = this.selectedItems[id];
      if (item) {
        listHTML += `
          <li class="calc-summary-item">
            <div>
              <span class="calc-summary-item-name">${item.name}</span>
              <span style="font-size: 0.8rem; color: var(--text-muted);">x${qty}</span>
            </div>
            <span style="font-weight: 600;">₦${(item.price * qty).toLocaleString()}</span>
          </li>
        `;
      }
    }

    // Refresh summary display
    this.summaryContainer.innerHTML = `
      <h3 class="calc-summary-title">Estimate Summary</h3>
      <ul class="calc-summary-list" id="calc-summary-list">${listHTML}</ul>
      <div class="calc-summary-total-card">
        <div class="calc-summary-total-label">Estimated Total</div>
        <div class="calc-summary-total-val" id="calc-total-val">₦<span>${total.toLocaleString()}</span></div>
        <button class="btn btn-accent calc-booking-btn" id="calc-booking-btn">Book Pickup Now</button>
      </div>
    `;

    // Rebind booking listener
    const bookingBtn = this.summaryContainer.querySelector('#calc-booking-btn');
    if (bookingBtn) {
      bookingBtn.addEventListener('click', () => this.handleBookingTrigger());
    }
  }

  handleBookingTrigger() {
    const total = this.calculateTotal();
    if (total === 0) return;

    let itemsString = '';
    for (const id in this.selectedItems) {
      const item = this.getItemDetails(id);
      const qty = this.selectedItems[id];
      if (item) {
        itemsString += `${item.name} (x${qty}), `;
      }
    }
    itemsString = itemsString.slice(0, -2); // Remove trailing comma and space

    // Fire custom event to open the booking modal with these details
    window.dispatchEvent(new CustomEvent('openBookingModal', {
      detail: {
        total: total,
        summary: itemsString,
        rawItems: this.selectedItems
      }
    }));
  }

  getIcon(category) {
    if (category === 'wash_fold') {
      return `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/>
          <circle cx="12" cy="12" r="1"/>
        </svg>
      `;
    } else if (category === 'dry_cleaning') {
      return `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.38 3.46L16 7.84a5 5 0 0 0-7.07 0L4.54 12.22a5 5 0 0 0 0 7.07l4.38 4.38a5 5 0 0 0 7.07 0l4.38-4.38a5 5 0 0 0 0-7.07l-2-2"/>
          <path d="M12.5 12.5L16 9"/>
        </svg>
      `;
    } else if (category === 'pressing') {
      return `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 14h16"/>
          <path d="M16 10l-4-4-4 4"/>
          <path d="M12 6v14"/>
        </svg>
      `;
    } else {
      return `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="9" y1="3" x2="9" y2="21"/>
          <line x1="15" y1="3" x2="15" y2="21"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="3" y1="15" x2="21" y2="15"/>
        </svg>
      `;
    }
  }
}
